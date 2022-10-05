[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / WalletError

# Class: WalletError

## Hierarchy

- `Error`

  ↳ **`WalletError`**

  ↳↳ [`WalletNotReadyError`](WalletNotReadyError.md)

  ↳↳ [`WalletLoadError`](WalletLoadError.md)

  ↳↳ [`WalletConfigError`](WalletConfigError.md)

  ↳↳ [`WalletConnectionError`](WalletConnectionError.md)

  ↳↳ [`WalletNotSelectedError`](WalletNotSelectedError.md)

  ↳↳ [`WalletDisconnectedError`](WalletDisconnectedError.md)

  ↳↳ [`WalletDisconnectionError`](WalletDisconnectionError.md)

  ↳↳ [`WalletAccountError`](WalletAccountError.md)

  ↳↳ [`WalletPublicKeyError`](WalletPublicKeyError.md)

  ↳↳ [`WalletKeypairError`](WalletKeypairError.md)

  ↳↳ [`WalletNotConnectedError`](WalletNotConnectedError.md)

  ↳↳ [`WalletSendTransactionError`](WalletSendTransactionError.md)

  ↳↳ [`WalletSignMessageError`](WalletSignMessageError.md)

  ↳↳ [`WalletSignTransactionError`](WalletSignTransactionError.md)

  ↳↳ [`WalletTimeoutError`](WalletTimeoutError.md)

  ↳↳ [`WalletWindowBlockedError`](WalletWindowBlockedError.md)

  ↳↳ [`WalletWindowClosedError`](WalletWindowClosedError.md)

## Table of contents

### Constructors

- [constructor](WalletError.md#constructor)

### Properties

- [error](WalletError.md#error)
- [message](WalletError.md#message)
- [name](WalletError.md#name)
- [stack](WalletError.md#stack)
- [prepareStackTrace](WalletError.md#preparestacktrace)
- [stackTraceLimit](WalletError.md#stacktracelimit)

### Methods

- [captureStackTrace](WalletError.md#capturestacktrace)

## Constructors

### constructor

• **new WalletError**(`message?`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `error?` | `any` |

#### Overrides

Error.constructor

#### Defined in

[src/base/errors.ts:5](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/errors.ts#L5)

## Properties

### error

• **error**: `any`

#### Defined in

[src/base/errors.ts:2](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/errors.ts#L2)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
