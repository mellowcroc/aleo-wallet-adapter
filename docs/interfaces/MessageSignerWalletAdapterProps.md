[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / MessageSignerWalletAdapterProps

# Interface: MessageSignerWalletAdapterProps<Name\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- [`WalletAdapterProps`](WalletAdapterProps.md)<`Name`\>

  ↳ **`MessageSignerWalletAdapterProps`**

## Table of contents

### Properties

- [connected](MessageSignerWalletAdapterProps.md#connected)
- [connecting](MessageSignerWalletAdapterProps.md#connecting)
- [icon](MessageSignerWalletAdapterProps.md#icon)
- [name](MessageSignerWalletAdapterProps.md#name)
- [publicKey](MessageSignerWalletAdapterProps.md#publickey)
- [readyState](MessageSignerWalletAdapterProps.md#readystate)
- [supportedTransactionVersions](MessageSignerWalletAdapterProps.md#supportedtransactionversions)
- [url](MessageSignerWalletAdapterProps.md#url)

### Methods

- [connect](MessageSignerWalletAdapterProps.md#connect)
- [disconnect](MessageSignerWalletAdapterProps.md#disconnect)
- [signMessage](MessageSignerWalletAdapterProps.md#signmessage)

## Properties

### connected

• **connected**: `boolean`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[connected](WalletAdapterProps.md#connected)

#### Defined in

[src/base/adapter.ts:25](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L25)

___

### connecting

• **connecting**: `boolean`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[connecting](WalletAdapterProps.md#connecting)

#### Defined in

[src/base/adapter.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L24)

___

### icon

• **icon**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[icon](WalletAdapterProps.md#icon)

#### Defined in

[src/base/adapter.ts:21](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L21)

___

### name

• **name**: [`WalletName`](../modules.md#walletname)<`Name`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[name](WalletAdapterProps.md#name)

#### Defined in

[src/base/adapter.ts:19](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L19)

___

### publicKey

• **publicKey**: ``null`` \| `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[publicKey](WalletAdapterProps.md#publickey)

#### Defined in

[src/base/adapter.ts:23](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L23)

___

### readyState

• **readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[readyState](WalletAdapterProps.md#readystate)

#### Defined in

[src/base/adapter.ts:22](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L22)

___

### supportedTransactionVersions

• **supportedTransactionVersions**: [`SupportedTransactionVersions`](../modules.md#supportedtransactionversions)

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[supportedTransactionVersions](WalletAdapterProps.md#supportedtransactionversions)

#### Defined in

[src/base/adapter.ts:26](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L26)

___

### url

• **url**: `string`

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[url](WalletAdapterProps.md#url)

#### Defined in

[src/base/adapter.ts:20](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L20)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[connect](WalletAdapterProps.md#connect)

#### Defined in

[src/base/adapter.ts:28](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L28)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[WalletAdapterProps](WalletAdapterProps.md).[disconnect](WalletAdapterProps.md#disconnect)

#### Defined in

[src/base/adapter.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L29)

___

### signMessage

▸ **signMessage**(`message`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[src/base/signer.ts:30](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L30)
