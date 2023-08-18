/* eslint-disable */
import {
  CollectionCustomizer,
  TAggregation,
  TConditionTree,
  TPaginatedFilter,
  TPartialRow,
  TSortClause
} from '@forestadmin/agent';

export type AddressCustomizer = CollectionCustomizer<Schema, 'address'>;
export type AddressRecord = TPartialRow<Schema, 'address'>;
export type AddressConditionTree = TConditionTree<Schema, 'address'>;
export type AddressFilter = TPaginatedFilter<Schema, 'address'>;
export type AddressSortClause = TSortClause<Schema, 'address'>;
export type AddressAggregation = TAggregation<Schema, 'address'>;

export type CustomerCustomizer = CollectionCustomizer<Schema, 'customer'>;
export type CustomerRecord = TPartialRow<Schema, 'customer'>;
export type CustomerConditionTree = TConditionTree<Schema, 'customer'>;
export type CustomerFilter = TPaginatedFilter<Schema, 'customer'>;
export type CustomerSortClause = TSortClause<Schema, 'customer'>;
export type CustomerAggregation = TAggregation<Schema, 'customer'>;

export type CustomerIssueCustomizer = CollectionCustomizer<Schema, 'customer_issue'>;
export type CustomerIssueRecord = TPartialRow<Schema, 'customer_issue'>;
export type CustomerIssueConditionTree = TConditionTree<Schema, 'customer_issue'>;
export type CustomerIssueFilter = TPaginatedFilter<Schema, 'customer_issue'>;
export type CustomerIssueSortClause = TSortClause<Schema, 'customer_issue'>;
export type CustomerIssueAggregation = TAggregation<Schema, 'customer_issue'>;

export type CustomerIssueSupportCustomizer = CollectionCustomizer<Schema, 'customer_issue_support'>;
export type CustomerIssueSupportRecord = TPartialRow<Schema, 'customer_issue_support'>;
export type CustomerIssueSupportConditionTree = TConditionTree<Schema, 'customer_issue_support'>;
export type CustomerIssueSupportFilter = TPaginatedFilter<Schema, 'customer_issue_support'>;
export type CustomerIssueSupportSortClause = TSortClause<Schema, 'customer_issue_support'>;
export type CustomerIssueSupportAggregation = TAggregation<Schema, 'customer_issue_support'>;

export type OrderCustomizer = CollectionCustomizer<Schema, 'order'>;
export type OrderRecord = TPartialRow<Schema, 'order'>;
export type OrderConditionTree = TConditionTree<Schema, 'order'>;
export type OrderFilter = TPaginatedFilter<Schema, 'order'>;
export type OrderSortClause = TSortClause<Schema, 'order'>;
export type OrderAggregation = TAggregation<Schema, 'order'>;

export type OrderItemCustomizer = CollectionCustomizer<Schema, 'order_item'>;
export type OrderItemRecord = TPartialRow<Schema, 'order_item'>;
export type OrderItemConditionTree = TConditionTree<Schema, 'order_item'>;
export type OrderItemFilter = TPaginatedFilter<Schema, 'order_item'>;
export type OrderItemSortClause = TSortClause<Schema, 'order_item'>;
export type OrderItemAggregation = TAggregation<Schema, 'order_item'>;

export type PaymentMethodCustomizer = CollectionCustomizer<Schema, 'payment_method'>;
export type PaymentMethodRecord = TPartialRow<Schema, 'payment_method'>;
export type PaymentMethodConditionTree = TConditionTree<Schema, 'payment_method'>;
export type PaymentMethodFilter = TPaginatedFilter<Schema, 'payment_method'>;
export type PaymentMethodSortClause = TSortClause<Schema, 'payment_method'>;
export type PaymentMethodAggregation = TAggregation<Schema, 'payment_method'>;

export type ProductCustomizer = CollectionCustomizer<Schema, 'product'>;
export type ProductRecord = TPartialRow<Schema, 'product'>;
export type ProductConditionTree = TConditionTree<Schema, 'product'>;
export type ProductFilter = TPaginatedFilter<Schema, 'product'>;
export type ProductSortClause = TSortClause<Schema, 'product'>;
export type ProductAggregation = TAggregation<Schema, 'product'>;

