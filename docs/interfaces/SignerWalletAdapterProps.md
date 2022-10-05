[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / SignerWalletAdapterProps

# Interface: SignerWalletAdapterProps<Name\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- [`WalletAdapterProps`](WalletAdapterProps.md)<`Name`\>

  ↳ **`SignerWalletAdapterProps`**

## Table of contents

### Properties

- [connected](SignerWalletAdapterProps.md#connected)
- [connecting](SignerWalletAdapterProps.md#connecting)
- [icon](SignerWalletAdapterProps.md#icon)
- [name](SignerWalletAdapterProps.md#name)
- [publicKey](SignerWalletAdapterProps.md#publickey)
- [readyState](SignerWalletAdapterProps.md#readystate)
- [supportedTransactionVersions](SignerWalletAdapterProps.md#supportedtransactionversions)
- [url](SignerWalletAdapterProps.md#url)

### Methods

- [connect](SignerWalletAdapterProps.md#connect)
- [disconnect](SignerWalletAdapterProps.md#disconnect)
- [signAllTransactions](SignerWalletAdapterProps.md#signalltransactions)
- [signTransaction](SignerWalletAdapterProps.md#signtransaction)

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

#### Defined in

[src/base/signer.ts:10](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L10)

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

#### Defined in

[src/base/signer.ts:7](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L7)
