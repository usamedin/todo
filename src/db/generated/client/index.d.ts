
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ToDo
 * 
 */
export type ToDo = $Result.DefaultSelection<Prisma.$ToDoPayload>
/**
 * Model ExternalTodoIntegration
 * 
 */
export type ExternalTodoIntegration = $Result.DefaultSelection<Prisma.$ExternalTodoIntegrationPayload>
/**
 * Model ExternalTodoMapping
 * 
 */
export type ExternalTodoMapping = $Result.DefaultSelection<Prisma.$ExternalTodoMappingPayload>
/**
 * Model ExternalTodoMock
 * 
 */
export type ExternalTodoMock = $Result.DefaultSelection<Prisma.$ExternalTodoMockPayload>
/**
 * Model ExternalIntegrationMock
 * 
 */
export type ExternalIntegrationMock = $Result.DefaultSelection<Prisma.$ExternalIntegrationMockPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TodoStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export type TodoStatus = (typeof TodoStatus)[keyof typeof TodoStatus]

}

export type TodoStatus = $Enums.TodoStatus

export const TodoStatus: typeof $Enums.TodoStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ToDos
 * const toDos = await prisma.toDo.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ToDos
   * const toDos = await prisma.toDo.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.toDo`: Exposes CRUD operations for the **ToDo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToDos
    * const toDos = await prisma.toDo.findMany()
    * ```
    */
  get toDo(): Prisma.ToDoDelegate<ExtArgs>;

  /**
   * `prisma.externalTodoIntegration`: Exposes CRUD operations for the **ExternalTodoIntegration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalTodoIntegrations
    * const externalTodoIntegrations = await prisma.externalTodoIntegration.findMany()
    * ```
    */
  get externalTodoIntegration(): Prisma.ExternalTodoIntegrationDelegate<ExtArgs>;

  /**
   * `prisma.externalTodoMapping`: Exposes CRUD operations for the **ExternalTodoMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalTodoMappings
    * const externalTodoMappings = await prisma.externalTodoMapping.findMany()
    * ```
    */
  get externalTodoMapping(): Prisma.ExternalTodoMappingDelegate<ExtArgs>;

  /**
   * `prisma.externalTodoMock`: Exposes CRUD operations for the **ExternalTodoMock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalTodoMocks
    * const externalTodoMocks = await prisma.externalTodoMock.findMany()
    * ```
    */
  get externalTodoMock(): Prisma.ExternalTodoMockDelegate<ExtArgs>;

  /**
   * `prisma.externalIntegrationMock`: Exposes CRUD operations for the **ExternalIntegrationMock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalIntegrationMocks
    * const externalIntegrationMocks = await prisma.externalIntegrationMock.findMany()
    * ```
    */
  get externalIntegrationMock(): Prisma.ExternalIntegrationMockDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ToDo: 'ToDo',
    ExternalTodoIntegration: 'ExternalTodoIntegration',
    ExternalTodoMapping: 'ExternalTodoMapping',
    ExternalTodoMock: 'ExternalTodoMock',
    ExternalIntegrationMock: 'ExternalIntegrationMock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    todo?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'toDo' | 'externalTodoIntegration' | 'externalTodoMapping' | 'externalTodoMock' | 'externalIntegrationMock'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      ToDo: {
        payload: Prisma.$ToDoPayload<ExtArgs>
        fields: Prisma.ToDoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToDoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToDoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          findFirst: {
            args: Prisma.ToDoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToDoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          findMany: {
            args: Prisma.ToDoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>[]
          }
          create: {
            args: Prisma.ToDoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          createMany: {
            args: Prisma.ToDoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ToDoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          update: {
            args: Prisma.ToDoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          deleteMany: {
            args: Prisma.ToDoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ToDoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ToDoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToDoPayload>
          }
          aggregate: {
            args: Prisma.ToDoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateToDo>
          }
          groupBy: {
            args: Prisma.ToDoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ToDoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToDoCountArgs<ExtArgs>,
            result: $Utils.Optional<ToDoCountAggregateOutputType> | number
          }
        }
      }
      ExternalTodoIntegration: {
        payload: Prisma.$ExternalTodoIntegrationPayload<ExtArgs>
        fields: Prisma.ExternalTodoIntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalTodoIntegrationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoIntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalTodoIntegrationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoIntegrationPayload>
          }
          findFirst: {
            args: Prisma.ExternalTodoIntegrationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoIntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalTodoIntegrationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoIntegrationPayload>
          }
          findMany: {
            args: Prisma.ExternalTodoIntegrationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoIntegrationPayload>[]
          }
          create: {
            args: Prisma.ExternalTodoIntegrationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoIntegrationPayload>
          }
          createMany: {
            args: Prisma.ExternalTodoIntegrationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExternalTodoIntegrationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoIntegrationPayload>
          }
          update: {
            args: Prisma.ExternalTodoIntegrationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoIntegrationPayload>
          }
          deleteMany: {
            args: Prisma.ExternalTodoIntegrationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalTodoIntegrationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExternalTodoIntegrationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoIntegrationPayload>
          }
          aggregate: {
            args: Prisma.ExternalTodoIntegrationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExternalTodoIntegration>
          }
          groupBy: {
            args: Prisma.ExternalTodoIntegrationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExternalTodoIntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalTodoIntegrationCountArgs<ExtArgs>,
            result: $Utils.Optional<ExternalTodoIntegrationCountAggregateOutputType> | number
          }
        }
      }
      ExternalTodoMapping: {
        payload: Prisma.$ExternalTodoMappingPayload<ExtArgs>
        fields: Prisma.ExternalTodoMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalTodoMappingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalTodoMappingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMappingPayload>
          }
          findFirst: {
            args: Prisma.ExternalTodoMappingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalTodoMappingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMappingPayload>
          }
          findMany: {
            args: Prisma.ExternalTodoMappingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMappingPayload>[]
          }
          create: {
            args: Prisma.ExternalTodoMappingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMappingPayload>
          }
          createMany: {
            args: Prisma.ExternalTodoMappingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExternalTodoMappingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMappingPayload>
          }
          update: {
            args: Prisma.ExternalTodoMappingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMappingPayload>
          }
          deleteMany: {
            args: Prisma.ExternalTodoMappingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalTodoMappingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExternalTodoMappingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMappingPayload>
          }
          aggregate: {
            args: Prisma.ExternalTodoMappingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExternalTodoMapping>
          }
          groupBy: {
            args: Prisma.ExternalTodoMappingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExternalTodoMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalTodoMappingCountArgs<ExtArgs>,
            result: $Utils.Optional<ExternalTodoMappingCountAggregateOutputType> | number
          }
        }
      }
      ExternalTodoMock: {
        payload: Prisma.$ExternalTodoMockPayload<ExtArgs>
        fields: Prisma.ExternalTodoMockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalTodoMockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalTodoMockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMockPayload>
          }
          findFirst: {
            args: Prisma.ExternalTodoMockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalTodoMockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMockPayload>
          }
          findMany: {
            args: Prisma.ExternalTodoMockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMockPayload>[]
          }
          create: {
            args: Prisma.ExternalTodoMockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMockPayload>
          }
          createMany: {
            args: Prisma.ExternalTodoMockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExternalTodoMockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMockPayload>
          }
          update: {
            args: Prisma.ExternalTodoMockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMockPayload>
          }
          deleteMany: {
            args: Prisma.ExternalTodoMockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalTodoMockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExternalTodoMockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTodoMockPayload>
          }
          aggregate: {
            args: Prisma.ExternalTodoMockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExternalTodoMock>
          }
          groupBy: {
            args: Prisma.ExternalTodoMockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExternalTodoMockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalTodoMockCountArgs<ExtArgs>,
            result: $Utils.Optional<ExternalTodoMockCountAggregateOutputType> | number
          }
        }
      }
      ExternalIntegrationMock: {
        payload: Prisma.$ExternalIntegrationMockPayload<ExtArgs>
        fields: Prisma.ExternalIntegrationMockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalIntegrationMockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalIntegrationMockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalIntegrationMockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalIntegrationMockPayload>
          }
          findFirst: {
            args: Prisma.ExternalIntegrationMockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalIntegrationMockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalIntegrationMockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalIntegrationMockPayload>
          }
          findMany: {
            args: Prisma.ExternalIntegrationMockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalIntegrationMockPayload>[]
          }
          create: {
            args: Prisma.ExternalIntegrationMockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalIntegrationMockPayload>
          }
          createMany: {
            args: Prisma.ExternalIntegrationMockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExternalIntegrationMockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalIntegrationMockPayload>
          }
          update: {
            args: Prisma.ExternalIntegrationMockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalIntegrationMockPayload>
          }
          deleteMany: {
            args: Prisma.ExternalIntegrationMockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalIntegrationMockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExternalIntegrationMockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalIntegrationMockPayload>
          }
          aggregate: {
            args: Prisma.ExternalIntegrationMockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExternalIntegrationMock>
          }
          groupBy: {
            args: Prisma.ExternalIntegrationMockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExternalIntegrationMockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalIntegrationMockCountArgs<ExtArgs>,
            result: $Utils.Optional<ExternalIntegrationMockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ToDo
   */

  export type AggregateToDo = {
    _count: ToDoCountAggregateOutputType | null
    _min: ToDoMinAggregateOutputType | null
    _max: ToDoMaxAggregateOutputType | null
  }

  export type ToDoMinAggregateOutputType = {
    id: string | null
    value: string | null
    status: $Enums.TodoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ToDoMaxAggregateOutputType = {
    id: string | null
    value: string | null
    status: $Enums.TodoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ToDoCountAggregateOutputType = {
    id: number
    value: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ToDoMinAggregateInputType = {
    id?: true
    value?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ToDoMaxAggregateInputType = {
    id?: true
    value?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ToDoCountAggregateInputType = {
    id?: true
    value?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ToDoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToDo to aggregate.
     */
    where?: ToDoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDos to fetch.
     */
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToDoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToDos
    **/
    _count?: true | ToDoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToDoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToDoMaxAggregateInputType
  }

  export type GetToDoAggregateType<T extends ToDoAggregateArgs> = {
        [P in keyof T & keyof AggregateToDo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToDo[P]>
      : GetScalarType<T[P], AggregateToDo[P]>
  }




  export type ToDoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToDoWhereInput
    orderBy?: ToDoOrderByWithAggregationInput | ToDoOrderByWithAggregationInput[]
    by: ToDoScalarFieldEnum[] | ToDoScalarFieldEnum
    having?: ToDoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToDoCountAggregateInputType | true
    _min?: ToDoMinAggregateInputType
    _max?: ToDoMaxAggregateInputType
  }

  export type ToDoGroupByOutputType = {
    id: string
    value: string
    status: $Enums.TodoStatus
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ToDoCountAggregateOutputType | null
    _min: ToDoMinAggregateOutputType | null
    _max: ToDoMaxAggregateOutputType | null
  }

  type GetToDoGroupByPayload<T extends ToDoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToDoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToDoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToDoGroupByOutputType[P]>
            : GetScalarType<T[P], ToDoGroupByOutputType[P]>
        }
      >
    >


  export type ToDoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["toDo"]>

  export type ToDoSelectScalar = {
    id?: boolean
    value?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }


  export type $ToDoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToDo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      status: $Enums.TodoStatus
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["toDo"]>
    composites: {}
  }


  type ToDoGetPayload<S extends boolean | null | undefined | ToDoDefaultArgs> = $Result.GetResult<Prisma.$ToDoPayload, S>

  type ToDoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ToDoFindManyArgs, 'select' | 'include'> & {
      select?: ToDoCountAggregateInputType | true
    }

  export interface ToDoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToDo'], meta: { name: 'ToDo' } }
    /**
     * Find zero or one ToDo that matches the filter.
     * @param {ToDoFindUniqueArgs} args - Arguments to find a ToDo
     * @example
     * // Get one ToDo
     * const toDo = await prisma.toDo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ToDoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ToDoFindUniqueArgs<ExtArgs>>
    ): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ToDo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ToDoFindUniqueOrThrowArgs} args - Arguments to find a ToDo
     * @example
     * // Get one ToDo
     * const toDo = await prisma.toDo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ToDoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ToDoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ToDo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoFindFirstArgs} args - Arguments to find a ToDo
     * @example
     * // Get one ToDo
     * const toDo = await prisma.toDo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ToDoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ToDoFindFirstArgs<ExtArgs>>
    ): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ToDo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoFindFirstOrThrowArgs} args - Arguments to find a ToDo
     * @example
     * // Get one ToDo
     * const toDo = await prisma.toDo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ToDoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ToDoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ToDos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToDos
     * const toDos = await prisma.toDo.findMany()
     * 
     * // Get first 10 ToDos
     * const toDos = await prisma.toDo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toDoWithIdOnly = await prisma.toDo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ToDoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToDoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ToDo.
     * @param {ToDoCreateArgs} args - Arguments to create a ToDo.
     * @example
     * // Create one ToDo
     * const ToDo = await prisma.toDo.create({
     *   data: {
     *     // ... data to create a ToDo
     *   }
     * })
     * 
    **/
    create<T extends ToDoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ToDoCreateArgs<ExtArgs>>
    ): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ToDos.
     *     @param {ToDoCreateManyArgs} args - Arguments to create many ToDos.
     *     @example
     *     // Create many ToDos
     *     const toDo = await prisma.toDo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ToDoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToDoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ToDo.
     * @param {ToDoDeleteArgs} args - Arguments to delete one ToDo.
     * @example
     * // Delete one ToDo
     * const ToDo = await prisma.toDo.delete({
     *   where: {
     *     // ... filter to delete one ToDo
     *   }
     * })
     * 
    **/
    delete<T extends ToDoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ToDoDeleteArgs<ExtArgs>>
    ): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ToDo.
     * @param {ToDoUpdateArgs} args - Arguments to update one ToDo.
     * @example
     * // Update one ToDo
     * const toDo = await prisma.toDo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ToDoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ToDoUpdateArgs<ExtArgs>>
    ): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ToDos.
     * @param {ToDoDeleteManyArgs} args - Arguments to filter ToDos to delete.
     * @example
     * // Delete a few ToDos
     * const { count } = await prisma.toDo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ToDoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToDoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToDos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToDos
     * const toDo = await prisma.toDo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ToDoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ToDoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ToDo.
     * @param {ToDoUpsertArgs} args - Arguments to update or create a ToDo.
     * @example
     * // Update or create a ToDo
     * const toDo = await prisma.toDo.upsert({
     *   create: {
     *     // ... data to create a ToDo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToDo we want to update
     *   }
     * })
    **/
    upsert<T extends ToDoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ToDoUpsertArgs<ExtArgs>>
    ): Prisma__ToDoClient<$Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ToDos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoCountArgs} args - Arguments to filter ToDos to count.
     * @example
     * // Count the number of ToDos
     * const count = await prisma.toDo.count({
     *   where: {
     *     // ... the filter for the ToDos we want to count
     *   }
     * })
    **/
    count<T extends ToDoCountArgs>(
      args?: Subset<T, ToDoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToDoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToDo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToDoAggregateArgs>(args: Subset<T, ToDoAggregateArgs>): Prisma.PrismaPromise<GetToDoAggregateType<T>>

    /**
     * Group by ToDo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoGroupByArgs} args - Group by arguments.
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
      T extends ToDoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToDoGroupByArgs['orderBy'] }
        : { orderBy?: ToDoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ToDoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToDoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToDo model
   */
  readonly fields: ToDoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToDo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToDoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ToDo model
   */ 
  interface ToDoFieldRefs {
    readonly id: FieldRef<"ToDo", 'String'>
    readonly value: FieldRef<"ToDo", 'String'>
    readonly status: FieldRef<"ToDo", 'TodoStatus'>
    readonly createdAt: FieldRef<"ToDo", 'DateTime'>
    readonly updatedAt: FieldRef<"ToDo", 'DateTime'>
    readonly userId: FieldRef<"ToDo", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ToDo findUnique
   */
  export type ToDoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Filter, which ToDo to fetch.
     */
    where: ToDoWhereUniqueInput
  }


  /**
   * ToDo findUniqueOrThrow
   */
  export type ToDoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Filter, which ToDo to fetch.
     */
    where: ToDoWhereUniqueInput
  }


  /**
   * ToDo findFirst
   */
  export type ToDoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Filter, which ToDo to fetch.
     */
    where?: ToDoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDos to fetch.
     */
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToDos.
     */
    cursor?: ToDoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToDos.
     */
    distinct?: ToDoScalarFieldEnum | ToDoScalarFieldEnum[]
  }


  /**
   * ToDo findFirstOrThrow
   */
  export type ToDoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Filter, which ToDo to fetch.
     */
    where?: ToDoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDos to fetch.
     */
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToDos.
     */
    cursor?: ToDoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToDos.
     */
    distinct?: ToDoScalarFieldEnum | ToDoScalarFieldEnum[]
  }


  /**
   * ToDo findMany
   */
  export type ToDoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Filter, which ToDos to fetch.
     */
    where?: ToDoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDos to fetch.
     */
    orderBy?: ToDoOrderByWithRelationInput | ToDoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToDos.
     */
    cursor?: ToDoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDos.
     */
    skip?: number
    distinct?: ToDoScalarFieldEnum | ToDoScalarFieldEnum[]
  }


  /**
   * ToDo create
   */
  export type ToDoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * The data needed to create a ToDo.
     */
    data: XOR<ToDoCreateInput, ToDoUncheckedCreateInput>
  }


  /**
   * ToDo createMany
   */
  export type ToDoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToDos.
     */
    data: ToDoCreateManyInput | ToDoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ToDo update
   */
  export type ToDoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * The data needed to update a ToDo.
     */
    data: XOR<ToDoUpdateInput, ToDoUncheckedUpdateInput>
    /**
     * Choose, which ToDo to update.
     */
    where: ToDoWhereUniqueInput
  }


  /**
   * ToDo updateMany
   */
  export type ToDoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToDos.
     */
    data: XOR<ToDoUpdateManyMutationInput, ToDoUncheckedUpdateManyInput>
    /**
     * Filter which ToDos to update
     */
    where?: ToDoWhereInput
  }


  /**
   * ToDo upsert
   */
  export type ToDoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * The filter to search for the ToDo to update in case it exists.
     */
    where: ToDoWhereUniqueInput
    /**
     * In case the ToDo found by the `where` argument doesn't exist, create a new ToDo with this data.
     */
    create: XOR<ToDoCreateInput, ToDoUncheckedCreateInput>
    /**
     * In case the ToDo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToDoUpdateInput, ToDoUncheckedUpdateInput>
  }


  /**
   * ToDo delete
   */
  export type ToDoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
    /**
     * Filter which ToDo to delete.
     */
    where: ToDoWhereUniqueInput
  }


  /**
   * ToDo deleteMany
   */
  export type ToDoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToDos to delete
     */
    where?: ToDoWhereInput
  }


  /**
   * ToDo without action
   */
  export type ToDoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDo
     */
    select?: ToDoSelect<ExtArgs> | null
  }



  /**
   * Model ExternalTodoIntegration
   */

  export type AggregateExternalTodoIntegration = {
    _count: ExternalTodoIntegrationCountAggregateOutputType | null
    _min: ExternalTodoIntegrationMinAggregateOutputType | null
    _max: ExternalTodoIntegrationMaxAggregateOutputType | null
  }

  export type ExternalTodoIntegrationMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
  }

  export type ExternalTodoIntegrationMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
  }

  export type ExternalTodoIntegrationCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    _all: number
  }


  export type ExternalTodoIntegrationMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
  }

  export type ExternalTodoIntegrationMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
  }

  export type ExternalTodoIntegrationCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    _all?: true
  }

  export type ExternalTodoIntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalTodoIntegration to aggregate.
     */
    where?: ExternalTodoIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoIntegrations to fetch.
     */
    orderBy?: ExternalTodoIntegrationOrderByWithRelationInput | ExternalTodoIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalTodoIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalTodoIntegrations
    **/
    _count?: true | ExternalTodoIntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalTodoIntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalTodoIntegrationMaxAggregateInputType
  }

  export type GetExternalTodoIntegrationAggregateType<T extends ExternalTodoIntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalTodoIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalTodoIntegration[P]>
      : GetScalarType<T[P], AggregateExternalTodoIntegration[P]>
  }




  export type ExternalTodoIntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalTodoIntegrationWhereInput
    orderBy?: ExternalTodoIntegrationOrderByWithAggregationInput | ExternalTodoIntegrationOrderByWithAggregationInput[]
    by: ExternalTodoIntegrationScalarFieldEnum[] | ExternalTodoIntegrationScalarFieldEnum
    having?: ExternalTodoIntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalTodoIntegrationCountAggregateInputType | true
    _min?: ExternalTodoIntegrationMinAggregateInputType
    _max?: ExternalTodoIntegrationMaxAggregateInputType
  }

  export type ExternalTodoIntegrationGroupByOutputType = {
    id: string
    token: string
    userId: string
    _count: ExternalTodoIntegrationCountAggregateOutputType | null
    _min: ExternalTodoIntegrationMinAggregateOutputType | null
    _max: ExternalTodoIntegrationMaxAggregateOutputType | null
  }

  type GetExternalTodoIntegrationGroupByPayload<T extends ExternalTodoIntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalTodoIntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalTodoIntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalTodoIntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalTodoIntegrationGroupByOutputType[P]>
        }
      >
    >


  export type ExternalTodoIntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
  }, ExtArgs["result"]["externalTodoIntegration"]>

  export type ExternalTodoIntegrationSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
  }


  export type $ExternalTodoIntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalTodoIntegration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
    }, ExtArgs["result"]["externalTodoIntegration"]>
    composites: {}
  }


  type ExternalTodoIntegrationGetPayload<S extends boolean | null | undefined | ExternalTodoIntegrationDefaultArgs> = $Result.GetResult<Prisma.$ExternalTodoIntegrationPayload, S>

  type ExternalTodoIntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExternalTodoIntegrationFindManyArgs, 'select' | 'include'> & {
      select?: ExternalTodoIntegrationCountAggregateInputType | true
    }

  export interface ExternalTodoIntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalTodoIntegration'], meta: { name: 'ExternalTodoIntegration' } }
    /**
     * Find zero or one ExternalTodoIntegration that matches the filter.
     * @param {ExternalTodoIntegrationFindUniqueArgs} args - Arguments to find a ExternalTodoIntegration
     * @example
     * // Get one ExternalTodoIntegration
     * const externalTodoIntegration = await prisma.externalTodoIntegration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExternalTodoIntegrationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoIntegrationFindUniqueArgs<ExtArgs>>
    ): Prisma__ExternalTodoIntegrationClient<$Result.GetResult<Prisma.$ExternalTodoIntegrationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExternalTodoIntegration that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExternalTodoIntegrationFindUniqueOrThrowArgs} args - Arguments to find a ExternalTodoIntegration
     * @example
     * // Get one ExternalTodoIntegration
     * const externalTodoIntegration = await prisma.externalTodoIntegration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExternalTodoIntegrationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoIntegrationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalTodoIntegrationClient<$Result.GetResult<Prisma.$ExternalTodoIntegrationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExternalTodoIntegration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoIntegrationFindFirstArgs} args - Arguments to find a ExternalTodoIntegration
     * @example
     * // Get one ExternalTodoIntegration
     * const externalTodoIntegration = await prisma.externalTodoIntegration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExternalTodoIntegrationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoIntegrationFindFirstArgs<ExtArgs>>
    ): Prisma__ExternalTodoIntegrationClient<$Result.GetResult<Prisma.$ExternalTodoIntegrationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExternalTodoIntegration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoIntegrationFindFirstOrThrowArgs} args - Arguments to find a ExternalTodoIntegration
     * @example
     * // Get one ExternalTodoIntegration
     * const externalTodoIntegration = await prisma.externalTodoIntegration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExternalTodoIntegrationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoIntegrationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalTodoIntegrationClient<$Result.GetResult<Prisma.$ExternalTodoIntegrationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExternalTodoIntegrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoIntegrationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalTodoIntegrations
     * const externalTodoIntegrations = await prisma.externalTodoIntegration.findMany()
     * 
     * // Get first 10 ExternalTodoIntegrations
     * const externalTodoIntegrations = await prisma.externalTodoIntegration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalTodoIntegrationWithIdOnly = await prisma.externalTodoIntegration.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExternalTodoIntegrationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoIntegrationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalTodoIntegrationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExternalTodoIntegration.
     * @param {ExternalTodoIntegrationCreateArgs} args - Arguments to create a ExternalTodoIntegration.
     * @example
     * // Create one ExternalTodoIntegration
     * const ExternalTodoIntegration = await prisma.externalTodoIntegration.create({
     *   data: {
     *     // ... data to create a ExternalTodoIntegration
     *   }
     * })
     * 
    **/
    create<T extends ExternalTodoIntegrationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoIntegrationCreateArgs<ExtArgs>>
    ): Prisma__ExternalTodoIntegrationClient<$Result.GetResult<Prisma.$ExternalTodoIntegrationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExternalTodoIntegrations.
     *     @param {ExternalTodoIntegrationCreateManyArgs} args - Arguments to create many ExternalTodoIntegrations.
     *     @example
     *     // Create many ExternalTodoIntegrations
     *     const externalTodoIntegration = await prisma.externalTodoIntegration.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExternalTodoIntegrationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoIntegrationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExternalTodoIntegration.
     * @param {ExternalTodoIntegrationDeleteArgs} args - Arguments to delete one ExternalTodoIntegration.
     * @example
     * // Delete one ExternalTodoIntegration
     * const ExternalTodoIntegration = await prisma.externalTodoIntegration.delete({
     *   where: {
     *     // ... filter to delete one ExternalTodoIntegration
     *   }
     * })
     * 
    **/
    delete<T extends ExternalTodoIntegrationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoIntegrationDeleteArgs<ExtArgs>>
    ): Prisma__ExternalTodoIntegrationClient<$Result.GetResult<Prisma.$ExternalTodoIntegrationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExternalTodoIntegration.
     * @param {ExternalTodoIntegrationUpdateArgs} args - Arguments to update one ExternalTodoIntegration.
     * @example
     * // Update one ExternalTodoIntegration
     * const externalTodoIntegration = await prisma.externalTodoIntegration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExternalTodoIntegrationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoIntegrationUpdateArgs<ExtArgs>>
    ): Prisma__ExternalTodoIntegrationClient<$Result.GetResult<Prisma.$ExternalTodoIntegrationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExternalTodoIntegrations.
     * @param {ExternalTodoIntegrationDeleteManyArgs} args - Arguments to filter ExternalTodoIntegrations to delete.
     * @example
     * // Delete a few ExternalTodoIntegrations
     * const { count } = await prisma.externalTodoIntegration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExternalTodoIntegrationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoIntegrationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalTodoIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoIntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalTodoIntegrations
     * const externalTodoIntegration = await prisma.externalTodoIntegration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExternalTodoIntegrationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoIntegrationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExternalTodoIntegration.
     * @param {ExternalTodoIntegrationUpsertArgs} args - Arguments to update or create a ExternalTodoIntegration.
     * @example
     * // Update or create a ExternalTodoIntegration
     * const externalTodoIntegration = await prisma.externalTodoIntegration.upsert({
     *   create: {
     *     // ... data to create a ExternalTodoIntegration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalTodoIntegration we want to update
     *   }
     * })
    **/
    upsert<T extends ExternalTodoIntegrationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoIntegrationUpsertArgs<ExtArgs>>
    ): Prisma__ExternalTodoIntegrationClient<$Result.GetResult<Prisma.$ExternalTodoIntegrationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ExternalTodoIntegrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoIntegrationCountArgs} args - Arguments to filter ExternalTodoIntegrations to count.
     * @example
     * // Count the number of ExternalTodoIntegrations
     * const count = await prisma.externalTodoIntegration.count({
     *   where: {
     *     // ... the filter for the ExternalTodoIntegrations we want to count
     *   }
     * })
    **/
    count<T extends ExternalTodoIntegrationCountArgs>(
      args?: Subset<T, ExternalTodoIntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalTodoIntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalTodoIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoIntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternalTodoIntegrationAggregateArgs>(args: Subset<T, ExternalTodoIntegrationAggregateArgs>): Prisma.PrismaPromise<GetExternalTodoIntegrationAggregateType<T>>

    /**
     * Group by ExternalTodoIntegration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoIntegrationGroupByArgs} args - Group by arguments.
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
      T extends ExternalTodoIntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalTodoIntegrationGroupByArgs['orderBy'] }
        : { orderBy?: ExternalTodoIntegrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExternalTodoIntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalTodoIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalTodoIntegration model
   */
  readonly fields: ExternalTodoIntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalTodoIntegration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalTodoIntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExternalTodoIntegration model
   */ 
  interface ExternalTodoIntegrationFieldRefs {
    readonly id: FieldRef<"ExternalTodoIntegration", 'String'>
    readonly token: FieldRef<"ExternalTodoIntegration", 'String'>
    readonly userId: FieldRef<"ExternalTodoIntegration", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ExternalTodoIntegration findUnique
   */
  export type ExternalTodoIntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoIntegration to fetch.
     */
    where: ExternalTodoIntegrationWhereUniqueInput
  }


  /**
   * ExternalTodoIntegration findUniqueOrThrow
   */
  export type ExternalTodoIntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoIntegration to fetch.
     */
    where: ExternalTodoIntegrationWhereUniqueInput
  }


  /**
   * ExternalTodoIntegration findFirst
   */
  export type ExternalTodoIntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoIntegration to fetch.
     */
    where?: ExternalTodoIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoIntegrations to fetch.
     */
    orderBy?: ExternalTodoIntegrationOrderByWithRelationInput | ExternalTodoIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalTodoIntegrations.
     */
    cursor?: ExternalTodoIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalTodoIntegrations.
     */
    distinct?: ExternalTodoIntegrationScalarFieldEnum | ExternalTodoIntegrationScalarFieldEnum[]
  }


  /**
   * ExternalTodoIntegration findFirstOrThrow
   */
  export type ExternalTodoIntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoIntegration to fetch.
     */
    where?: ExternalTodoIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoIntegrations to fetch.
     */
    orderBy?: ExternalTodoIntegrationOrderByWithRelationInput | ExternalTodoIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalTodoIntegrations.
     */
    cursor?: ExternalTodoIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoIntegrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalTodoIntegrations.
     */
    distinct?: ExternalTodoIntegrationScalarFieldEnum | ExternalTodoIntegrationScalarFieldEnum[]
  }


  /**
   * ExternalTodoIntegration findMany
   */
  export type ExternalTodoIntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoIntegrations to fetch.
     */
    where?: ExternalTodoIntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoIntegrations to fetch.
     */
    orderBy?: ExternalTodoIntegrationOrderByWithRelationInput | ExternalTodoIntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalTodoIntegrations.
     */
    cursor?: ExternalTodoIntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoIntegrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoIntegrations.
     */
    skip?: number
    distinct?: ExternalTodoIntegrationScalarFieldEnum | ExternalTodoIntegrationScalarFieldEnum[]
  }


  /**
   * ExternalTodoIntegration create
   */
  export type ExternalTodoIntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
    /**
     * The data needed to create a ExternalTodoIntegration.
     */
    data: XOR<ExternalTodoIntegrationCreateInput, ExternalTodoIntegrationUncheckedCreateInput>
  }


  /**
   * ExternalTodoIntegration createMany
   */
  export type ExternalTodoIntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalTodoIntegrations.
     */
    data: ExternalTodoIntegrationCreateManyInput | ExternalTodoIntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ExternalTodoIntegration update
   */
  export type ExternalTodoIntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
    /**
     * The data needed to update a ExternalTodoIntegration.
     */
    data: XOR<ExternalTodoIntegrationUpdateInput, ExternalTodoIntegrationUncheckedUpdateInput>
    /**
     * Choose, which ExternalTodoIntegration to update.
     */
    where: ExternalTodoIntegrationWhereUniqueInput
  }


  /**
   * ExternalTodoIntegration updateMany
   */
  export type ExternalTodoIntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalTodoIntegrations.
     */
    data: XOR<ExternalTodoIntegrationUpdateManyMutationInput, ExternalTodoIntegrationUncheckedUpdateManyInput>
    /**
     * Filter which ExternalTodoIntegrations to update
     */
    where?: ExternalTodoIntegrationWhereInput
  }


  /**
   * ExternalTodoIntegration upsert
   */
  export type ExternalTodoIntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
    /**
     * The filter to search for the ExternalTodoIntegration to update in case it exists.
     */
    where: ExternalTodoIntegrationWhereUniqueInput
    /**
     * In case the ExternalTodoIntegration found by the `where` argument doesn't exist, create a new ExternalTodoIntegration with this data.
     */
    create: XOR<ExternalTodoIntegrationCreateInput, ExternalTodoIntegrationUncheckedCreateInput>
    /**
     * In case the ExternalTodoIntegration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalTodoIntegrationUpdateInput, ExternalTodoIntegrationUncheckedUpdateInput>
  }


  /**
   * ExternalTodoIntegration delete
   */
  export type ExternalTodoIntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
    /**
     * Filter which ExternalTodoIntegration to delete.
     */
    where: ExternalTodoIntegrationWhereUniqueInput
  }


  /**
   * ExternalTodoIntegration deleteMany
   */
  export type ExternalTodoIntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalTodoIntegrations to delete
     */
    where?: ExternalTodoIntegrationWhereInput
  }


  /**
   * ExternalTodoIntegration without action
   */
  export type ExternalTodoIntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoIntegration
     */
    select?: ExternalTodoIntegrationSelect<ExtArgs> | null
  }



  /**
   * Model ExternalTodoMapping
   */

  export type AggregateExternalTodoMapping = {
    _count: ExternalTodoMappingCountAggregateOutputType | null
    _min: ExternalTodoMappingMinAggregateOutputType | null
    _max: ExternalTodoMappingMaxAggregateOutputType | null
  }

  export type ExternalTodoMappingMinAggregateOutputType = {
    id: string | null
    externalId: string | null
  }

  export type ExternalTodoMappingMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
  }

  export type ExternalTodoMappingCountAggregateOutputType = {
    id: number
    externalId: number
    _all: number
  }


  export type ExternalTodoMappingMinAggregateInputType = {
    id?: true
    externalId?: true
  }

  export type ExternalTodoMappingMaxAggregateInputType = {
    id?: true
    externalId?: true
  }

  export type ExternalTodoMappingCountAggregateInputType = {
    id?: true
    externalId?: true
    _all?: true
  }

  export type ExternalTodoMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalTodoMapping to aggregate.
     */
    where?: ExternalTodoMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoMappings to fetch.
     */
    orderBy?: ExternalTodoMappingOrderByWithRelationInput | ExternalTodoMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalTodoMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalTodoMappings
    **/
    _count?: true | ExternalTodoMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalTodoMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalTodoMappingMaxAggregateInputType
  }

  export type GetExternalTodoMappingAggregateType<T extends ExternalTodoMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalTodoMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalTodoMapping[P]>
      : GetScalarType<T[P], AggregateExternalTodoMapping[P]>
  }




  export type ExternalTodoMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalTodoMappingWhereInput
    orderBy?: ExternalTodoMappingOrderByWithAggregationInput | ExternalTodoMappingOrderByWithAggregationInput[]
    by: ExternalTodoMappingScalarFieldEnum[] | ExternalTodoMappingScalarFieldEnum
    having?: ExternalTodoMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalTodoMappingCountAggregateInputType | true
    _min?: ExternalTodoMappingMinAggregateInputType
    _max?: ExternalTodoMappingMaxAggregateInputType
  }

  export type ExternalTodoMappingGroupByOutputType = {
    id: string
    externalId: string
    _count: ExternalTodoMappingCountAggregateOutputType | null
    _min: ExternalTodoMappingMinAggregateOutputType | null
    _max: ExternalTodoMappingMaxAggregateOutputType | null
  }

  type GetExternalTodoMappingGroupByPayload<T extends ExternalTodoMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalTodoMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalTodoMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalTodoMappingGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalTodoMappingGroupByOutputType[P]>
        }
      >
    >


  export type ExternalTodoMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
  }, ExtArgs["result"]["externalTodoMapping"]>

  export type ExternalTodoMappingSelectScalar = {
    id?: boolean
    externalId?: boolean
  }


  export type $ExternalTodoMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalTodoMapping"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string
    }, ExtArgs["result"]["externalTodoMapping"]>
    composites: {}
  }


  type ExternalTodoMappingGetPayload<S extends boolean | null | undefined | ExternalTodoMappingDefaultArgs> = $Result.GetResult<Prisma.$ExternalTodoMappingPayload, S>

  type ExternalTodoMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExternalTodoMappingFindManyArgs, 'select' | 'include'> & {
      select?: ExternalTodoMappingCountAggregateInputType | true
    }

  export interface ExternalTodoMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalTodoMapping'], meta: { name: 'ExternalTodoMapping' } }
    /**
     * Find zero or one ExternalTodoMapping that matches the filter.
     * @param {ExternalTodoMappingFindUniqueArgs} args - Arguments to find a ExternalTodoMapping
     * @example
     * // Get one ExternalTodoMapping
     * const externalTodoMapping = await prisma.externalTodoMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExternalTodoMappingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMappingFindUniqueArgs<ExtArgs>>
    ): Prisma__ExternalTodoMappingClient<$Result.GetResult<Prisma.$ExternalTodoMappingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExternalTodoMapping that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExternalTodoMappingFindUniqueOrThrowArgs} args - Arguments to find a ExternalTodoMapping
     * @example
     * // Get one ExternalTodoMapping
     * const externalTodoMapping = await prisma.externalTodoMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExternalTodoMappingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMappingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalTodoMappingClient<$Result.GetResult<Prisma.$ExternalTodoMappingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExternalTodoMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMappingFindFirstArgs} args - Arguments to find a ExternalTodoMapping
     * @example
     * // Get one ExternalTodoMapping
     * const externalTodoMapping = await prisma.externalTodoMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExternalTodoMappingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMappingFindFirstArgs<ExtArgs>>
    ): Prisma__ExternalTodoMappingClient<$Result.GetResult<Prisma.$ExternalTodoMappingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExternalTodoMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMappingFindFirstOrThrowArgs} args - Arguments to find a ExternalTodoMapping
     * @example
     * // Get one ExternalTodoMapping
     * const externalTodoMapping = await prisma.externalTodoMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExternalTodoMappingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMappingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalTodoMappingClient<$Result.GetResult<Prisma.$ExternalTodoMappingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExternalTodoMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMappingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalTodoMappings
     * const externalTodoMappings = await prisma.externalTodoMapping.findMany()
     * 
     * // Get first 10 ExternalTodoMappings
     * const externalTodoMappings = await prisma.externalTodoMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalTodoMappingWithIdOnly = await prisma.externalTodoMapping.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExternalTodoMappingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMappingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalTodoMappingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExternalTodoMapping.
     * @param {ExternalTodoMappingCreateArgs} args - Arguments to create a ExternalTodoMapping.
     * @example
     * // Create one ExternalTodoMapping
     * const ExternalTodoMapping = await prisma.externalTodoMapping.create({
     *   data: {
     *     // ... data to create a ExternalTodoMapping
     *   }
     * })
     * 
    **/
    create<T extends ExternalTodoMappingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMappingCreateArgs<ExtArgs>>
    ): Prisma__ExternalTodoMappingClient<$Result.GetResult<Prisma.$ExternalTodoMappingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExternalTodoMappings.
     *     @param {ExternalTodoMappingCreateManyArgs} args - Arguments to create many ExternalTodoMappings.
     *     @example
     *     // Create many ExternalTodoMappings
     *     const externalTodoMapping = await prisma.externalTodoMapping.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExternalTodoMappingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMappingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExternalTodoMapping.
     * @param {ExternalTodoMappingDeleteArgs} args - Arguments to delete one ExternalTodoMapping.
     * @example
     * // Delete one ExternalTodoMapping
     * const ExternalTodoMapping = await prisma.externalTodoMapping.delete({
     *   where: {
     *     // ... filter to delete one ExternalTodoMapping
     *   }
     * })
     * 
    **/
    delete<T extends ExternalTodoMappingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMappingDeleteArgs<ExtArgs>>
    ): Prisma__ExternalTodoMappingClient<$Result.GetResult<Prisma.$ExternalTodoMappingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExternalTodoMapping.
     * @param {ExternalTodoMappingUpdateArgs} args - Arguments to update one ExternalTodoMapping.
     * @example
     * // Update one ExternalTodoMapping
     * const externalTodoMapping = await prisma.externalTodoMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExternalTodoMappingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMappingUpdateArgs<ExtArgs>>
    ): Prisma__ExternalTodoMappingClient<$Result.GetResult<Prisma.$ExternalTodoMappingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExternalTodoMappings.
     * @param {ExternalTodoMappingDeleteManyArgs} args - Arguments to filter ExternalTodoMappings to delete.
     * @example
     * // Delete a few ExternalTodoMappings
     * const { count } = await prisma.externalTodoMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExternalTodoMappingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMappingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalTodoMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalTodoMappings
     * const externalTodoMapping = await prisma.externalTodoMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExternalTodoMappingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMappingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExternalTodoMapping.
     * @param {ExternalTodoMappingUpsertArgs} args - Arguments to update or create a ExternalTodoMapping.
     * @example
     * // Update or create a ExternalTodoMapping
     * const externalTodoMapping = await prisma.externalTodoMapping.upsert({
     *   create: {
     *     // ... data to create a ExternalTodoMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalTodoMapping we want to update
     *   }
     * })
    **/
    upsert<T extends ExternalTodoMappingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMappingUpsertArgs<ExtArgs>>
    ): Prisma__ExternalTodoMappingClient<$Result.GetResult<Prisma.$ExternalTodoMappingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ExternalTodoMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMappingCountArgs} args - Arguments to filter ExternalTodoMappings to count.
     * @example
     * // Count the number of ExternalTodoMappings
     * const count = await prisma.externalTodoMapping.count({
     *   where: {
     *     // ... the filter for the ExternalTodoMappings we want to count
     *   }
     * })
    **/
    count<T extends ExternalTodoMappingCountArgs>(
      args?: Subset<T, ExternalTodoMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalTodoMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalTodoMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternalTodoMappingAggregateArgs>(args: Subset<T, ExternalTodoMappingAggregateArgs>): Prisma.PrismaPromise<GetExternalTodoMappingAggregateType<T>>

    /**
     * Group by ExternalTodoMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMappingGroupByArgs} args - Group by arguments.
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
      T extends ExternalTodoMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalTodoMappingGroupByArgs['orderBy'] }
        : { orderBy?: ExternalTodoMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExternalTodoMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalTodoMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalTodoMapping model
   */
  readonly fields: ExternalTodoMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalTodoMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalTodoMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExternalTodoMapping model
   */ 
  interface ExternalTodoMappingFieldRefs {
    readonly id: FieldRef<"ExternalTodoMapping", 'String'>
    readonly externalId: FieldRef<"ExternalTodoMapping", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ExternalTodoMapping findUnique
   */
  export type ExternalTodoMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMapping to fetch.
     */
    where: ExternalTodoMappingWhereUniqueInput
  }


  /**
   * ExternalTodoMapping findUniqueOrThrow
   */
  export type ExternalTodoMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMapping to fetch.
     */
    where: ExternalTodoMappingWhereUniqueInput
  }


  /**
   * ExternalTodoMapping findFirst
   */
  export type ExternalTodoMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMapping to fetch.
     */
    where?: ExternalTodoMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoMappings to fetch.
     */
    orderBy?: ExternalTodoMappingOrderByWithRelationInput | ExternalTodoMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalTodoMappings.
     */
    cursor?: ExternalTodoMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalTodoMappings.
     */
    distinct?: ExternalTodoMappingScalarFieldEnum | ExternalTodoMappingScalarFieldEnum[]
  }


  /**
   * ExternalTodoMapping findFirstOrThrow
   */
  export type ExternalTodoMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMapping to fetch.
     */
    where?: ExternalTodoMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoMappings to fetch.
     */
    orderBy?: ExternalTodoMappingOrderByWithRelationInput | ExternalTodoMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalTodoMappings.
     */
    cursor?: ExternalTodoMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalTodoMappings.
     */
    distinct?: ExternalTodoMappingScalarFieldEnum | ExternalTodoMappingScalarFieldEnum[]
  }


  /**
   * ExternalTodoMapping findMany
   */
  export type ExternalTodoMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMappings to fetch.
     */
    where?: ExternalTodoMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoMappings to fetch.
     */
    orderBy?: ExternalTodoMappingOrderByWithRelationInput | ExternalTodoMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalTodoMappings.
     */
    cursor?: ExternalTodoMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoMappings.
     */
    skip?: number
    distinct?: ExternalTodoMappingScalarFieldEnum | ExternalTodoMappingScalarFieldEnum[]
  }


  /**
   * ExternalTodoMapping create
   */
  export type ExternalTodoMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
    /**
     * The data needed to create a ExternalTodoMapping.
     */
    data: XOR<ExternalTodoMappingCreateInput, ExternalTodoMappingUncheckedCreateInput>
  }


  /**
   * ExternalTodoMapping createMany
   */
  export type ExternalTodoMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalTodoMappings.
     */
    data: ExternalTodoMappingCreateManyInput | ExternalTodoMappingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ExternalTodoMapping update
   */
  export type ExternalTodoMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
    /**
     * The data needed to update a ExternalTodoMapping.
     */
    data: XOR<ExternalTodoMappingUpdateInput, ExternalTodoMappingUncheckedUpdateInput>
    /**
     * Choose, which ExternalTodoMapping to update.
     */
    where: ExternalTodoMappingWhereUniqueInput
  }


  /**
   * ExternalTodoMapping updateMany
   */
  export type ExternalTodoMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalTodoMappings.
     */
    data: XOR<ExternalTodoMappingUpdateManyMutationInput, ExternalTodoMappingUncheckedUpdateManyInput>
    /**
     * Filter which ExternalTodoMappings to update
     */
    where?: ExternalTodoMappingWhereInput
  }


  /**
   * ExternalTodoMapping upsert
   */
  export type ExternalTodoMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
    /**
     * The filter to search for the ExternalTodoMapping to update in case it exists.
     */
    where: ExternalTodoMappingWhereUniqueInput
    /**
     * In case the ExternalTodoMapping found by the `where` argument doesn't exist, create a new ExternalTodoMapping with this data.
     */
    create: XOR<ExternalTodoMappingCreateInput, ExternalTodoMappingUncheckedCreateInput>
    /**
     * In case the ExternalTodoMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalTodoMappingUpdateInput, ExternalTodoMappingUncheckedUpdateInput>
  }


  /**
   * ExternalTodoMapping delete
   */
  export type ExternalTodoMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
    /**
     * Filter which ExternalTodoMapping to delete.
     */
    where: ExternalTodoMappingWhereUniqueInput
  }


  /**
   * ExternalTodoMapping deleteMany
   */
  export type ExternalTodoMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalTodoMappings to delete
     */
    where?: ExternalTodoMappingWhereInput
  }


  /**
   * ExternalTodoMapping without action
   */
  export type ExternalTodoMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMapping
     */
    select?: ExternalTodoMappingSelect<ExtArgs> | null
  }



  /**
   * Model ExternalTodoMock
   */

  export type AggregateExternalTodoMock = {
    _count: ExternalTodoMockCountAggregateOutputType | null
    _min: ExternalTodoMockMinAggregateOutputType | null
    _max: ExternalTodoMockMaxAggregateOutputType | null
  }

  export type ExternalTodoMockMinAggregateOutputType = {
    id: string | null
    value: string | null
    status: $Enums.TodoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ExternalTodoMockMaxAggregateOutputType = {
    id: string | null
    value: string | null
    status: $Enums.TodoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ExternalTodoMockCountAggregateOutputType = {
    id: number
    value: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ExternalTodoMockMinAggregateInputType = {
    id?: true
    value?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ExternalTodoMockMaxAggregateInputType = {
    id?: true
    value?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ExternalTodoMockCountAggregateInputType = {
    id?: true
    value?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ExternalTodoMockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalTodoMock to aggregate.
     */
    where?: ExternalTodoMockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoMocks to fetch.
     */
    orderBy?: ExternalTodoMockOrderByWithRelationInput | ExternalTodoMockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalTodoMockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoMocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoMocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalTodoMocks
    **/
    _count?: true | ExternalTodoMockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalTodoMockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalTodoMockMaxAggregateInputType
  }

  export type GetExternalTodoMockAggregateType<T extends ExternalTodoMockAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalTodoMock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalTodoMock[P]>
      : GetScalarType<T[P], AggregateExternalTodoMock[P]>
  }




  export type ExternalTodoMockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalTodoMockWhereInput
    orderBy?: ExternalTodoMockOrderByWithAggregationInput | ExternalTodoMockOrderByWithAggregationInput[]
    by: ExternalTodoMockScalarFieldEnum[] | ExternalTodoMockScalarFieldEnum
    having?: ExternalTodoMockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalTodoMockCountAggregateInputType | true
    _min?: ExternalTodoMockMinAggregateInputType
    _max?: ExternalTodoMockMaxAggregateInputType
  }

  export type ExternalTodoMockGroupByOutputType = {
    id: string
    value: string
    status: $Enums.TodoStatus
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ExternalTodoMockCountAggregateOutputType | null
    _min: ExternalTodoMockMinAggregateOutputType | null
    _max: ExternalTodoMockMaxAggregateOutputType | null
  }

  type GetExternalTodoMockGroupByPayload<T extends ExternalTodoMockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalTodoMockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalTodoMockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalTodoMockGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalTodoMockGroupByOutputType[P]>
        }
      >
    >


  export type ExternalTodoMockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["externalTodoMock"]>

  export type ExternalTodoMockSelectScalar = {
    id?: boolean
    value?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }


  export type $ExternalTodoMockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalTodoMock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      status: $Enums.TodoStatus
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["externalTodoMock"]>
    composites: {}
  }


  type ExternalTodoMockGetPayload<S extends boolean | null | undefined | ExternalTodoMockDefaultArgs> = $Result.GetResult<Prisma.$ExternalTodoMockPayload, S>

  type ExternalTodoMockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExternalTodoMockFindManyArgs, 'select' | 'include'> & {
      select?: ExternalTodoMockCountAggregateInputType | true
    }

  export interface ExternalTodoMockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalTodoMock'], meta: { name: 'ExternalTodoMock' } }
    /**
     * Find zero or one ExternalTodoMock that matches the filter.
     * @param {ExternalTodoMockFindUniqueArgs} args - Arguments to find a ExternalTodoMock
     * @example
     * // Get one ExternalTodoMock
     * const externalTodoMock = await prisma.externalTodoMock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExternalTodoMockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMockFindUniqueArgs<ExtArgs>>
    ): Prisma__ExternalTodoMockClient<$Result.GetResult<Prisma.$ExternalTodoMockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExternalTodoMock that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExternalTodoMockFindUniqueOrThrowArgs} args - Arguments to find a ExternalTodoMock
     * @example
     * // Get one ExternalTodoMock
     * const externalTodoMock = await prisma.externalTodoMock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExternalTodoMockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalTodoMockClient<$Result.GetResult<Prisma.$ExternalTodoMockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExternalTodoMock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMockFindFirstArgs} args - Arguments to find a ExternalTodoMock
     * @example
     * // Get one ExternalTodoMock
     * const externalTodoMock = await prisma.externalTodoMock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExternalTodoMockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMockFindFirstArgs<ExtArgs>>
    ): Prisma__ExternalTodoMockClient<$Result.GetResult<Prisma.$ExternalTodoMockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExternalTodoMock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMockFindFirstOrThrowArgs} args - Arguments to find a ExternalTodoMock
     * @example
     * // Get one ExternalTodoMock
     * const externalTodoMock = await prisma.externalTodoMock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExternalTodoMockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalTodoMockClient<$Result.GetResult<Prisma.$ExternalTodoMockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExternalTodoMocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalTodoMocks
     * const externalTodoMocks = await prisma.externalTodoMock.findMany()
     * 
     * // Get first 10 ExternalTodoMocks
     * const externalTodoMocks = await prisma.externalTodoMock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalTodoMockWithIdOnly = await prisma.externalTodoMock.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExternalTodoMockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalTodoMockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExternalTodoMock.
     * @param {ExternalTodoMockCreateArgs} args - Arguments to create a ExternalTodoMock.
     * @example
     * // Create one ExternalTodoMock
     * const ExternalTodoMock = await prisma.externalTodoMock.create({
     *   data: {
     *     // ... data to create a ExternalTodoMock
     *   }
     * })
     * 
    **/
    create<T extends ExternalTodoMockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMockCreateArgs<ExtArgs>>
    ): Prisma__ExternalTodoMockClient<$Result.GetResult<Prisma.$ExternalTodoMockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExternalTodoMocks.
     *     @param {ExternalTodoMockCreateManyArgs} args - Arguments to create many ExternalTodoMocks.
     *     @example
     *     // Create many ExternalTodoMocks
     *     const externalTodoMock = await prisma.externalTodoMock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExternalTodoMockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExternalTodoMock.
     * @param {ExternalTodoMockDeleteArgs} args - Arguments to delete one ExternalTodoMock.
     * @example
     * // Delete one ExternalTodoMock
     * const ExternalTodoMock = await prisma.externalTodoMock.delete({
     *   where: {
     *     // ... filter to delete one ExternalTodoMock
     *   }
     * })
     * 
    **/
    delete<T extends ExternalTodoMockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMockDeleteArgs<ExtArgs>>
    ): Prisma__ExternalTodoMockClient<$Result.GetResult<Prisma.$ExternalTodoMockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExternalTodoMock.
     * @param {ExternalTodoMockUpdateArgs} args - Arguments to update one ExternalTodoMock.
     * @example
     * // Update one ExternalTodoMock
     * const externalTodoMock = await prisma.externalTodoMock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExternalTodoMockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMockUpdateArgs<ExtArgs>>
    ): Prisma__ExternalTodoMockClient<$Result.GetResult<Prisma.$ExternalTodoMockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExternalTodoMocks.
     * @param {ExternalTodoMockDeleteManyArgs} args - Arguments to filter ExternalTodoMocks to delete.
     * @example
     * // Delete a few ExternalTodoMocks
     * const { count } = await prisma.externalTodoMock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExternalTodoMockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTodoMockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalTodoMocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalTodoMocks
     * const externalTodoMock = await prisma.externalTodoMock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExternalTodoMockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExternalTodoMock.
     * @param {ExternalTodoMockUpsertArgs} args - Arguments to update or create a ExternalTodoMock.
     * @example
     * // Update or create a ExternalTodoMock
     * const externalTodoMock = await prisma.externalTodoMock.upsert({
     *   create: {
     *     // ... data to create a ExternalTodoMock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalTodoMock we want to update
     *   }
     * })
    **/
    upsert<T extends ExternalTodoMockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTodoMockUpsertArgs<ExtArgs>>
    ): Prisma__ExternalTodoMockClient<$Result.GetResult<Prisma.$ExternalTodoMockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ExternalTodoMocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMockCountArgs} args - Arguments to filter ExternalTodoMocks to count.
     * @example
     * // Count the number of ExternalTodoMocks
     * const count = await prisma.externalTodoMock.count({
     *   where: {
     *     // ... the filter for the ExternalTodoMocks we want to count
     *   }
     * })
    **/
    count<T extends ExternalTodoMockCountArgs>(
      args?: Subset<T, ExternalTodoMockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalTodoMockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalTodoMock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternalTodoMockAggregateArgs>(args: Subset<T, ExternalTodoMockAggregateArgs>): Prisma.PrismaPromise<GetExternalTodoMockAggregateType<T>>

    /**
     * Group by ExternalTodoMock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTodoMockGroupByArgs} args - Group by arguments.
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
      T extends ExternalTodoMockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalTodoMockGroupByArgs['orderBy'] }
        : { orderBy?: ExternalTodoMockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExternalTodoMockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalTodoMockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalTodoMock model
   */
  readonly fields: ExternalTodoMockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalTodoMock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalTodoMockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExternalTodoMock model
   */ 
  interface ExternalTodoMockFieldRefs {
    readonly id: FieldRef<"ExternalTodoMock", 'String'>
    readonly value: FieldRef<"ExternalTodoMock", 'String'>
    readonly status: FieldRef<"ExternalTodoMock", 'TodoStatus'>
    readonly createdAt: FieldRef<"ExternalTodoMock", 'DateTime'>
    readonly updatedAt: FieldRef<"ExternalTodoMock", 'DateTime'>
    readonly userId: FieldRef<"ExternalTodoMock", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ExternalTodoMock findUnique
   */
  export type ExternalTodoMockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMock to fetch.
     */
    where: ExternalTodoMockWhereUniqueInput
  }


  /**
   * ExternalTodoMock findUniqueOrThrow
   */
  export type ExternalTodoMockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMock to fetch.
     */
    where: ExternalTodoMockWhereUniqueInput
  }


  /**
   * ExternalTodoMock findFirst
   */
  export type ExternalTodoMockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMock to fetch.
     */
    where?: ExternalTodoMockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoMocks to fetch.
     */
    orderBy?: ExternalTodoMockOrderByWithRelationInput | ExternalTodoMockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalTodoMocks.
     */
    cursor?: ExternalTodoMockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoMocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoMocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalTodoMocks.
     */
    distinct?: ExternalTodoMockScalarFieldEnum | ExternalTodoMockScalarFieldEnum[]
  }


  /**
   * ExternalTodoMock findFirstOrThrow
   */
  export type ExternalTodoMockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMock to fetch.
     */
    where?: ExternalTodoMockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoMocks to fetch.
     */
    orderBy?: ExternalTodoMockOrderByWithRelationInput | ExternalTodoMockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalTodoMocks.
     */
    cursor?: ExternalTodoMockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoMocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoMocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalTodoMocks.
     */
    distinct?: ExternalTodoMockScalarFieldEnum | ExternalTodoMockScalarFieldEnum[]
  }


  /**
   * ExternalTodoMock findMany
   */
  export type ExternalTodoMockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalTodoMocks to fetch.
     */
    where?: ExternalTodoMockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTodoMocks to fetch.
     */
    orderBy?: ExternalTodoMockOrderByWithRelationInput | ExternalTodoMockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalTodoMocks.
     */
    cursor?: ExternalTodoMockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTodoMocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTodoMocks.
     */
    skip?: number
    distinct?: ExternalTodoMockScalarFieldEnum | ExternalTodoMockScalarFieldEnum[]
  }


  /**
   * ExternalTodoMock create
   */
  export type ExternalTodoMockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
    /**
     * The data needed to create a ExternalTodoMock.
     */
    data: XOR<ExternalTodoMockCreateInput, ExternalTodoMockUncheckedCreateInput>
  }


  /**
   * ExternalTodoMock createMany
   */
  export type ExternalTodoMockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalTodoMocks.
     */
    data: ExternalTodoMockCreateManyInput | ExternalTodoMockCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ExternalTodoMock update
   */
  export type ExternalTodoMockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
    /**
     * The data needed to update a ExternalTodoMock.
     */
    data: XOR<ExternalTodoMockUpdateInput, ExternalTodoMockUncheckedUpdateInput>
    /**
     * Choose, which ExternalTodoMock to update.
     */
    where: ExternalTodoMockWhereUniqueInput
  }


  /**
   * ExternalTodoMock updateMany
   */
  export type ExternalTodoMockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalTodoMocks.
     */
    data: XOR<ExternalTodoMockUpdateManyMutationInput, ExternalTodoMockUncheckedUpdateManyInput>
    /**
     * Filter which ExternalTodoMocks to update
     */
    where?: ExternalTodoMockWhereInput
  }


  /**
   * ExternalTodoMock upsert
   */
  export type ExternalTodoMockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
    /**
     * The filter to search for the ExternalTodoMock to update in case it exists.
     */
    where: ExternalTodoMockWhereUniqueInput
    /**
     * In case the ExternalTodoMock found by the `where` argument doesn't exist, create a new ExternalTodoMock with this data.
     */
    create: XOR<ExternalTodoMockCreateInput, ExternalTodoMockUncheckedCreateInput>
    /**
     * In case the ExternalTodoMock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalTodoMockUpdateInput, ExternalTodoMockUncheckedUpdateInput>
  }


  /**
   * ExternalTodoMock delete
   */
  export type ExternalTodoMockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
    /**
     * Filter which ExternalTodoMock to delete.
     */
    where: ExternalTodoMockWhereUniqueInput
  }


  /**
   * ExternalTodoMock deleteMany
   */
  export type ExternalTodoMockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalTodoMocks to delete
     */
    where?: ExternalTodoMockWhereInput
  }


  /**
   * ExternalTodoMock without action
   */
  export type ExternalTodoMockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTodoMock
     */
    select?: ExternalTodoMockSelect<ExtArgs> | null
  }



  /**
   * Model ExternalIntegrationMock
   */

  export type AggregateExternalIntegrationMock = {
    _count: ExternalIntegrationMockCountAggregateOutputType | null
    _min: ExternalIntegrationMockMinAggregateOutputType | null
    _max: ExternalIntegrationMockMaxAggregateOutputType | null
  }

  export type ExternalIntegrationMockMinAggregateOutputType = {
    userId: string | null
    webhookUrl: string | null
    token: string | null
  }

  export type ExternalIntegrationMockMaxAggregateOutputType = {
    userId: string | null
    webhookUrl: string | null
    token: string | null
  }

  export type ExternalIntegrationMockCountAggregateOutputType = {
    userId: number
    webhookUrl: number
    token: number
    _all: number
  }


  export type ExternalIntegrationMockMinAggregateInputType = {
    userId?: true
    webhookUrl?: true
    token?: true
  }

  export type ExternalIntegrationMockMaxAggregateInputType = {
    userId?: true
    webhookUrl?: true
    token?: true
  }

  export type ExternalIntegrationMockCountAggregateInputType = {
    userId?: true
    webhookUrl?: true
    token?: true
    _all?: true
  }

  export type ExternalIntegrationMockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalIntegrationMock to aggregate.
     */
    where?: ExternalIntegrationMockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalIntegrationMocks to fetch.
     */
    orderBy?: ExternalIntegrationMockOrderByWithRelationInput | ExternalIntegrationMockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalIntegrationMockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalIntegrationMocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalIntegrationMocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalIntegrationMocks
    **/
    _count?: true | ExternalIntegrationMockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalIntegrationMockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalIntegrationMockMaxAggregateInputType
  }

  export type GetExternalIntegrationMockAggregateType<T extends ExternalIntegrationMockAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalIntegrationMock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalIntegrationMock[P]>
      : GetScalarType<T[P], AggregateExternalIntegrationMock[P]>
  }




  export type ExternalIntegrationMockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalIntegrationMockWhereInput
    orderBy?: ExternalIntegrationMockOrderByWithAggregationInput | ExternalIntegrationMockOrderByWithAggregationInput[]
    by: ExternalIntegrationMockScalarFieldEnum[] | ExternalIntegrationMockScalarFieldEnum
    having?: ExternalIntegrationMockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalIntegrationMockCountAggregateInputType | true
    _min?: ExternalIntegrationMockMinAggregateInputType
    _max?: ExternalIntegrationMockMaxAggregateInputType
  }

  export type ExternalIntegrationMockGroupByOutputType = {
    userId: string
    webhookUrl: string
    token: string
    _count: ExternalIntegrationMockCountAggregateOutputType | null
    _min: ExternalIntegrationMockMinAggregateOutputType | null
    _max: ExternalIntegrationMockMaxAggregateOutputType | null
  }

  type GetExternalIntegrationMockGroupByPayload<T extends ExternalIntegrationMockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalIntegrationMockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalIntegrationMockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalIntegrationMockGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalIntegrationMockGroupByOutputType[P]>
        }
      >
    >


  export type ExternalIntegrationMockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    webhookUrl?: boolean
    token?: boolean
  }, ExtArgs["result"]["externalIntegrationMock"]>

  export type ExternalIntegrationMockSelectScalar = {
    userId?: boolean
    webhookUrl?: boolean
    token?: boolean
  }


  export type $ExternalIntegrationMockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalIntegrationMock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      webhookUrl: string
      token: string
    }, ExtArgs["result"]["externalIntegrationMock"]>
    composites: {}
  }


  type ExternalIntegrationMockGetPayload<S extends boolean | null | undefined | ExternalIntegrationMockDefaultArgs> = $Result.GetResult<Prisma.$ExternalIntegrationMockPayload, S>

  type ExternalIntegrationMockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExternalIntegrationMockFindManyArgs, 'select' | 'include'> & {
      select?: ExternalIntegrationMockCountAggregateInputType | true
    }

  export interface ExternalIntegrationMockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalIntegrationMock'], meta: { name: 'ExternalIntegrationMock' } }
    /**
     * Find zero or one ExternalIntegrationMock that matches the filter.
     * @param {ExternalIntegrationMockFindUniqueArgs} args - Arguments to find a ExternalIntegrationMock
     * @example
     * // Get one ExternalIntegrationMock
     * const externalIntegrationMock = await prisma.externalIntegrationMock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExternalIntegrationMockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalIntegrationMockFindUniqueArgs<ExtArgs>>
    ): Prisma__ExternalIntegrationMockClient<$Result.GetResult<Prisma.$ExternalIntegrationMockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExternalIntegrationMock that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExternalIntegrationMockFindUniqueOrThrowArgs} args - Arguments to find a ExternalIntegrationMock
     * @example
     * // Get one ExternalIntegrationMock
     * const externalIntegrationMock = await prisma.externalIntegrationMock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExternalIntegrationMockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalIntegrationMockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalIntegrationMockClient<$Result.GetResult<Prisma.$ExternalIntegrationMockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExternalIntegrationMock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalIntegrationMockFindFirstArgs} args - Arguments to find a ExternalIntegrationMock
     * @example
     * // Get one ExternalIntegrationMock
     * const externalIntegrationMock = await prisma.externalIntegrationMock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExternalIntegrationMockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalIntegrationMockFindFirstArgs<ExtArgs>>
    ): Prisma__ExternalIntegrationMockClient<$Result.GetResult<Prisma.$ExternalIntegrationMockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExternalIntegrationMock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalIntegrationMockFindFirstOrThrowArgs} args - Arguments to find a ExternalIntegrationMock
     * @example
     * // Get one ExternalIntegrationMock
     * const externalIntegrationMock = await prisma.externalIntegrationMock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExternalIntegrationMockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalIntegrationMockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalIntegrationMockClient<$Result.GetResult<Prisma.$ExternalIntegrationMockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExternalIntegrationMocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalIntegrationMockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalIntegrationMocks
     * const externalIntegrationMocks = await prisma.externalIntegrationMock.findMany()
     * 
     * // Get first 10 ExternalIntegrationMocks
     * const externalIntegrationMocks = await prisma.externalIntegrationMock.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const externalIntegrationMockWithUserIdOnly = await prisma.externalIntegrationMock.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends ExternalIntegrationMockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalIntegrationMockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalIntegrationMockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExternalIntegrationMock.
     * @param {ExternalIntegrationMockCreateArgs} args - Arguments to create a ExternalIntegrationMock.
     * @example
     * // Create one ExternalIntegrationMock
     * const ExternalIntegrationMock = await prisma.externalIntegrationMock.create({
     *   data: {
     *     // ... data to create a ExternalIntegrationMock
     *   }
     * })
     * 
    **/
    create<T extends ExternalIntegrationMockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalIntegrationMockCreateArgs<ExtArgs>>
    ): Prisma__ExternalIntegrationMockClient<$Result.GetResult<Prisma.$ExternalIntegrationMockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExternalIntegrationMocks.
     *     @param {ExternalIntegrationMockCreateManyArgs} args - Arguments to create many ExternalIntegrationMocks.
     *     @example
     *     // Create many ExternalIntegrationMocks
     *     const externalIntegrationMock = await prisma.externalIntegrationMock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExternalIntegrationMockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalIntegrationMockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExternalIntegrationMock.
     * @param {ExternalIntegrationMockDeleteArgs} args - Arguments to delete one ExternalIntegrationMock.
     * @example
     * // Delete one ExternalIntegrationMock
     * const ExternalIntegrationMock = await prisma.externalIntegrationMock.delete({
     *   where: {
     *     // ... filter to delete one ExternalIntegrationMock
     *   }
     * })
     * 
    **/
    delete<T extends ExternalIntegrationMockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalIntegrationMockDeleteArgs<ExtArgs>>
    ): Prisma__ExternalIntegrationMockClient<$Result.GetResult<Prisma.$ExternalIntegrationMockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExternalIntegrationMock.
     * @param {ExternalIntegrationMockUpdateArgs} args - Arguments to update one ExternalIntegrationMock.
     * @example
     * // Update one ExternalIntegrationMock
     * const externalIntegrationMock = await prisma.externalIntegrationMock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExternalIntegrationMockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalIntegrationMockUpdateArgs<ExtArgs>>
    ): Prisma__ExternalIntegrationMockClient<$Result.GetResult<Prisma.$ExternalIntegrationMockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExternalIntegrationMocks.
     * @param {ExternalIntegrationMockDeleteManyArgs} args - Arguments to filter ExternalIntegrationMocks to delete.
     * @example
     * // Delete a few ExternalIntegrationMocks
     * const { count } = await prisma.externalIntegrationMock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExternalIntegrationMockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalIntegrationMockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalIntegrationMocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalIntegrationMockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalIntegrationMocks
     * const externalIntegrationMock = await prisma.externalIntegrationMock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExternalIntegrationMockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalIntegrationMockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExternalIntegrationMock.
     * @param {ExternalIntegrationMockUpsertArgs} args - Arguments to update or create a ExternalIntegrationMock.
     * @example
     * // Update or create a ExternalIntegrationMock
     * const externalIntegrationMock = await prisma.externalIntegrationMock.upsert({
     *   create: {
     *     // ... data to create a ExternalIntegrationMock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalIntegrationMock we want to update
     *   }
     * })
    **/
    upsert<T extends ExternalIntegrationMockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalIntegrationMockUpsertArgs<ExtArgs>>
    ): Prisma__ExternalIntegrationMockClient<$Result.GetResult<Prisma.$ExternalIntegrationMockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ExternalIntegrationMocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalIntegrationMockCountArgs} args - Arguments to filter ExternalIntegrationMocks to count.
     * @example
     * // Count the number of ExternalIntegrationMocks
     * const count = await prisma.externalIntegrationMock.count({
     *   where: {
     *     // ... the filter for the ExternalIntegrationMocks we want to count
     *   }
     * })
    **/
    count<T extends ExternalIntegrationMockCountArgs>(
      args?: Subset<T, ExternalIntegrationMockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalIntegrationMockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalIntegrationMock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalIntegrationMockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternalIntegrationMockAggregateArgs>(args: Subset<T, ExternalIntegrationMockAggregateArgs>): Prisma.PrismaPromise<GetExternalIntegrationMockAggregateType<T>>

    /**
     * Group by ExternalIntegrationMock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalIntegrationMockGroupByArgs} args - Group by arguments.
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
      T extends ExternalIntegrationMockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalIntegrationMockGroupByArgs['orderBy'] }
        : { orderBy?: ExternalIntegrationMockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExternalIntegrationMockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalIntegrationMockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalIntegrationMock model
   */
  readonly fields: ExternalIntegrationMockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalIntegrationMock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalIntegrationMockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExternalIntegrationMock model
   */ 
  interface ExternalIntegrationMockFieldRefs {
    readonly userId: FieldRef<"ExternalIntegrationMock", 'String'>
    readonly webhookUrl: FieldRef<"ExternalIntegrationMock", 'String'>
    readonly token: FieldRef<"ExternalIntegrationMock", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ExternalIntegrationMock findUnique
   */
  export type ExternalIntegrationMockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalIntegrationMock to fetch.
     */
    where: ExternalIntegrationMockWhereUniqueInput
  }


  /**
   * ExternalIntegrationMock findUniqueOrThrow
   */
  export type ExternalIntegrationMockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalIntegrationMock to fetch.
     */
    where: ExternalIntegrationMockWhereUniqueInput
  }


  /**
   * ExternalIntegrationMock findFirst
   */
  export type ExternalIntegrationMockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalIntegrationMock to fetch.
     */
    where?: ExternalIntegrationMockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalIntegrationMocks to fetch.
     */
    orderBy?: ExternalIntegrationMockOrderByWithRelationInput | ExternalIntegrationMockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalIntegrationMocks.
     */
    cursor?: ExternalIntegrationMockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalIntegrationMocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalIntegrationMocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalIntegrationMocks.
     */
    distinct?: ExternalIntegrationMockScalarFieldEnum | ExternalIntegrationMockScalarFieldEnum[]
  }


  /**
   * ExternalIntegrationMock findFirstOrThrow
   */
  export type ExternalIntegrationMockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalIntegrationMock to fetch.
     */
    where?: ExternalIntegrationMockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalIntegrationMocks to fetch.
     */
    orderBy?: ExternalIntegrationMockOrderByWithRelationInput | ExternalIntegrationMockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalIntegrationMocks.
     */
    cursor?: ExternalIntegrationMockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalIntegrationMocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalIntegrationMocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalIntegrationMocks.
     */
    distinct?: ExternalIntegrationMockScalarFieldEnum | ExternalIntegrationMockScalarFieldEnum[]
  }


  /**
   * ExternalIntegrationMock findMany
   */
  export type ExternalIntegrationMockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
    /**
     * Filter, which ExternalIntegrationMocks to fetch.
     */
    where?: ExternalIntegrationMockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalIntegrationMocks to fetch.
     */
    orderBy?: ExternalIntegrationMockOrderByWithRelationInput | ExternalIntegrationMockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalIntegrationMocks.
     */
    cursor?: ExternalIntegrationMockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalIntegrationMocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalIntegrationMocks.
     */
    skip?: number
    distinct?: ExternalIntegrationMockScalarFieldEnum | ExternalIntegrationMockScalarFieldEnum[]
  }


  /**
   * ExternalIntegrationMock create
   */
  export type ExternalIntegrationMockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
    /**
     * The data needed to create a ExternalIntegrationMock.
     */
    data: XOR<ExternalIntegrationMockCreateInput, ExternalIntegrationMockUncheckedCreateInput>
  }


  /**
   * ExternalIntegrationMock createMany
   */
  export type ExternalIntegrationMockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalIntegrationMocks.
     */
    data: ExternalIntegrationMockCreateManyInput | ExternalIntegrationMockCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ExternalIntegrationMock update
   */
  export type ExternalIntegrationMockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
    /**
     * The data needed to update a ExternalIntegrationMock.
     */
    data: XOR<ExternalIntegrationMockUpdateInput, ExternalIntegrationMockUncheckedUpdateInput>
    /**
     * Choose, which ExternalIntegrationMock to update.
     */
    where: ExternalIntegrationMockWhereUniqueInput
  }


  /**
   * ExternalIntegrationMock updateMany
   */
  export type ExternalIntegrationMockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalIntegrationMocks.
     */
    data: XOR<ExternalIntegrationMockUpdateManyMutationInput, ExternalIntegrationMockUncheckedUpdateManyInput>
    /**
     * Filter which ExternalIntegrationMocks to update
     */
    where?: ExternalIntegrationMockWhereInput
  }


  /**
   * ExternalIntegrationMock upsert
   */
  export type ExternalIntegrationMockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
    /**
     * The filter to search for the ExternalIntegrationMock to update in case it exists.
     */
    where: ExternalIntegrationMockWhereUniqueInput
    /**
     * In case the ExternalIntegrationMock found by the `where` argument doesn't exist, create a new ExternalIntegrationMock with this data.
     */
    create: XOR<ExternalIntegrationMockCreateInput, ExternalIntegrationMockUncheckedCreateInput>
    /**
     * In case the ExternalIntegrationMock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalIntegrationMockUpdateInput, ExternalIntegrationMockUncheckedUpdateInput>
  }


  /**
   * ExternalIntegrationMock delete
   */
  export type ExternalIntegrationMockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
    /**
     * Filter which ExternalIntegrationMock to delete.
     */
    where: ExternalIntegrationMockWhereUniqueInput
  }


  /**
   * ExternalIntegrationMock deleteMany
   */
  export type ExternalIntegrationMockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalIntegrationMocks to delete
     */
    where?: ExternalIntegrationMockWhereInput
  }


  /**
   * ExternalIntegrationMock without action
   */
  export type ExternalIntegrationMockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalIntegrationMock
     */
    select?: ExternalIntegrationMockSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ToDoScalarFieldEnum: {
    id: 'id',
    value: 'value',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ToDoScalarFieldEnum = (typeof ToDoScalarFieldEnum)[keyof typeof ToDoScalarFieldEnum]


  export const ExternalTodoIntegrationScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId'
  };

  export type ExternalTodoIntegrationScalarFieldEnum = (typeof ExternalTodoIntegrationScalarFieldEnum)[keyof typeof ExternalTodoIntegrationScalarFieldEnum]


  export const ExternalTodoMappingScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId'
  };

  export type ExternalTodoMappingScalarFieldEnum = (typeof ExternalTodoMappingScalarFieldEnum)[keyof typeof ExternalTodoMappingScalarFieldEnum]


  export const ExternalTodoMockScalarFieldEnum: {
    id: 'id',
    value: 'value',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ExternalTodoMockScalarFieldEnum = (typeof ExternalTodoMockScalarFieldEnum)[keyof typeof ExternalTodoMockScalarFieldEnum]


  export const ExternalIntegrationMockScalarFieldEnum: {
    userId: 'userId',
    webhookUrl: 'webhookUrl',
    token: 'token'
  };

  export type ExternalIntegrationMockScalarFieldEnum = (typeof ExternalIntegrationMockScalarFieldEnum)[keyof typeof ExternalIntegrationMockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TodoStatus'
   */
  export type EnumTodoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TodoStatus'>
    


  /**
   * Reference to a field of type 'TodoStatus[]'
   */
  export type ListEnumTodoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TodoStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ToDoWhereInput = {
    AND?: ToDoWhereInput | ToDoWhereInput[]
    OR?: ToDoWhereInput[]
    NOT?: ToDoWhereInput | ToDoWhereInput[]
    id?: StringFilter<"ToDo"> | string
    value?: StringFilter<"ToDo"> | string
    status?: EnumTodoStatusFilter<"ToDo"> | $Enums.TodoStatus
    createdAt?: DateTimeFilter<"ToDo"> | Date | string
    updatedAt?: DateTimeFilter<"ToDo"> | Date | string
    userId?: StringFilter<"ToDo"> | string
  }

  export type ToDoOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ToDoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToDoWhereInput | ToDoWhereInput[]
    OR?: ToDoWhereInput[]
    NOT?: ToDoWhereInput | ToDoWhereInput[]
    value?: StringFilter<"ToDo"> | string
    status?: EnumTodoStatusFilter<"ToDo"> | $Enums.TodoStatus
    createdAt?: DateTimeFilter<"ToDo"> | Date | string
    updatedAt?: DateTimeFilter<"ToDo"> | Date | string
    userId?: StringFilter<"ToDo"> | string
  }, "id">

  export type ToDoOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ToDoCountOrderByAggregateInput
    _max?: ToDoMaxOrderByAggregateInput
    _min?: ToDoMinOrderByAggregateInput
  }

  export type ToDoScalarWhereWithAggregatesInput = {
    AND?: ToDoScalarWhereWithAggregatesInput | ToDoScalarWhereWithAggregatesInput[]
    OR?: ToDoScalarWhereWithAggregatesInput[]
    NOT?: ToDoScalarWhereWithAggregatesInput | ToDoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ToDo"> | string
    value?: StringWithAggregatesFilter<"ToDo"> | string
    status?: EnumTodoStatusWithAggregatesFilter<"ToDo"> | $Enums.TodoStatus
    createdAt?: DateTimeWithAggregatesFilter<"ToDo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ToDo"> | Date | string
    userId?: StringWithAggregatesFilter<"ToDo"> | string
  }

  export type ExternalTodoIntegrationWhereInput = {
    AND?: ExternalTodoIntegrationWhereInput | ExternalTodoIntegrationWhereInput[]
    OR?: ExternalTodoIntegrationWhereInput[]
    NOT?: ExternalTodoIntegrationWhereInput | ExternalTodoIntegrationWhereInput[]
    id?: StringFilter<"ExternalTodoIntegration"> | string
    token?: StringFilter<"ExternalTodoIntegration"> | string
    userId?: StringFilter<"ExternalTodoIntegration"> | string
  }

  export type ExternalTodoIntegrationOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type ExternalTodoIntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExternalTodoIntegrationWhereInput | ExternalTodoIntegrationWhereInput[]
    OR?: ExternalTodoIntegrationWhereInput[]
    NOT?: ExternalTodoIntegrationWhereInput | ExternalTodoIntegrationWhereInput[]
    token?: StringFilter<"ExternalTodoIntegration"> | string
    userId?: StringFilter<"ExternalTodoIntegration"> | string
  }, "id">

  export type ExternalTodoIntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    _count?: ExternalTodoIntegrationCountOrderByAggregateInput
    _max?: ExternalTodoIntegrationMaxOrderByAggregateInput
    _min?: ExternalTodoIntegrationMinOrderByAggregateInput
  }

  export type ExternalTodoIntegrationScalarWhereWithAggregatesInput = {
    AND?: ExternalTodoIntegrationScalarWhereWithAggregatesInput | ExternalTodoIntegrationScalarWhereWithAggregatesInput[]
    OR?: ExternalTodoIntegrationScalarWhereWithAggregatesInput[]
    NOT?: ExternalTodoIntegrationScalarWhereWithAggregatesInput | ExternalTodoIntegrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExternalTodoIntegration"> | string
    token?: StringWithAggregatesFilter<"ExternalTodoIntegration"> | string
    userId?: StringWithAggregatesFilter<"ExternalTodoIntegration"> | string
  }

  export type ExternalTodoMappingWhereInput = {
    AND?: ExternalTodoMappingWhereInput | ExternalTodoMappingWhereInput[]
    OR?: ExternalTodoMappingWhereInput[]
    NOT?: ExternalTodoMappingWhereInput | ExternalTodoMappingWhereInput[]
    id?: StringFilter<"ExternalTodoMapping"> | string
    externalId?: StringFilter<"ExternalTodoMapping"> | string
  }

  export type ExternalTodoMappingOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
  }

  export type ExternalTodoMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExternalTodoMappingWhereInput | ExternalTodoMappingWhereInput[]
    OR?: ExternalTodoMappingWhereInput[]
    NOT?: ExternalTodoMappingWhereInput | ExternalTodoMappingWhereInput[]
    externalId?: StringFilter<"ExternalTodoMapping"> | string
  }, "id">

  export type ExternalTodoMappingOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    _count?: ExternalTodoMappingCountOrderByAggregateInput
    _max?: ExternalTodoMappingMaxOrderByAggregateInput
    _min?: ExternalTodoMappingMinOrderByAggregateInput
  }

  export type ExternalTodoMappingScalarWhereWithAggregatesInput = {
    AND?: ExternalTodoMappingScalarWhereWithAggregatesInput | ExternalTodoMappingScalarWhereWithAggregatesInput[]
    OR?: ExternalTodoMappingScalarWhereWithAggregatesInput[]
    NOT?: ExternalTodoMappingScalarWhereWithAggregatesInput | ExternalTodoMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExternalTodoMapping"> | string
    externalId?: StringWithAggregatesFilter<"ExternalTodoMapping"> | string
  }

  export type ExternalTodoMockWhereInput = {
    AND?: ExternalTodoMockWhereInput | ExternalTodoMockWhereInput[]
    OR?: ExternalTodoMockWhereInput[]
    NOT?: ExternalTodoMockWhereInput | ExternalTodoMockWhereInput[]
    id?: StringFilter<"ExternalTodoMock"> | string
    value?: StringFilter<"ExternalTodoMock"> | string
    status?: EnumTodoStatusFilter<"ExternalTodoMock"> | $Enums.TodoStatus
    createdAt?: DateTimeFilter<"ExternalTodoMock"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalTodoMock"> | Date | string
    userId?: StringFilter<"ExternalTodoMock"> | string
  }

  export type ExternalTodoMockOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ExternalTodoMockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExternalTodoMockWhereInput | ExternalTodoMockWhereInput[]
    OR?: ExternalTodoMockWhereInput[]
    NOT?: ExternalTodoMockWhereInput | ExternalTodoMockWhereInput[]
    value?: StringFilter<"ExternalTodoMock"> | string
    status?: EnumTodoStatusFilter<"ExternalTodoMock"> | $Enums.TodoStatus
    createdAt?: DateTimeFilter<"ExternalTodoMock"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalTodoMock"> | Date | string
    userId?: StringFilter<"ExternalTodoMock"> | string
  }, "id">

  export type ExternalTodoMockOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ExternalTodoMockCountOrderByAggregateInput
    _max?: ExternalTodoMockMaxOrderByAggregateInput
    _min?: ExternalTodoMockMinOrderByAggregateInput
  }

  export type ExternalTodoMockScalarWhereWithAggregatesInput = {
    AND?: ExternalTodoMockScalarWhereWithAggregatesInput | ExternalTodoMockScalarWhereWithAggregatesInput[]
    OR?: ExternalTodoMockScalarWhereWithAggregatesInput[]
    NOT?: ExternalTodoMockScalarWhereWithAggregatesInput | ExternalTodoMockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExternalTodoMock"> | string
    value?: StringWithAggregatesFilter<"ExternalTodoMock"> | string
    status?: EnumTodoStatusWithAggregatesFilter<"ExternalTodoMock"> | $Enums.TodoStatus
    createdAt?: DateTimeWithAggregatesFilter<"ExternalTodoMock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExternalTodoMock"> | Date | string
    userId?: StringWithAggregatesFilter<"ExternalTodoMock"> | string
  }

  export type ExternalIntegrationMockWhereInput = {
    AND?: ExternalIntegrationMockWhereInput | ExternalIntegrationMockWhereInput[]
    OR?: ExternalIntegrationMockWhereInput[]
    NOT?: ExternalIntegrationMockWhereInput | ExternalIntegrationMockWhereInput[]
    userId?: StringFilter<"ExternalIntegrationMock"> | string
    webhookUrl?: StringFilter<"ExternalIntegrationMock"> | string
    token?: StringFilter<"ExternalIntegrationMock"> | string
  }

  export type ExternalIntegrationMockOrderByWithRelationInput = {
    userId?: SortOrder
    webhookUrl?: SortOrder
    token?: SortOrder
  }

  export type ExternalIntegrationMockWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: ExternalIntegrationMockWhereInput | ExternalIntegrationMockWhereInput[]
    OR?: ExternalIntegrationMockWhereInput[]
    NOT?: ExternalIntegrationMockWhereInput | ExternalIntegrationMockWhereInput[]
    webhookUrl?: StringFilter<"ExternalIntegrationMock"> | string
    token?: StringFilter<"ExternalIntegrationMock"> | string
  }, "userId">

  export type ExternalIntegrationMockOrderByWithAggregationInput = {
    userId?: SortOrder
    webhookUrl?: SortOrder
    token?: SortOrder
    _count?: ExternalIntegrationMockCountOrderByAggregateInput
    _max?: ExternalIntegrationMockMaxOrderByAggregateInput
    _min?: ExternalIntegrationMockMinOrderByAggregateInput
  }

  export type ExternalIntegrationMockScalarWhereWithAggregatesInput = {
    AND?: ExternalIntegrationMockScalarWhereWithAggregatesInput | ExternalIntegrationMockScalarWhereWithAggregatesInput[]
    OR?: ExternalIntegrationMockScalarWhereWithAggregatesInput[]
    NOT?: ExternalIntegrationMockScalarWhereWithAggregatesInput | ExternalIntegrationMockScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"ExternalIntegrationMock"> | string
    webhookUrl?: StringWithAggregatesFilter<"ExternalIntegrationMock"> | string
    token?: StringWithAggregatesFilter<"ExternalIntegrationMock"> | string
  }

  export type ToDoCreateInput = {
    id?: string
    value: string
    status: $Enums.TodoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ToDoUncheckedCreateInput = {
    id?: string
    value: string
    status: $Enums.TodoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ToDoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ToDoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ToDoCreateManyInput = {
    id?: string
    value: string
    status: $Enums.TodoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ToDoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ToDoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoIntegrationCreateInput = {
    id?: string
    token: string
    userId: string
  }

  export type ExternalTodoIntegrationUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
  }

  export type ExternalTodoIntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoIntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoIntegrationCreateManyInput = {
    id?: string
    token: string
    userId: string
  }

  export type ExternalTodoIntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoIntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoMappingCreateInput = {
    id?: string
    externalId: string
  }

  export type ExternalTodoMappingUncheckedCreateInput = {
    id?: string
    externalId: string
  }

  export type ExternalTodoMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoMappingCreateManyInput = {
    id?: string
    externalId: string
  }

  export type ExternalTodoMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoMockCreateInput = {
    id?: string
    value: string
    status: $Enums.TodoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ExternalTodoMockUncheckedCreateInput = {
    id?: string
    value: string
    status: $Enums.TodoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ExternalTodoMockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoMockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoMockCreateManyInput = {
    id?: string
    value: string
    status: $Enums.TodoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ExternalTodoMockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalTodoMockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    status?: EnumTodoStatusFieldUpdateOperationsInput | $Enums.TodoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalIntegrationMockCreateInput = {
    userId: string
    webhookUrl: string
    token: string
  }

  export type ExternalIntegrationMockUncheckedCreateInput = {
    userId: string
    webhookUrl: string
    token: string
  }

  export type ExternalIntegrationMockUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalIntegrationMockUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalIntegrationMockCreateManyInput = {
    userId: string
    webhookUrl: string
    token: string
  }

  export type ExternalIntegrationMockUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalIntegrationMockUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTodoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusFilter<$PrismaModel> | $Enums.TodoStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ToDoCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ToDoMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ToDoMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTodoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusWithAggregatesFilter<$PrismaModel> | $Enums.TodoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodoStatusFilter<$PrismaModel>
    _max?: NestedEnumTodoStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExternalTodoIntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type ExternalTodoIntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type ExternalTodoIntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type ExternalTodoMappingCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
  }

  export type ExternalTodoMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
  }

  export type ExternalTodoMappingMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
  }

  export type ExternalTodoMockCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ExternalTodoMockMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ExternalTodoMockMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ExternalIntegrationMockCountOrderByAggregateInput = {
    userId?: SortOrder
    webhookUrl?: SortOrder
    token?: SortOrder
  }

  export type ExternalIntegrationMockMaxOrderByAggregateInput = {
    userId?: SortOrder
    webhookUrl?: SortOrder
    token?: SortOrder
  }

  export type ExternalIntegrationMockMinOrderByAggregateInput = {
    userId?: SortOrder
    webhookUrl?: SortOrder
    token?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTodoStatusFieldUpdateOperationsInput = {
    set?: $Enums.TodoStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTodoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusFilter<$PrismaModel> | $Enums.TodoStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumTodoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TodoStatus | EnumTodoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TodoStatus[] | ListEnumTodoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTodoStatusWithAggregatesFilter<$PrismaModel> | $Enums.TodoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTodoStatusFilter<$PrismaModel>
    _max?: NestedEnumTodoStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ToDoDefaultArgs instead
     */
    export type ToDoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ToDoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExternalTodoIntegrationDefaultArgs instead
     */
    export type ExternalTodoIntegrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExternalTodoIntegrationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExternalTodoMappingDefaultArgs instead
     */
    export type ExternalTodoMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExternalTodoMappingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExternalTodoMockDefaultArgs instead
     */
    export type ExternalTodoMockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExternalTodoMockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExternalIntegrationMockDefaultArgs instead
     */
    export type ExternalIntegrationMockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExternalIntegrationMockDefaultArgs<ExtArgs>

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