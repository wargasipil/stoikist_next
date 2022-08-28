
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Account
 * 
 */
export type Account = {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sessionToken: string
  userId: string
  expires: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string | null
  username: string
  password: string
  email: string | null
  emailVerified: Date | null
  image: string | null
}

/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = {
  identifier: string
  token: string
  expires: Date
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  name: string
  parent_id: number
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: number
  rack_name: string
  marketing_status: string
  hscode: string
  weight: number
  name: string
}

/**
 * Model CategoryProduct
 * 
 */
export type CategoryProduct = {
  id: number
  product_id: number
  cat_id: number
}

/**
 * Model ProductOption
 * 
 */
export type ProductOption = {
  id: number
  product_id: number
  name: string
  options: string[]
}

/**
 * Model Sku
 * 
 */
export type Sku = {
  id: string
  stock: number
  variation_id: number
  product_id: number
  last_restock: Date | null
}

/**
 * Model Variation
 * 
 */
export type Variation = {
  id: number
  names: string[]
  values: string[]
  price: number
  product_id: number
  is_default: boolean
}

/**
 * Model Order
 * 
 */
export type Order = {
  id: number
  customer_id: number
  status: StatusOrder
  sub_total: number
  total: number
  created: Date
}

/**
 * Model Customer
 * 
 */
export type Customer = {
  id: number
  phone: string
  address: string
  created: Date
}

/**
 * Model OrderItem
 * 
 */
export type OrderItem = {
  order_id: number
  product_id: number
  sku_id: number
  variation_id: number
  count: number
}

/**
 * Model Promo
 * 
 */
export type Promo = {
  id: number
  name: string
  type: DiscountType
  value: number
}

/**
 * Model Supplier
 * 
 */
export type Supplier = {
  id: number
  type_id: number
  name: string
  note: string
  link: string
  stock_ongoing: number
  stock_ready: number
  created: Date
}

/**
 * Model SupplierType
 * 
 */
export type SupplierType = {
  id: number
  name: string
}

/**
 * Model Rack
 * 
 */
export type Rack = {
  id: number
  name: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const DiscountType: {
  PERCENT: 'PERCENT',
  FIXED: 'FIXED'
};

export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType]


export const StatusOrder: {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  CANCEL: 'CANCEL',
  PROBLEM: 'PROBLEM'
};

