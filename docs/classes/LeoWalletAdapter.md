[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / LeoWalletAdapter

# Class: LeoWalletAdapter

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Hierarchy

- [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)

  ↳ **`LeoWalletAdapter`**

## Table of contents

### Constructors

- [constructor](LeoWalletAdapter.md#constructor)

### Properties

- [\_appName](LeoWalletAdapter.md#_appname)
- [\_connecting](LeoWalletAdapter.md#_connecting)
- [\_network](LeoWalletAdapter.md#_network)
- [\_permission](LeoWalletAdapter.md#_permission)
- [\_publicKey](LeoWalletAdapter.md#_publickey)
- [\_readyState](LeoWalletAdapter.md#_readystate)
- [\_wallet](LeoWalletAdapter.md#_wallet)
- [icon](LeoWalletAdapter.md#icon)
- [name](LeoWalletAdapter.md#name)
- [supportedTransactionVersions](LeoWalletAdapter.md#supportedtransactionversions)
- [url](LeoWalletAdapter.md#url)
- [prefixed](LeoWalletAdapter.md#prefixed)

### Accessors

- [connected](LeoWalletAdapter.md#connected)
- [connecting](LeoWalletAdapter.md#connecting)
- [publicKey](LeoWalletAdapter.md#publickey)
- [readyState](LeoWalletAdapter.md#readystate)

### Methods

- [\_disconnected](LeoWalletAdapter.md#_disconnected)
- [addListener](LeoWalletAdapter.md#addlistener)
- [connect](LeoWalletAdapter.md#connect)
- [disconnect](LeoWalletAdapter.md#disconnect)
- [emit](LeoWalletAdapter.md#emit)
- [eventNames](LeoWalletAdapter.md#eventnames)
- [listenerCount](LeoWalletAdapter.md#listenercount)
- [listeners](LeoWalletAdapter.md#listeners)
- [off](LeoWalletAdapter.md#off)
- [on](LeoWalletAdapter.md#on)
- [once](LeoWalletAdapter.md#once)
- [removeAllListeners](LeoWalletAdapter.md#removealllisteners)
- [removeListener](LeoWalletAdapter.md#removelistener)
- [signAllTransactions](LeoWalletAdapter.md#signalltransactions)
- [signMessage](LeoWalletAdapter.md#signmessage)
- [signTransaction](LeoWalletAdapter.md#signtransaction)

## Constructors

### constructor

• **new LeoWalletAdapter**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LeoWalletAdapterConfig`](../interfaces/LeoWalletAdapterConfig.md) |

#### Overrides

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[constructor](BaseMessageSignerWalletAdapter.md#constructor)

#### Defined in

[src/wallets/leo/adapter.ts:70](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L70)

## Properties

### \_appName

• `Private` **\_appName**: `string`

#### Defined in

[src/wallets/leo/adapter.ts:60](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L60)

___

### \_connecting

• `Private` **\_connecting**: `boolean`

#### Defined in

[src/wallets/leo/adapter.ts:62](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L62)

___

### \_network

• `Private` **\_network**: `AleoDAppNetwork`

#### Defined in

[src/wallets/leo/adapter.ts:59](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L59)

___

### \_permission

• `Private` **\_permission**: `AleoDAppPermission` = `null`

#### Defined in

[src/wallets/leo/adapter.ts:61](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L61)

___

### \_publicKey

• `Private` **\_publicKey**: ``null`` \| `string`

#### Defined in

[src/wallets/leo/adapter.ts:64](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L64)

___

### \_readyState

• `Private` **\_readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Defined in

[src/wallets/leo/adapter.ts:65](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L65)

___

### \_wallet

• `Private` **\_wallet**: ``null`` \| `LeoWallet`

#### Defined in

[src/wallets/leo/adapter.ts:63](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L63)

___

### icon

• **icon**: `string` = `'data:image/png;base64,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'`

#### Overrides

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[icon](BaseMessageSignerWalletAdapter.md#icon)

#### Defined in

[src/wallets/leo/adapter.ts:55](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L55)

___

### name

• **name**: [`WalletName`](../modules.md#walletname)<``"Leo Wallet"``\> = `LeoWalletName`

#### Overrides

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[name](BaseMessageSignerWalletAdapter.md#name)

#### Defined in

[src/wallets/leo/adapter.ts:53](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L53)

___

### supportedTransactionVersions

• `Readonly` **supportedTransactionVersions**: ``null``

#### Overrides

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[supportedTransactionVersions](BaseMessageSignerWalletAdapter.md#supportedtransactionversions)

#### Defined in

[src/wallets/leo/adapter.ts:57](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L57)

___

### url

• **url**: `string` = `'https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad'`

#### Overrides

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[url](BaseMessageSignerWalletAdapter.md#url)

#### Defined in

[src/wallets/leo/adapter.ts:54](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L54)

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[prefixed](BaseMessageSignerWalletAdapter.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Accessors

### connected

• `get` **connected**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseMessageSignerWalletAdapter.connected

#### Defined in

[src/base/adapter.ts:75](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L75)

___

### connecting

• `get` **connecting**(): `boolean`

#### Returns

`boolean`

#### Overrides

BaseMessageSignerWalletAdapter.connecting

#### Defined in

[src/wallets/leo/adapter.ts:94](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L94)

___

### publicKey

• `get` **publicKey**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Overrides

BaseMessageSignerWalletAdapter.publicKey

#### Defined in

[src/wallets/leo/adapter.ts:90](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L90)

___

### readyState

• `get` **readyState**(): [`WalletReadyState`](../enums/WalletReadyState.md)

#### Returns

[`WalletReadyState`](../enums/WalletReadyState.md)

#### Overrides

BaseMessageSignerWalletAdapter.readyState

#### Defined in

[src/wallets/leo/adapter.ts:98](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L98)

## Methods

### \_disconnected

▸ `Private` **_disconnected**(): `void`

#### Returns

`void`

#### Defined in

[src/wallets/leo/adapter.ts:185](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L185)

___

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

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

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[addListener](BaseMessageSignerWalletAdapter.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[connect](BaseMessageSignerWalletAdapter.md#connect)

#### Defined in

[src/wallets/leo/adapter.ts:102](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L102)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[disconnect](BaseMessageSignerWalletAdapter.md#disconnect)

#### Defined in

[src/wallets/leo/adapter.ts:149](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L149)

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

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[emit](BaseMessageSignerWalletAdapter.md#emit)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[eventNames](BaseMessageSignerWalletAdapter.md#eventnames)

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

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[listenerCount](BaseMessageSignerWalletAdapter.md#listenercount)

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

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[listeners](BaseMessageSignerWalletAdapter.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

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

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[off](BaseMessageSignerWalletAdapter.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

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

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[on](BaseMessageSignerWalletAdapter.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

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

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[once](BaseMessageSignerWalletAdapter.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md) |

#### Returns

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[removeAllListeners](BaseMessageSignerWalletAdapter.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`LeoWalletAdapter`](LeoWalletAdapter.md)

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

[`LeoWalletAdapter`](LeoWalletAdapter.md)

#### Inherited from

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[removeListener](BaseMessageSignerWalletAdapter.md#removelistener)

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

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[signAllTransactions](BaseMessageSignerWalletAdapter.md#signalltransactions)

#### Defined in

[src/base/signer.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L24)

___

### signMessage

▸ **signMessage**(`message`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Overrides

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[signMessage](BaseMessageSignerWalletAdapter.md#signmessage)

#### Defined in

[src/wallets/leo/adapter.ts:167](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L167)

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

[BaseMessageSignerWalletAdapter](BaseMessageSignerWalletAdapter.md).[signTransaction](BaseMessageSignerWalletAdapter.md#signtransaction)

#### Defined in

[src/base/signer.ts:21](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L21)
