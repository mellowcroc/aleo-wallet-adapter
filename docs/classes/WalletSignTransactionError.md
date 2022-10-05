[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / WalletSignTransactionError

# Class: WalletSignTransactionError

## Hierarchy

- [`WalletError`](WalletError.md)

  ↳ **`WalletSignTransactionError`**

## Table of contents

### Constructors

- [constructor](WalletSignTransactionError.md#constructor)

### Properties

- [error](WalletSignTransactionError.md#error)
- [message](WalletSignTransactionError.md#message)
- [name](WalletSignTransactionError.md#name)
- [stack](WalletSignTransactionError.md#stack)
- [prepareStackTrace](WalletSignTransactionError.md#preparestacktrace)
- [stackTraceLimit](WalletSignTransactionError.md#stacktracelimit)

### Methods

- [captureStackTrace](WalletSignTransactionError.md#capturestacktrace)

## Constructors

### constructor

• **new WalletSignTransactionError**(`message?`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `error?` | `any` |

#### Inherited from

[WalletError](WalletError.md).[constructor](WalletError.md#constructor)

#### Defined in

[src/base/errors.ts:5](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/errors.ts#L5)

## Properties

### error

• **error**: `any`

#### Inherited from

[WalletError](WalletError.md).[error](WalletError.md#error)

#### Defined in

[src/base/errors.ts:2](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/errors.ts#L2)

___

### message

• **message**: `string`

#### Inherited from

[WalletError](WalletError.md).[message](WalletError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string` = `'WalletSignTransactionError'`

#### Overrides

[WalletError](WalletError.md).[name](WalletError.md#name)

#### Defined in

[src/base/errors.ts:64](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/errors.ts#L64)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[WalletError](WalletError.md).[stack](WalletError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[WalletError](WalletError.md).[prepareStackTrace](WalletError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[WalletError](WalletError.md).[stackTraceLimit](WalletError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[WalletError](WalletError.md).[captureStackTrace](WalletError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
