[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / BaseMessageSignerWalletAdapter

# Class: BaseMessageSignerWalletAdapter<Name\>

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)<`Name`\>

  ↳ **`BaseMessageSignerWalletAdapter`**

  ↳↳ [`LeoWalletAdapter`](LeoWalletAdapter.md)

## Implements

- [`MessageSignerWalletAdapter`](../modules.md#messagesignerwalletadapter)<`Name`\>

## Table of contents

### Constructors

- [constructor](BaseMessageSignerWalletAdapter.md#constructor)

### Properties

- [connecting](BaseMessageSignerWalletAdapter.md#connecting)
- [icon](BaseMessageSignerWalletAdapter.md#icon)
- [name](BaseMessageSignerWalletAdapter.md#name)
- [publicKey](BaseMessageSignerWalletAdapter.md#publickey)
- [readyState](BaseMessageSignerWalletAdapter.md#readystate)
- [supportedTransactionVersions](BaseMessageSignerWalletAdapter.md#supportedtransactionversions)
- [url](BaseMessageSignerWalletAdapter.md#url)
- [prefixed](BaseMessageSignerWalletAdapter.md#prefixed)

### Accessors

- [connected](BaseMessageSignerWalletAdapter.md#connected)

### Methods

- [addListener](BaseMessageSignerWalletAdapter.md#addlistener)
- [connect](BaseMessageSignerWalletAdapter.md#connect)
- [disconnect](BaseMessageSignerWalletAdapter.md#disconnect)
- [emit](BaseMessageSignerWalletAdapter.md#emit)
- [eventNames](BaseMessageSignerWalletAdapter.md#eventnames)
- [listenerCount](BaseMessageSignerWalletAdapter.md#listenercount)
- [listeners](BaseMessageSignerWalletAdapter.md#listeners)
- [off](BaseMessageSignerWalletAdapter.md#off)
- [on](BaseMessageSignerWalletAdapter.md#on)
- [once](BaseMessageSignerWalletAdapter.md#once)
- [removeAllListeners](BaseMessageSignerWalletAdapter.md#removealllisteners)
- [removeListener](BaseMessageSignerWalletAdapter.md#removelistener)
- [signAllTransactions](BaseMessageSignerWalletAdapter.md#signalltransactions)
- [signMessage](BaseMessageSignerWalletAdapter.md#signmessage)
- [signTransaction](BaseMessageSignerWalletAdapter.md#signtransaction)

## Constructors

### constructor

• **new BaseMessageSignerWalletAdapter**<`Name`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[constructor](BaseSignerWalletAdapter.md#constructor)

## Properties

### connecting

• `Abstract` **connecting**: `boolean`

#### Implementation of

MessageSignerWalletAdapter.connecting

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[connecting](BaseSignerWalletAdapter.md#connecting)

#### Defined in

[src/base/adapter.ts:72](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L72)

___

### icon

• `Abstract` **icon**: `string`

#### Implementation of

MessageSignerWalletAdapter.icon

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[icon](BaseSignerWalletAdapter.md#icon)

#### Defined in

[src/base/adapter.ts:69](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L69)

___

### name

• `Abstract` **name**: [`WalletName`](../modules.md#walletname)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.name

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[name](BaseSignerWalletAdapter.md#name)

#### Defined in

[src/base/adapter.ts:67](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L67)

___

### publicKey

• `Abstract` **publicKey**: ``null`` \| `string`

#### Implementation of

MessageSignerWalletAdapter.publicKey

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[publicKey](BaseSignerWalletAdapter.md#publickey)

#### Defined in

[src/base/adapter.ts:71](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L71)

___

### readyState

• `Abstract` **readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Implementation of

MessageSignerWalletAdapter.readyState

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[readyState](BaseSignerWalletAdapter.md#readystate)

#### Defined in

[src/base/adapter.ts:70](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L70)

___

### supportedTransactionVersions

• `Abstract` **supportedTransactionVersions**: [`SupportedTransactionVersions`](../modules.md#supportedtransactionversions)

#### Implementation of

MessageSignerWalletAdapter.supportedTransactionVersions

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[supportedTransactionVersions](BaseSignerWalletAdapter.md#supportedtransactionversions)

#### Defined in

[src/base/adapter.ts:73](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L73)

___

### url

• `Abstract` **url**: `string`

#### Implementation of

MessageSignerWalletAdapter.url

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[url](BaseSignerWalletAdapter.md#url)

#### Defined in

[src/base/adapter.ts:68](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L68)

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[prefixed](BaseSignerWalletAdapter.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Accessors

### connected

• `get` **connected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

MessageSignerWalletAdapter.connected

#### Inherited from

BaseSignerWalletAdapter.connected

#### Defined in

[src/base/adapter.ts:75](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L75)

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.addListener

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[addListener](BaseSignerWalletAdapter.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### connect

▸ `Abstract` **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

MessageSignerWalletAdapter.connect

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[connect](BaseSignerWalletAdapter.md#connect)

#### Defined in

[src/base/adapter.ts:79](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L79)

___

### disconnect

▸ `Abstract` **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

MessageSignerWalletAdapter.disconnect

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[disconnect](BaseSignerWalletAdapter.md#disconnect)

#### Defined in

[src/base/adapter.ts:80](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L80)

___

### emit

▸ **emit**<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `...args` | [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>] |

#### Returns

`boolean`

#### Implementation of

MessageSignerWalletAdapter.emit

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[emit](BaseSignerWalletAdapter.md#emit)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

#### Implementation of

MessageSignerWalletAdapter.eventNames

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[eventNames](BaseSignerWalletAdapter.md#eventnames)

#### Defined in

node_modules/eventemitter3/index.d.ts:15

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Returns

`number`

#### Implementation of

MessageSignerWalletAdapter.listenerCount

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[listenerCount](BaseSignerWalletAdapter.md#listenercount)

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<`T`\>(`event`): (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void`[]

Return the listeners registered for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

(...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void`[]

#### Implementation of

MessageSignerWalletAdapter.listeners

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[listeners](BaseSignerWalletAdapter.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.off

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[off](BaseSignerWalletAdapter.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

Add a listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.on

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[on](BaseSignerWalletAdapter.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

Add a one-time listener for a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.once

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[once](BaseSignerWalletAdapter.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.removeAllListeners

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[removeAllListeners](BaseSignerWalletAdapter.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

Remove the listeners of a given event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: [`ArgumentMap`](../modules/EventEmitter.md#argumentmap)<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>[`Extract`<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)<`Name`\>

#### Implementation of

MessageSignerWalletAdapter.removeListener

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[removeListener](BaseSignerWalletAdapter.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:63

___

### signAllTransactions

▸ **signAllTransactions**<`T`\>(`transactions`): `Promise`<`T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | `T`[] |

#### Returns

`Promise`<`T`[]\>

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[signAllTransactions](BaseSignerWalletAdapter.md#signalltransactions)

#### Defined in

[src/base/signer.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L24)

___

### signMessage

▸ `Abstract` **signMessage**(`message`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Implementation of

MessageSignerWalletAdapter.signMessage

#### Defined in

[src/base/signer.ts:40](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L40)

___

### signTransaction

▸ **signTransaction**<`T`\>(`transaction`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `T` |

#### Returns

`Promise`<`T`\>

#### Inherited from

[BaseSignerWalletAdapter](BaseSignerWalletAdapter.md).[signTransaction](BaseSignerWalletAdapter.md#signtransaction)

#### Defined in

[src/base/signer.ts:21](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L21)
