[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / WalletAdapterProps

# Interface: WalletAdapterProps<Name\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

## Hierarchy

- **`WalletAdapterProps`**

  ↳ [`SignerWalletAdapterProps`](SignerWalletAdapterProps.md)

  ↳ [`MessageSignerWalletAdapterProps`](MessageSignerWalletAdapterProps.md)

## Table of contents

### Properties

- [connected](WalletAdapterProps.md#connected)
- [connecting](WalletAdapterProps.md#connecting)
- [icon](WalletAdapterProps.md#icon)
- [name](WalletAdapterProps.md#name)
- [publicKey](WalletAdapterProps.md#publickey)
- [readyState](WalletAdapterProps.md#readystate)
- [supportedTransactionVersions](WalletAdapterProps.md#supportedtransactionversions)
- [url](WalletAdapterProps.md#url)

### Methods

- [connect](WalletAdapterProps.md#connect)
- [disconnect](WalletAdapterProps.md#disconnect)

## Properties

### connected

• **connected**: `boolean`

#### Defined in

[src/base/adapter.ts:25](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L25)

___

### connecting

• **connecting**: `boolean`

#### Defined in

[src/base/adapter.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L24)

___

### icon

• **icon**: `string`

#### Defined in

[src/base/adapter.ts:21](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L21)

___

### name

• **name**: [`WalletName`](../modules.md#walletname)<`Name`\>

#### Defined in

[src/base/adapter.ts:19](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L19)

___

### publicKey

• **publicKey**: ``null`` \| `string`

#### Defined in

[src/base/adapter.ts:23](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L23)

___

### readyState

• **readyState**: [`WalletReadyState`](../enums/WalletReadyState.md)

#### Defined in

[src/base/adapter.ts:22](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L22)

___

### supportedTransactionVersions

• **supportedTransactionVersions**: [`SupportedTransactionVersions`](../modules.md#supportedtransactionversions)

#### Defined in

[src/base/adapter.ts:26](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L26)

___

### url

• **url**: `string`

#### Defined in

[src/base/adapter.ts:20](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L20)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/base/adapter.ts:28](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L28)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/base/adapter.ts:29](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L29)
