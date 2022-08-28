
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.2.1
 * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
 */
Prisma.prismaVersion = {
  client: "4.2.1",
  engine: "2920a97877e12e055c1333079b8d19cee7f33826"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
});

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
});

exports.Prisma.CategoryOrderByRelevanceFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.CategoryProductScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  cat_id: 'cat_id'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  parent_id: 'parent_id'
});

exports.Prisma.CustomerOrderByRelevanceFieldEnum = makeEnum({
  phone: 'phone',
  address: 'address'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  phone: 'phone',
  address: 'address',
  created: 'created'
});

exports.Prisma.OrderItemScalarFieldEnum = makeEnum({
  order_id: 'order_id',
  product_id: 'product_id',
  sku_id: 'sku_id',
  variation_id: 'variation_id',
  count: 'count'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  customer_id: 'customer_id',
  status: 'status',
  sub_total: 'sub_total',
  total: 'total',
  created: 'created'
});

exports.Prisma.ProductOptionOrderByRelevanceFieldEnum = makeEnum({
  name: 'name',
  options: 'options'
});

exports.Prisma.ProductOptionScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  name: 'name',
  options: 'options'
});

exports.Prisma.ProductOrderByRelevanceFieldEnum = makeEnum({
  rack_name: 'rack_name',
  marketing_status: 'marketing_status',
  hscode: 'hscode',
  name: 'name'
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  rack_name: 'rack_name',
  marketing_status: 'marketing_status',
  hscode: 'hscode',
  weight: 'weight',
  name: 'name'
});

exports.Prisma.PromoOrderByRelevanceFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.PromoScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  type: 'type',
  value: 'value'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RackOrderByRelevanceFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.RackScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.SessionOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
});

exports.Prisma.SkuOrderByRelevanceFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.SkuScalarFieldEnum = makeEnum({
  id: 'id',
  stock: 'stock',
  variation_id: 'variation_id',
  product_id: 'product_id',
  last_restock: 'last_restock'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SupplierOrderByRelevanceFieldEnum = makeEnum({
  name: 'name',
  note: 'note',
  link: 'link'
});

exports.Prisma.SupplierScalarFieldEnum = makeEnum({
  id: 'id',
  type_id: 'type_id',
  name: 'name',
  note: 'note',
  link: 'link',
  stock_ongoing: 'stock_ongoing',
  stock_ready: 'stock_ready',
  created: 'created'
});

exports.Prisma.SupplierTypeOrderByRelevanceFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.SupplierTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  username: 'username',
  password: 'password',
  email: 'email',
  image: 'image'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  username: 'username',
  password: 'password',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image'
});

exports.Prisma.VariationOrderByRelevanceFieldEnum = makeEnum({
  names: 'names',
  values: 'values'
});

exports.Prisma.VariationScalarFieldEnum = makeEnum({
  id: 'id',
  names: 'names',
  values: 'values',
  price: 'price',
  product_id: 'product_id',
  is_default: 'is_default'
});

exports.Prisma.VerificationTokenOrderByRelevanceFieldEnum = makeEnum({
  identifier: 'identifier',
  token: 'token'
});

exports.Prisma.VerificationTokenScalarFieldEnum = makeEnum({
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
});
exports.DiscountType = makeEnum({
  PERCENT: 'PERCENT',
  FIXED: 'FIXED'
});

exports.StatusOrder = makeEnum({
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  CANCEL: 'CANCEL',
  PROBLEM: 'PROBLEM'
});

exports.Prisma.ModelName = makeEnum({
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  Category: 'Category',
  Product: 'Product',
  CategoryProduct: 'CategoryProduct',
  ProductOption: 'ProductOption',
  Sku: 'Sku',
  Variation: 'Variation',
  Order: 'Order',
  Customer: 'Customer',
  OrderItem: 'OrderItem',
  Promo: 'Promo',
  Supplier: 'Supplier',
  SupplierType: 'SupplierType',
  Rack: 'Rack'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