export type ProductAttributeCustomizer = CollectionCustomizer<Schema, 'product_attribute'>;
export type ProductAttributeRecord = TPartialRow<Schema, 'product_attribute'>;
export type ProductAttributeConditionTree = TConditionTree<Schema, 'product_attribute'>;
export type ProductAttributeFilter = TPaginatedFilter<Schema, 'product_attribute'>;
export type ProductAttributeSortClause = TSortClause<Schema, 'product_attribute'>;
export type ProductAttributeAggregation = TAggregation<Schema, 'product_attribute'>;

export type ProductTaxonCustomizer = CollectionCustomizer<Schema, 'product_taxon'>;
export type ProductTaxonRecord = TPartialRow<Schema, 'product_taxon'>;
export type ProductTaxonConditionTree = TConditionTree<Schema, 'product_taxon'>;
export type ProductTaxonFilter = TPaginatedFilter<Schema, 'product_taxon'>;
export type ProductTaxonSortClause = TSortClause<Schema, 'product_taxon'>;
export type ProductTaxonAggregation = TAggregation<Schema, 'product_taxon'>;

export type ProductVariantCustomizer = CollectionCustomizer<Schema, 'product_variant'>;
export type ProductVariantRecord = TPartialRow<Schema, 'product_variant'>;
export type ProductVariantConditionTree = TConditionTree<Schema, 'product_variant'>;
export type ProductVariantFilter = TPaginatedFilter<Schema, 'product_variant'>;
export type ProductVariantSortClause = TSortClause<Schema, 'product_variant'>;
export type ProductVariantAggregation = TAggregation<Schema, 'product_variant'>;

export type ShippingCustomizer = CollectionCustomizer<Schema, 'shipping'>;
export type ShippingRecord = TPartialRow<Schema, 'shipping'>;
export type ShippingConditionTree = TConditionTree<Schema, 'shipping'>;
export type ShippingFilter = TPaginatedFilter<Schema, 'shipping'>;
export type ShippingSortClause = TSortClause<Schema, 'shipping'>;
export type ShippingAggregation = TAggregation<Schema, 'shipping'>;

export type ShippingMethodCustomizer = CollectionCustomizer<Schema, 'shipping_method'>;
export type ShippingMethodRecord = TPartialRow<Schema, 'shipping_method'>;
export type ShippingMethodConditionTree = TConditionTree<Schema, 'shipping_method'>;
export type ShippingMethodFilter = TPaginatedFilter<Schema, 'shipping_method'>;
export type ShippingMethodSortClause = TSortClause<Schema, 'shipping_method'>;
export type ShippingMethodAggregation = TAggregation<Schema, 'shipping_method'>;

export type TaxonCustomizer = CollectionCustomizer<Schema, 'taxon'>;
export type TaxonRecord = TPartialRow<Schema, 'taxon'>;
export type TaxonConditionTree = TConditionTree<Schema, 'taxon'>;
export type TaxonFilter = TPaginatedFilter<Schema, 'taxon'>;
export type TaxonSortClause = TSortClause<Schema, 'taxon'>;
export type TaxonAggregation = TAggregation<Schema, 'taxon'>;