export type StatusOrder = (typeof StatusOrder)[keyof typeof StatusOrder]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.categoryProduct`: Exposes CRUD operations for the **CategoryProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryProducts
    * const categoryProducts = await prisma.categoryProduct.findMany()
    * ```
    */
  get categoryProduct(): Prisma.CategoryProductDelegate<GlobalReject>;

  /**
   * `prisma.productOption`: Exposes CRUD operations for the **ProductOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOptions
    * const productOptions = await prisma.productOption.findMany()
    * ```
    */
  get productOption(): Prisma.ProductOptionDelegate<GlobalReject>;

  /**
   * `prisma.sku`: Exposes CRUD operations for the **Sku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skus
    * const skus = await prisma.sku.findMany()
    * ```
    */
  get sku(): Prisma.SkuDelegate<GlobalReject>;

  /**
   * `prisma.variation`: Exposes CRUD operations for the **Variation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variations
    * const variations = await prisma.variation.findMany()
    * ```
    */
  get variation(): Prisma.VariationDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<GlobalReject>;

  /**
   * `prisma.promo`: Exposes CRUD operations for the **Promo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promos
    * const promos = await prisma.promo.findMany()
    * ```
    */
  get promo(): Prisma.PromoDelegate<GlobalReject>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<GlobalReject>;

  /**
   * `prisma.supplierType`: Exposes CRUD operations for the **SupplierType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierTypes
    * const supplierTypes = await prisma.supplierType.findMany()
    * ```
    */
  get supplierType(): Prisma.SupplierTypeDelegate<GlobalReject>;

  /**
   * `prisma.rack`: Exposes CRUD operations for the **Rack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Racks
    * const racks = await prisma.rack.findMany()
    * ```
    */
  get rack(): Prisma.RackDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;


  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect = {
    accounts?: boolean
    sessions?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect = {
    products?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CategoryCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CategoryCountOutputType
    : S extends undefined
    ? never
    : S extends CategoryCountOutputTypeArgs
    ?'include' extends U
    ? CategoryCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
    : CategoryCountOutputType
  : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     * 
    **/
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    sku: number
    options: number
    variation: number
    order_items: number
    categories: number
  }

  export type ProductCountOutputTypeSelect = {
    sku?: boolean
    options?: boolean
    variation?: boolean
    order_items?: boolean
    categories?: boolean
  }

  export type ProductCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProductCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProductCountOutputType
    : S extends undefined
    ? never
    : S extends ProductCountOutputTypeArgs
    ?'include' extends U
    ? ProductCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
    : ProductCountOutputType
  : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     * 
    **/
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Count Type VariationCountOutputType
   */


  export type VariationCountOutputType = {
    order_items: number
  }

  export type VariationCountOutputTypeSelect = {
    order_items?: boolean
  }

  export type VariationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | VariationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? VariationCountOutputType
    : S extends undefined
    ? never
    : S extends VariationCountOutputTypeArgs
    ?'include' extends U
    ? VariationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof VariationCountOutputType ? VariationCountOutputType[P] : never
  } 
    : VariationCountOutputType
  : VariationCountOutputType




  // Custom InputTypes

  /**
   * VariationCountOutputType without action
   */
  export type VariationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VariationCountOutputType
     * 
    **/
    select?: VariationCountOutputTypeSelect | null
  }



  /**
   * Count Type OrderCountOutputType
   */


  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect = {
    items?: boolean
  }

  export type OrderCountOutputTypeGetPayload<
    S extends boolean | null | undefined | OrderCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? OrderCountOutputType
    : S extends undefined
    ? never
    : S extends OrderCountOutputTypeArgs
    ?'include' extends U
    ? OrderCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof OrderCountOutputType ? OrderCountOutputType[P] : never
  } 
    : OrderCountOutputType
  : OrderCountOutputType




  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     * 
    **/
    select?: OrderCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    orders: number
  }

  export type CustomerCountOutputTypeSelect = {
    orders?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CustomerCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CustomerCountOutputType
    : S extends undefined
    ? never
    : S extends CustomerCountOutputTypeArgs
    ?'include' extends U
    ? CustomerCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
    : CustomerCountOutputType
  : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     * 
    **/
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Count Type SupplierTypeCountOutputType
   */


  export type SupplierTypeCountOutputType = {
    suppliers: number
  }

  export type SupplierTypeCountOutputTypeSelect = {
    suppliers?: boolean
  }

  export type SupplierTypeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SupplierTypeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SupplierTypeCountOutputType
    : S extends undefined
    ? never
    : S extends SupplierTypeCountOutputTypeArgs
    ?'include' extends U
    ? SupplierTypeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SupplierTypeCountOutputType ? SupplierTypeCountOutputType[P] : never
  } 
    : SupplierTypeCountOutputType
  : SupplierTypeCountOutputType




  // Custom InputTypes

  /**
   * SupplierTypeCountOutputType without action
   */
  export type SupplierTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SupplierTypeCountOutputType
     * 
    **/
    select?: SupplierTypeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserArgs
  }

  export type AccountInclude = {
    user?: boolean | UserArgs
  }

  export type AccountGetPayload<
    S extends boolean | null | undefined | AccountArgs,
    U = keyof S
      > = S extends true
        ? Account
    : S extends undefined
    ? never
    : S extends AccountArgs | AccountFindManyArgs
    ?'include' extends U
    ? Account  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
    : Account
  : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Find one Account that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }

  /**
   * Account: findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account: findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     * 
    **/
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     * 
    **/
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account: findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = AccountFindUniqueArgsBase
      

  /**
   * Account: findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = AccountFindFirstArgsBase
      

  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserArgs
  }

  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Session ? Session[P] : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find one Session that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }

  /**
   * Session: findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session: findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session: findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = SessionFindUniqueArgsBase
      

  /**
   * Session: findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = SessionFindFirstArgsBase
      

  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    username: string
    password: string
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | AccountFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    accounts?: boolean | AccountFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends AccountFindManyArgs = {}>(args?: Subset<T, AccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>;

    sessions<T extends SessionFindManyArgs = {}>(args?: Subset<T, SessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model VerificationToken
   */


  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs = {
    /**
     * Filter which VerificationToken to aggregate.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs = {
    where?: VerificationTokenWhereInput
    orderBy?: Enumerable<VerificationTokenOrderByWithAggregationInput>
    by: Array<VerificationTokenScalarFieldEnum>
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }


  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenGetPayload<
    S extends boolean | null | undefined | VerificationTokenArgs,
    U = keyof S
      > = S extends true
        ? VerificationToken
    : S extends undefined
    ? never
    : S extends VerificationTokenArgs | VerificationTokenFindManyArgs
    ?'include' extends U
    ? VerificationToken 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof VerificationToken ? VerificationToken[P] : never
  } 
    : VerificationToken
  : VerificationToken


  type VerificationTokenCountArgs = Merge<
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }
  >

  export interface VerificationTokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VerificationToken'> extends True ? CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>> : CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken | null >, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null >>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VerificationToken'> extends True ? CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>> : CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken | null >, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null >>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<VerificationToken>>, PrismaPromise<Array<VerificationTokenGetPayload<T>>>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Find one VerificationToken that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__VerificationTokenClient<VerificationToken>, Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationTokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * VerificationToken base type for findUnique actions
   */
  export type VerificationTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken: findUnique
   */
  export interface VerificationTokenFindUniqueArgs extends VerificationTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken base type for findFirst actions
   */
  export type VerificationTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     * 
    **/
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }

  /**
   * VerificationToken: findFirst
   */
  export interface VerificationTokenFindFirstArgs extends VerificationTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationTokens to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to create a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs = {
    /**
     * The data used to create many VerificationTokens.
     * 
    **/
    data: Enumerable<VerificationTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to update a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs = {
    /**
     * The data used to update VerificationTokens.
     * 
    **/
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     * 
    **/
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     * 
    **/
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter which VerificationToken to delete.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs = {
    /**
     * Filter which VerificationTokens to delete
     * 
    **/
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken: findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs = VerificationTokenFindUniqueArgsBase
      

  /**
   * VerificationToken: findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs = VerificationTokenFindFirstArgsBase
      

  /**
   * VerificationToken without action
   */
  export type VerificationTokenArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    parent_id: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    parent_id: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    parent_id: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    name: string
    parent_id: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    name?: boolean
    parent_id?: boolean
    products?: boolean | CategoryProductFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryInclude = {
    products?: boolean | CategoryProductFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryArgs,
    U = keyof S
      > = S extends true
        ? Category
    : S extends undefined
    ? never
    : S extends CategoryArgs | CategoryFindManyArgs
    ?'include' extends U
    ? Category  & {
    [P in TrueKeys<S['include']>]:
        P extends 'products' ? Array < CategoryProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'products' ? Array < CategoryProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
    : Category
  : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Find one Category that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    products<T extends CategoryProductFindManyArgs = {}>(args?: Subset<T, CategoryProductFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CategoryProduct>>, PrismaPromise<Array<CategoryProductGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }

  /**
   * Category: findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category: findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    /**
     * The data used to create many Categories.
     * 
    **/
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     * 
    **/
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category: findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = CategoryFindUniqueArgsBase
      

  /**
   * Category: findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = CategoryFindFirstArgsBase
      

  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    weight: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    weight: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    rack_name: string | null
    marketing_status: string | null
    hscode: string | null
    weight: number | null
    name: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    rack_name: string | null
    marketing_status: string | null
    hscode: string | null
    weight: number | null
    name: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    rack_name: number
    marketing_status: number
    hscode: number
    weight: number
    name: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    weight?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    weight?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    rack_name?: true
    marketing_status?: true
    hscode?: true
    weight?: true
    name?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    rack_name?: true
    marketing_status?: true
    hscode?: true
    weight?: true
    name?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    rack_name?: true
    marketing_status?: true
    hscode?: true
    weight?: true
    name?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: number
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    rack_name?: boolean
    marketing_status?: boolean
    hscode?: boolean
    weight?: boolean
    name?: boolean
    sku?: boolean | SkuFindManyArgs
    options?: boolean | ProductOptionFindManyArgs
    variation?: boolean | VariationFindManyArgs
    order_items?: boolean | OrderItemFindManyArgs
    categories?: boolean | CategoryProductFindManyArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductInclude = {
    sku?: boolean | SkuFindManyArgs
    options?: boolean | ProductOptionFindManyArgs
    variation?: boolean | VariationFindManyArgs
    order_items?: boolean | OrderItemFindManyArgs
    categories?: boolean | CategoryProductFindManyArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductGetPayload<
    S extends boolean | null | undefined | ProductArgs,
    U = keyof S
      > = S extends true
        ? Product
    : S extends undefined
    ? never
    : S extends ProductArgs | ProductFindManyArgs
    ?'include' extends U
    ? Product  & {
    [P in TrueKeys<S['include']>]:
        P extends 'sku' ? Array < SkuGetPayload<S['include'][P]>>  :
        P extends 'options' ? Array < ProductOptionGetPayload<S['include'][P]>>  :
        P extends 'variation' ? Array < VariationGetPayload<S['include'][P]>>  :
        P extends 'order_items' ? Array < OrderItemGetPayload<S['include'][P]>>  :
        P extends 'categories' ? Array < CategoryProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'sku' ? Array < SkuGetPayload<S['select'][P]>>  :
        P extends 'options' ? Array < ProductOptionGetPayload<S['select'][P]>>  :
        P extends 'variation' ? Array < VariationGetPayload<S['select'][P]>>  :
        P extends 'order_items' ? Array < OrderItemGetPayload<S['select'][P]>>  :
        P extends 'categories' ? Array < CategoryProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Product ? Product[P] : never
  } 
    : Product
  : Product


  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>> : CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Product>>, PrismaPromise<Array<ProductGetPayload<T>>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Find one Product that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductClient<Product>, Prisma__ProductClient<ProductGetPayload<T>>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sku<T extends SkuFindManyArgs = {}>(args?: Subset<T, SkuFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Sku>>, PrismaPromise<Array<SkuGetPayload<T>>>>;

    options<T extends ProductOptionFindManyArgs = {}>(args?: Subset<T, ProductOptionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProductOption>>, PrismaPromise<Array<ProductOptionGetPayload<T>>>>;

    variation<T extends VariationFindManyArgs = {}>(args?: Subset<T, VariationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Variation>>, PrismaPromise<Array<VariationGetPayload<T>>>>;

    order_items<T extends OrderItemFindManyArgs = {}>(args?: Subset<T, OrderItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<OrderItem>>, PrismaPromise<Array<OrderItemGetPayload<T>>>>;

    categories<T extends CategoryProductFindManyArgs = {}>(args?: Subset<T, CategoryProductFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CategoryProduct>>, PrismaPromise<Array<CategoryProductGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product: findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product: findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     * 
    **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     * 
    **/
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     * 
    **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     * 
    **/
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     * 
    **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     * 
    **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product: findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = ProductFindUniqueArgsBase
      

  /**
   * Product: findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = ProductFindFirstArgsBase
      

  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
  }



  /**
   * Model CategoryProduct
   */


  export type AggregateCategoryProduct = {
    _count: CategoryProductCountAggregateOutputType | null
    _avg: CategoryProductAvgAggregateOutputType | null
    _sum: CategoryProductSumAggregateOutputType | null
    _min: CategoryProductMinAggregateOutputType | null
    _max: CategoryProductMaxAggregateOutputType | null
  }

  export type CategoryProductAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    cat_id: number | null
  }

  export type CategoryProductSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    cat_id: number | null
  }

  export type CategoryProductMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    cat_id: number | null
  }

  export type CategoryProductMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    cat_id: number | null
  }

  export type CategoryProductCountAggregateOutputType = {
    id: number
    product_id: number
    cat_id: number
    _all: number
  }


  export type CategoryProductAvgAggregateInputType = {
    id?: true
    product_id?: true
    cat_id?: true
  }

  export type CategoryProductSumAggregateInputType = {
    id?: true
    product_id?: true
    cat_id?: true
  }

  export type CategoryProductMinAggregateInputType = {
    id?: true
    product_id?: true
    cat_id?: true
  }

  export type CategoryProductMaxAggregateInputType = {
    id?: true
    product_id?: true
    cat_id?: true
  }

  export type CategoryProductCountAggregateInputType = {
    id?: true
    product_id?: true
    cat_id?: true
    _all?: true
  }

  export type CategoryProductAggregateArgs = {
    /**
     * Filter which CategoryProduct to aggregate.
     * 
    **/
    where?: CategoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryProductOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryProducts
    **/
    _count?: true | CategoryProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryProductMaxAggregateInputType
  }

  export type GetCategoryProductAggregateType<T extends CategoryProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryProduct[P]>
      : GetScalarType<T[P], AggregateCategoryProduct[P]>
  }




  export type CategoryProductGroupByArgs = {
    where?: CategoryProductWhereInput
    orderBy?: Enumerable<CategoryProductOrderByWithAggregationInput>
    by: Array<CategoryProductScalarFieldEnum>
    having?: CategoryProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryProductCountAggregateInputType | true
    _avg?: CategoryProductAvgAggregateInputType
    _sum?: CategoryProductSumAggregateInputType
    _min?: CategoryProductMinAggregateInputType
    _max?: CategoryProductMaxAggregateInputType
  }


  export type CategoryProductGroupByOutputType = {
    id: number
    product_id: number
    cat_id: number
    _count: CategoryProductCountAggregateOutputType | null
    _avg: CategoryProductAvgAggregateOutputType | null
    _sum: CategoryProductSumAggregateOutputType | null
    _min: CategoryProductMinAggregateOutputType | null
    _max: CategoryProductMaxAggregateOutputType | null
  }

  type GetCategoryProductGroupByPayload<T extends CategoryProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategoryProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryProductGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryProductGroupByOutputType[P]>
        }
      >
    >


  export type CategoryProductSelect = {
    id?: boolean
    product_id?: boolean
    cat_id?: boolean
    category?: boolean | CategoryArgs
    product?: boolean | ProductArgs
  }

  export type CategoryProductInclude = {
    category?: boolean | CategoryArgs
    product?: boolean | ProductArgs
  }

  export type CategoryProductGetPayload<
    S extends boolean | null | undefined | CategoryProductArgs,
    U = keyof S
      > = S extends true
        ? CategoryProduct
    : S extends undefined
    ? never
    : S extends CategoryProductArgs | CategoryProductFindManyArgs
    ?'include' extends U
    ? CategoryProduct  & {
    [P in TrueKeys<S['include']>]:
        P extends 'category' ? CategoryGetPayload<S['include'][P]> :
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'category' ? CategoryGetPayload<S['select'][P]> :
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof CategoryProduct ? CategoryProduct[P] : never
  } 
    : CategoryProduct
  : CategoryProduct


  type CategoryProductCountArgs = Merge<
    Omit<CategoryProductFindManyArgs, 'select' | 'include'> & {
      select?: CategoryProductCountAggregateInputType | true
    }
  >

  export interface CategoryProductDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CategoryProduct that matches the filter.
     * @param {CategoryProductFindUniqueArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CategoryProduct'> extends True ? CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct>, Prisma__CategoryProductClient<CategoryProductGetPayload<T>>> : CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct | null >, Prisma__CategoryProductClient<CategoryProductGetPayload<T> | null >>

    /**
     * Find the first CategoryProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductFindFirstArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CategoryProduct'> extends True ? CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct>, Prisma__CategoryProductClient<CategoryProductGetPayload<T>>> : CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct | null >, Prisma__CategoryProductClient<CategoryProductGetPayload<T> | null >>

    /**
     * Find zero or more CategoryProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryProducts
     * const categoryProducts = await prisma.categoryProduct.findMany()
     * 
     * // Get first 10 CategoryProducts
     * const categoryProducts = await prisma.categoryProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryProductWithIdOnly = await prisma.categoryProduct.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryProductFindManyArgs>(
      args?: SelectSubset<T, CategoryProductFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CategoryProduct>>, PrismaPromise<Array<CategoryProductGetPayload<T>>>>

    /**
     * Create a CategoryProduct.
     * @param {CategoryProductCreateArgs} args - Arguments to create a CategoryProduct.
     * @example
     * // Create one CategoryProduct
     * const CategoryProduct = await prisma.categoryProduct.create({
     *   data: {
     *     // ... data to create a CategoryProduct
     *   }
     * })
     * 
    **/
    create<T extends CategoryProductCreateArgs>(
      args: SelectSubset<T, CategoryProductCreateArgs>
    ): CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct>, Prisma__CategoryProductClient<CategoryProductGetPayload<T>>>

    /**
     * Create many CategoryProducts.
     *     @param {CategoryProductCreateManyArgs} args - Arguments to create many CategoryProducts.
     *     @example
     *     // Create many CategoryProducts
     *     const categoryProduct = await prisma.categoryProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryProductCreateManyArgs>(
      args?: SelectSubset<T, CategoryProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryProduct.
     * @param {CategoryProductDeleteArgs} args - Arguments to delete one CategoryProduct.
     * @example
     * // Delete one CategoryProduct
     * const CategoryProduct = await prisma.categoryProduct.delete({
     *   where: {
     *     // ... filter to delete one CategoryProduct
     *   }
     * })
     * 
    **/
    delete<T extends CategoryProductDeleteArgs>(
      args: SelectSubset<T, CategoryProductDeleteArgs>
    ): CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct>, Prisma__CategoryProductClient<CategoryProductGetPayload<T>>>

    /**
     * Update one CategoryProduct.
     * @param {CategoryProductUpdateArgs} args - Arguments to update one CategoryProduct.
     * @example
     * // Update one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryProductUpdateArgs>(
      args: SelectSubset<T, CategoryProductUpdateArgs>
    ): CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct>, Prisma__CategoryProductClient<CategoryProductGetPayload<T>>>

    /**
     * Delete zero or more CategoryProducts.
     * @param {CategoryProductDeleteManyArgs} args - Arguments to filter CategoryProducts to delete.
     * @example
     * // Delete a few CategoryProducts
     * const { count } = await prisma.categoryProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryProductDeleteManyArgs>(
      args?: SelectSubset<T, CategoryProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryProducts
     * const categoryProduct = await prisma.categoryProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryProductUpdateManyArgs>(
      args: SelectSubset<T, CategoryProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryProduct.
     * @param {CategoryProductUpsertArgs} args - Arguments to update or create a CategoryProduct.
     * @example
     * // Update or create a CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.upsert({
     *   create: {
     *     // ... data to create a CategoryProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryProduct we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryProductUpsertArgs>(
      args: SelectSubset<T, CategoryProductUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct>, Prisma__CategoryProductClient<CategoryProductGetPayload<T>>>

    /**
     * Find one CategoryProduct that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CategoryProductFindUniqueOrThrowArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryProductFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct>, Prisma__CategoryProductClient<CategoryProductGetPayload<T>>>

    /**
     * Find the first CategoryProduct that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductFindFirstOrThrowArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryProductFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CategoryProductClient<CategoryProduct>, Prisma__CategoryProductClient<CategoryProductGetPayload<T>>>

    /**
     * Count the number of CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductCountArgs} args - Arguments to filter CategoryProducts to count.
     * @example
     * // Count the number of CategoryProducts
     * const count = await prisma.categoryProduct.count({
     *   where: {
     *     // ... the filter for the CategoryProducts we want to count
     *   }
     * })
    **/
    count<T extends CategoryProductCountArgs>(
      args?: Subset<T, CategoryProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryProductAggregateArgs>(args: Subset<T, CategoryProductAggregateArgs>): PrismaPromise<GetCategoryProductAggregateType<T>>

    /**
     * Group by CategoryProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryProductGroupByArgs['orderBy'] }
        : { orderBy?: CategoryProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryProductGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryProductClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    category<T extends CategoryArgs = {}>(args?: Subset<T, CategoryArgs>): CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>;

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CategoryProduct base type for findUnique actions
   */
  export type CategoryProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     * 
    **/
    select?: CategoryProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryProductInclude | null
    /**
     * Filter, which CategoryProduct to fetch.
     * 
    **/
    where: CategoryProductWhereUniqueInput
  }

  /**
   * CategoryProduct: findUnique
   */
  export interface CategoryProductFindUniqueArgs extends CategoryProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CategoryProduct base type for findFirst actions
   */
  export type CategoryProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     * 
    **/
    select?: CategoryProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryProductInclude | null
    /**
     * Filter, which CategoryProduct to fetch.
     * 
    **/
    where?: CategoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryProductOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryProducts.
     * 
    **/
    cursor?: CategoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryProducts.
     * 
    **/
    distinct?: Enumerable<CategoryProductScalarFieldEnum>
  }

  /**
   * CategoryProduct: findFirst
   */
  export interface CategoryProductFindFirstArgs extends CategoryProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CategoryProduct findMany
   */
  export type CategoryProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     * 
    **/
    select?: CategoryProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryProductInclude | null
    /**
     * Filter, which CategoryProducts to fetch.
     * 
    **/
    where?: CategoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryProductOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryProducts.
     * 
    **/
    cursor?: CategoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryProductScalarFieldEnum>
  }


  /**
   * CategoryProduct create
   */
  export type CategoryProductCreateArgs = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     * 
    **/
    select?: CategoryProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryProductInclude | null
    /**
     * The data needed to create a CategoryProduct.
     * 
    **/
    data: XOR<CategoryProductCreateInput, CategoryProductUncheckedCreateInput>
  }


  /**
   * CategoryProduct createMany
   */
  export type CategoryProductCreateManyArgs = {
    /**
     * The data used to create many CategoryProducts.
     * 
    **/
    data: Enumerable<CategoryProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CategoryProduct update
   */
  export type CategoryProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     * 
    **/
    select?: CategoryProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryProductInclude | null
    /**
     * The data needed to update a CategoryProduct.
     * 
    **/
    data: XOR<CategoryProductUpdateInput, CategoryProductUncheckedUpdateInput>
    /**
     * Choose, which CategoryProduct to update.
     * 
    **/
    where: CategoryProductWhereUniqueInput
  }


  /**
   * CategoryProduct updateMany
   */
  export type CategoryProductUpdateManyArgs = {
    /**
     * The data used to update CategoryProducts.
     * 
    **/
    data: XOR<CategoryProductUpdateManyMutationInput, CategoryProductUncheckedUpdateManyInput>
    /**
     * Filter which CategoryProducts to update
     * 
    **/
    where?: CategoryProductWhereInput
  }


  /**
   * CategoryProduct upsert
   */
  export type CategoryProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     * 
    **/
    select?: CategoryProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryProductInclude | null
    /**
     * The filter to search for the CategoryProduct to update in case it exists.
     * 
    **/
    where: CategoryProductWhereUniqueInput
    /**
     * In case the CategoryProduct found by the `where` argument doesn't exist, create a new CategoryProduct with this data.
     * 
    **/
    create: XOR<CategoryProductCreateInput, CategoryProductUncheckedCreateInput>
    /**
     * In case the CategoryProduct was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryProductUpdateInput, CategoryProductUncheckedUpdateInput>
  }


  /**
   * CategoryProduct delete
   */
  export type CategoryProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     * 
    **/
    select?: CategoryProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryProductInclude | null
    /**
     * Filter which CategoryProduct to delete.
     * 
    **/
    where: CategoryProductWhereUniqueInput
  }


  /**
   * CategoryProduct deleteMany
   */
  export type CategoryProductDeleteManyArgs = {
    /**
     * Filter which CategoryProducts to delete
     * 
    **/
    where?: CategoryProductWhereInput
  }


  /**
   * CategoryProduct: findUniqueOrThrow
   */
  export type CategoryProductFindUniqueOrThrowArgs = CategoryProductFindUniqueArgsBase
      

  /**
   * CategoryProduct: findFirstOrThrow
   */
  export type CategoryProductFindFirstOrThrowArgs = CategoryProductFindFirstArgsBase
      

  /**
   * CategoryProduct without action
   */
  export type CategoryProductArgs = {
    /**
     * Select specific fields to fetch from the CategoryProduct
     * 
    **/
    select?: CategoryProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryProductInclude | null
  }



  /**
   * Model ProductOption
   */


  export type AggregateProductOption = {
    _count: ProductOptionCountAggregateOutputType | null
    _avg: ProductOptionAvgAggregateOutputType | null
    _sum: ProductOptionSumAggregateOutputType | null
    _min: ProductOptionMinAggregateOutputType | null
    _max: ProductOptionMaxAggregateOutputType | null
  }

  export type ProductOptionAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type ProductOptionSumAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type ProductOptionMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
  }

  export type ProductOptionMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
  }

  export type ProductOptionCountAggregateOutputType = {
    id: number
    product_id: number
    name: number
    options: number
    _all: number
  }


  export type ProductOptionAvgAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type ProductOptionSumAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type ProductOptionMinAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
  }

  export type ProductOptionMaxAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
  }

  export type ProductOptionCountAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    options?: true
    _all?: true
  }

  export type ProductOptionAggregateArgs = {
    /**
     * Filter which ProductOption to aggregate.
     * 
    **/
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOptionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOptions
    **/
    _count?: true | ProductOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOptionMaxAggregateInputType
  }

  export type GetProductOptionAggregateType<T extends ProductOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOption[P]>
      : GetScalarType<T[P], AggregateProductOption[P]>
  }




  export type ProductOptionGroupByArgs = {
    where?: ProductOptionWhereInput
    orderBy?: Enumerable<ProductOptionOrderByWithAggregationInput>
    by: Array<ProductOptionScalarFieldEnum>
    having?: ProductOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOptionCountAggregateInputType | true
    _avg?: ProductOptionAvgAggregateInputType
    _sum?: ProductOptionSumAggregateInputType
    _min?: ProductOptionMinAggregateInputType
    _max?: ProductOptionMaxAggregateInputType
  }


  export type ProductOptionGroupByOutputType = {
    id: number
    product_id: number
    name: string
    options: string[]
    _count: ProductOptionCountAggregateOutputType | null
    _avg: ProductOptionAvgAggregateOutputType | null
    _sum: ProductOptionSumAggregateOutputType | null
    _min: ProductOptionMinAggregateOutputType | null
    _max: ProductOptionMaxAggregateOutputType | null
  }

  type GetProductOptionGroupByPayload<T extends ProductOptionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOptionGroupByOutputType[P]>
        }
      >
    >


  export type ProductOptionSelect = {
    id?: boolean
    product_id?: boolean
    name?: boolean
    options?: boolean
    product?: boolean | ProductArgs
  }

  export type ProductOptionInclude = {
    product?: boolean | ProductArgs
  }

  export type ProductOptionGetPayload<
    S extends boolean | null | undefined | ProductOptionArgs,
    U = keyof S
      > = S extends true
        ? ProductOption
    : S extends undefined
    ? never
    : S extends ProductOptionArgs | ProductOptionFindManyArgs
    ?'include' extends U
    ? ProductOption  & {
    [P in TrueKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof ProductOption ? ProductOption[P] : never
  } 
    : ProductOption
  : ProductOption


  type ProductOptionCountArgs = Merge<
    Omit<ProductOptionFindManyArgs, 'select' | 'include'> & {
      select?: ProductOptionCountAggregateInputType | true
    }
  >

  export interface ProductOptionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ProductOption that matches the filter.
     * @param {ProductOptionFindUniqueArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductOptionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductOptionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductOption'> extends True ? CheckSelect<T, Prisma__ProductOptionClient<ProductOption>, Prisma__ProductOptionClient<ProductOptionGetPayload<T>>> : CheckSelect<T, Prisma__ProductOptionClient<ProductOption | null >, Prisma__ProductOptionClient<ProductOptionGetPayload<T> | null >>

    /**
     * Find the first ProductOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionFindFirstArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductOptionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductOptionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductOption'> extends True ? CheckSelect<T, Prisma__ProductOptionClient<ProductOption>, Prisma__ProductOptionClient<ProductOptionGetPayload<T>>> : CheckSelect<T, Prisma__ProductOptionClient<ProductOption | null >, Prisma__ProductOptionClient<ProductOptionGetPayload<T> | null >>

    /**
     * Find zero or more ProductOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOptions
     * const productOptions = await prisma.productOption.findMany()
     * 
     * // Get first 10 ProductOptions
     * const productOptions = await prisma.productOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productOptionWithIdOnly = await prisma.productOption.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductOptionFindManyArgs>(
      args?: SelectSubset<T, ProductOptionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProductOption>>, PrismaPromise<Array<ProductOptionGetPayload<T>>>>

    /**
     * Create a ProductOption.
     * @param {ProductOptionCreateArgs} args - Arguments to create a ProductOption.
     * @example
     * // Create one ProductOption
     * const ProductOption = await prisma.productOption.create({
     *   data: {
     *     // ... data to create a ProductOption
     *   }
     * })
     * 
    **/
    create<T extends ProductOptionCreateArgs>(
      args: SelectSubset<T, ProductOptionCreateArgs>
    ): CheckSelect<T, Prisma__ProductOptionClient<ProductOption>, Prisma__ProductOptionClient<ProductOptionGetPayload<T>>>

    /**
     * Create many ProductOptions.
     *     @param {ProductOptionCreateManyArgs} args - Arguments to create many ProductOptions.
     *     @example
     *     // Create many ProductOptions
     *     const productOption = await prisma.productOption.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductOptionCreateManyArgs>(
      args?: SelectSubset<T, ProductOptionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductOption.
     * @param {ProductOptionDeleteArgs} args - Arguments to delete one ProductOption.
     * @example
     * // Delete one ProductOption
     * const ProductOption = await prisma.productOption.delete({
     *   where: {
     *     // ... filter to delete one ProductOption
     *   }
     * })
     * 
    **/
    delete<T extends ProductOptionDeleteArgs>(
      args: SelectSubset<T, ProductOptionDeleteArgs>
    ): CheckSelect<T, Prisma__ProductOptionClient<ProductOption>, Prisma__ProductOptionClient<ProductOptionGetPayload<T>>>

    /**
     * Update one ProductOption.
     * @param {ProductOptionUpdateArgs} args - Arguments to update one ProductOption.
     * @example
     * // Update one ProductOption
     * const productOption = await prisma.productOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductOptionUpdateArgs>(
      args: SelectSubset<T, ProductOptionUpdateArgs>
    ): CheckSelect<T, Prisma__ProductOptionClient<ProductOption>, Prisma__ProductOptionClient<ProductOptionGetPayload<T>>>

    /**
     * Delete zero or more ProductOptions.
     * @param {ProductOptionDeleteManyArgs} args - Arguments to filter ProductOptions to delete.
     * @example
     * // Delete a few ProductOptions
     * const { count } = await prisma.productOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductOptionDeleteManyArgs>(
      args?: SelectSubset<T, ProductOptionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOptions
     * const productOption = await prisma.productOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductOptionUpdateManyArgs>(
      args: SelectSubset<T, ProductOptionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductOption.
     * @param {ProductOptionUpsertArgs} args - Arguments to update or create a ProductOption.
     * @example
     * // Update or create a ProductOption
     * const productOption = await prisma.productOption.upsert({
     *   create: {
     *     // ... data to create a ProductOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOption we want to update
     *   }
     * })
    **/
    upsert<T extends ProductOptionUpsertArgs>(
      args: SelectSubset<T, ProductOptionUpsertArgs>
    ): CheckSelect<T, Prisma__ProductOptionClient<ProductOption>, Prisma__ProductOptionClient<ProductOptionGetPayload<T>>>

    /**
     * Find one ProductOption that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProductOptionFindUniqueOrThrowArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductOptionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductOptionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductOptionClient<ProductOption>, Prisma__ProductOptionClient<ProductOptionGetPayload<T>>>

    /**
     * Find the first ProductOption that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionFindFirstOrThrowArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductOptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductOptionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProductOptionClient<ProductOption>, Prisma__ProductOptionClient<ProductOptionGetPayload<T>>>

    /**
     * Count the number of ProductOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionCountArgs} args - Arguments to filter ProductOptions to count.
     * @example
     * // Count the number of ProductOptions
     * const count = await prisma.productOption.count({
     *   where: {
     *     // ... the filter for the ProductOptions we want to count
     *   }
     * })
    **/
    count<T extends ProductOptionCountArgs>(
      args?: Subset<T, ProductOptionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductOptionAggregateArgs>(args: Subset<T, ProductOptionAggregateArgs>): PrismaPromise<GetProductOptionAggregateType<T>>

    /**
     * Group by ProductOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOptionGroupByArgs['orderBy'] }
        : { orderBy?: ProductOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOptionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductOptionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ProductOption base type for findUnique actions
   */
  export type ProductOptionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductOption
     * 
    **/
    select?: ProductOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOptionInclude | null
    /**
     * Filter, which ProductOption to fetch.
     * 
    **/
    where: ProductOptionWhereUniqueInput
  }

  /**
   * ProductOption: findUnique
   */
  export interface ProductOptionFindUniqueArgs extends ProductOptionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductOption base type for findFirst actions
   */
  export type ProductOptionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductOption
     * 
    **/
    select?: ProductOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOptionInclude | null
    /**
     * Filter, which ProductOption to fetch.
     * 
    **/
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOptionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOptions.
     * 
    **/
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOptions.
     * 
    **/
    distinct?: Enumerable<ProductOptionScalarFieldEnum>
  }

  /**
   * ProductOption: findFirst
   */
  export interface ProductOptionFindFirstArgs extends ProductOptionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductOption findMany
   */
  export type ProductOptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductOption
     * 
    **/
    select?: ProductOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOptionInclude | null
    /**
     * Filter, which ProductOptions to fetch.
     * 
    **/
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOptionOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOptions.
     * 
    **/
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductOptionScalarFieldEnum>
  }


  /**
   * ProductOption create
   */
  export type ProductOptionCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductOption
     * 
    **/
    select?: ProductOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOptionInclude | null
    /**
     * The data needed to create a ProductOption.
     * 
    **/
    data: XOR<ProductOptionCreateInput, ProductOptionUncheckedCreateInput>
  }


  /**
   * ProductOption createMany
   */
  export type ProductOptionCreateManyArgs = {
    /**
     * The data used to create many ProductOptions.
     * 
    **/
    data: Enumerable<ProductOptionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProductOption update
   */
  export type ProductOptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductOption
     * 
    **/
    select?: ProductOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOptionInclude | null
    /**
     * The data needed to update a ProductOption.
     * 
    **/
    data: XOR<ProductOptionUpdateInput, ProductOptionUncheckedUpdateInput>
    /**
     * Choose, which ProductOption to update.
     * 
    **/
    where: ProductOptionWhereUniqueInput
  }


  /**
   * ProductOption updateMany
   */
  export type ProductOptionUpdateManyArgs = {
    /**
     * The data used to update ProductOptions.
     * 
    **/
    data: XOR<ProductOptionUpdateManyMutationInput, ProductOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductOptions to update
     * 
    **/
    where?: ProductOptionWhereInput
  }


  /**
   * ProductOption upsert
   */
  export type ProductOptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductOption
     * 
    **/
    select?: ProductOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOptionInclude | null
    /**
     * The filter to search for the ProductOption to update in case it exists.
     * 
    **/
    where: ProductOptionWhereUniqueInput
    /**
     * In case the ProductOption found by the `where` argument doesn't exist, create a new ProductOption with this data.
     * 
    **/
    create: XOR<ProductOptionCreateInput, ProductOptionUncheckedCreateInput>
    /**
     * In case the ProductOption was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductOptionUpdateInput, ProductOptionUncheckedUpdateInput>
  }


  /**
   * ProductOption delete
   */
  export type ProductOptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductOption
     * 
    **/
    select?: ProductOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOptionInclude | null
    /**
     * Filter which ProductOption to delete.
     * 
    **/
    where: ProductOptionWhereUniqueInput
  }


  /**
   * ProductOption deleteMany
   */
  export type ProductOptionDeleteManyArgs = {
    /**
     * Filter which ProductOptions to delete
     * 
    **/
    where?: ProductOptionWhereInput
  }


  /**
   * ProductOption: findUniqueOrThrow
   */
  export type ProductOptionFindUniqueOrThrowArgs = ProductOptionFindUniqueArgsBase
      

  /**
   * ProductOption: findFirstOrThrow
   */
  export type ProductOptionFindFirstOrThrowArgs = ProductOptionFindFirstArgsBase
      

  /**
   * ProductOption without action
   */
  export type ProductOptionArgs = {
    /**
     * Select specific fields to fetch from the ProductOption
     * 
    **/
    select?: ProductOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductOptionInclude | null
  }



  /**
   * Model Sku
   */


  export type AggregateSku = {
    _count: SkuCountAggregateOutputType | null
    _avg: SkuAvgAggregateOutputType | null
    _sum: SkuSumAggregateOutputType | null
    _min: SkuMinAggregateOutputType | null
    _max: SkuMaxAggregateOutputType | null
  }

  export type SkuAvgAggregateOutputType = {
    stock: number | null
    variation_id: number | null
    product_id: number | null
  }

  export type SkuSumAggregateOutputType = {
    stock: number | null
    variation_id: number | null
    product_id: number | null
  }

  export type SkuMinAggregateOutputType = {
    id: string | null
    stock: number | null
    variation_id: number | null
    product_id: number | null
    last_restock: Date | null
  }

  export type SkuMaxAggregateOutputType = {
    id: string | null
    stock: number | null
    variation_id: number | null
    product_id: number | null
    last_restock: Date | null
  }

  export type SkuCountAggregateOutputType = {
    id: number
    stock: number
    variation_id: number
    product_id: number
    last_restock: number
    _all: number
  }


  export type SkuAvgAggregateInputType = {
    stock?: true
    variation_id?: true
    product_id?: true
  }

  export type SkuSumAggregateInputType = {
    stock?: true
    variation_id?: true
    product_id?: true
  }

  export type SkuMinAggregateInputType = {
    id?: true
    stock?: true
    variation_id?: true
    product_id?: true
    last_restock?: true
  }

  export type SkuMaxAggregateInputType = {
    id?: true
    stock?: true
    variation_id?: true
    product_id?: true
    last_restock?: true
  }

  export type SkuCountAggregateInputType = {
    id?: true
    stock?: true
    variation_id?: true
    product_id?: true
    last_restock?: true
    _all?: true
  }

  export type SkuAggregateArgs = {
    /**
     * Filter which Sku to aggregate.
     * 
    **/
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     * 
    **/
    orderBy?: Enumerable<SkuOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skus
    **/
    _count?: true | SkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkuMaxAggregateInputType
  }

  export type GetSkuAggregateType<T extends SkuAggregateArgs> = {
        [P in keyof T & keyof AggregateSku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSku[P]>
      : GetScalarType<T[P], AggregateSku[P]>
  }




  export type SkuGroupByArgs = {
    where?: SkuWhereInput
    orderBy?: Enumerable<SkuOrderByWithAggregationInput>
    by: Array<SkuScalarFieldEnum>
    having?: SkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkuCountAggregateInputType | true
    _avg?: SkuAvgAggregateInputType
    _sum?: SkuSumAggregateInputType
    _min?: SkuMinAggregateInputType
    _max?: SkuMaxAggregateInputType
  }


  export type SkuGroupByOutputType = {
    id: string
    stock: number
    variation_id: number
    product_id: number
    last_restock: Date | null
    _count: SkuCountAggregateOutputType | null
    _avg: SkuAvgAggregateOutputType | null
    _sum: SkuSumAggregateOutputType | null
    _min: SkuMinAggregateOutputType | null
    _max: SkuMaxAggregateOutputType | null
  }

  type GetSkuGroupByPayload<T extends SkuGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SkuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkuGroupByOutputType[P]>
            : GetScalarType<T[P], SkuGroupByOutputType[P]>
        }
      >
    >


  export type SkuSelect = {
    id?: boolean
    stock?: boolean
    variation_id?: boolean
    product_id?: boolean
    last_restock?: boolean
    variation?: boolean | VariationArgs
    product?: boolean | ProductArgs
  }

  export type SkuInclude = {
    variation?: boolean | VariationArgs
    product?: boolean | ProductArgs
  }

  export type SkuGetPayload<
    S extends boolean | null | undefined | SkuArgs,
    U = keyof S
      > = S extends true
        ? Sku
    : S extends undefined
    ? never
    : S extends SkuArgs | SkuFindManyArgs
    ?'include' extends U
    ? Sku  & {
    [P in TrueKeys<S['include']>]:
        P extends 'variation' ? VariationGetPayload<S['include'][P]> :
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'variation' ? VariationGetPayload<S['select'][P]> :
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof Sku ? Sku[P] : never
  } 
    : Sku
  : Sku


  type SkuCountArgs = Merge<
    Omit<SkuFindManyArgs, 'select' | 'include'> & {
      select?: SkuCountAggregateInputType | true
    }
  >

  export interface SkuDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Sku that matches the filter.
     * @param {SkuFindUniqueArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SkuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sku'> extends True ? CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>> : CheckSelect<T, Prisma__SkuClient<Sku | null >, Prisma__SkuClient<SkuGetPayload<T> | null >>

    /**
     * Find the first Sku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindFirstArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SkuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sku'> extends True ? CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>> : CheckSelect<T, Prisma__SkuClient<Sku | null >, Prisma__SkuClient<SkuGetPayload<T> | null >>

    /**
     * Find zero or more Skus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skus
     * const skus = await prisma.sku.findMany()
     * 
     * // Get first 10 Skus
     * const skus = await prisma.sku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skuWithIdOnly = await prisma.sku.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SkuFindManyArgs>(
      args?: SelectSubset<T, SkuFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Sku>>, PrismaPromise<Array<SkuGetPayload<T>>>>

    /**
     * Create a Sku.
     * @param {SkuCreateArgs} args - Arguments to create a Sku.
     * @example
     * // Create one Sku
     * const Sku = await prisma.sku.create({
     *   data: {
     *     // ... data to create a Sku
     *   }
     * })
     * 
    **/
    create<T extends SkuCreateArgs>(
      args: SelectSubset<T, SkuCreateArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Create many Skus.
     *     @param {SkuCreateManyArgs} args - Arguments to create many Skus.
     *     @example
     *     // Create many Skus
     *     const sku = await prisma.sku.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkuCreateManyArgs>(
      args?: SelectSubset<T, SkuCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Sku.
     * @param {SkuDeleteArgs} args - Arguments to delete one Sku.
     * @example
     * // Delete one Sku
     * const Sku = await prisma.sku.delete({
     *   where: {
     *     // ... filter to delete one Sku
     *   }
     * })
     * 
    **/
    delete<T extends SkuDeleteArgs>(
      args: SelectSubset<T, SkuDeleteArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Update one Sku.
     * @param {SkuUpdateArgs} args - Arguments to update one Sku.
     * @example
     * // Update one Sku
     * const sku = await prisma.sku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkuUpdateArgs>(
      args: SelectSubset<T, SkuUpdateArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Delete zero or more Skus.
     * @param {SkuDeleteManyArgs} args - Arguments to filter Skus to delete.
     * @example
     * // Delete a few Skus
     * const { count } = await prisma.sku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkuDeleteManyArgs>(
      args?: SelectSubset<T, SkuDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skus
     * const sku = await prisma.sku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkuUpdateManyArgs>(
      args: SelectSubset<T, SkuUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Sku.
     * @param {SkuUpsertArgs} args - Arguments to update or create a Sku.
     * @example
     * // Update or create a Sku
     * const sku = await prisma.sku.upsert({
     *   create: {
     *     // ... data to create a Sku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sku we want to update
     *   }
     * })
    **/
    upsert<T extends SkuUpsertArgs>(
      args: SelectSubset<T, SkuUpsertArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Find one Sku that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SkuFindUniqueOrThrowArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SkuFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SkuFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Find the first Sku that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuFindFirstOrThrowArgs} args - Arguments to find a Sku
     * @example
     * // Get one Sku
     * const sku = await prisma.sku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SkuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SkuFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SkuClient<Sku>, Prisma__SkuClient<SkuGetPayload<T>>>

    /**
     * Count the number of Skus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuCountArgs} args - Arguments to filter Skus to count.
     * @example
     * // Count the number of Skus
     * const count = await prisma.sku.count({
     *   where: {
     *     // ... the filter for the Skus we want to count
     *   }
     * })
    **/
    count<T extends SkuCountArgs>(
      args?: Subset<T, SkuCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkuAggregateArgs>(args: Subset<T, SkuAggregateArgs>): PrismaPromise<GetSkuAggregateType<T>>

    /**
     * Group by Sku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkuGroupByArgs['orderBy'] }
        : { orderBy?: SkuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkuGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SkuClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    variation<T extends VariationArgs = {}>(args?: Subset<T, VariationArgs>): CheckSelect<T, Prisma__VariationClient<Variation | null >, Prisma__VariationClient<VariationGetPayload<T> | null >>;

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Sku base type for findUnique actions
   */
  export type SkuFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * Filter, which Sku to fetch.
     * 
    **/
    where: SkuWhereUniqueInput
  }

  /**
   * Sku: findUnique
   */
  export interface SkuFindUniqueArgs extends SkuFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sku base type for findFirst actions
   */
  export type SkuFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * Filter, which Sku to fetch.
     * 
    **/
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     * 
    **/
    orderBy?: Enumerable<SkuOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skus.
     * 
    **/
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skus.
     * 
    **/
    distinct?: Enumerable<SkuScalarFieldEnum>
  }

  /**
   * Sku: findFirst
   */
  export interface SkuFindFirstArgs extends SkuFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sku findMany
   */
  export type SkuFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * Filter, which Skus to fetch.
     * 
    **/
    where?: SkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skus to fetch.
     * 
    **/
    orderBy?: Enumerable<SkuOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skus.
     * 
    **/
    cursor?: SkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skus from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skus.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SkuScalarFieldEnum>
  }


  /**
   * Sku create
   */
  export type SkuCreateArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * The data needed to create a Sku.
     * 
    **/
    data: XOR<SkuCreateInput, SkuUncheckedCreateInput>
  }


  /**
   * Sku createMany
   */
  export type SkuCreateManyArgs = {
    /**
     * The data used to create many Skus.
     * 
    **/
    data: Enumerable<SkuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Sku update
   */
  export type SkuUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * The data needed to update a Sku.
     * 
    **/
    data: XOR<SkuUpdateInput, SkuUncheckedUpdateInput>
    /**
     * Choose, which Sku to update.
     * 
    **/
    where: SkuWhereUniqueInput
  }


  /**
   * Sku updateMany
   */
  export type SkuUpdateManyArgs = {
    /**
     * The data used to update Skus.
     * 
    **/
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyInput>
    /**
     * Filter which Skus to update
     * 
    **/
    where?: SkuWhereInput
  }


  /**
   * Sku upsert
   */
  export type SkuUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * The filter to search for the Sku to update in case it exists.
     * 
    **/
    where: SkuWhereUniqueInput
    /**
     * In case the Sku found by the `where` argument doesn't exist, create a new Sku with this data.
     * 
    **/
    create: XOR<SkuCreateInput, SkuUncheckedCreateInput>
    /**
     * In case the Sku was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SkuUpdateInput, SkuUncheckedUpdateInput>
  }


  /**
   * Sku delete
   */
  export type SkuDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
    /**
     * Filter which Sku to delete.
     * 
    **/
    where: SkuWhereUniqueInput
  }


  /**
   * Sku deleteMany
   */
  export type SkuDeleteManyArgs = {
    /**
     * Filter which Skus to delete
     * 
    **/
    where?: SkuWhereInput
  }


  /**
   * Sku: findUniqueOrThrow
   */
  export type SkuFindUniqueOrThrowArgs = SkuFindUniqueArgsBase
      

  /**
   * Sku: findFirstOrThrow
   */
  export type SkuFindFirstOrThrowArgs = SkuFindFirstArgsBase
      

  /**
   * Sku without action
   */
  export type SkuArgs = {
    /**
     * Select specific fields to fetch from the Sku
     * 
    **/
    select?: SkuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkuInclude | null
  }



  /**
   * Model Variation
   */


  export type AggregateVariation = {
    _count: VariationCountAggregateOutputType | null
    _avg: VariationAvgAggregateOutputType | null
    _sum: VariationSumAggregateOutputType | null
    _min: VariationMinAggregateOutputType | null
    _max: VariationMaxAggregateOutputType | null
  }

  export type VariationAvgAggregateOutputType = {
    id: number | null
    price: number | null
    product_id: number | null
  }

  export type VariationSumAggregateOutputType = {
    id: number | null
    price: number | null
    product_id: number | null
  }

  export type VariationMinAggregateOutputType = {
    id: number | null
    price: number | null
    product_id: number | null
    is_default: boolean | null
  }

  export type VariationMaxAggregateOutputType = {
    id: number | null
    price: number | null
    product_id: number | null
    is_default: boolean | null
  }

  export type VariationCountAggregateOutputType = {
    id: number
    names: number
    values: number
    price: number
    product_id: number
    is_default: number
    _all: number
  }


  export type VariationAvgAggregateInputType = {
    id?: true
    price?: true
    product_id?: true
  }

  export type VariationSumAggregateInputType = {
    id?: true
    price?: true
    product_id?: true
  }

  export type VariationMinAggregateInputType = {
    id?: true
    price?: true
    product_id?: true
    is_default?: true
  }

  export type VariationMaxAggregateInputType = {
    id?: true
    price?: true
    product_id?: true
    is_default?: true
  }

  export type VariationCountAggregateInputType = {
    id?: true
    names?: true
    values?: true
    price?: true
    product_id?: true
    is_default?: true
    _all?: true
  }

  export type VariationAggregateArgs = {
    /**
     * Filter which Variation to aggregate.
     * 
    **/
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     * 
    **/
    orderBy?: Enumerable<VariationOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variations
    **/
    _count?: true | VariationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariationMaxAggregateInputType
  }

  export type GetVariationAggregateType<T extends VariationAggregateArgs> = {
        [P in keyof T & keyof AggregateVariation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariation[P]>
      : GetScalarType<T[P], AggregateVariation[P]>
  }




  export type VariationGroupByArgs = {
    where?: VariationWhereInput
    orderBy?: Enumerable<VariationOrderByWithAggregationInput>
    by: Array<VariationScalarFieldEnum>
    having?: VariationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariationCountAggregateInputType | true
    _avg?: VariationAvgAggregateInputType
    _sum?: VariationSumAggregateInputType
    _min?: VariationMinAggregateInputType
    _max?: VariationMaxAggregateInputType
  }


  export type VariationGroupByOutputType = {
    id: number
    names: string[]
    values: string[]
    price: number
    product_id: number
    is_default: boolean
    _count: VariationCountAggregateOutputType | null
    _avg: VariationAvgAggregateOutputType | null
    _sum: VariationSumAggregateOutputType | null
    _min: VariationMinAggregateOutputType | null
    _max: VariationMaxAggregateOutputType | null
  }

  type GetVariationGroupByPayload<T extends VariationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VariationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariationGroupByOutputType[P]>
            : GetScalarType<T[P], VariationGroupByOutputType[P]>
        }
      >
    >


  export type VariationSelect = {
    id?: boolean
    names?: boolean
    values?: boolean
    price?: boolean
    product_id?: boolean
    is_default?: boolean
    sku?: boolean | SkuArgs
    product?: boolean | ProductArgs
    order_items?: boolean | OrderItemFindManyArgs
    _count?: boolean | VariationCountOutputTypeArgs
  }

  export type VariationInclude = {
    sku?: boolean | SkuArgs
    product?: boolean | ProductArgs
    order_items?: boolean | OrderItemFindManyArgs
    _count?: boolean | VariationCountOutputTypeArgs
  }

  export type VariationGetPayload<
    S extends boolean | null | undefined | VariationArgs,
    U = keyof S
      > = S extends true
        ? Variation
    : S extends undefined
    ? never
    : S extends VariationArgs | VariationFindManyArgs
    ?'include' extends U
    ? Variation  & {
    [P in TrueKeys<S['include']>]:
        P extends 'sku' ? SkuGetPayload<S['include'][P]> | null :
        P extends 'product' ? ProductGetPayload<S['include'][P]> :
        P extends 'order_items' ? Array < OrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? VariationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'sku' ? SkuGetPayload<S['select'][P]> | null :
        P extends 'product' ? ProductGetPayload<S['select'][P]> :
        P extends 'order_items' ? Array < OrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? VariationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Variation ? Variation[P] : never
  } 
    : Variation
  : Variation


  type VariationCountArgs = Merge<
    Omit<VariationFindManyArgs, 'select' | 'include'> & {
      select?: VariationCountAggregateInputType | true
    }
  >

  export interface VariationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Variation that matches the filter.
     * @param {VariationFindUniqueArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VariationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VariationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Variation'> extends True ? CheckSelect<T, Prisma__VariationClient<Variation>, Prisma__VariationClient<VariationGetPayload<T>>> : CheckSelect<T, Prisma__VariationClient<Variation | null >, Prisma__VariationClient<VariationGetPayload<T> | null >>

    /**
     * Find the first Variation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationFindFirstArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VariationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VariationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Variation'> extends True ? CheckSelect<T, Prisma__VariationClient<Variation>, Prisma__VariationClient<VariationGetPayload<T>>> : CheckSelect<T, Prisma__VariationClient<Variation | null >, Prisma__VariationClient<VariationGetPayload<T> | null >>

    /**
     * Find zero or more Variations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variations
     * const variations = await prisma.variation.findMany()
     * 
     * // Get first 10 Variations
     * const variations = await prisma.variation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variationWithIdOnly = await prisma.variation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VariationFindManyArgs>(
      args?: SelectSubset<T, VariationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Variation>>, PrismaPromise<Array<VariationGetPayload<T>>>>

    /**
     * Create a Variation.
     * @param {VariationCreateArgs} args - Arguments to create a Variation.
     * @example
     * // Create one Variation
     * const Variation = await prisma.variation.create({
     *   data: {
     *     // ... data to create a Variation
     *   }
     * })
     * 
    **/
    create<T extends VariationCreateArgs>(
      args: SelectSubset<T, VariationCreateArgs>
    ): CheckSelect<T, Prisma__VariationClient<Variation>, Prisma__VariationClient<VariationGetPayload<T>>>

    /**
     * Create many Variations.
     *     @param {VariationCreateManyArgs} args - Arguments to create many Variations.
     *     @example
     *     // Create many Variations
     *     const variation = await prisma.variation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VariationCreateManyArgs>(
      args?: SelectSubset<T, VariationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Variation.
     * @param {VariationDeleteArgs} args - Arguments to delete one Variation.
     * @example
     * // Delete one Variation
     * const Variation = await prisma.variation.delete({
     *   where: {
     *     // ... filter to delete one Variation
     *   }
     * })
     * 
    **/
    delete<T extends VariationDeleteArgs>(
      args: SelectSubset<T, VariationDeleteArgs>
    ): CheckSelect<T, Prisma__VariationClient<Variation>, Prisma__VariationClient<VariationGetPayload<T>>>

    /**
     * Update one Variation.
     * @param {VariationUpdateArgs} args - Arguments to update one Variation.
     * @example
     * // Update one Variation
     * const variation = await prisma.variation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VariationUpdateArgs>(
      args: SelectSubset<T, VariationUpdateArgs>
    ): CheckSelect<T, Prisma__VariationClient<Variation>, Prisma__VariationClient<VariationGetPayload<T>>>

    /**
     * Delete zero or more Variations.
     * @param {VariationDeleteManyArgs} args - Arguments to filter Variations to delete.
     * @example
     * // Delete a few Variations
     * const { count } = await prisma.variation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VariationDeleteManyArgs>(
      args?: SelectSubset<T, VariationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variations
     * const variation = await prisma.variation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VariationUpdateManyArgs>(
      args: SelectSubset<T, VariationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Variation.
     * @param {VariationUpsertArgs} args - Arguments to update or create a Variation.
     * @example
     * // Update or create a Variation
     * const variation = await prisma.variation.upsert({
     *   create: {
     *     // ... data to create a Variation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variation we want to update
     *   }
     * })
    **/
    upsert<T extends VariationUpsertArgs>(
      args: SelectSubset<T, VariationUpsertArgs>
    ): CheckSelect<T, Prisma__VariationClient<Variation>, Prisma__VariationClient<VariationGetPayload<T>>>

    /**
     * Find one Variation that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {VariationFindUniqueOrThrowArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VariationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VariationFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__VariationClient<Variation>, Prisma__VariationClient<VariationGetPayload<T>>>

    /**
     * Find the first Variation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationFindFirstOrThrowArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VariationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VariationFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__VariationClient<Variation>, Prisma__VariationClient<VariationGetPayload<T>>>

    /**
     * Count the number of Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationCountArgs} args - Arguments to filter Variations to count.
     * @example
     * // Count the number of Variations
     * const count = await prisma.variation.count({
     *   where: {
     *     // ... the filter for the Variations we want to count
     *   }
     * })
    **/
    count<T extends VariationCountArgs>(
      args?: Subset<T, VariationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariationAggregateArgs>(args: Subset<T, VariationAggregateArgs>): PrismaPromise<GetVariationAggregateType<T>>

    /**
     * Group by Variation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VariationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariationGroupByArgs['orderBy'] }
        : { orderBy?: VariationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VariationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VariationClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sku<T extends SkuArgs = {}>(args?: Subset<T, SkuArgs>): CheckSelect<T, Prisma__SkuClient<Sku | null >, Prisma__SkuClient<SkuGetPayload<T> | null >>;

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    order_items<T extends OrderItemFindManyArgs = {}>(args?: Subset<T, OrderItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<OrderItem>>, PrismaPromise<Array<OrderItemGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Variation base type for findUnique actions
   */
  export type VariationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Variation
     * 
    **/
    select?: VariationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VariationInclude | null
    /**
     * Filter, which Variation to fetch.
     * 
    **/
    where: VariationWhereUniqueInput
  }

  /**
   * Variation: findUnique
   */
  export interface VariationFindUniqueArgs extends VariationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Variation base type for findFirst actions
   */
  export type VariationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Variation
     * 
    **/
    select?: VariationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VariationInclude | null
    /**
     * Filter, which Variation to fetch.
     * 
    **/
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     * 
    **/
    orderBy?: Enumerable<VariationOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variations.
     * 
    **/
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variations.
     * 
    **/
    distinct?: Enumerable<VariationScalarFieldEnum>
  }

  /**
   * Variation: findFirst
   */
  export interface VariationFindFirstArgs extends VariationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Variation findMany
   */
  export type VariationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Variation
     * 
    **/
    select?: VariationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VariationInclude | null
    /**
     * Filter, which Variations to fetch.
     * 
    **/
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     * 
    **/
    orderBy?: Enumerable<VariationOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variations.
     * 
    **/
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VariationScalarFieldEnum>
  }


  /**
   * Variation create
   */
  export type VariationCreateArgs = {
    /**
     * Select specific fields to fetch from the Variation
     * 
    **/
    select?: VariationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VariationInclude | null
    /**
     * The data needed to create a Variation.
     * 
    **/
    data: XOR<VariationCreateInput, VariationUncheckedCreateInput>
  }


  /**
   * Variation createMany
   */
  export type VariationCreateManyArgs = {
    /**
     * The data used to create many Variations.
     * 
    **/
    data: Enumerable<VariationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Variation update
   */
  export type VariationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Variation
     * 
    **/
    select?: VariationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VariationInclude | null
    /**
     * The data needed to update a Variation.
     * 
    **/
    data: XOR<VariationUpdateInput, VariationUncheckedUpdateInput>
    /**
     * Choose, which Variation to update.
     * 
    **/
    where: VariationWhereUniqueInput
  }


  /**
   * Variation updateMany
   */
  export type VariationUpdateManyArgs = {
    /**
     * The data used to update Variations.
     * 
    **/
    data: XOR<VariationUpdateManyMutationInput, VariationUncheckedUpdateManyInput>
    /**
     * Filter which Variations to update
     * 
    **/
    where?: VariationWhereInput
  }


  /**
   * Variation upsert
   */
  export type VariationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Variation
     * 
    **/
    select?: VariationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VariationInclude | null
    /**
     * The filter to search for the Variation to update in case it exists.
     * 
    **/
    where: VariationWhereUniqueInput
    /**
     * In case the Variation found by the `where` argument doesn't exist, create a new Variation with this data.
     * 
    **/
    create: XOR<VariationCreateInput, VariationUncheckedCreateInput>
    /**
     * In case the Variation was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VariationUpdateInput, VariationUncheckedUpdateInput>
  }


  /**
   * Variation delete
   */
  export type VariationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Variation
     * 
    **/
    select?: VariationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VariationInclude | null
    /**
     * Filter which Variation to delete.
     * 
    **/
    where: VariationWhereUniqueInput
  }


  /**
   * Variation deleteMany
   */
  export type VariationDeleteManyArgs = {
    /**
     * Filter which Variations to delete
     * 
    **/
    where?: VariationWhereInput
  }


  /**
   * Variation: findUniqueOrThrow
   */
  export type VariationFindUniqueOrThrowArgs = VariationFindUniqueArgsBase
      

  /**
   * Variation: findFirstOrThrow
   */
  export type VariationFindFirstOrThrowArgs = VariationFindFirstArgsBase
      

  /**
   * Variation without action
   */
  export type VariationArgs = {
    /**
     * Select specific fields to fetch from the Variation
     * 
    **/
    select?: VariationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VariationInclude | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    sub_total: number | null
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    sub_total: number | null
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    status: StatusOrder | null
    sub_total: number | null
    total: number | null
    created: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    status: StatusOrder | null
    sub_total: number | null
    total: number | null
    created: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    customer_id: number
    status: number
    sub_total: number
    total: number
    created: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    customer_id?: true
    sub_total?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    customer_id?: true
    sub_total?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    customer_id?: true
    status?: true
    sub_total?: true
    total?: true
    created?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    customer_id?: true
    status?: true
    sub_total?: true
    total?: true
    created?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    customer_id?: true
    status?: true
    sub_total?: true
    total?: true
    created?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which Order to aggregate.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithAggregationInput>
    by: Array<OrderScalarFieldEnum>
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: number
    customer_id: number
    status: StatusOrder
    sub_total: number
    total: number
    created: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect = {
    id?: boolean
    customer_id?: boolean
    status?: boolean
    items?: boolean | OrderItemFindManyArgs
    sub_total?: boolean
    total?: boolean
    customer?: boolean | CustomerArgs
    created?: boolean
    _count?: boolean | OrderCountOutputTypeArgs
  }

  export type OrderInclude = {
    items?: boolean | OrderItemFindManyArgs
    customer?: boolean | CustomerArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }

  export type OrderGetPayload<
    S extends boolean | null | undefined | OrderArgs,
    U = keyof S
      > = S extends true
        ? Order
    : S extends undefined
    ? never
    : S extends OrderArgs | OrderFindManyArgs
    ?'include' extends U
    ? Order  & {
    [P in TrueKeys<S['include']>]:
        P extends 'items' ? Array < OrderItemGetPayload<S['include'][P]>>  :
        P extends 'customer' ? CustomerGetPayload<S['include'][P]> :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'items' ? Array < OrderItemGetPayload<S['select'][P]>>  :
        P extends 'customer' ? CustomerGetPayload<S['select'][P]> :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Order ? Order[P] : never
  } 
    : Order
  : Order


  type OrderCountArgs = Merge<
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }
  >

  export interface OrderDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>> : CheckSelect<T, Prisma__OrderClient<Order | null >, Prisma__OrderClient<OrderGetPayload<T> | null >>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>> : CheckSelect<T, Prisma__OrderClient<Order | null >, Prisma__OrderClient<OrderGetPayload<T> | null >>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Order>>, PrismaPromise<Array<OrderGetPayload<T>>>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Find one Order that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Find the first Order that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__OrderClient<Order>, Prisma__OrderClient<OrderGetPayload<T>>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    items<T extends OrderItemFindManyArgs = {}>(args?: Subset<T, OrderItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<OrderItem>>, PrismaPromise<Array<OrderItemGetPayload<T>>>>;

    customer<T extends CustomerArgs = {}>(args?: Subset<T, CustomerArgs>): CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Order base type for findUnique actions
   */
  export type OrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where: OrderWhereUniqueInput
  }

  /**
   * Order: findUnique
   */
  export interface OrderFindUniqueArgs extends OrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order base type for findFirst actions
   */
  export type OrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrderScalarFieldEnum>
  }

  /**
   * Order: findFirst
   */
  export interface OrderFindFirstArgs extends OrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findMany
   */
  export type OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to create a Order.
     * 
    **/
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs = {
    /**
     * The data used to create many Orders.
     * 
    **/
    data: Enumerable<OrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to update a Order.
     * 
    **/
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs = {
    /**
     * The data used to update Orders.
     * 
    **/
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     * 
    **/
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The filter to search for the Order to update in case it exists.
     * 
    **/
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     * 
    **/
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter which Order to delete.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     * 
    **/
    where?: OrderWhereInput
  }


  /**
   * Order: findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs = OrderFindUniqueArgsBase
      

  /**
   * Order: findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs = OrderFindFirstArgsBase
      

  /**
   * Order without action
   */
  export type OrderArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
  }



  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    phone: string | null
    address: string | null
    created: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    address: string | null
    created: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    phone: number
    address: number
    created: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    phone?: true
    address?: true
    created?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    phone?: true
    address?: true
    created?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    phone?: true
    address?: true
    created?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: Array<CustomerScalarFieldEnum>
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    id: number
    phone: string
    address: string
    created: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    id?: boolean
    phone?: boolean
    address?: boolean
    orders?: boolean | OrderFindManyArgs
    created?: boolean
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerInclude = {
    orders?: boolean | OrderFindManyArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerGetPayload<
    S extends boolean | null | undefined | CustomerArgs,
    U = keyof S
      > = S extends true
        ? Customer
    : S extends undefined
    ? never
    : S extends CustomerArgs | CustomerFindManyArgs
    ?'include' extends U
    ? Customer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'orders' ? Array < OrderGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'orders' ? Array < OrderGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Customer ? Customer[P] : never
  } 
    : Customer
  : Customer


  type CustomerCountArgs = Merge<
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }
  >

  export interface CustomerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>> : CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>> : CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Customer>>, PrismaPromise<Array<CustomerGetPayload<T>>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Find one Customer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Find the first Customer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    orders<T extends OrderFindManyArgs = {}>(args?: Subset<T, OrderFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Order>>, PrismaPromise<Array<OrderGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Customer base type for findUnique actions
   */
  export type CustomerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer: findUnique
   */
  export interface CustomerFindUniqueArgs extends CustomerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer base type for findFirst actions
   */
  export type CustomerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     * 
    **/
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer: findFirst
   */
  export interface CustomerFindFirstArgs extends CustomerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     * 
    **/
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs = {
    /**
     * The data used to create many Customers.
     * 
    **/
    data: Enumerable<CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     * 
    **/
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    /**
     * The data used to update Customers.
     * 
    **/
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     * 
    **/
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     * 
    **/
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     * 
    **/
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    /**
     * Filter which Customers to delete
     * 
    **/
    where?: CustomerWhereInput
  }


  /**
   * Customer: findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs = CustomerFindUniqueArgsBase
      

  /**
   * Customer: findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs = CustomerFindFirstArgsBase
      

  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
  }



  /**
   * Model OrderItem
   */


  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    sku_id: number | null
    variation_id: number | null
    count: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    sku_id: number | null
    variation_id: number | null
    count: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    sku_id: number | null
    variation_id: number | null
    count: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    order_id: number | null
    product_id: number | null
    sku_id: number | null
    variation_id: number | null
    count: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    order_id: number
    product_id: number
    sku_id: number
    variation_id: number
    count: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    order_id?: true
    product_id?: true
    sku_id?: true
    variation_id?: true
    count?: true
  }

  export type OrderItemSumAggregateInputType = {
    order_id?: true
    product_id?: true
    sku_id?: true
    variation_id?: true
    count?: true
  }

  export type OrderItemMinAggregateInputType = {
    order_id?: true
    product_id?: true
    sku_id?: true
    variation_id?: true
    count?: true
  }

  export type OrderItemMaxAggregateInputType = {
    order_id?: true
    product_id?: true
    sku_id?: true
    variation_id?: true
    count?: true
  }

  export type OrderItemCountAggregateInputType = {
    order_id?: true
    product_id?: true
    sku_id?: true
    variation_id?: true
    count?: true
    _all?: true
  }

  export type OrderItemAggregateArgs = {
    /**
     * Filter which OrderItem to aggregate.
     * 
    **/
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderItemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs = {
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithAggregationInput>
    by: Array<OrderItemScalarFieldEnum>
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }


  export type OrderItemGroupByOutputType = {
    order_id: number
    product_id: number
    sku_id: number
    variation_id: number
    count: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect = {
    order_id?: boolean
    product_id?: boolean
    sku_id?: boolean
    variation_id?: boolean
    count?: boolean
    order?: boolean | OrderArgs
    product?: boolean | ProductArgs
    variation?: boolean | VariationArgs
  }

  export type OrderItemInclude = {
    order?: boolean | OrderArgs
    product?: boolean | ProductArgs
    variation?: boolean | VariationArgs
  }

  export type OrderItemGetPayload<
    S extends boolean | null | undefined | OrderItemArgs,
    U = keyof S
      > = S extends true
        ? OrderItem
    : S extends undefined
    ? never
    : S extends OrderItemArgs | OrderItemFindManyArgs
    ?'include' extends U
    ? OrderItem  & {
    [P in TrueKeys<S['include']>]:
        P extends 'order' ? OrderGetPayload<S['include'][P]> :
        P extends 'product' ? ProductGetPayload<S['include'][P]> :
        P extends 'variation' ? VariationGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'order' ? OrderGetPayload<S['select'][P]> :
        P extends 'product' ? ProductGetPayload<S['select'][P]> :
        P extends 'variation' ? VariationGetPayload<S['select'][P]> :  P extends keyof OrderItem ? OrderItem[P] : never
  } 
    : OrderItem
  : OrderItem


  type OrderItemCountArgs = Merge<
    Omit<OrderItemFindManyArgs, 'select' | 'include'> & {
      select?: OrderItemCountAggregateInputType | true
    }
  >

  export interface OrderItemDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OrderItem'> extends True ? CheckSelect<T, Prisma__OrderItemClient<OrderItem>, Prisma__OrderItemClient<OrderItemGetPayload<T>>> : CheckSelect<T, Prisma__OrderItemClient<OrderItem | null >, Prisma__OrderItemClient<OrderItemGetPayload<T> | null >>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OrderItem'> extends True ? CheckSelect<T, Prisma__OrderItemClient<OrderItem>, Prisma__OrderItemClient<OrderItemGetPayload<T>>> : CheckSelect<T, Prisma__OrderItemClient<OrderItem | null >, Prisma__OrderItemClient<OrderItemGetPayload<T> | null >>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const orderItemWithOrder_idOnly = await prisma.orderItem.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends OrderItemFindManyArgs>(
      args?: SelectSubset<T, OrderItemFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<OrderItem>>, PrismaPromise<Array<OrderItemGetPayload<T>>>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
    **/
    create<T extends OrderItemCreateArgs>(
      args: SelectSubset<T, OrderItemCreateArgs>
    ): CheckSelect<T, Prisma__OrderItemClient<OrderItem>, Prisma__OrderItemClient<OrderItemGetPayload<T>>>

    /**
     * Create many OrderItems.
     *     @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItem = await prisma.orderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderItemCreateManyArgs>(
      args?: SelectSubset<T, OrderItemCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemDeleteArgs>(
      args: SelectSubset<T, OrderItemDeleteArgs>
    ): CheckSelect<T, Prisma__OrderItemClient<OrderItem>, Prisma__OrderItemClient<OrderItemGetPayload<T>>>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemUpdateArgs>(
      args: SelectSubset<T, OrderItemUpdateArgs>
    ): CheckSelect<T, Prisma__OrderItemClient<OrderItem>, Prisma__OrderItemClient<OrderItemGetPayload<T>>>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemDeleteManyArgs>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemUpdateManyArgs>(
      args: SelectSubset<T, OrderItemUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemUpsertArgs>(
      args: SelectSubset<T, OrderItemUpsertArgs>
    ): CheckSelect<T, Prisma__OrderItemClient<OrderItem>, Prisma__OrderItemClient<OrderItemGetPayload<T>>>

    /**
     * Find one OrderItem that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__OrderItemClient<OrderItem>, Prisma__OrderItemClient<OrderItemGetPayload<T>>>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__OrderItemClient<OrderItem>, Prisma__OrderItemClient<OrderItemGetPayload<T>>>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderItemClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    order<T extends OrderArgs = {}>(args?: Subset<T, OrderArgs>): CheckSelect<T, Prisma__OrderClient<Order | null >, Prisma__OrderClient<OrderGetPayload<T> | null >>;

    product<T extends ProductArgs = {}>(args?: Subset<T, ProductArgs>): CheckSelect<T, Prisma__ProductClient<Product | null >, Prisma__ProductClient<ProductGetPayload<T> | null >>;

    variation<T extends VariationArgs = {}>(args?: Subset<T, VariationArgs>): CheckSelect<T, Prisma__VariationClient<Variation | null >, Prisma__VariationClient<VariationGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * OrderItem base type for findUnique actions
   */
  export type OrderItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OrderItem
     * 
    **/
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     * 
    **/
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem: findUnique
   */
  export interface OrderItemFindUniqueArgs extends OrderItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem base type for findFirst actions
   */
  export type OrderItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OrderItem
     * 
    **/
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     * 
    **/
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderItemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     * 
    **/
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     * 
    **/
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }

  /**
   * OrderItem: findFirst
   */
  export interface OrderItemFindFirstArgs extends OrderItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     * 
    **/
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItems to fetch.
     * 
    **/
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderItemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     * 
    **/
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     * 
    **/
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderItemInclude | null
    /**
     * The data needed to create a OrderItem.
     * 
    **/
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }


  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs = {
    /**
     * The data used to create many OrderItems.
     * 
    **/
    data: Enumerable<OrderItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     * 
    **/
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderItemInclude | null
    /**
     * The data needed to update a OrderItem.
     * 
    **/
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     * 
    **/
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs = {
    /**
     * The data used to update OrderItems.
     * 
    **/
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     * 
    **/
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     * 
    **/
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderItemInclude | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     * 
    **/
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     * 
    **/
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }


  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     * 
    **/
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderItemInclude | null
    /**
     * Filter which OrderItem to delete.
     * 
    **/
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs = {
    /**
     * Filter which OrderItems to delete
     * 
    **/
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem: findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs = OrderItemFindUniqueArgsBase
      

  /**
   * OrderItem: findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs = OrderItemFindFirstArgsBase
      

  /**
   * OrderItem without action
   */
  export type OrderItemArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     * 
    **/
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderItemInclude | null
  }



  /**
   * Model Promo
   */


  export type AggregatePromo = {
    _count: PromoCountAggregateOutputType | null
    _avg: PromoAvgAggregateOutputType | null
    _sum: PromoSumAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  export type PromoAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type PromoSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type PromoMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: DiscountType | null
    value: number | null
  }

  export type PromoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: DiscountType | null
    value: number | null
  }

  export type PromoCountAggregateOutputType = {
    id: number
    name: number
    type: number
    value: number
    _all: number
  }


  export type PromoAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type PromoSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type PromoMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
  }

  export type PromoMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
  }

  export type PromoCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    _all?: true
  }

  export type PromoAggregateArgs = {
    /**
     * Filter which Promo to aggregate.
     * 
    **/
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     * 
    **/
    orderBy?: Enumerable<PromoOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promos
    **/
    _count?: true | PromoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromoMaxAggregateInputType
  }

  export type GetPromoAggregateType<T extends PromoAggregateArgs> = {
        [P in keyof T & keyof AggregatePromo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromo[P]>
      : GetScalarType<T[P], AggregatePromo[P]>
  }




  export type PromoGroupByArgs = {
    where?: PromoWhereInput
    orderBy?: Enumerable<PromoOrderByWithAggregationInput>
    by: Array<PromoScalarFieldEnum>
    having?: PromoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromoCountAggregateInputType | true
    _avg?: PromoAvgAggregateInputType
    _sum?: PromoSumAggregateInputType
    _min?: PromoMinAggregateInputType
    _max?: PromoMaxAggregateInputType
  }


  export type PromoGroupByOutputType = {
    id: number
    name: string
    type: DiscountType
    value: number
    _count: PromoCountAggregateOutputType | null
    _avg: PromoAvgAggregateOutputType | null
    _sum: PromoSumAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  type GetPromoGroupByPayload<T extends PromoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PromoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromoGroupByOutputType[P]>
            : GetScalarType<T[P], PromoGroupByOutputType[P]>
        }
      >
    >


  export type PromoSelect = {
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
  }

  export type PromoGetPayload<
    S extends boolean | null | undefined | PromoArgs,
    U = keyof S
      > = S extends true
        ? Promo
    : S extends undefined
    ? never
    : S extends PromoArgs | PromoFindManyArgs
    ?'include' extends U
    ? Promo 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Promo ? Promo[P] : never
  } 
    : Promo
  : Promo


  type PromoCountArgs = Merge<
    Omit<PromoFindManyArgs, 'select' | 'include'> & {
      select?: PromoCountAggregateInputType | true
    }
  >

  export interface PromoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Promo that matches the filter.
     * @param {PromoFindUniqueArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PromoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PromoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Promo'> extends True ? CheckSelect<T, Prisma__PromoClient<Promo>, Prisma__PromoClient<PromoGetPayload<T>>> : CheckSelect<T, Prisma__PromoClient<Promo | null >, Prisma__PromoClient<PromoGetPayload<T> | null >>

    /**
     * Find the first Promo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PromoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PromoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Promo'> extends True ? CheckSelect<T, Prisma__PromoClient<Promo>, Prisma__PromoClient<PromoGetPayload<T>>> : CheckSelect<T, Prisma__PromoClient<Promo | null >, Prisma__PromoClient<PromoGetPayload<T> | null >>

    /**
     * Find zero or more Promos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promos
     * const promos = await prisma.promo.findMany()
     * 
     * // Get first 10 Promos
     * const promos = await prisma.promo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promoWithIdOnly = await prisma.promo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PromoFindManyArgs>(
      args?: SelectSubset<T, PromoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Promo>>, PrismaPromise<Array<PromoGetPayload<T>>>>

    /**
     * Create a Promo.
     * @param {PromoCreateArgs} args - Arguments to create a Promo.
     * @example
     * // Create one Promo
     * const Promo = await prisma.promo.create({
     *   data: {
     *     // ... data to create a Promo
     *   }
     * })
     * 
    **/
    create<T extends PromoCreateArgs>(
      args: SelectSubset<T, PromoCreateArgs>
    ): CheckSelect<T, Prisma__PromoClient<Promo>, Prisma__PromoClient<PromoGetPayload<T>>>

    /**
     * Create many Promos.
     *     @param {PromoCreateManyArgs} args - Arguments to create many Promos.
     *     @example
     *     // Create many Promos
     *     const promo = await prisma.promo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PromoCreateManyArgs>(
      args?: SelectSubset<T, PromoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Promo.
     * @param {PromoDeleteArgs} args - Arguments to delete one Promo.
     * @example
     * // Delete one Promo
     * const Promo = await prisma.promo.delete({
     *   where: {
     *     // ... filter to delete one Promo
     *   }
     * })
     * 
    **/
    delete<T extends PromoDeleteArgs>(
      args: SelectSubset<T, PromoDeleteArgs>
    ): CheckSelect<T, Prisma__PromoClient<Promo>, Prisma__PromoClient<PromoGetPayload<T>>>

    /**
     * Update one Promo.
     * @param {PromoUpdateArgs} args - Arguments to update one Promo.
     * @example
     * // Update one Promo
     * const promo = await prisma.promo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PromoUpdateArgs>(
      args: SelectSubset<T, PromoUpdateArgs>
    ): CheckSelect<T, Prisma__PromoClient<Promo>, Prisma__PromoClient<PromoGetPayload<T>>>

    /**
     * Delete zero or more Promos.
     * @param {PromoDeleteManyArgs} args - Arguments to filter Promos to delete.
     * @example
     * // Delete a few Promos
     * const { count } = await prisma.promo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PromoDeleteManyArgs>(
      args?: SelectSubset<T, PromoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promos
     * const promo = await prisma.promo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PromoUpdateManyArgs>(
      args: SelectSubset<T, PromoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Promo.
     * @param {PromoUpsertArgs} args - Arguments to update or create a Promo.
     * @example
     * // Update or create a Promo
     * const promo = await prisma.promo.upsert({
     *   create: {
     *     // ... data to create a Promo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promo we want to update
     *   }
     * })
    **/
    upsert<T extends PromoUpsertArgs>(
      args: SelectSubset<T, PromoUpsertArgs>
    ): CheckSelect<T, Prisma__PromoClient<Promo>, Prisma__PromoClient<PromoGetPayload<T>>>

    /**
     * Find one Promo that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PromoFindUniqueOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PromoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PromoFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PromoClient<Promo>, Prisma__PromoClient<PromoGetPayload<T>>>

    /**
     * Find the first Promo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PromoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PromoFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PromoClient<Promo>, Prisma__PromoClient<PromoGetPayload<T>>>

    /**
     * Count the number of Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCountArgs} args - Arguments to filter Promos to count.
     * @example
     * // Count the number of Promos
     * const count = await prisma.promo.count({
     *   where: {
     *     // ... the filter for the Promos we want to count
     *   }
     * })
    **/
    count<T extends PromoCountArgs>(
      args?: Subset<T, PromoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromoAggregateArgs>(args: Subset<T, PromoAggregateArgs>): PrismaPromise<GetPromoAggregateType<T>>

    /**
     * Group by Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromoGroupByArgs['orderBy'] }
        : { orderBy?: PromoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromoGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PromoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Promo base type for findUnique actions
   */
  export type PromoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Promo
     * 
    **/
    select?: PromoSelect | null
    /**
     * Filter, which Promo to fetch.
     * 
    **/
    where: PromoWhereUniqueInput
  }

  /**
   * Promo: findUnique
   */
  export interface PromoFindUniqueArgs extends PromoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Promo base type for findFirst actions
   */
  export type PromoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Promo
     * 
    **/
    select?: PromoSelect | null
    /**
     * Filter, which Promo to fetch.
     * 
    **/
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     * 
    **/
    orderBy?: Enumerable<PromoOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promos.
     * 
    **/
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promos.
     * 
    **/
    distinct?: Enumerable<PromoScalarFieldEnum>
  }

  /**
   * Promo: findFirst
   */
  export interface PromoFindFirstArgs extends PromoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Promo findMany
   */
  export type PromoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Promo
     * 
    **/
    select?: PromoSelect | null
    /**
     * Filter, which Promos to fetch.
     * 
    **/
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     * 
    **/
    orderBy?: Enumerable<PromoOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promos.
     * 
    **/
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PromoScalarFieldEnum>
  }


  /**
   * Promo create
   */
  export type PromoCreateArgs = {
    /**
     * Select specific fields to fetch from the Promo
     * 
    **/
    select?: PromoSelect | null
    /**
     * The data needed to create a Promo.
     * 
    **/
    data: XOR<PromoCreateInput, PromoUncheckedCreateInput>
  }


  /**
   * Promo createMany
   */
  export type PromoCreateManyArgs = {
    /**
     * The data used to create many Promos.
     * 
    **/
    data: Enumerable<PromoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Promo update
   */
  export type PromoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Promo
     * 
    **/
    select?: PromoSelect | null
    /**
     * The data needed to update a Promo.
     * 
    **/
    data: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
    /**
     * Choose, which Promo to update.
     * 
    **/
    where: PromoWhereUniqueInput
  }


  /**
   * Promo updateMany
   */
  export type PromoUpdateManyArgs = {
    /**
     * The data used to update Promos.
     * 
    **/
    data: XOR<PromoUpdateManyMutationInput, PromoUncheckedUpdateManyInput>
    /**
     * Filter which Promos to update
     * 
    **/
    where?: PromoWhereInput
  }


  /**
   * Promo upsert
   */
  export type PromoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Promo
     * 
    **/
    select?: PromoSelect | null
    /**
     * The filter to search for the Promo to update in case it exists.
     * 
    **/
    where: PromoWhereUniqueInput
    /**
     * In case the Promo found by the `where` argument doesn't exist, create a new Promo with this data.
     * 
    **/
    create: XOR<PromoCreateInput, PromoUncheckedCreateInput>
    /**
     * In case the Promo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
  }


  /**
   * Promo delete
   */
  export type PromoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Promo
     * 
    **/
    select?: PromoSelect | null
    /**
     * Filter which Promo to delete.
     * 
    **/
    where: PromoWhereUniqueInput
  }


  /**
   * Promo deleteMany
   */
  export type PromoDeleteManyArgs = {
    /**
     * Filter which Promos to delete
     * 
    **/
    where?: PromoWhereInput
  }


  /**
   * Promo: findUniqueOrThrow
   */
  export type PromoFindUniqueOrThrowArgs = PromoFindUniqueArgsBase
      

  /**
   * Promo: findFirstOrThrow
   */
  export type PromoFindFirstOrThrowArgs = PromoFindFirstArgsBase
      

  /**
   * Promo without action
   */
  export type PromoArgs = {
    /**
     * Select specific fields to fetch from the Promo
     * 
    **/
    select?: PromoSelect | null
  }



  /**
   * Model Supplier
   */


  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
    type_id: number | null
    stock_ongoing: number | null
    stock_ready: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
    type_id: number | null
    stock_ongoing: number | null
    stock_ready: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    type_id: number | null
    name: string | null
    note: string | null
    link: string | null
    stock_ongoing: number | null
    stock_ready: number | null
    created: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    type_id: number | null
    name: string | null
    note: string | null
    link: string | null
    stock_ongoing: number | null
    stock_ready: number | null
    created: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    type_id: number
    name: number
    note: number
    link: number
    stock_ongoing: number
    stock_ready: number
    created: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
    type_id?: true
    stock_ongoing?: true
    stock_ready?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
    type_id?: true
    stock_ongoing?: true
    stock_ready?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    type_id?: true
    name?: true
    note?: true
    link?: true
    stock_ongoing?: true
    stock_ready?: true
    created?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    type_id?: true
    name?: true
    note?: true
    link?: true
    stock_ongoing?: true
    stock_ready?: true
    created?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    type_id?: true
    name?: true
    note?: true
    link?: true
    stock_ongoing?: true
    stock_ready?: true
    created?: true
    _all?: true
  }

  export type SupplierAggregateArgs = {
    /**
     * Filter which Supplier to aggregate.
     * 
    **/
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     * 
    **/
    orderBy?: Enumerable<SupplierOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs = {
    where?: SupplierWhereInput
    orderBy?: Enumerable<SupplierOrderByWithAggregationInput>
    by: Array<SupplierScalarFieldEnum>
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }


  export type SupplierGroupByOutputType = {
    id: number
    type_id: number
    name: string
    note: string
    link: string
    stock_ongoing: number
    stock_ready: number
    created: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect = {
    id?: boolean
    type_id?: boolean
    name?: boolean
    note?: boolean
    link?: boolean
    stock_ongoing?: boolean
    stock_ready?: boolean
    type?: boolean | SupplierTypeArgs
    created?: boolean
  }

  export type SupplierInclude = {
    type?: boolean | SupplierTypeArgs
  }

  export type SupplierGetPayload<
    S extends boolean | null | undefined | SupplierArgs,
    U = keyof S
      > = S extends true
        ? Supplier
    : S extends undefined
    ? never
    : S extends SupplierArgs | SupplierFindManyArgs
    ?'include' extends U
    ? Supplier  & {
    [P in TrueKeys<S['include']>]:
        P extends 'type' ? SupplierTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'type' ? SupplierTypeGetPayload<S['select'][P]> :  P extends keyof Supplier ? Supplier[P] : never
  } 
    : Supplier
  : Supplier


  type SupplierCountArgs = Merge<
    Omit<SupplierFindManyArgs, 'select' | 'include'> & {
      select?: SupplierCountAggregateInputType | true
    }
  >

  export interface SupplierDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SupplierFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SupplierFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Supplier'> extends True ? CheckSelect<T, Prisma__SupplierClient<Supplier>, Prisma__SupplierClient<SupplierGetPayload<T>>> : CheckSelect<T, Prisma__SupplierClient<Supplier | null >, Prisma__SupplierClient<SupplierGetPayload<T> | null >>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SupplierFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SupplierFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Supplier'> extends True ? CheckSelect<T, Prisma__SupplierClient<Supplier>, Prisma__SupplierClient<SupplierGetPayload<T>>> : CheckSelect<T, Prisma__SupplierClient<Supplier | null >, Prisma__SupplierClient<SupplierGetPayload<T> | null >>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SupplierFindManyArgs>(
      args?: SelectSubset<T, SupplierFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Supplier>>, PrismaPromise<Array<SupplierGetPayload<T>>>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
    **/
    create<T extends SupplierCreateArgs>(
      args: SelectSubset<T, SupplierCreateArgs>
    ): CheckSelect<T, Prisma__SupplierClient<Supplier>, Prisma__SupplierClient<SupplierGetPayload<T>>>

    /**
     * Create many Suppliers.
     *     @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     *     @example
     *     // Create many Suppliers
     *     const supplier = await prisma.supplier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SupplierCreateManyArgs>(
      args?: SelectSubset<T, SupplierCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
    **/
    delete<T extends SupplierDeleteArgs>(
      args: SelectSubset<T, SupplierDeleteArgs>
    ): CheckSelect<T, Prisma__SupplierClient<Supplier>, Prisma__SupplierClient<SupplierGetPayload<T>>>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SupplierUpdateArgs>(
      args: SelectSubset<T, SupplierUpdateArgs>
    ): CheckSelect<T, Prisma__SupplierClient<Supplier>, Prisma__SupplierClient<SupplierGetPayload<T>>>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SupplierDeleteManyArgs>(
      args?: SelectSubset<T, SupplierDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SupplierUpdateManyArgs>(
      args: SelectSubset<T, SupplierUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
    **/
    upsert<T extends SupplierUpsertArgs>(
      args: SelectSubset<T, SupplierUpsertArgs>
    ): CheckSelect<T, Prisma__SupplierClient<Supplier>, Prisma__SupplierClient<SupplierGetPayload<T>>>

    /**
     * Find one Supplier that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SupplierFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SupplierClient<Supplier>, Prisma__SupplierClient<SupplierGetPayload<T>>>

    /**
     * Find the first Supplier that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SupplierFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SupplierClient<Supplier>, Prisma__SupplierClient<SupplierGetPayload<T>>>

    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SupplierClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    type<T extends SupplierTypeArgs = {}>(args?: Subset<T, SupplierTypeArgs>): CheckSelect<T, Prisma__SupplierTypeClient<SupplierType | null >, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Supplier base type for findUnique actions
   */
  export type SupplierFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Supplier
     * 
    **/
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierInclude | null
    /**
     * Filter, which Supplier to fetch.
     * 
    **/
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier: findUnique
   */
  export interface SupplierFindUniqueArgs extends SupplierFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Supplier base type for findFirst actions
   */
  export type SupplierFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Supplier
     * 
    **/
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierInclude | null
    /**
     * Filter, which Supplier to fetch.
     * 
    **/
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     * 
    **/
    orderBy?: Enumerable<SupplierOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     * 
    **/
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     * 
    **/
    distinct?: Enumerable<SupplierScalarFieldEnum>
  }

  /**
   * Supplier: findFirst
   */
  export interface SupplierFindFirstArgs extends SupplierFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     * 
    **/
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierInclude | null
    /**
     * Filter, which Suppliers to fetch.
     * 
    **/
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     * 
    **/
    orderBy?: Enumerable<SupplierOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     * 
    **/
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SupplierScalarFieldEnum>
  }


  /**
   * Supplier create
   */
  export type SupplierCreateArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     * 
    **/
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierInclude | null
    /**
     * The data needed to create a Supplier.
     * 
    **/
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }


  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs = {
    /**
     * The data used to create many Suppliers.
     * 
    **/
    data: Enumerable<SupplierCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Supplier update
   */
  export type SupplierUpdateArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     * 
    **/
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierInclude | null
    /**
     * The data needed to update a Supplier.
     * 
    **/
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     * 
    **/
    where: SupplierWhereUniqueInput
  }


  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs = {
    /**
     * The data used to update Suppliers.
     * 
    **/
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     * 
    **/
    where?: SupplierWhereInput
  }


  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     * 
    **/
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierInclude | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     * 
    **/
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     * 
    **/
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }


  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     * 
    **/
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierInclude | null
    /**
     * Filter which Supplier to delete.
     * 
    **/
    where: SupplierWhereUniqueInput
  }


  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs = {
    /**
     * Filter which Suppliers to delete
     * 
    **/
    where?: SupplierWhereInput
  }


  /**
   * Supplier: findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs = SupplierFindUniqueArgsBase
      

  /**
   * Supplier: findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs = SupplierFindFirstArgsBase
      

  /**
   * Supplier without action
   */
  export type SupplierArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     * 
    **/
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierInclude | null
  }



  /**
   * Model SupplierType
   */


  export type AggregateSupplierType = {
    _count: SupplierTypeCountAggregateOutputType | null
    _avg: SupplierTypeAvgAggregateOutputType | null
    _sum: SupplierTypeSumAggregateOutputType | null
    _min: SupplierTypeMinAggregateOutputType | null
    _max: SupplierTypeMaxAggregateOutputType | null
  }

  export type SupplierTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierTypeSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SupplierTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SupplierTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SupplierTypeAvgAggregateInputType = {
    id?: true
  }

  export type SupplierTypeSumAggregateInputType = {
    id?: true
  }

  export type SupplierTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SupplierTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SupplierTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SupplierTypeAggregateArgs = {
    /**
     * Filter which SupplierType to aggregate.
     * 
    **/
    where?: SupplierTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<SupplierTypeOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SupplierTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierTypes
    **/
    _count?: true | SupplierTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierTypeMaxAggregateInputType
  }

  export type GetSupplierTypeAggregateType<T extends SupplierTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierType[P]>
      : GetScalarType<T[P], AggregateSupplierType[P]>
  }




  export type SupplierTypeGroupByArgs = {
    where?: SupplierTypeWhereInput
    orderBy?: Enumerable<SupplierTypeOrderByWithAggregationInput>
    by: Array<SupplierTypeScalarFieldEnum>
    having?: SupplierTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierTypeCountAggregateInputType | true
    _avg?: SupplierTypeAvgAggregateInputType
    _sum?: SupplierTypeSumAggregateInputType
    _min?: SupplierTypeMinAggregateInputType
    _max?: SupplierTypeMaxAggregateInputType
  }


  export type SupplierTypeGroupByOutputType = {
    id: number
    name: string
    _count: SupplierTypeCountAggregateOutputType | null
    _avg: SupplierTypeAvgAggregateOutputType | null
    _sum: SupplierTypeSumAggregateOutputType | null
    _min: SupplierTypeMinAggregateOutputType | null
    _max: SupplierTypeMaxAggregateOutputType | null
  }

  type GetSupplierTypeGroupByPayload<T extends SupplierTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SupplierTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierTypeGroupByOutputType[P]>
        }
      >
    >


  export type SupplierTypeSelect = {
    id?: boolean
    name?: boolean
    suppliers?: boolean | SupplierFindManyArgs
    _count?: boolean | SupplierTypeCountOutputTypeArgs
  }

  export type SupplierTypeInclude = {
    suppliers?: boolean | SupplierFindManyArgs
    _count?: boolean | SupplierTypeCountOutputTypeArgs
  }

  export type SupplierTypeGetPayload<
    S extends boolean | null | undefined | SupplierTypeArgs,
    U = keyof S
      > = S extends true
        ? SupplierType
    : S extends undefined
    ? never
    : S extends SupplierTypeArgs | SupplierTypeFindManyArgs
    ?'include' extends U
    ? SupplierType  & {
    [P in TrueKeys<S['include']>]:
        P extends 'suppliers' ? Array < SupplierGetPayload<S['include'][P]>>  :
        P extends '_count' ? SupplierTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'suppliers' ? Array < SupplierGetPayload<S['select'][P]>>  :
        P extends '_count' ? SupplierTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof SupplierType ? SupplierType[P] : never
  } 
    : SupplierType
  : SupplierType


  type SupplierTypeCountArgs = Merge<
    Omit<SupplierTypeFindManyArgs, 'select' | 'include'> & {
      select?: SupplierTypeCountAggregateInputType | true
    }
  >

  export interface SupplierTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SupplierType that matches the filter.
     * @param {SupplierTypeFindUniqueArgs} args - Arguments to find a SupplierType
     * @example
     * // Get one SupplierType
     * const supplierType = await prisma.supplierType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SupplierTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SupplierTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SupplierType'> extends True ? CheckSelect<T, Prisma__SupplierTypeClient<SupplierType>, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T>>> : CheckSelect<T, Prisma__SupplierTypeClient<SupplierType | null >, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T> | null >>

    /**
     * Find the first SupplierType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeFindFirstArgs} args - Arguments to find a SupplierType
     * @example
     * // Get one SupplierType
     * const supplierType = await prisma.supplierType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SupplierTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SupplierTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SupplierType'> extends True ? CheckSelect<T, Prisma__SupplierTypeClient<SupplierType>, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T>>> : CheckSelect<T, Prisma__SupplierTypeClient<SupplierType | null >, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T> | null >>

    /**
     * Find zero or more SupplierTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierTypes
     * const supplierTypes = await prisma.supplierType.findMany()
     * 
     * // Get first 10 SupplierTypes
     * const supplierTypes = await prisma.supplierType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierTypeWithIdOnly = await prisma.supplierType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SupplierTypeFindManyArgs>(
      args?: SelectSubset<T, SupplierTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SupplierType>>, PrismaPromise<Array<SupplierTypeGetPayload<T>>>>

    /**
     * Create a SupplierType.
     * @param {SupplierTypeCreateArgs} args - Arguments to create a SupplierType.
     * @example
     * // Create one SupplierType
     * const SupplierType = await prisma.supplierType.create({
     *   data: {
     *     // ... data to create a SupplierType
     *   }
     * })
     * 
    **/
    create<T extends SupplierTypeCreateArgs>(
      args: SelectSubset<T, SupplierTypeCreateArgs>
    ): CheckSelect<T, Prisma__SupplierTypeClient<SupplierType>, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T>>>

    /**
     * Create many SupplierTypes.
     *     @param {SupplierTypeCreateManyArgs} args - Arguments to create many SupplierTypes.
     *     @example
     *     // Create many SupplierTypes
     *     const supplierType = await prisma.supplierType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SupplierTypeCreateManyArgs>(
      args?: SelectSubset<T, SupplierTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SupplierType.
     * @param {SupplierTypeDeleteArgs} args - Arguments to delete one SupplierType.
     * @example
     * // Delete one SupplierType
     * const SupplierType = await prisma.supplierType.delete({
     *   where: {
     *     // ... filter to delete one SupplierType
     *   }
     * })
     * 
    **/
    delete<T extends SupplierTypeDeleteArgs>(
      args: SelectSubset<T, SupplierTypeDeleteArgs>
    ): CheckSelect<T, Prisma__SupplierTypeClient<SupplierType>, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T>>>

    /**
     * Update one SupplierType.
     * @param {SupplierTypeUpdateArgs} args - Arguments to update one SupplierType.
     * @example
     * // Update one SupplierType
     * const supplierType = await prisma.supplierType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SupplierTypeUpdateArgs>(
      args: SelectSubset<T, SupplierTypeUpdateArgs>
    ): CheckSelect<T, Prisma__SupplierTypeClient<SupplierType>, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T>>>

    /**
     * Delete zero or more SupplierTypes.
     * @param {SupplierTypeDeleteManyArgs} args - Arguments to filter SupplierTypes to delete.
     * @example
     * // Delete a few SupplierTypes
     * const { count } = await prisma.supplierType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SupplierTypeDeleteManyArgs>(
      args?: SelectSubset<T, SupplierTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierTypes
     * const supplierType = await prisma.supplierType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SupplierTypeUpdateManyArgs>(
      args: SelectSubset<T, SupplierTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierType.
     * @param {SupplierTypeUpsertArgs} args - Arguments to update or create a SupplierType.
     * @example
     * // Update or create a SupplierType
     * const supplierType = await prisma.supplierType.upsert({
     *   create: {
     *     // ... data to create a SupplierType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierType we want to update
     *   }
     * })
    **/
    upsert<T extends SupplierTypeUpsertArgs>(
      args: SelectSubset<T, SupplierTypeUpsertArgs>
    ): CheckSelect<T, Prisma__SupplierTypeClient<SupplierType>, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T>>>

    /**
     * Find one SupplierType that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SupplierTypeFindUniqueOrThrowArgs} args - Arguments to find a SupplierType
     * @example
     * // Get one SupplierType
     * const supplierType = await prisma.supplierType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SupplierTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SupplierTypeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SupplierTypeClient<SupplierType>, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T>>>

    /**
     * Find the first SupplierType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeFindFirstOrThrowArgs} args - Arguments to find a SupplierType
     * @example
     * // Get one SupplierType
     * const supplierType = await prisma.supplierType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SupplierTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SupplierTypeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SupplierTypeClient<SupplierType>, Prisma__SupplierTypeClient<SupplierTypeGetPayload<T>>>

    /**
     * Count the number of SupplierTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeCountArgs} args - Arguments to filter SupplierTypes to count.
     * @example
     * // Count the number of SupplierTypes
     * const count = await prisma.supplierType.count({
     *   where: {
     *     // ... the filter for the SupplierTypes we want to count
     *   }
     * })
    **/
    count<T extends SupplierTypeCountArgs>(
      args?: Subset<T, SupplierTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierTypeAggregateArgs>(args: Subset<T, SupplierTypeAggregateArgs>): PrismaPromise<GetSupplierTypeAggregateType<T>>

    /**
     * Group by SupplierType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierTypeGroupByArgs['orderBy'] }
        : { orderBy?: SupplierTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierTypeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SupplierTypeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    suppliers<T extends SupplierFindManyArgs = {}>(args?: Subset<T, SupplierFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Supplier>>, PrismaPromise<Array<SupplierGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SupplierType base type for findUnique actions
   */
  export type SupplierTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SupplierType
     * 
    **/
    select?: SupplierTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierTypeInclude | null
    /**
     * Filter, which SupplierType to fetch.
     * 
    **/
    where: SupplierTypeWhereUniqueInput
  }

  /**
   * SupplierType: findUnique
   */
  export interface SupplierTypeFindUniqueArgs extends SupplierTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SupplierType base type for findFirst actions
   */
  export type SupplierTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SupplierType
     * 
    **/
    select?: SupplierTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierTypeInclude | null
    /**
     * Filter, which SupplierType to fetch.
     * 
    **/
    where?: SupplierTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<SupplierTypeOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierTypes.
     * 
    **/
    cursor?: SupplierTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierTypes.
     * 
    **/
    distinct?: Enumerable<SupplierTypeScalarFieldEnum>
  }

  /**
   * SupplierType: findFirst
   */
  export interface SupplierTypeFindFirstArgs extends SupplierTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SupplierType findMany
   */
  export type SupplierTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the SupplierType
     * 
    **/
    select?: SupplierTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierTypeInclude | null
    /**
     * Filter, which SupplierTypes to fetch.
     * 
    **/
    where?: SupplierTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<SupplierTypeOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierTypes.
     * 
    **/
    cursor?: SupplierTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SupplierTypeScalarFieldEnum>
  }


  /**
   * SupplierType create
   */
  export type SupplierTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the SupplierType
     * 
    **/
    select?: SupplierTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierTypeInclude | null
    /**
     * The data needed to create a SupplierType.
     * 
    **/
    data: XOR<SupplierTypeCreateInput, SupplierTypeUncheckedCreateInput>
  }


  /**
   * SupplierType createMany
   */
  export type SupplierTypeCreateManyArgs = {
    /**
     * The data used to create many SupplierTypes.
     * 
    **/
    data: Enumerable<SupplierTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SupplierType update
   */
  export type SupplierTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the SupplierType
     * 
    **/
    select?: SupplierTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierTypeInclude | null
    /**
     * The data needed to update a SupplierType.
     * 
    **/
    data: XOR<SupplierTypeUpdateInput, SupplierTypeUncheckedUpdateInput>
    /**
     * Choose, which SupplierType to update.
     * 
    **/
    where: SupplierTypeWhereUniqueInput
  }


  /**
   * SupplierType updateMany
   */
  export type SupplierTypeUpdateManyArgs = {
    /**
     * The data used to update SupplierTypes.
     * 
    **/
    data: XOR<SupplierTypeUpdateManyMutationInput, SupplierTypeUncheckedUpdateManyInput>
    /**
     * Filter which SupplierTypes to update
     * 
    **/
    where?: SupplierTypeWhereInput
  }


  /**
   * SupplierType upsert
   */
  export type SupplierTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the SupplierType
     * 
    **/
    select?: SupplierTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierTypeInclude | null
    /**
     * The filter to search for the SupplierType to update in case it exists.
     * 
    **/
    where: SupplierTypeWhereUniqueInput
    /**
     * In case the SupplierType found by the `where` argument doesn't exist, create a new SupplierType with this data.
     * 
    **/
    create: XOR<SupplierTypeCreateInput, SupplierTypeUncheckedCreateInput>
    /**
     * In case the SupplierType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SupplierTypeUpdateInput, SupplierTypeUncheckedUpdateInput>
  }


  /**
   * SupplierType delete
   */
  export type SupplierTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the SupplierType
     * 
    **/
    select?: SupplierTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierTypeInclude | null
    /**
     * Filter which SupplierType to delete.
     * 
    **/
    where: SupplierTypeWhereUniqueInput
  }


  /**
   * SupplierType deleteMany
   */
  export type SupplierTypeDeleteManyArgs = {
    /**
     * Filter which SupplierTypes to delete
     * 
    **/
    where?: SupplierTypeWhereInput
  }


  /**
   * SupplierType: findUniqueOrThrow
   */
  export type SupplierTypeFindUniqueOrThrowArgs = SupplierTypeFindUniqueArgsBase
      

  /**
   * SupplierType: findFirstOrThrow
   */
  export type SupplierTypeFindFirstOrThrowArgs = SupplierTypeFindFirstArgsBase
      

  /**
   * SupplierType without action
   */
  export type SupplierTypeArgs = {
    /**
     * Select specific fields to fetch from the SupplierType
     * 
    **/
    select?: SupplierTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SupplierTypeInclude | null
  }



  /**
   * Model Rack
   */


  export type AggregateRack = {
    _count: RackCountAggregateOutputType | null
    _avg: RackAvgAggregateOutputType | null
    _sum: RackSumAggregateOutputType | null
    _min: RackMinAggregateOutputType | null
    _max: RackMaxAggregateOutputType | null
  }

  export type RackAvgAggregateOutputType = {
    id: number | null
  }

  export type RackSumAggregateOutputType = {
    id: number | null
  }

  export type RackMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RackMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RackCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RackAvgAggregateInputType = {
    id?: true
  }

  export type RackSumAggregateInputType = {
    id?: true
  }

  export type RackMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RackMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RackCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RackAggregateArgs = {
    /**
     * Filter which Rack to aggregate.
     * 
    **/
    where?: RackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Racks to fetch.
     * 
    **/
    orderBy?: Enumerable<RackOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Racks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Racks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Racks
    **/
    _count?: true | RackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RackMaxAggregateInputType
  }

  export type GetRackAggregateType<T extends RackAggregateArgs> = {
        [P in keyof T & keyof AggregateRack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRack[P]>
      : GetScalarType<T[P], AggregateRack[P]>
  }




  export type RackGroupByArgs = {
    where?: RackWhereInput
    orderBy?: Enumerable<RackOrderByWithAggregationInput>
    by: Array<RackScalarFieldEnum>
    having?: RackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RackCountAggregateInputType | true
    _avg?: RackAvgAggregateInputType
    _sum?: RackSumAggregateInputType
    _min?: RackMinAggregateInputType
    _max?: RackMaxAggregateInputType
  }


  export type RackGroupByOutputType = {
    id: number
    name: string
    _count: RackCountAggregateOutputType | null
    _avg: RackAvgAggregateOutputType | null
    _sum: RackSumAggregateOutputType | null
    _min: RackMinAggregateOutputType | null
    _max: RackMaxAggregateOutputType | null
  }

  type GetRackGroupByPayload<T extends RackGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RackGroupByOutputType[P]>
            : GetScalarType<T[P], RackGroupByOutputType[P]>
        }
      >
    >


  export type RackSelect = {
    id?: boolean
    name?: boolean
  }

  export type RackGetPayload<
    S extends boolean | null | undefined | RackArgs,
    U = keyof S
      > = S extends true
        ? Rack
    : S extends undefined
    ? never
    : S extends RackArgs | RackFindManyArgs
    ?'include' extends U
    ? Rack 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Rack ? Rack[P] : never
  } 
    : Rack
  : Rack


  type RackCountArgs = Merge<
    Omit<RackFindManyArgs, 'select' | 'include'> & {
      select?: RackCountAggregateInputType | true
    }
  >

  export interface RackDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Rack that matches the filter.
     * @param {RackFindUniqueArgs} args - Arguments to find a Rack
     * @example
     * // Get one Rack
     * const rack = await prisma.rack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RackFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RackFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Rack'> extends True ? CheckSelect<T, Prisma__RackClient<Rack>, Prisma__RackClient<RackGetPayload<T>>> : CheckSelect<T, Prisma__RackClient<Rack | null >, Prisma__RackClient<RackGetPayload<T> | null >>

    /**
     * Find the first Rack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackFindFirstArgs} args - Arguments to find a Rack
     * @example
     * // Get one Rack
     * const rack = await prisma.rack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RackFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RackFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Rack'> extends True ? CheckSelect<T, Prisma__RackClient<Rack>, Prisma__RackClient<RackGetPayload<T>>> : CheckSelect<T, Prisma__RackClient<Rack | null >, Prisma__RackClient<RackGetPayload<T> | null >>

    /**
     * Find zero or more Racks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Racks
     * const racks = await prisma.rack.findMany()
     * 
     * // Get first 10 Racks
     * const racks = await prisma.rack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rackWithIdOnly = await prisma.rack.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RackFindManyArgs>(
      args?: SelectSubset<T, RackFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Rack>>, PrismaPromise<Array<RackGetPayload<T>>>>

    /**
     * Create a Rack.
     * @param {RackCreateArgs} args - Arguments to create a Rack.
     * @example
     * // Create one Rack
     * const Rack = await prisma.rack.create({
     *   data: {
     *     // ... data to create a Rack
     *   }
     * })
     * 
    **/
    create<T extends RackCreateArgs>(
      args: SelectSubset<T, RackCreateArgs>
    ): CheckSelect<T, Prisma__RackClient<Rack>, Prisma__RackClient<RackGetPayload<T>>>

    /**
     * Create many Racks.
     *     @param {RackCreateManyArgs} args - Arguments to create many Racks.
     *     @example
     *     // Create many Racks
     *     const rack = await prisma.rack.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RackCreateManyArgs>(
      args?: SelectSubset<T, RackCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Rack.
     * @param {RackDeleteArgs} args - Arguments to delete one Rack.
     * @example
     * // Delete one Rack
     * const Rack = await prisma.rack.delete({
     *   where: {
     *     // ... filter to delete one Rack
     *   }
     * })
     * 
    **/
    delete<T extends RackDeleteArgs>(
      args: SelectSubset<T, RackDeleteArgs>
    ): CheckSelect<T, Prisma__RackClient<Rack>, Prisma__RackClient<RackGetPayload<T>>>

    /**
     * Update one Rack.
     * @param {RackUpdateArgs} args - Arguments to update one Rack.
     * @example
     * // Update one Rack
     * const rack = await prisma.rack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RackUpdateArgs>(
      args: SelectSubset<T, RackUpdateArgs>
    ): CheckSelect<T, Prisma__RackClient<Rack>, Prisma__RackClient<RackGetPayload<T>>>

    /**
     * Delete zero or more Racks.
     * @param {RackDeleteManyArgs} args - Arguments to filter Racks to delete.
     * @example
     * // Delete a few Racks
     * const { count } = await prisma.rack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RackDeleteManyArgs>(
      args?: SelectSubset<T, RackDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Racks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Racks
     * const rack = await prisma.rack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RackUpdateManyArgs>(
      args: SelectSubset<T, RackUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Rack.
     * @param {RackUpsertArgs} args - Arguments to update or create a Rack.
     * @example
     * // Update or create a Rack
     * const rack = await prisma.rack.upsert({
     *   create: {
     *     // ... data to create a Rack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rack we want to update
     *   }
     * })
    **/
    upsert<T extends RackUpsertArgs>(
      args: SelectSubset<T, RackUpsertArgs>
    ): CheckSelect<T, Prisma__RackClient<Rack>, Prisma__RackClient<RackGetPayload<T>>>

    /**
     * Find one Rack that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RackFindUniqueOrThrowArgs} args - Arguments to find a Rack
     * @example
     * // Get one Rack
     * const rack = await prisma.rack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RackFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RackFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RackClient<Rack>, Prisma__RackClient<RackGetPayload<T>>>

    /**
     * Find the first Rack that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackFindFirstOrThrowArgs} args - Arguments to find a Rack
     * @example
     * // Get one Rack
     * const rack = await prisma.rack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RackFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RackClient<Rack>, Prisma__RackClient<RackGetPayload<T>>>

    /**
     * Count the number of Racks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackCountArgs} args - Arguments to filter Racks to count.
     * @example
     * // Count the number of Racks
     * const count = await prisma.rack.count({
     *   where: {
     *     // ... the filter for the Racks we want to count
     *   }
     * })
    **/
    count<T extends RackCountArgs>(
      args?: Subset<T, RackCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RackAggregateArgs>(args: Subset<T, RackAggregateArgs>): PrismaPromise<GetRackAggregateType<T>>

    /**
     * Group by Rack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RackGroupByArgs['orderBy'] }
        : { orderBy?: RackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRackGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RackClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Rack base type for findUnique actions
   */
  export type RackFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Rack
     * 
    **/
    select?: RackSelect | null
    /**
     * Filter, which Rack to fetch.
     * 
    **/
    where: RackWhereUniqueInput
  }

  /**
   * Rack: findUnique
   */
  export interface RackFindUniqueArgs extends RackFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rack base type for findFirst actions
   */
  export type RackFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Rack
     * 
    **/
    select?: RackSelect | null
    /**
     * Filter, which Rack to fetch.
     * 
    **/
    where?: RackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Racks to fetch.
     * 
    **/
    orderBy?: Enumerable<RackOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Racks.
     * 
    **/
    cursor?: RackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Racks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Racks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Racks.
     * 
    **/
    distinct?: Enumerable<RackScalarFieldEnum>
  }

  /**
   * Rack: findFirst
   */
  export interface RackFindFirstArgs extends RackFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rack findMany
   */
  export type RackFindManyArgs = {
    /**
     * Select specific fields to fetch from the Rack
     * 
    **/
    select?: RackSelect | null
    /**
     * Filter, which Racks to fetch.
     * 
    **/
    where?: RackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Racks to fetch.
     * 
    **/
    orderBy?: Enumerable<RackOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Racks.
     * 
    **/
    cursor?: RackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Racks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Racks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RackScalarFieldEnum>
  }


  /**
   * Rack create
   */
  export type RackCreateArgs = {
    /**
     * Select specific fields to fetch from the Rack
     * 
    **/
    select?: RackSelect | null
    /**
     * The data needed to create a Rack.
     * 
    **/
    data: XOR<RackCreateInput, RackUncheckedCreateInput>
  }


  /**
   * Rack createMany
   */
  export type RackCreateManyArgs = {
    /**
     * The data used to create many Racks.
     * 
    **/
    data: Enumerable<RackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Rack update
   */
  export type RackUpdateArgs = {
    /**
     * Select specific fields to fetch from the Rack
     * 
    **/
    select?: RackSelect | null
    /**
     * The data needed to update a Rack.
     * 
    **/
    data: XOR<RackUpdateInput, RackUncheckedUpdateInput>
    /**
     * Choose, which Rack to update.
     * 
    **/
    where: RackWhereUniqueInput
  }


  /**
   * Rack updateMany
   */
  export type RackUpdateManyArgs = {
    /**
     * The data used to update Racks.
     * 
    **/
    data: XOR<RackUpdateManyMutationInput, RackUncheckedUpdateManyInput>
    /**
     * Filter which Racks to update
     * 
    **/
    where?: RackWhereInput
  }


  /**
   * Rack upsert
   */
  export type RackUpsertArgs = {
    /**
     * Select specific fields to fetch from the Rack
     * 
    **/
    select?: RackSelect | null
    /**
     * The filter to search for the Rack to update in case it exists.
     * 
    **/
    where: RackWhereUniqueInput
    /**
     * In case the Rack found by the `where` argument doesn't exist, create a new Rack with this data.
     * 
    **/
    create: XOR<RackCreateInput, RackUncheckedCreateInput>
    /**
     * In case the Rack was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RackUpdateInput, RackUncheckedUpdateInput>
  }


  /**
   * Rack delete
   */
  export type RackDeleteArgs = {
    /**
     * Select specific fields to fetch from the Rack
     * 
    **/
    select?: RackSelect | null
    /**
     * Filter which Rack to delete.
     * 
    **/
    where: RackWhereUniqueInput
  }


  /**
   * Rack deleteMany
   */
  export type RackDeleteManyArgs = {
    /**
     * Filter which Racks to delete
     * 
    **/
    where?: RackWhereInput
  }


  /**
   * Rack: findUniqueOrThrow
   */
  export type RackFindUniqueOrThrowArgs = RackFindUniqueArgsBase
      

  /**
   * Rack: findFirstOrThrow
   */
  export type RackFindFirstOrThrowArgs = RackFindFirstArgsBase
      

  /**
   * Rack without action
   */
  export type RackArgs = {
    /**
     * Select specific fields to fetch from the Rack
     * 
    **/
    select?: RackSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountOrderByRelevanceFieldEnum: {
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
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const AccountScalarFieldEnum: {
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
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const CategoryProductScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    cat_id: 'cat_id'
  };

  export type CategoryProductScalarFieldEnum = (typeof CategoryProductScalarFieldEnum)[keyof typeof CategoryProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parent_id: 'parent_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    phone: 'phone',
    address: 'address'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    address: 'address',
    created: 'created'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    order_id: 'order_id',
    product_id: 'product_id',
    sku_id: 'sku_id',
    variation_id: 'variation_id',
    count: 'count'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    status: 'status',
    sub_total: 'sub_total',
    total: 'total',
    created: 'created'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductOptionOrderByRelevanceFieldEnum: {
    name: 'name',
    options: 'options'
  };

  export type ProductOptionOrderByRelevanceFieldEnum = (typeof ProductOptionOrderByRelevanceFieldEnum)[keyof typeof ProductOptionOrderByRelevanceFieldEnum]


  export const ProductOptionScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    name: 'name',
    options: 'options'
  };

  export type ProductOptionScalarFieldEnum = (typeof ProductOptionScalarFieldEnum)[keyof typeof ProductOptionScalarFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    rack_name: 'rack_name',
    marketing_status: 'marketing_status',
    hscode: 'hscode',
    name: 'name'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    rack_name: 'rack_name',
    marketing_status: 'marketing_status',
    hscode: 'hscode',
    weight: 'weight',
    name: 'name'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PromoOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type PromoOrderByRelevanceFieldEnum = (typeof PromoOrderByRelevanceFieldEnum)[keyof typeof PromoOrderByRelevanceFieldEnum]


  export const PromoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    value: 'value'
  };

  export type PromoScalarFieldEnum = (typeof PromoScalarFieldEnum)[keyof typeof PromoScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RackOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RackOrderByRelevanceFieldEnum = (typeof RackOrderByRelevanceFieldEnum)[keyof typeof RackOrderByRelevanceFieldEnum]


  export const RackScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RackScalarFieldEnum = (typeof RackScalarFieldEnum)[keyof typeof RackScalarFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SkuOrderByRelevanceFieldEnum: {
    id: 'id'
  };

  export type SkuOrderByRelevanceFieldEnum = (typeof SkuOrderByRelevanceFieldEnum)[keyof typeof SkuOrderByRelevanceFieldEnum]


  export const SkuScalarFieldEnum: {
    id: 'id',
    stock: 'stock',
    variation_id: 'variation_id',
    product_id: 'product_id',
    last_restock: 'last_restock'
  };

  export type SkuScalarFieldEnum = (typeof SkuScalarFieldEnum)[keyof typeof SkuScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SupplierOrderByRelevanceFieldEnum: {
    name: 'name',
    note: 'note',
    link: 'link'
  };

  export type SupplierOrderByRelevanceFieldEnum = (typeof SupplierOrderByRelevanceFieldEnum)[keyof typeof SupplierOrderByRelevanceFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    type_id: 'type_id',
    name: 'name',
    note: 'note',
    link: 'link',
    stock_ongoing: 'stock_ongoing',
    stock_ready: 'stock_ready',
    created: 'created'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const SupplierTypeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type SupplierTypeOrderByRelevanceFieldEnum = (typeof SupplierTypeOrderByRelevanceFieldEnum)[keyof typeof SupplierTypeOrderByRelevanceFieldEnum]


  export const SupplierTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SupplierTypeScalarFieldEnum = (typeof SupplierTypeScalarFieldEnum)[keyof typeof SupplierTypeScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    email: 'email',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VariationOrderByRelevanceFieldEnum: {
    names: 'names',
    values: 'values'
  };

  export type VariationOrderByRelevanceFieldEnum = (typeof VariationOrderByRelevanceFieldEnum)[keyof typeof VariationOrderByRelevanceFieldEnum]


  export const VariationScalarFieldEnum: {
    id: 'id',
    names: 'names',
    values: 'values',
    price: 'price',
    product_id: 'product_id',
    is_default: 'is_default'
  };

  export type VariationScalarFieldEnum = (typeof VariationScalarFieldEnum)[keyof typeof VariationScalarFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sessionToken?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sessionToken?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    username?: StringFilter | string
    password?: StringFilter | string
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    username?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: Enumerable<VerificationTokenWhereInput>
    OR?: Enumerable<VerificationTokenWhereInput>
    NOT?: Enumerable<VerificationTokenWhereInput>
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type VerificationTokenOrderByWithRelationAndSearchRelevanceInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = {
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
  }

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    parent_id?: IntFilter | number
    products?: CategoryProductListRelationFilter
  }

  export type CategoryOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
    products?: CategoryProductOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = {
    id?: number
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    parent_id?: IntWithAggregatesFilter | number
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: IntFilter | number
    rack_name?: StringFilter | string
    marketing_status?: StringFilter | string
    hscode?: StringFilter | string
    weight?: IntFilter | number
    name?: StringFilter | string
    sku?: SkuListRelationFilter
    options?: ProductOptionListRelationFilter
    variation?: VariationListRelationFilter
    order_items?: OrderItemListRelationFilter
    categories?: CategoryProductListRelationFilter
  }

  export type ProductOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    rack_name?: SortOrder
    marketing_status?: SortOrder
    hscode?: SortOrder
    weight?: SortOrder
    name?: SortOrder
    sku?: SkuOrderByRelationAggregateInput
    options?: ProductOptionOrderByRelationAggregateInput
    variation?: VariationOrderByRelationAggregateInput
    order_items?: OrderItemOrderByRelationAggregateInput
    categories?: CategoryProductOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = {
    id?: number
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    rack_name?: SortOrder
    marketing_status?: SortOrder
    hscode?: SortOrder
    weight?: SortOrder
    name?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    rack_name?: StringWithAggregatesFilter | string
    marketing_status?: StringWithAggregatesFilter | string
    hscode?: StringWithAggregatesFilter | string
    weight?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type CategoryProductWhereInput = {
    AND?: Enumerable<CategoryProductWhereInput>
    OR?: Enumerable<CategoryProductWhereInput>
    NOT?: Enumerable<CategoryProductWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    cat_id?: IntFilter | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type CategoryProductOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    product_id?: SortOrder
    cat_id?: SortOrder
    category?: CategoryOrderByWithRelationAndSearchRelevanceInput
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
  }

  export type CategoryProductWhereUniqueInput = {
    id?: number
  }

  export type CategoryProductOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    cat_id?: SortOrder
    _count?: CategoryProductCountOrderByAggregateInput
    _avg?: CategoryProductAvgOrderByAggregateInput
    _max?: CategoryProductMaxOrderByAggregateInput
    _min?: CategoryProductMinOrderByAggregateInput
    _sum?: CategoryProductSumOrderByAggregateInput
  }

  export type CategoryProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryProductScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    cat_id?: IntWithAggregatesFilter | number
  }

  export type ProductOptionWhereInput = {
    AND?: Enumerable<ProductOptionWhereInput>
    OR?: Enumerable<ProductOptionWhereInput>
    NOT?: Enumerable<ProductOptionWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    name?: StringFilter | string
    options?: StringNullableListFilter
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductOptionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    options?: SortOrder
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
    _relevance?: ProductOptionOrderByRelevanceInput
  }

  export type ProductOptionWhereUniqueInput = {
    id?: number
  }

  export type ProductOptionOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    options?: SortOrder
    _count?: ProductOptionCountOrderByAggregateInput
    _avg?: ProductOptionAvgOrderByAggregateInput
    _max?: ProductOptionMaxOrderByAggregateInput
    _min?: ProductOptionMinOrderByAggregateInput
    _sum?: ProductOptionSumOrderByAggregateInput
  }

  export type ProductOptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductOptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductOptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductOptionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    options?: StringNullableListFilter
  }

  export type SkuWhereInput = {
    AND?: Enumerable<SkuWhereInput>
    OR?: Enumerable<SkuWhereInput>
    NOT?: Enumerable<SkuWhereInput>
    id?: StringFilter | string
    stock?: IntFilter | number
    variation_id?: IntFilter | number
    product_id?: IntFilter | number
    last_restock?: DateTimeNullableFilter | Date | string | null
    variation?: XOR<VariationRelationFilter, VariationWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type SkuOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    stock?: SortOrder
    variation_id?: SortOrder
    product_id?: SortOrder
    last_restock?: SortOrder
    variation?: VariationOrderByWithRelationAndSearchRelevanceInput
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
    _relevance?: SkuOrderByRelevanceInput
  }

  export type SkuWhereUniqueInput = {
    id?: string
    variation_id?: number
  }

  export type SkuOrderByWithAggregationInput = {
    id?: SortOrder
    stock?: SortOrder
    variation_id?: SortOrder
    product_id?: SortOrder
    last_restock?: SortOrder
    _count?: SkuCountOrderByAggregateInput
    _avg?: SkuAvgOrderByAggregateInput
    _max?: SkuMaxOrderByAggregateInput
    _min?: SkuMinOrderByAggregateInput
    _sum?: SkuSumOrderByAggregateInput
  }

  export type SkuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SkuScalarWhereWithAggregatesInput>
    OR?: Enumerable<SkuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SkuScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    stock?: IntWithAggregatesFilter | number
    variation_id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    last_restock?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type VariationWhereInput = {
    AND?: Enumerable<VariationWhereInput>
    OR?: Enumerable<VariationWhereInput>
    NOT?: Enumerable<VariationWhereInput>
    id?: IntFilter | number
    names?: StringNullableListFilter
    values?: StringNullableListFilter
    price?: IntFilter | number
    product_id?: IntFilter | number
    is_default?: BoolFilter | boolean
    sku?: XOR<SkuRelationFilter, SkuWhereInput> | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    order_items?: OrderItemListRelationFilter
  }

  export type VariationOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    names?: SortOrder
    values?: SortOrder
    price?: SortOrder
    product_id?: SortOrder
    is_default?: SortOrder
    sku?: SkuOrderByWithRelationAndSearchRelevanceInput
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
    order_items?: OrderItemOrderByRelationAggregateInput
    _relevance?: VariationOrderByRelevanceInput
  }

  export type VariationWhereUniqueInput = {
    id?: number
  }

  export type VariationOrderByWithAggregationInput = {
    id?: SortOrder
    names?: SortOrder
    values?: SortOrder
    price?: SortOrder
    product_id?: SortOrder
    is_default?: SortOrder
    _count?: VariationCountOrderByAggregateInput
    _avg?: VariationAvgOrderByAggregateInput
    _max?: VariationMaxOrderByAggregateInput
    _min?: VariationMinOrderByAggregateInput
    _sum?: VariationSumOrderByAggregateInput
  }

  export type VariationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VariationScalarWhereWithAggregatesInput>
    OR?: Enumerable<VariationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VariationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    names?: StringNullableListFilter
    values?: StringNullableListFilter
    price?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    is_default?: BoolWithAggregatesFilter | boolean
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    id?: IntFilter | number
    customer_id?: IntFilter | number
    status?: EnumStatusOrderFilter | StatusOrder
    items?: OrderItemListRelationFilter
    sub_total?: IntFilter | number
    total?: IntFilter | number
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    created?: DateTimeFilter | Date | string
  }

  export type OrderOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    items?: OrderItemOrderByRelationAggregateInput
    sub_total?: SortOrder
    total?: SortOrder
    customer?: CustomerOrderByWithRelationAndSearchRelevanceInput
    created?: SortOrder
  }

  export type OrderWhereUniqueInput = {
    id?: number
  }

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    sub_total?: SortOrder
    total?: SortOrder
    created?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    customer_id?: IntWithAggregatesFilter | number
    status?: EnumStatusOrderWithAggregatesFilter | StatusOrder
    sub_total?: IntWithAggregatesFilter | number
    total?: IntWithAggregatesFilter | number
    created?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: IntFilter | number
    phone?: StringFilter | string
    address?: StringFilter | string
    orders?: OrderListRelationFilter
    created?: DateTimeFilter | Date | string
  }

  export type CustomerOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    created?: SortOrder
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = {
    id?: number
    phone?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    phone?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    created?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: Enumerable<OrderItemWhereInput>
    OR?: Enumerable<OrderItemWhereInput>
    NOT?: Enumerable<OrderItemWhereInput>
    order_id?: IntFilter | number
    product_id?: IntFilter | number
    sku_id?: IntFilter | number
    variation_id?: IntFilter | number
    count?: IntFilter | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    variation?: XOR<VariationRelationFilter, VariationWhereInput>
  }

  export type OrderItemOrderByWithRelationAndSearchRelevanceInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    sku_id?: SortOrder
    variation_id?: SortOrder
    count?: SortOrder
    order?: OrderOrderByWithRelationAndSearchRelevanceInput
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
    variation?: VariationOrderByWithRelationAndSearchRelevanceInput
  }

  export type OrderItemWhereUniqueInput = {
    product_id_sku_id?: OrderItemProduct_idSku_idCompoundUniqueInput
  }

  export type OrderItemOrderByWithAggregationInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    sku_id?: SortOrder
    variation_id?: SortOrder
    count?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    order_id?: IntWithAggregatesFilter | number
    product_id?: IntWithAggregatesFilter | number
    sku_id?: IntWithAggregatesFilter | number
    variation_id?: IntWithAggregatesFilter | number
    count?: IntWithAggregatesFilter | number
  }

  export type PromoWhereInput = {
    AND?: Enumerable<PromoWhereInput>
    OR?: Enumerable<PromoWhereInput>
    NOT?: Enumerable<PromoWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    type?: EnumDiscountTypeFilter | DiscountType
    value?: IntFilter | number
  }

  export type PromoOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    _relevance?: PromoOrderByRelevanceInput
  }

  export type PromoWhereUniqueInput = {
    id?: number
  }

  export type PromoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    _count?: PromoCountOrderByAggregateInput
    _avg?: PromoAvgOrderByAggregateInput
    _max?: PromoMaxOrderByAggregateInput
    _min?: PromoMinOrderByAggregateInput
    _sum?: PromoSumOrderByAggregateInput
  }

  export type PromoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PromoScalarWhereWithAggregatesInput>
    OR?: Enumerable<PromoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PromoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    type?: EnumDiscountTypeWithAggregatesFilter | DiscountType
    value?: IntWithAggregatesFilter | number
  }

  export type SupplierWhereInput = {
    AND?: Enumerable<SupplierWhereInput>
    OR?: Enumerable<SupplierWhereInput>
    NOT?: Enumerable<SupplierWhereInput>
    id?: IntFilter | number
    type_id?: IntFilter | number
    name?: StringFilter | string
    note?: StringFilter | string
    link?: StringFilter | string
    stock_ongoing?: IntFilter | number
    stock_ready?: IntFilter | number
    type?: XOR<SupplierTypeRelationFilter, SupplierTypeWhereInput>
    created?: DateTimeFilter | Date | string
  }

  export type SupplierOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    note?: SortOrder
    link?: SortOrder
    stock_ongoing?: SortOrder
    stock_ready?: SortOrder
    type?: SupplierTypeOrderByWithRelationAndSearchRelevanceInput
    created?: SortOrder
    _relevance?: SupplierOrderByRelevanceInput
  }

  export type SupplierWhereUniqueInput = {
    id?: number
  }

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    note?: SortOrder
    link?: SortOrder
    stock_ongoing?: SortOrder
    stock_ready?: SortOrder
    created?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SupplierScalarWhereWithAggregatesInput>
    OR?: Enumerable<SupplierScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SupplierScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    note?: StringWithAggregatesFilter | string
    link?: StringWithAggregatesFilter | string
    stock_ongoing?: IntWithAggregatesFilter | number
    stock_ready?: IntWithAggregatesFilter | number
    created?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SupplierTypeWhereInput = {
    AND?: Enumerable<SupplierTypeWhereInput>
    OR?: Enumerable<SupplierTypeWhereInput>
    NOT?: Enumerable<SupplierTypeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    suppliers?: SupplierListRelationFilter
  }

  export type SupplierTypeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    suppliers?: SupplierOrderByRelationAggregateInput
    _relevance?: SupplierTypeOrderByRelevanceInput
  }

  export type SupplierTypeWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type SupplierTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SupplierTypeCountOrderByAggregateInput
    _avg?: SupplierTypeAvgOrderByAggregateInput
    _max?: SupplierTypeMaxOrderByAggregateInput
    _min?: SupplierTypeMinOrderByAggregateInput
    _sum?: SupplierTypeSumOrderByAggregateInput
  }

  export type SupplierTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SupplierTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<SupplierTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SupplierTypeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type RackWhereInput = {
    AND?: Enumerable<RackWhereInput>
    OR?: Enumerable<RackWhereInput>
    NOT?: Enumerable<RackWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type RackOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    _relevance?: RackOrderByRelevanceInput
  }

  export type RackWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type RackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RackCountOrderByAggregateInput
    _avg?: RackAvgOrderByAggregateInput
    _max?: RackMaxOrderByAggregateInput
    _min?: RackMinOrderByAggregateInput
    _sum?: RackSumOrderByAggregateInput
  }

  export type RackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RackScalarWhereWithAggregatesInput>
    OR?: Enumerable<RackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RackScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    parent_id: number
    products?: CategoryProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    parent_id: number
    products?: CategoryProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
    products?: CategoryProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
    products?: CategoryProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    parent_id: number
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    variation?: VariationCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    categories?: CategoryProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    variation?: VariationUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    categories?: CategoryProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    variation?: VariationUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    variation?: VariationUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
  }

  export type ProductUpdateManyMutationInput = {
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryProductCreateInput = {
    category: CategoryCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryProductUncheckedCreateInput = {
    id?: number
    product_id: number
    cat_id: number
  }

  export type CategoryProductUpdateInput = {
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    cat_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryProductCreateManyInput = {
    id?: number
    product_id: number
    cat_id: number
  }

  export type CategoryProductUpdateManyMutationInput = {

  }

  export type CategoryProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    cat_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOptionCreateInput = {
    name: string
    options?: ProductOptionCreateoptionsInput | Enumerable<string>
    product: ProductCreateNestedOneWithoutOptionsInput
  }

  export type ProductOptionUncheckedCreateInput = {
    id?: number
    product_id: number
    name: string
    options?: ProductOptionCreateoptionsInput | Enumerable<string>
  }

  export type ProductOptionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    options?: ProductOptionUpdateoptionsInput | Enumerable<string>
    product?: ProductUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type ProductOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    options?: ProductOptionUpdateoptionsInput | Enumerable<string>
  }

  export type ProductOptionCreateManyInput = {
    id?: number
    product_id: number
    name: string
    options?: ProductOptionCreateoptionsInput | Enumerable<string>
  }

  export type ProductOptionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    options?: ProductOptionUpdateoptionsInput | Enumerable<string>
  }

  export type ProductOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    options?: ProductOptionUpdateoptionsInput | Enumerable<string>
  }

  export type SkuCreateInput = {
    id: string
    stock?: number
    last_restock?: Date | string | null
    variation: VariationCreateNestedOneWithoutSkuInput
    product: ProductCreateNestedOneWithoutSkuInput
  }

  export type SkuUncheckedCreateInput = {
    id: string
    stock?: number
    variation_id: number
    product_id: number
    last_restock?: Date | string | null
  }

  export type SkuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    last_restock?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    variation?: VariationUpdateOneRequiredWithoutSkuNestedInput
    product?: ProductUpdateOneRequiredWithoutSkuNestedInput
  }

  export type SkuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    last_restock?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkuCreateManyInput = {
    id: string
    stock?: number
    variation_id: number
    product_id: number
    last_restock?: Date | string | null
  }

  export type SkuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    last_restock?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    last_restock?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VariationCreateInput = {
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    is_default?: boolean
    sku?: SkuCreateNestedOneWithoutVariationInput
    product: ProductCreateNestedOneWithoutVariationInput
    order_items?: OrderItemCreateNestedManyWithoutVariationInput
  }

  export type VariationUncheckedCreateInput = {
    id?: number
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    product_id: number
    is_default?: boolean
    sku?: SkuUncheckedCreateNestedOneWithoutVariationInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutVariationInput
  }

  export type VariationUpdateInput = {
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
    sku?: SkuUpdateOneWithoutVariationNestedInput
    product?: ProductUpdateOneRequiredWithoutVariationNestedInput
    order_items?: OrderItemUpdateManyWithoutVariationNestedInput
  }

  export type VariationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
    sku?: SkuUncheckedUpdateOneWithoutVariationNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutVariationNestedInput
  }

  export type VariationCreateManyInput = {
    id?: number
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    product_id: number
    is_default?: boolean
  }

  export type VariationUpdateManyMutationInput = {
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VariationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderCreateInput = {
    status: StatusOrder
    items?: OrderItemCreateNestedManyWithoutOrderInput
    sub_total: number
    total: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    created?: Date | string
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    customer_id: number
    status: StatusOrder
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    sub_total: number
    total: number
    created?: Date | string
  }

  export type OrderUpdateInput = {
    status?: EnumStatusOrderFieldUpdateOperationsInput | StatusOrder
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    sub_total?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusOrderFieldUpdateOperationsInput | StatusOrder
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    sub_total?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    customer_id: number
    status: StatusOrder
    sub_total: number
    total: number
    created?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    status?: EnumStatusOrderFieldUpdateOperationsInput | StatusOrder
    sub_total?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusOrderFieldUpdateOperationsInput | StatusOrder
    sub_total?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    phone: string
    address: string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    created?: Date | string
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    phone: string
    address: string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    created?: Date | string
  }

  export type CustomerUpdateInput = {
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateManyInput = {
    id?: number
    phone: string
    address: string
    created?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    sku_id: number
    count: number
    order: OrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOrder_itemsInput
    variation: VariationCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    order_id: number
    product_id: number
    sku_id: number
    variation_id: number
    count: number
  }

  export type OrderItemUpdateInput = {
    sku_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrder_itemsNestedInput
    variation?: VariationUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    order_id: number
    product_id: number
    sku_id: number
    variation_id: number
    count: number
  }

  export type OrderItemUpdateManyMutationInput = {
    sku_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type PromoCreateInput = {
    name: string
    type: DiscountType
    value: number
  }

  export type PromoUncheckedCreateInput = {
    id?: number
    name: string
    type: DiscountType
    value: number
  }

  export type PromoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDiscountTypeFieldUpdateOperationsInput | DiscountType
    value?: IntFieldUpdateOperationsInput | number
  }

  export type PromoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDiscountTypeFieldUpdateOperationsInput | DiscountType
    value?: IntFieldUpdateOperationsInput | number
  }

  export type PromoCreateManyInput = {
    id?: number
    name: string
    type: DiscountType
    value: number
  }

  export type PromoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDiscountTypeFieldUpdateOperationsInput | DiscountType
    value?: IntFieldUpdateOperationsInput | number
  }

  export type PromoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDiscountTypeFieldUpdateOperationsInput | DiscountType
    value?: IntFieldUpdateOperationsInput | number
  }

  export type SupplierCreateInput = {
    name: string
    note: string
    link: string
    stock_ongoing?: number
    stock_ready?: number
    type: SupplierTypeCreateNestedOneWithoutSuppliersInput
    created?: Date | string
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    type_id: number
    name: string
    note: string
    link: string
    stock_ongoing?: number
    stock_ready?: number
    created?: Date | string
  }

  export type SupplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    stock_ongoing?: IntFieldUpdateOperationsInput | number
    stock_ready?: IntFieldUpdateOperationsInput | number
    type?: SupplierTypeUpdateOneRequiredWithoutSuppliersNestedInput
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    stock_ongoing?: IntFieldUpdateOperationsInput | number
    stock_ready?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateManyInput = {
    id?: number
    type_id: number
    name: string
    note: string
    link: string
    stock_ongoing?: number
    stock_ready?: number
    created?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    stock_ongoing?: IntFieldUpdateOperationsInput | number
    stock_ready?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    stock_ongoing?: IntFieldUpdateOperationsInput | number
    stock_ready?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierTypeCreateInput = {
    name: string
    suppliers?: SupplierCreateNestedManyWithoutTypeInput
  }

  export type SupplierTypeUncheckedCreateInput = {
    id?: number
    name: string
    suppliers?: SupplierUncheckedCreateNestedManyWithoutTypeInput
  }

  export type SupplierTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    suppliers?: SupplierUpdateManyWithoutTypeNestedInput
  }

  export type SupplierTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    suppliers?: SupplierUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type SupplierTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type SupplierTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RackCreateInput = {
    name: string
  }

  export type RackUncheckedCreateInput = {
    id?: number
    name: string
  }

  export type RackUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RackCreateManyInput = {
    id?: number
    name: string
  }

  export type RackUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountOrderByRelevanceInput = {
    fields: Enumerable<AccountOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionOrderByRelevanceInput = {
    fields: Enumerable<SessionOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: Enumerable<UserOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: Enumerable<VerificationTokenOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type CategoryProductListRelationFilter = {
    every?: CategoryProductWhereInput
    some?: CategoryProductWhereInput
    none?: CategoryProductWhereInput
  }

  export type CategoryProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: Enumerable<CategoryOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type SkuListRelationFilter = {
    every?: SkuWhereInput
    some?: SkuWhereInput
    none?: SkuWhereInput
  }

  export type ProductOptionListRelationFilter = {
    every?: ProductOptionWhereInput
    some?: ProductOptionWhereInput
    none?: ProductOptionWhereInput
  }

  export type VariationListRelationFilter = {
    every?: VariationWhereInput
    some?: VariationWhereInput
    none?: VariationWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type SkuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: Enumerable<ProductOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    rack_name?: SortOrder
    marketing_status?: SortOrder
    hscode?: SortOrder
    weight?: SortOrder
    name?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    rack_name?: SortOrder
    marketing_status?: SortOrder
    hscode?: SortOrder
    weight?: SortOrder
    name?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    rack_name?: SortOrder
    marketing_status?: SortOrder
    hscode?: SortOrder
    weight?: SortOrder
    name?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CategoryProductCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cat_id?: SortOrder
  }

  export type CategoryProductAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cat_id?: SortOrder
  }

  export type CategoryProductMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cat_id?: SortOrder
  }

  export type CategoryProductMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cat_id?: SortOrder
  }

  export type CategoryProductSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    cat_id?: SortOrder
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type ProductOptionOrderByRelevanceInput = {
    fields: Enumerable<ProductOptionOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type ProductOptionCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    options?: SortOrder
  }

  export type ProductOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type ProductOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
  }

  export type ProductOptionMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
  }

  export type ProductOptionSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type VariationRelationFilter = {
    is?: VariationWhereInput
    isNot?: VariationWhereInput
  }

  export type SkuOrderByRelevanceInput = {
    fields: Enumerable<SkuOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type SkuCountOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    variation_id?: SortOrder
    product_id?: SortOrder
    last_restock?: SortOrder
  }

  export type SkuAvgOrderByAggregateInput = {
    stock?: SortOrder
    variation_id?: SortOrder
    product_id?: SortOrder
  }

  export type SkuMaxOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    variation_id?: SortOrder
    product_id?: SortOrder
    last_restock?: SortOrder
  }

  export type SkuMinOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    variation_id?: SortOrder
    product_id?: SortOrder
    last_restock?: SortOrder
  }

  export type SkuSumOrderByAggregateInput = {
    stock?: SortOrder
    variation_id?: SortOrder
    product_id?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type SkuRelationFilter = {
    is?: SkuWhereInput | null
    isNot?: SkuWhereInput | null
  }

  export type VariationOrderByRelevanceInput = {
    fields: Enumerable<VariationOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type VariationCountOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    values?: SortOrder
    price?: SortOrder
    product_id?: SortOrder
    is_default?: SortOrder
  }

  export type VariationAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    product_id?: SortOrder
  }

  export type VariationMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    product_id?: SortOrder
    is_default?: SortOrder
  }

  export type VariationMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    product_id?: SortOrder
    is_default?: SortOrder
  }

  export type VariationSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    product_id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumStatusOrderFilter = {
    equals?: StatusOrder
    in?: Enumerable<StatusOrder>
    notIn?: Enumerable<StatusOrder>
    not?: NestedEnumStatusOrderFilter | StatusOrder
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    sub_total?: SortOrder
    total?: SortOrder
    created?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    sub_total?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    sub_total?: SortOrder
    total?: SortOrder
    created?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    status?: SortOrder
    sub_total?: SortOrder
    total?: SortOrder
    created?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    sub_total?: SortOrder
    total?: SortOrder
  }

  export type EnumStatusOrderWithAggregatesFilter = {
    equals?: StatusOrder
    in?: Enumerable<StatusOrder>
    notIn?: Enumerable<StatusOrder>
    not?: NestedEnumStatusOrderWithAggregatesFilter | StatusOrder
    _count?: NestedIntFilter
    _min?: NestedEnumStatusOrderFilter
    _max?: NestedEnumStatusOrderFilter
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: Enumerable<CustomerOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemProduct_idSku_idCompoundUniqueInput = {
    product_id: number
    sku_id: number
  }

  export type OrderItemCountOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    sku_id?: SortOrder
    variation_id?: SortOrder
    count?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    sku_id?: SortOrder
    variation_id?: SortOrder
    count?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    sku_id?: SortOrder
    variation_id?: SortOrder
    count?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    sku_id?: SortOrder
    variation_id?: SortOrder
    count?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    order_id?: SortOrder
    product_id?: SortOrder
    sku_id?: SortOrder
    variation_id?: SortOrder
    count?: SortOrder
  }

  export type EnumDiscountTypeFilter = {
    equals?: DiscountType
    in?: Enumerable<DiscountType>
    notIn?: Enumerable<DiscountType>
    not?: NestedEnumDiscountTypeFilter | DiscountType
  }

  export type PromoOrderByRelevanceInput = {
    fields: Enumerable<PromoOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type PromoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type PromoAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type PromoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type PromoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type PromoSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type EnumDiscountTypeWithAggregatesFilter = {
    equals?: DiscountType
    in?: Enumerable<DiscountType>
    notIn?: Enumerable<DiscountType>
    not?: NestedEnumDiscountTypeWithAggregatesFilter | DiscountType
    _count?: NestedIntFilter
    _min?: NestedEnumDiscountTypeFilter
    _max?: NestedEnumDiscountTypeFilter
  }

  export type SupplierTypeRelationFilter = {
    is?: SupplierTypeWhereInput
    isNot?: SupplierTypeWhereInput
  }

  export type SupplierOrderByRelevanceInput = {
    fields: Enumerable<SupplierOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    note?: SortOrder
    link?: SortOrder
    stock_ongoing?: SortOrder
    stock_ready?: SortOrder
    created?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    stock_ongoing?: SortOrder
    stock_ready?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    note?: SortOrder
    link?: SortOrder
    stock_ongoing?: SortOrder
    stock_ready?: SortOrder
    created?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    note?: SortOrder
    link?: SortOrder
    stock_ongoing?: SortOrder
    stock_ready?: SortOrder
    created?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
    type_id?: SortOrder
    stock_ongoing?: SortOrder
    stock_ready?: SortOrder
  }

  export type SupplierListRelationFilter = {
    every?: SupplierWhereInput
    some?: SupplierWhereInput
    none?: SupplierWhereInput
  }

  export type SupplierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierTypeOrderByRelevanceInput = {
    fields: Enumerable<SupplierTypeOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type SupplierTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SupplierTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SupplierTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SupplierTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RackOrderByRelevanceInput = {
    fields: Enumerable<RackOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type RackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type CategoryProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<CategoryProductCreateWithoutCategoryInput>, Enumerable<CategoryProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<CategoryProductCreateOrConnectWithoutCategoryInput>
    createMany?: CategoryProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<CategoryProductWhereUniqueInput>
  }

  export type CategoryProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<CategoryProductCreateWithoutCategoryInput>, Enumerable<CategoryProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<CategoryProductCreateOrConnectWithoutCategoryInput>
    createMany?: CategoryProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<CategoryProductWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<CategoryProductCreateWithoutCategoryInput>, Enumerable<CategoryProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<CategoryProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<CategoryProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: CategoryProductCreateManyCategoryInputEnvelope
    set?: Enumerable<CategoryProductWhereUniqueInput>
    disconnect?: Enumerable<CategoryProductWhereUniqueInput>
    delete?: Enumerable<CategoryProductWhereUniqueInput>
    connect?: Enumerable<CategoryProductWhereUniqueInput>
    update?: Enumerable<CategoryProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<CategoryProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<CategoryProductScalarWhereInput>
  }

  export type CategoryProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<CategoryProductCreateWithoutCategoryInput>, Enumerable<CategoryProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<CategoryProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<CategoryProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: CategoryProductCreateManyCategoryInputEnvelope
    set?: Enumerable<CategoryProductWhereUniqueInput>
    disconnect?: Enumerable<CategoryProductWhereUniqueInput>
    delete?: Enumerable<CategoryProductWhereUniqueInput>
    connect?: Enumerable<CategoryProductWhereUniqueInput>
    update?: Enumerable<CategoryProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<CategoryProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<CategoryProductScalarWhereInput>
  }

  export type SkuCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<SkuCreateWithoutProductInput>, Enumerable<SkuUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutProductInput>
    createMany?: SkuCreateManyProductInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type ProductOptionCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductOptionCreateWithoutProductInput>, Enumerable<ProductOptionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductOptionCreateOrConnectWithoutProductInput>
    createMany?: ProductOptionCreateManyProductInputEnvelope
    connect?: Enumerable<ProductOptionWhereUniqueInput>
  }

  export type VariationCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<VariationCreateWithoutProductInput>, Enumerable<VariationUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<VariationCreateOrConnectWithoutProductInput>
    createMany?: VariationCreateManyProductInputEnvelope
    connect?: Enumerable<VariationWhereUniqueInput>
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type CategoryProductCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CategoryProductCreateWithoutProductInput>, Enumerable<CategoryProductUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CategoryProductCreateOrConnectWithoutProductInput>
    createMany?: CategoryProductCreateManyProductInputEnvelope
    connect?: Enumerable<CategoryProductWhereUniqueInput>
  }

  export type SkuUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<SkuCreateWithoutProductInput>, Enumerable<SkuUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutProductInput>
    createMany?: SkuCreateManyProductInputEnvelope
    connect?: Enumerable<SkuWhereUniqueInput>
  }

  export type ProductOptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductOptionCreateWithoutProductInput>, Enumerable<ProductOptionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductOptionCreateOrConnectWithoutProductInput>
    createMany?: ProductOptionCreateManyProductInputEnvelope
    connect?: Enumerable<ProductOptionWhereUniqueInput>
  }

  export type VariationUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<VariationCreateWithoutProductInput>, Enumerable<VariationUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<VariationCreateOrConnectWithoutProductInput>
    createMany?: VariationCreateManyProductInputEnvelope
    connect?: Enumerable<VariationWhereUniqueInput>
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type CategoryProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CategoryProductCreateWithoutProductInput>, Enumerable<CategoryProductUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CategoryProductCreateOrConnectWithoutProductInput>
    createMany?: CategoryProductCreateManyProductInputEnvelope
    connect?: Enumerable<CategoryProductWhereUniqueInput>
  }

  export type SkuUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<SkuCreateWithoutProductInput>, Enumerable<SkuUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutProductInput>
    createMany?: SkuCreateManyProductInputEnvelope
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    connect?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type ProductOptionUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductOptionCreateWithoutProductInput>, Enumerable<ProductOptionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductOptionCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductOptionUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductOptionCreateManyProductInputEnvelope
    set?: Enumerable<ProductOptionWhereUniqueInput>
    disconnect?: Enumerable<ProductOptionWhereUniqueInput>
    delete?: Enumerable<ProductOptionWhereUniqueInput>
    connect?: Enumerable<ProductOptionWhereUniqueInput>
    update?: Enumerable<ProductOptionUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductOptionUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductOptionScalarWhereInput>
  }

  export type VariationUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<VariationCreateWithoutProductInput>, Enumerable<VariationUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<VariationCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<VariationUpsertWithWhereUniqueWithoutProductInput>
    createMany?: VariationCreateManyProductInputEnvelope
    set?: Enumerable<VariationWhereUniqueInput>
    disconnect?: Enumerable<VariationWhereUniqueInput>
    delete?: Enumerable<VariationWhereUniqueInput>
    connect?: Enumerable<VariationWhereUniqueInput>
    update?: Enumerable<VariationUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<VariationUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<VariationScalarWhereInput>
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type CategoryProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CategoryProductCreateWithoutProductInput>, Enumerable<CategoryProductUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CategoryProductCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CategoryProductUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CategoryProductCreateManyProductInputEnvelope
    set?: Enumerable<CategoryProductWhereUniqueInput>
    disconnect?: Enumerable<CategoryProductWhereUniqueInput>
    delete?: Enumerable<CategoryProductWhereUniqueInput>
    connect?: Enumerable<CategoryProductWhereUniqueInput>
    update?: Enumerable<CategoryProductUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CategoryProductUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CategoryProductScalarWhereInput>
  }

  export type SkuUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<SkuCreateWithoutProductInput>, Enumerable<SkuUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<SkuCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<SkuUpsertWithWhereUniqueWithoutProductInput>
    createMany?: SkuCreateManyProductInputEnvelope
    set?: Enumerable<SkuWhereUniqueInput>
    disconnect?: Enumerable<SkuWhereUniqueInput>
    delete?: Enumerable<SkuWhereUniqueInput>
    connect?: Enumerable<SkuWhereUniqueInput>
    update?: Enumerable<SkuUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<SkuUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<SkuScalarWhereInput>
  }

  export type ProductOptionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductOptionCreateWithoutProductInput>, Enumerable<ProductOptionUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductOptionCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductOptionUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductOptionCreateManyProductInputEnvelope
    set?: Enumerable<ProductOptionWhereUniqueInput>
    disconnect?: Enumerable<ProductOptionWhereUniqueInput>
    delete?: Enumerable<ProductOptionWhereUniqueInput>
    connect?: Enumerable<ProductOptionWhereUniqueInput>
    update?: Enumerable<ProductOptionUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductOptionUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductOptionScalarWhereInput>
  }

  export type VariationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<VariationCreateWithoutProductInput>, Enumerable<VariationUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<VariationCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<VariationUpsertWithWhereUniqueWithoutProductInput>
    createMany?: VariationCreateManyProductInputEnvelope
    set?: Enumerable<VariationWhereUniqueInput>
    disconnect?: Enumerable<VariationWhereUniqueInput>
    delete?: Enumerable<VariationWhereUniqueInput>
    connect?: Enumerable<VariationWhereUniqueInput>
    update?: Enumerable<VariationUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<VariationUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<VariationScalarWhereInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type CategoryProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CategoryProductCreateWithoutProductInput>, Enumerable<CategoryProductUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CategoryProductCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CategoryProductUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CategoryProductCreateManyProductInputEnvelope
    set?: Enumerable<CategoryProductWhereUniqueInput>
    disconnect?: Enumerable<CategoryProductWhereUniqueInput>
    delete?: Enumerable<CategoryProductWhereUniqueInput>
    connect?: Enumerable<CategoryProductWhereUniqueInput>
    update?: Enumerable<CategoryProductUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CategoryProductUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CategoryProductScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    upsert?: ProductUpsertWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductOptionCreateoptionsInput = {
    set: Enumerable<string>
  }

  export type ProductCreateNestedOneWithoutOptionsInput = {
    create?: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOptionsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductOptionUpdateoptionsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ProductUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOptionsInput
    upsert?: ProductUpsertWithoutOptionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutOptionsInput, ProductUncheckedUpdateWithoutOptionsInput>
  }

  export type VariationCreateNestedOneWithoutSkuInput = {
    create?: XOR<VariationCreateWithoutSkuInput, VariationUncheckedCreateWithoutSkuInput>
    connectOrCreate?: VariationCreateOrConnectWithoutSkuInput
    connect?: VariationWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSkuInput = {
    create?: XOR<ProductCreateWithoutSkuInput, ProductUncheckedCreateWithoutSkuInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSkuInput
    connect?: ProductWhereUniqueInput
  }

  export type VariationUpdateOneRequiredWithoutSkuNestedInput = {
    create?: XOR<VariationCreateWithoutSkuInput, VariationUncheckedCreateWithoutSkuInput>
    connectOrCreate?: VariationCreateOrConnectWithoutSkuInput
    upsert?: VariationUpsertWithoutSkuInput
    connect?: VariationWhereUniqueInput
    update?: XOR<VariationUpdateWithoutSkuInput, VariationUncheckedUpdateWithoutSkuInput>
  }

  export type ProductUpdateOneRequiredWithoutSkuNestedInput = {
    create?: XOR<ProductCreateWithoutSkuInput, ProductUncheckedCreateWithoutSkuInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSkuInput
    upsert?: ProductUpsertWithoutSkuInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutSkuInput, ProductUncheckedUpdateWithoutSkuInput>
  }

  export type VariationCreatenamesInput = {
    set: Enumerable<string>
  }

  export type VariationCreatevaluesInput = {
    set: Enumerable<string>
  }

  export type SkuCreateNestedOneWithoutVariationInput = {
    create?: XOR<SkuCreateWithoutVariationInput, SkuUncheckedCreateWithoutVariationInput>
    connectOrCreate?: SkuCreateOrConnectWithoutVariationInput
    connect?: SkuWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutVariationInput = {
    create?: XOR<ProductCreateWithoutVariationInput, ProductUncheckedCreateWithoutVariationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariationInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutVariationInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutVariationInput>, Enumerable<OrderItemUncheckedCreateWithoutVariationInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutVariationInput>
    createMany?: OrderItemCreateManyVariationInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type SkuUncheckedCreateNestedOneWithoutVariationInput = {
    create?: XOR<SkuCreateWithoutVariationInput, SkuUncheckedCreateWithoutVariationInput>
    connectOrCreate?: SkuCreateOrConnectWithoutVariationInput
    connect?: SkuWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutVariationInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutVariationInput>, Enumerable<OrderItemUncheckedCreateWithoutVariationInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutVariationInput>
    createMany?: OrderItemCreateManyVariationInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type VariationUpdatenamesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type VariationUpdatevaluesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SkuUpdateOneWithoutVariationNestedInput = {
    create?: XOR<SkuCreateWithoutVariationInput, SkuUncheckedCreateWithoutVariationInput>
    connectOrCreate?: SkuCreateOrConnectWithoutVariationInput
    upsert?: SkuUpsertWithoutVariationInput
    disconnect?: boolean
    delete?: boolean
    connect?: SkuWhereUniqueInput
    update?: XOR<SkuUpdateWithoutVariationInput, SkuUncheckedUpdateWithoutVariationInput>
  }

  export type ProductUpdateOneRequiredWithoutVariationNestedInput = {
    create?: XOR<ProductCreateWithoutVariationInput, ProductUncheckedCreateWithoutVariationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariationInput
    upsert?: ProductUpsertWithoutVariationInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutVariationInput, ProductUncheckedUpdateWithoutVariationInput>
  }

  export type OrderItemUpdateManyWithoutVariationNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutVariationInput>, Enumerable<OrderItemUncheckedCreateWithoutVariationInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutVariationInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutVariationInput>
    createMany?: OrderItemCreateManyVariationInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutVariationInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutVariationInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type SkuUncheckedUpdateOneWithoutVariationNestedInput = {
    create?: XOR<SkuCreateWithoutVariationInput, SkuUncheckedCreateWithoutVariationInput>
    connectOrCreate?: SkuCreateOrConnectWithoutVariationInput
    upsert?: SkuUpsertWithoutVariationInput
    disconnect?: boolean
    delete?: boolean
    connect?: SkuWhereUniqueInput
    update?: XOR<SkuUpdateWithoutVariationInput, SkuUncheckedUpdateWithoutVariationInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutVariationNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutVariationInput>, Enumerable<OrderItemUncheckedCreateWithoutVariationInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutVariationInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutVariationInput>
    createMany?: OrderItemCreateManyVariationInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutVariationInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutVariationInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type EnumStatusOrderFieldUpdateOperationsInput = {
    set?: StatusOrder
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ProductCreateWithoutOrder_itemsInput, ProductUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrder_itemsInput
    connect?: ProductWhereUniqueInput
  }

  export type VariationCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<VariationCreateWithoutOrder_itemsInput, VariationUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: VariationCreateOrConnectWithoutOrder_itemsInput
    connect?: VariationWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrder_itemsInput, ProductUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrder_itemsInput
    upsert?: ProductUpsertWithoutOrder_itemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutOrder_itemsInput, ProductUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type VariationUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<VariationCreateWithoutOrder_itemsInput, VariationUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: VariationCreateOrConnectWithoutOrder_itemsInput
    upsert?: VariationUpsertWithoutOrder_itemsInput
    connect?: VariationWhereUniqueInput
    update?: XOR<VariationUpdateWithoutOrder_itemsInput, VariationUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type EnumDiscountTypeFieldUpdateOperationsInput = {
    set?: DiscountType
  }

  export type SupplierTypeCreateNestedOneWithoutSuppliersInput = {
    create?: XOR<SupplierTypeCreateWithoutSuppliersInput, SupplierTypeUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: SupplierTypeCreateOrConnectWithoutSuppliersInput
    connect?: SupplierTypeWhereUniqueInput
  }

  export type SupplierTypeUpdateOneRequiredWithoutSuppliersNestedInput = {
    create?: XOR<SupplierTypeCreateWithoutSuppliersInput, SupplierTypeUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: SupplierTypeCreateOrConnectWithoutSuppliersInput
    upsert?: SupplierTypeUpsertWithoutSuppliersInput
    connect?: SupplierTypeWhereUniqueInput
    update?: XOR<SupplierTypeUpdateWithoutSuppliersInput, SupplierTypeUncheckedUpdateWithoutSuppliersInput>
  }

  export type SupplierCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<SupplierCreateWithoutTypeInput>, Enumerable<SupplierUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<SupplierCreateOrConnectWithoutTypeInput>
    createMany?: SupplierCreateManyTypeInputEnvelope
    connect?: Enumerable<SupplierWhereUniqueInput>
  }

  export type SupplierUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<SupplierCreateWithoutTypeInput>, Enumerable<SupplierUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<SupplierCreateOrConnectWithoutTypeInput>
    createMany?: SupplierCreateManyTypeInputEnvelope
    connect?: Enumerable<SupplierWhereUniqueInput>
  }

  export type SupplierUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<SupplierCreateWithoutTypeInput>, Enumerable<SupplierUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<SupplierCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<SupplierUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: SupplierCreateManyTypeInputEnvelope
    set?: Enumerable<SupplierWhereUniqueInput>
    disconnect?: Enumerable<SupplierWhereUniqueInput>
    delete?: Enumerable<SupplierWhereUniqueInput>
    connect?: Enumerable<SupplierWhereUniqueInput>
    update?: Enumerable<SupplierUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<SupplierUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<SupplierScalarWhereInput>
  }

  export type SupplierUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<SupplierCreateWithoutTypeInput>, Enumerable<SupplierUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<SupplierCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<SupplierUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: SupplierCreateManyTypeInputEnvelope
    set?: Enumerable<SupplierWhereUniqueInput>
    disconnect?: Enumerable<SupplierWhereUniqueInput>
    delete?: Enumerable<SupplierWhereUniqueInput>
    connect?: Enumerable<SupplierWhereUniqueInput>
    update?: Enumerable<SupplierUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<SupplierUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<SupplierScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumStatusOrderFilter = {
    equals?: StatusOrder
    in?: Enumerable<StatusOrder>
    notIn?: Enumerable<StatusOrder>
    not?: NestedEnumStatusOrderFilter | StatusOrder
  }

  export type NestedEnumStatusOrderWithAggregatesFilter = {
    equals?: StatusOrder
    in?: Enumerable<StatusOrder>
    notIn?: Enumerable<StatusOrder>
    not?: NestedEnumStatusOrderWithAggregatesFilter | StatusOrder
    _count?: NestedIntFilter
    _min?: NestedEnumStatusOrderFilter
    _max?: NestedEnumStatusOrderFilter
  }

  export type NestedEnumDiscountTypeFilter = {
    equals?: DiscountType
    in?: Enumerable<DiscountType>
    notIn?: Enumerable<DiscountType>
    not?: NestedEnumDiscountTypeFilter | DiscountType
  }

  export type NestedEnumDiscountTypeWithAggregatesFilter = {
    equals?: DiscountType
    in?: Enumerable<DiscountType>
    notIn?: Enumerable<DiscountType>
    not?: NestedEnumDiscountTypeWithAggregatesFilter | DiscountType
    _count?: NestedIntFilter
    _min?: NestedEnumDiscountTypeFilter
    _max?: NestedEnumDiscountTypeFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type CategoryProductCreateWithoutCategoryInput = {
    product: ProductCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    product_id: number
  }

  export type CategoryProductCreateOrConnectWithoutCategoryInput = {
    where: CategoryProductWhereUniqueInput
    create: XOR<CategoryProductCreateWithoutCategoryInput, CategoryProductUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryProductCreateManyCategoryInputEnvelope = {
    data: Enumerable<CategoryProductCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type CategoryProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryProductWhereUniqueInput
    update: XOR<CategoryProductUpdateWithoutCategoryInput, CategoryProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryProductCreateWithoutCategoryInput, CategoryProductUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryProductWhereUniqueInput
    data: XOR<CategoryProductUpdateWithoutCategoryInput, CategoryProductUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryProductUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryProductScalarWhereInput
    data: XOR<CategoryProductUpdateManyMutationInput, CategoryProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type CategoryProductScalarWhereInput = {
    AND?: Enumerable<CategoryProductScalarWhereInput>
    OR?: Enumerable<CategoryProductScalarWhereInput>
    NOT?: Enumerable<CategoryProductScalarWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    cat_id?: IntFilter | number
  }

  export type SkuCreateWithoutProductInput = {
    id: string
    stock?: number
    last_restock?: Date | string | null
    variation: VariationCreateNestedOneWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutProductInput = {
    id: string
    stock?: number
    variation_id: number
    last_restock?: Date | string | null
  }

  export type SkuCreateOrConnectWithoutProductInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutProductInput, SkuUncheckedCreateWithoutProductInput>
  }

  export type SkuCreateManyProductInputEnvelope = {
    data: Enumerable<SkuCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ProductOptionCreateWithoutProductInput = {
    name: string
    options?: ProductOptionCreateoptionsInput | Enumerable<string>
  }

  export type ProductOptionUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    options?: ProductOptionCreateoptionsInput | Enumerable<string>
  }

  export type ProductOptionCreateOrConnectWithoutProductInput = {
    where: ProductOptionWhereUniqueInput
    create: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductOptionCreateManyProductInputEnvelope = {
    data: Enumerable<ProductOptionCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type VariationCreateWithoutProductInput = {
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    is_default?: boolean
    sku?: SkuCreateNestedOneWithoutVariationInput
    order_items?: OrderItemCreateNestedManyWithoutVariationInput
  }

  export type VariationUncheckedCreateWithoutProductInput = {
    id?: number
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    is_default?: boolean
    sku?: SkuUncheckedCreateNestedOneWithoutVariationInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutVariationInput
  }

  export type VariationCreateOrConnectWithoutProductInput = {
    where: VariationWhereUniqueInput
    create: XOR<VariationCreateWithoutProductInput, VariationUncheckedCreateWithoutProductInput>
  }

  export type VariationCreateManyProductInputEnvelope = {
    data: Enumerable<VariationCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    sku_id: number
    count: number
    order: OrderCreateNestedOneWithoutItemsInput
    variation: VariationCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    order_id: number
    sku_id: number
    variation_id: number
    count: number
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: Enumerable<OrderItemCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type CategoryProductCreateWithoutProductInput = {
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type CategoryProductUncheckedCreateWithoutProductInput = {
    id?: number
    cat_id: number
  }

  export type CategoryProductCreateOrConnectWithoutProductInput = {
    where: CategoryProductWhereUniqueInput
    create: XOR<CategoryProductCreateWithoutProductInput, CategoryProductUncheckedCreateWithoutProductInput>
  }

  export type CategoryProductCreateManyProductInputEnvelope = {
    data: Enumerable<CategoryProductCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type SkuUpsertWithWhereUniqueWithoutProductInput = {
    where: SkuWhereUniqueInput
    update: XOR<SkuUpdateWithoutProductInput, SkuUncheckedUpdateWithoutProductInput>
    create: XOR<SkuCreateWithoutProductInput, SkuUncheckedCreateWithoutProductInput>
  }

  export type SkuUpdateWithWhereUniqueWithoutProductInput = {
    where: SkuWhereUniqueInput
    data: XOR<SkuUpdateWithoutProductInput, SkuUncheckedUpdateWithoutProductInput>
  }

  export type SkuUpdateManyWithWhereWithoutProductInput = {
    where: SkuScalarWhereInput
    data: XOR<SkuUpdateManyMutationInput, SkuUncheckedUpdateManyWithoutSkuInput>
  }

  export type SkuScalarWhereInput = {
    AND?: Enumerable<SkuScalarWhereInput>
    OR?: Enumerable<SkuScalarWhereInput>
    NOT?: Enumerable<SkuScalarWhereInput>
    id?: StringFilter | string
    stock?: IntFilter | number
    variation_id?: IntFilter | number
    product_id?: IntFilter | number
    last_restock?: DateTimeNullableFilter | Date | string | null
  }

  export type ProductOptionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductOptionWhereUniqueInput
    update: XOR<ProductOptionUpdateWithoutProductInput, ProductOptionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductOptionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductOptionWhereUniqueInput
    data: XOR<ProductOptionUpdateWithoutProductInput, ProductOptionUncheckedUpdateWithoutProductInput>
  }

  export type ProductOptionUpdateManyWithWhereWithoutProductInput = {
    where: ProductOptionScalarWhereInput
    data: XOR<ProductOptionUpdateManyMutationInput, ProductOptionUncheckedUpdateManyWithoutOptionsInput>
  }

  export type ProductOptionScalarWhereInput = {
    AND?: Enumerable<ProductOptionScalarWhereInput>
    OR?: Enumerable<ProductOptionScalarWhereInput>
    NOT?: Enumerable<ProductOptionScalarWhereInput>
    id?: IntFilter | number
    product_id?: IntFilter | number
    name?: StringFilter | string
    options?: StringNullableListFilter
  }

  export type VariationUpsertWithWhereUniqueWithoutProductInput = {
    where: VariationWhereUniqueInput
    update: XOR<VariationUpdateWithoutProductInput, VariationUncheckedUpdateWithoutProductInput>
    create: XOR<VariationCreateWithoutProductInput, VariationUncheckedCreateWithoutProductInput>
  }

  export type VariationUpdateWithWhereUniqueWithoutProductInput = {
    where: VariationWhereUniqueInput
    data: XOR<VariationUpdateWithoutProductInput, VariationUncheckedUpdateWithoutProductInput>
  }

  export type VariationUpdateManyWithWhereWithoutProductInput = {
    where: VariationScalarWhereInput
    data: XOR<VariationUpdateManyMutationInput, VariationUncheckedUpdateManyWithoutVariationInput>
  }

  export type VariationScalarWhereInput = {
    AND?: Enumerable<VariationScalarWhereInput>
    OR?: Enumerable<VariationScalarWhereInput>
    NOT?: Enumerable<VariationScalarWhereInput>
    id?: IntFilter | number
    names?: StringNullableListFilter
    values?: StringNullableListFilter
    price?: IntFilter | number
    product_id?: IntFilter | number
    is_default?: BoolFilter | boolean
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrder_itemsInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: Enumerable<OrderItemScalarWhereInput>
    OR?: Enumerable<OrderItemScalarWhereInput>
    NOT?: Enumerable<OrderItemScalarWhereInput>
    order_id?: IntFilter | number
    product_id?: IntFilter | number
    sku_id?: IntFilter | number
    variation_id?: IntFilter | number
    count?: IntFilter | number
  }

  export type CategoryProductUpsertWithWhereUniqueWithoutProductInput = {
    where: CategoryProductWhereUniqueInput
    update: XOR<CategoryProductUpdateWithoutProductInput, CategoryProductUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryProductCreateWithoutProductInput, CategoryProductUncheckedCreateWithoutProductInput>
  }

  export type CategoryProductUpdateWithWhereUniqueWithoutProductInput = {
    where: CategoryProductWhereUniqueInput
    data: XOR<CategoryProductUpdateWithoutProductInput, CategoryProductUncheckedUpdateWithoutProductInput>
  }

  export type CategoryProductUpdateManyWithWhereWithoutProductInput = {
    where: CategoryProductScalarWhereInput
    data: XOR<CategoryProductUpdateManyMutationInput, CategoryProductUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    parent_id: number
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    parent_id: number
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutCategoriesInput = {
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    variation?: VariationCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoriesInput = {
    id?: number
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    variation?: VariationUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpsertWithoutCategoriesInput = {
    update: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductUpdateWithoutCategoriesInput = {
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    variation?: VariationUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    variation?: VariationUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutOptionsInput = {
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuCreateNestedManyWithoutProductInput
    variation?: VariationCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    categories?: CategoryProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOptionsInput = {
    id?: number
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuUncheckedCreateNestedManyWithoutProductInput
    variation?: VariationUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    categories?: CategoryProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOptionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
  }

  export type ProductUpsertWithoutOptionsInput = {
    update: XOR<ProductUpdateWithoutOptionsInput, ProductUncheckedUpdateWithoutOptionsInput>
    create: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
  }

  export type ProductUpdateWithoutOptionsInput = {
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUpdateManyWithoutProductNestedInput
    variation?: VariationUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUncheckedUpdateManyWithoutProductNestedInput
    variation?: VariationUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VariationCreateWithoutSkuInput = {
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    is_default?: boolean
    product: ProductCreateNestedOneWithoutVariationInput
    order_items?: OrderItemCreateNestedManyWithoutVariationInput
  }

  export type VariationUncheckedCreateWithoutSkuInput = {
    id?: number
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    product_id: number
    is_default?: boolean
    order_items?: OrderItemUncheckedCreateNestedManyWithoutVariationInput
  }

  export type VariationCreateOrConnectWithoutSkuInput = {
    where: VariationWhereUniqueInput
    create: XOR<VariationCreateWithoutSkuInput, VariationUncheckedCreateWithoutSkuInput>
  }

  export type ProductCreateWithoutSkuInput = {
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    options?: ProductOptionCreateNestedManyWithoutProductInput
    variation?: VariationCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    categories?: CategoryProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSkuInput = {
    id?: number
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    variation?: VariationUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    categories?: CategoryProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSkuInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSkuInput, ProductUncheckedCreateWithoutSkuInput>
  }

  export type VariationUpsertWithoutSkuInput = {
    update: XOR<VariationUpdateWithoutSkuInput, VariationUncheckedUpdateWithoutSkuInput>
    create: XOR<VariationCreateWithoutSkuInput, VariationUncheckedCreateWithoutSkuInput>
  }

  export type VariationUpdateWithoutSkuInput = {
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutVariationNestedInput
    order_items?: OrderItemUpdateManyWithoutVariationNestedInput
  }

  export type VariationUncheckedUpdateWithoutSkuInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
    order_items?: OrderItemUncheckedUpdateManyWithoutVariationNestedInput
  }

  export type ProductUpsertWithoutSkuInput = {
    update: XOR<ProductUpdateWithoutSkuInput, ProductUncheckedUpdateWithoutSkuInput>
    create: XOR<ProductCreateWithoutSkuInput, ProductUncheckedCreateWithoutSkuInput>
  }

  export type ProductUpdateWithoutSkuInput = {
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    variation?: VariationUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSkuInput = {
    id?: IntFieldUpdateOperationsInput | number
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    variation?: VariationUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SkuCreateWithoutVariationInput = {
    id: string
    stock?: number
    last_restock?: Date | string | null
    product: ProductCreateNestedOneWithoutSkuInput
  }

  export type SkuUncheckedCreateWithoutVariationInput = {
    id: string
    stock?: number
    product_id: number
    last_restock?: Date | string | null
  }

  export type SkuCreateOrConnectWithoutVariationInput = {
    where: SkuWhereUniqueInput
    create: XOR<SkuCreateWithoutVariationInput, SkuUncheckedCreateWithoutVariationInput>
  }

  export type ProductCreateWithoutVariationInput = {
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    order_items?: OrderItemCreateNestedManyWithoutProductInput
    categories?: CategoryProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariationInput = {
    id?: number
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    order_items?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    categories?: CategoryProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariationInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariationInput, ProductUncheckedCreateWithoutVariationInput>
  }

  export type OrderItemCreateWithoutVariationInput = {
    sku_id: number
    count: number
    order: OrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemUncheckedCreateWithoutVariationInput = {
    order_id: number
    product_id: number
    sku_id: number
    count: number
  }

  export type OrderItemCreateOrConnectWithoutVariationInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutVariationInput, OrderItemUncheckedCreateWithoutVariationInput>
  }

  export type OrderItemCreateManyVariationInputEnvelope = {
    data: Enumerable<OrderItemCreateManyVariationInput>
    skipDuplicates?: boolean
  }

  export type SkuUpsertWithoutVariationInput = {
    update: XOR<SkuUpdateWithoutVariationInput, SkuUncheckedUpdateWithoutVariationInput>
    create: XOR<SkuCreateWithoutVariationInput, SkuUncheckedCreateWithoutVariationInput>
  }

  export type SkuUpdateWithoutVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    last_restock?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutSkuNestedInput
  }

  export type SkuUncheckedUpdateWithoutVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    last_restock?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpsertWithoutVariationInput = {
    update: XOR<ProductUpdateWithoutVariationInput, ProductUncheckedUpdateWithoutVariationInput>
    create: XOR<ProductCreateWithoutVariationInput, ProductUncheckedCreateWithoutVariationInput>
  }

  export type ProductUpdateWithoutVariationInput = {
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariationInput = {
    id?: IntFieldUpdateOperationsInput | number
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutVariationInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutVariationInput, OrderItemUncheckedUpdateWithoutVariationInput>
    create: XOR<OrderItemCreateWithoutVariationInput, OrderItemUncheckedCreateWithoutVariationInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutVariationInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutVariationInput, OrderItemUncheckedUpdateWithoutVariationInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutVariationInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrder_itemsInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    sku_id: number
    count: number
    product: ProductCreateNestedOneWithoutOrder_itemsInput
    variation: VariationCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    product_id: number
    sku_id: number
    variation_id: number
    count: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: Enumerable<OrderItemCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutOrdersInput = {
    phone: string
    address: string
    created?: Date | string
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: number
    phone: string
    address: string
    created?: Date | string
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutCustomerInput = {
    status: StatusOrder
    items?: OrderItemCreateNestedManyWithoutOrderInput
    sub_total: number
    total: number
    created?: Date | string
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    status: StatusOrder
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    sub_total: number
    total: number
    created?: Date | string
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: Enumerable<OrderCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrderScalarWhereInput = {
    AND?: Enumerable<OrderScalarWhereInput>
    OR?: Enumerable<OrderScalarWhereInput>
    NOT?: Enumerable<OrderScalarWhereInput>
    id?: IntFilter | number
    customer_id?: IntFilter | number
    status?: EnumStatusOrderFilter | StatusOrder
    sub_total?: IntFilter | number
    total?: IntFilter | number
    created?: DateTimeFilter | Date | string
  }

  export type OrderCreateWithoutItemsInput = {
    status: StatusOrder
    sub_total: number
    total: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    created?: Date | string
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: number
    customer_id: number
    status: StatusOrder
    sub_total: number
    total: number
    created?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutOrder_itemsInput = {
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    variation?: VariationCreateNestedManyWithoutProductInput
    categories?: CategoryProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    rack_name: string
    marketing_status: string
    hscode: string
    weight: number
    name: string
    sku?: SkuUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    variation?: VariationUncheckedCreateNestedManyWithoutProductInput
    categories?: CategoryProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrder_itemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrder_itemsInput, ProductUncheckedCreateWithoutOrder_itemsInput>
  }

  export type VariationCreateWithoutOrder_itemsInput = {
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    is_default?: boolean
    sku?: SkuCreateNestedOneWithoutVariationInput
    product: ProductCreateNestedOneWithoutVariationInput
  }

  export type VariationUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    product_id: number
    is_default?: boolean
    sku?: SkuUncheckedCreateNestedOneWithoutVariationInput
  }

  export type VariationCreateOrConnectWithoutOrder_itemsInput = {
    where: VariationWhereUniqueInput
    create: XOR<VariationCreateWithoutOrder_itemsInput, VariationUncheckedCreateWithoutOrder_itemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    status?: EnumStatusOrderFieldUpdateOperationsInput | StatusOrder
    sub_total?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusOrderFieldUpdateOperationsInput | StatusOrder
    sub_total?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrder_itemsInput = {
    update: XOR<ProductUpdateWithoutOrder_itemsInput, ProductUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ProductCreateWithoutOrder_itemsInput, ProductUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ProductUpdateWithoutOrder_itemsInput = {
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    variation?: VariationUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rack_name?: StringFieldUpdateOperationsInput | string
    marketing_status?: StringFieldUpdateOperationsInput | string
    hscode?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: SkuUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    variation?: VariationUncheckedUpdateManyWithoutProductNestedInput
    categories?: CategoryProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VariationUpsertWithoutOrder_itemsInput = {
    update: XOR<VariationUpdateWithoutOrder_itemsInput, VariationUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<VariationCreateWithoutOrder_itemsInput, VariationUncheckedCreateWithoutOrder_itemsInput>
  }

  export type VariationUpdateWithoutOrder_itemsInput = {
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
    sku?: SkuUpdateOneWithoutVariationNestedInput
    product?: ProductUpdateOneRequiredWithoutVariationNestedInput
  }

  export type VariationUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
    sku?: SkuUncheckedUpdateOneWithoutVariationNestedInput
  }

  export type SupplierTypeCreateWithoutSuppliersInput = {
    name: string
  }

  export type SupplierTypeUncheckedCreateWithoutSuppliersInput = {
    id?: number
    name: string
  }

  export type SupplierTypeCreateOrConnectWithoutSuppliersInput = {
    where: SupplierTypeWhereUniqueInput
    create: XOR<SupplierTypeCreateWithoutSuppliersInput, SupplierTypeUncheckedCreateWithoutSuppliersInput>
  }

  export type SupplierTypeUpsertWithoutSuppliersInput = {
    update: XOR<SupplierTypeUpdateWithoutSuppliersInput, SupplierTypeUncheckedUpdateWithoutSuppliersInput>
    create: XOR<SupplierTypeCreateWithoutSuppliersInput, SupplierTypeUncheckedCreateWithoutSuppliersInput>
  }

  export type SupplierTypeUpdateWithoutSuppliersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierTypeUncheckedUpdateWithoutSuppliersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierCreateWithoutTypeInput = {
    name: string
    note: string
    link: string
    stock_ongoing?: number
    stock_ready?: number
    created?: Date | string
  }

  export type SupplierUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    note: string
    link: string
    stock_ongoing?: number
    stock_ready?: number
    created?: Date | string
  }

  export type SupplierCreateOrConnectWithoutTypeInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutTypeInput, SupplierUncheckedCreateWithoutTypeInput>
  }

  export type SupplierCreateManyTypeInputEnvelope = {
    data: Enumerable<SupplierCreateManyTypeInput>
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithWhereUniqueWithoutTypeInput = {
    where: SupplierWhereUniqueInput
    update: XOR<SupplierUpdateWithoutTypeInput, SupplierUncheckedUpdateWithoutTypeInput>
    create: XOR<SupplierCreateWithoutTypeInput, SupplierUncheckedCreateWithoutTypeInput>
  }

  export type SupplierUpdateWithWhereUniqueWithoutTypeInput = {
    where: SupplierWhereUniqueInput
    data: XOR<SupplierUpdateWithoutTypeInput, SupplierUncheckedUpdateWithoutTypeInput>
  }

  export type SupplierUpdateManyWithWhereWithoutTypeInput = {
    where: SupplierScalarWhereInput
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyWithoutSuppliersInput>
  }

  export type SupplierScalarWhereInput = {
    AND?: Enumerable<SupplierScalarWhereInput>
    OR?: Enumerable<SupplierScalarWhereInput>
    NOT?: Enumerable<SupplierScalarWhereInput>
    id?: IntFilter | number
    type_id?: IntFilter | number
    name?: StringFilter | string
    note?: StringFilter | string
    link?: StringFilter | string
    stock_ongoing?: IntFilter | number
    stock_ready?: IntFilter | number
    created?: DateTimeFilter | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryProductCreateManyCategoryInput = {
    id?: number
    product_id: number
  }

  export type CategoryProductUpdateWithoutCategoryInput = {
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryProductUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type SkuCreateManyProductInput = {
    id: string
    stock?: number
    variation_id: number
    last_restock?: Date | string | null
  }

  export type ProductOptionCreateManyProductInput = {
    id?: number
    name: string
    options?: ProductOptionCreateoptionsInput | Enumerable<string>
  }

  export type VariationCreateManyProductInput = {
    id?: number
    names?: VariationCreatenamesInput | Enumerable<string>
    values?: VariationCreatevaluesInput | Enumerable<string>
    price: number
    is_default?: boolean
  }

  export type OrderItemCreateManyProductInput = {
    order_id: number
    sku_id: number
    variation_id: number
    count: number
  }

  export type CategoryProductCreateManyProductInput = {
    id?: number
    cat_id: number
  }

  export type SkuUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    last_restock?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    variation?: VariationUpdateOneRequiredWithoutSkuNestedInput
  }

  export type SkuUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    last_restock?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkuUncheckedUpdateManyWithoutSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    last_restock?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductOptionUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    options?: ProductOptionUpdateoptionsInput | Enumerable<string>
  }

  export type ProductOptionUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    options?: ProductOptionUpdateoptionsInput | Enumerable<string>
  }

  export type ProductOptionUncheckedUpdateManyWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    options?: ProductOptionUpdateoptionsInput | Enumerable<string>
  }

  export type VariationUpdateWithoutProductInput = {
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
    sku?: SkuUpdateOneWithoutVariationNestedInput
    order_items?: OrderItemUpdateManyWithoutVariationNestedInput
  }

  export type VariationUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
    sku?: SkuUncheckedUpdateOneWithoutVariationNestedInput
    order_items?: OrderItemUncheckedUpdateManyWithoutVariationNestedInput
  }

  export type VariationUncheckedUpdateManyWithoutVariationInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: VariationUpdatenamesInput | Enumerable<string>
    values?: VariationUpdatevaluesInput | Enumerable<string>
    price?: IntFieldUpdateOperationsInput | number
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderItemUpdateWithoutProductInput = {
    sku_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    variation?: VariationUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrder_itemsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryProductUpdateWithoutProductInput = {
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type CategoryProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cat_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryProductUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cat_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyVariationInput = {
    order_id: number
    product_id: number
    sku_id: number
    count: number
  }

  export type OrderItemUpdateWithoutVariationInput = {
    sku_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutVariationInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyOrderInput = {
    product_id: number
    sku_id: number
    variation_id: number
    count: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    sku_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrder_itemsNestedInput
    variation?: VariationUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutItemsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    sku_id?: IntFieldUpdateOperationsInput | number
    variation_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyCustomerInput = {
    id?: number
    status: StatusOrder
    sub_total: number
    total: number
    created?: Date | string
  }

  export type OrderUpdateWithoutCustomerInput = {
    status?: EnumStatusOrderFieldUpdateOperationsInput | StatusOrder
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    sub_total?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusOrderFieldUpdateOperationsInput | StatusOrder
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    sub_total?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusOrderFieldUpdateOperationsInput | StatusOrder
    sub_total?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateManyTypeInput = {
    id?: number
    name: string
    note: string
    link: string
    stock_ongoing?: number
    stock_ready?: number
    created?: Date | string
  }

  export type SupplierUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    stock_ongoing?: IntFieldUpdateOperationsInput | number
    stock_ready?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    stock_ongoing?: IntFieldUpdateOperationsInput | number
    stock_ready?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyWithoutSuppliersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    stock_ongoing?: IntFieldUpdateOperationsInput | number
    stock_ready?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}