import { CollectionCustomizer } from "@forestadmin/agent";
import { Schema } from "./typings";

export default (customerIssues: CollectionCustomizer<Schema, 'customer_issue'>) => {
  customerIssues
    .addHook('Before', 'Create', (context) => {
      context.data.forEach(d => {
        d.created_at = (new Date()).toISOString();
        d.updated_at = (new Date()).toISOString();
      })
    })
    // Import the customer PK through the order
    .importField('order_customer_id', { path: 'order:customer:id' })
    // Remove it, the frontend doesn't need it
    .removeField('order_customer_id')
    // Create a direct relation to customer using this FK
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
}