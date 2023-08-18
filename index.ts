import type { SslMode } from '@forestadmin/datasource-sql';
import type { Schema } from './typings';

import 'dotenv/config';
import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';

const agent = createAgent<Schema>({
  authSecret: process.env.FOREST_AUTH_SECRET!,
  envSecret: process.env.FOREST_ENV_SECRET!,
  isProduction: process.env.NODE_ENV === 'production',
  typingsPath: './typings.ts',
  typingsMaxDepth: 5,
  forestServerUrl: process.env.FOREST_URL || 'https://api.forestadmin.com'
});

agent.addDataSource(
  createSqlDataSource({
    uri: process.env.DATABASE_URL,
    sslMode: process.env.DATABASE_SSL_MODE as SslMode,
  }),
);

agent
  .customizeCollection('customer', customers => {
    customers
      .addField('full_name', {
        columnType: 'String',
        dependencies: ['first_name', 'last_name'],
        getValues: (records) => {
          return records.map((record) => `${record.first_name} ${record.last_name}`);
        }
      })
      .replaceFieldOperator('full_name', 'Contains', (value) => ({
        aggregator: 'Or',
        conditions: [{
          field: 'first_name',
          operator: 'Contains',
          value
        }, {
          field: 'last_name',
          operator: 'Contains',
          value
        }]
      }))
      .replaceFieldWriting('full_name', (value) => {
        const [first_name, last_name] = value.split(' ');
        return {
          first_name,
          last_name,
        }
      })
      .replaceFieldSorting('full_name',   [
      { field: 'first_name', ascending: true },
      { field: 'last_name',  ascending: true },
    ]);
  })
  .customizeCollection('customer_issue', customerIssues => {
    customerIssues
      .addHook('Before', 'Create', (context) => {
        context.data.forEach(d => {
          d.created_at = (new Date()).toISOString();
          d.updated_at = (new Date()).toISOString();
        })
      })
      .importField('order_customer_id', { path: 'order:customer:id' })
      .addManyToOneRelation('associated_customer', 'customer', {
        foreignKey: 'order_customer_id',
      })
      .importField('order_total', { path: 'order:total' })
      .importField('order_customer_name', { path: 'order:customer:full_name' })
      .importField('order_customer_birthdate', { path: 'order:customer:birthday' })
      .addField('is_customer_birthday', {
        columnType: 'Boolean',
        dependencies: ['order_customer_birthdate'],
        getValues: (records) => {
          return records.map((record) => {
            const birthdate = new Date(record.order_customer_birthdate);
            const today = new Date();
            return birthdate.getMonth() === today.getMonth() && birthdate.getDate() === today.getDate();
          });
        }
      })
      .importField('order_number', { path: 'order:number' })
      .addAction('Mark as "solved"', {
        scope: 'Single',
        execute: async (context, responseBuilder) => {
          const { closed_at } = await context.getRecord(['closed_at']);
          if(!closed_at) {
            await context.collection.update(context.filter, { closed_at: `${new Date().toISOString()}`, state: 'resolved' });
            return responseBuilder.success('Issue successfully marked as "solved"');
          } else {
            return responseBuilder.success('Issue already solved!');
          }
        }
      })
      .addAction('Re-open', {
        scope: 'Single',
        form: [{
          label: 'Reason',
          type: 'String',
        }],
        execute: async (context, responseBuilder) => {
          const record = await context.getRecord(['closed_at']);
          if(record?.closed_at) {
            await context.collection.update(context.filter, { closed_at: null, state: 'pending' });
            await context.dataSource.getCollection('customer_issue_support').create([{
              customer_issue_id: Number(await context.getRecordId()),
              description: context.formValues['Reason'],
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              type: 're-open',
            }]);
            return responseBuilder.success('Issue successfully re-opened');
          } else {
            return responseBuilder.error('Issue already opened!');
          }
        }
      })
  })
  .addChart('ratio_solved_open', async (context, resultBuilder) => {
    const aggregation = await context.dataSource.getCollection('customer_issue').aggregate({}, {
      operation: "Count",
      field: "state",
      groups: [{ field: "state" }],
    });

    return resultBuilder.distribution(
      aggregation
      .reduce((acc, { value, group }) => {
        acc[group.state] = value;
        return acc;
      }, {}));
  });

agent.mountOnStandaloneServer(Number(process.env.APPLICATION_PORT));

agent.start().catch(error => {
  console.error('\x1b[31merror:\x1b[0m Forest Admin agent failed to start\n');
  console.error('');
  console.error(error.stack);
  process.exit(1);
});