export type Schema = {
  'address': {
    plain: {
      'id': number;
      'customer_id': number;
      'first_name': string;
      'last_name': string;
      'company': string;
      'country_code': string;
      'street': string;
      'city': string;
      'postcode': string;
      'phone_number': string;
    };
    nested: {
      'customer': Schema['customer']['plain'] & Schema['customer']['nested'];
    };
    flat: {
      'customer:id': number;
      'customer:first_name': string;
      'customer:last_name': string;
      'customer:email': string;
      'customer:company': string;
      'customer:gender': string;
      'customer:birthday': string;
      'customer:created_at': string;
      'customer:updated_at': string;
      'customer:full_name': string;
    };
  };
  'customer': {
    plain: {
      'id': number;
      'first_name': string;
      'last_name': string;
      'email': string;
      'company': string;
      'gender': string;
      'birthday': string;
      'created_at': string;
      'updated_at': string;
      'full_name': string;
    };
    nested: {};
    flat: {};
  };
  'customer_issue': {
    plain: {
      'id': number;
      'order_id': number;
      'owner': string;
      'state': string;
      'type': string;
      'created_at': string;
      'updated_at': string;
      'closed_at': string;
      'order_customer_id': number;
      'order_total': number;
      'order_customer_name': string;
      'order_customer_birthdate': string;
      'is_customer_birthday': boolean;
      'order_number': string;
    };
    nested: {
      'order': Schema['order']['plain'] & Schema['order']['nested'];
      'associated_customer': Schema['customer']['plain'] & Schema['customer']['nested'];
    };
    flat: {
      'order:id': number;
      'order:number': string;
      'order:total': number;
      'order:state': string;
      'order:owner': string;
      'order:customer_id': number;
      'order:created_at': string;
      'order:updated_at': string;
      'order:customer:id': number;
      'order:customer:first_name': string;
      'order:customer:last_name': string;
      'order:customer:email': string;
      'order:customer:company': string;
      'order:customer:gender': string;
      'order:customer:birthday': string;
      'order:customer:created_at': string;
      'order:customer:updated_at': string;
      'order:customer:full_name': string;
      'associated_customer:id': number;
      'associated_customer:first_name': string;
      'associated_customer:last_name': string;
      'associated_customer:email': string;
      'associated_customer:company': string;
      'associated_customer:gender': string;
      'associated_customer:birthday': string;
      'associated_customer:created_at': string;
      'associated_customer:updated_at': string;
      'associated_customer:full_name': string;
    };
  };
  'customer_issue_support': {
    plain: {
      'id': number;
      'customer_issue_id': number;
      'owner': string;
      'type': string;
      'description': string;
      'created_at': string;
      'updated_at': string;
    };
    nested: {
      'customer_issue': Schema['customer_issue']['plain'] & Schema['customer_issue']['nested'];
    };
    flat: {
      'customer_issue:id': number;
      'customer_issue:order_id': number;
      'customer_issue:owner': string;
      'customer_issue:state': string;
      'customer_issue:type': string;
      'customer_issue:created_at': string;
      'customer_issue:updated_at': string;
      'customer_issue:closed_at': string;
      'customer_issue:order_customer_id': number;
      'customer_issue:order_total': number;
      'customer_issue:order_customer_name': string;
      'customer_issue:order_customer_birthdate': string;
      'customer_issue:is_customer_birthday': boolean;
      'customer_issue:order_number': string;
      'customer_issue:order:id': number;
      'customer_issue:order:number': string;
      'customer_issue:order:total': number;
      'customer_issue:order:state': string;
      'customer_issue:order:owner': string;
      'customer_issue:order:customer_id': number;
      'customer_issue:order:created_at': string;
      'customer_issue:order:updated_at': string;
      'customer_issue:order:customer:id': number;
      'customer_issue:order:customer:first_name': string;
      'customer_issue:order:customer:last_name': string;
      'customer_issue:order:customer:email': string;
      'customer_issue:order:customer:company': string;
      'customer_issue:order:customer:gender': string;
      'customer_issue:order:customer:birthday': string;
      'customer_issue:order:customer:created_at': string;
      'customer_issue:order:customer:updated_at': string;
      'customer_issue:order:customer:full_name': string;
      'customer_issue:associated_customer:id': number;
      'customer_issue:associated_customer:first_name': string;
      'customer_issue:associated_customer:last_name': string;
      'customer_issue:associated_customer:email': string;
      'customer_issue:associated_customer:company': string;
      'customer_issue:associated_customer:gender': string;
      'customer_issue:associated_customer:birthday': string;
      'customer_issue:associated_customer:created_at': string;
      'customer_issue:associated_customer:updated_at': string;
      'customer_issue:associated_customer:full_name': string;
    };
  };
  'order': {
    plain: {
      'id': number;
      'number': string;
      'total': number;
      'state': string;
      'owner': string;
      'customer_id': number;
      'created_at': string;
      'updated_at': string;
    };
    nested: {
      'customer': Schema['customer']['plain'] & Schema['customer']['nested'];
    };
    flat: {
      'customer:id': number;
      'customer:first_name': string;
      'customer:last_name': string;
      'customer:email': string;
      'customer:company': string;
      'customer:gender': string;
      'customer:birthday': string;
      'customer:created_at': string;
      'customer:updated_at': string;
      'customer:full_name': string;
    };
  };
  'order_item': {
    plain: {
      'id': number;
      'quantity': number;
      'unit_price': number;
      'total': number;
      'product_id': number;
      'order_id': number;
    };
    nested: {
      'product': Schema['product']['plain'] & Schema['product']['nested'];
      'order': Schema['order']['plain'] & Schema['order']['nested'];
    };
    flat: {
      'product:id': number;
      'product:name': string;
      'product:description': string;
      'product:price': number;
      'product:image_path': string;
      'order:id': number;
      'order:number': string;
      'order:total': number;
      'order:state': string;
      'order:owner': string;
      'order:customer_id': number;
      'order:created_at': string;
      'order:updated_at': string;
      'order:customer:id': number;
      'order:customer:first_name': string;
      'order:customer:last_name': string;
      'order:customer:email': string;
      'order:customer:company': string;
      'order:customer:gender': string;
      'order:customer:birthday': string;
      'order:customer:created_at': string;
      'order:customer:updated_at': string;
      'order:customer:full_name': string;
    };
  };
  'payment_method': {
    plain: {
      'id': number;
      'code': string;
      'name': string;
      'description': string;
      'enabled': boolean;
      'created_at': string;
      'updated_at': string;
    };
    nested: {};
    flat: {};
  };
  'product': {
    plain: {
      'id': number;
      'name': string;
      'description': string;
      'price': number;
      'image_path': string;
    };
    nested: {};
    flat: {};
  };
  'product_attribute': {
    plain: {
      'id': number;
      'name': string;
      'type': string;
    };
    nested: {};
    flat: {};
  };
  'product_taxon': {
    plain: {
      'product_id': number;
      'taxon_id': number;
    };
    nested: {
      'product': Schema['product']['plain'] & Schema['product']['nested'];
      'taxon': Schema['taxon']['plain'] & Schema['taxon']['nested'];
    };
    flat: {
      'product:id': number;
      'product:name': string;
      'product:description': string;
      'product:price': number;
      'product:image_path': string;
      'taxon:id': number;
      'taxon:name': string;
      'taxon:description': string;
    };
  };
  'product_variant': {
    plain: {
      'id': number;
      'code': string;
      'name': string;
      'price': number;
      'product_id': number;
    };
    nested: {
      'product': Schema['product']['plain'] & Schema['product']['nested'];
    };
    flat: {
      'product:id': number;
      'product:name': string;
      'product:description': string;
      'product:price': number;
      'product:image_path': string;
    };
  };
  'shipping': {
    plain: {
      'id': number;
      'order_id': number;
      'method_id': number;
      'state': string;
      'amount': number;
    };
    nested: {
      'order': Schema['order']['plain'] & Schema['order']['nested'];
      'method': Schema['shipping_method']['plain'] & Schema['shipping_method']['nested'];
    };
    flat: {
      'order:id': number;
      'order:number': string;
      'order:total': number;
      'order:state': string;
      'order:owner': string;
      'order:customer_id': number;
      'order:created_at': string;
      'order:updated_at': string;
      'order:customer:id': number;
      'order:customer:first_name': string;
      'order:customer:last_name': string;
      'order:customer:email': string;
      'order:customer:company': string;
      'order:customer:gender': string;
      'order:customer:birthday': string;
      'order:customer:created_at': string;
      'order:customer:updated_at': string;
      'order:customer:full_name': string;
      'method:id': number;
      'method:code': string;
      'method:name': string;
      'method:description': string;
      'method:calculator': any;
    };
  };
  'shipping_method': {
    plain: {
      'id': number;
      'code': string;
      'name': string;
      'description': string;
      'calculator': any;
    };
    nested: {};
    flat: {};
  };
  'taxon': {
    plain: {
      'id': number;
      'name': string;
      'description': string;
    };
    nested: {};
    flat: {};
  };
};
