[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / WalletContextState

# Interface: WalletContextState

## Table of contents

### Properties

- [autoConnect](WalletContextState.md#autoconnect)
- [connected](WalletContextState.md#connected)
- [connecting](WalletContextState.md#connecting)
- [disconnecting](WalletContextState.md#disconnecting)
- [publicKey](WalletContextState.md#publickey)
- [sendTransaction](WalletContextState.md#sendtransaction)
- [signAllTransactions](WalletContextState.md#signalltransactions)
- [signMessage](WalletContextState.md#signmessage)
- [signTransaction](WalletContextState.md#signtransaction)
- [wallet](WalletContextState.md#wallet)
- [wallets](WalletContextState.md#wallets)

### Methods

- [connect](WalletContextState.md#connect)
- [disconnect](WalletContextState.md#disconnect)
- [select](WalletContextState.md#select)

## Properties

### autoConnect

• **autoConnect**: `boolean`

#### Defined in

[src/useWallet.ts:10](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L10)

___

### connected

• **connected**: `boolean`

#### Defined in

[src/useWallet.ts:15](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L15)

___

### connecting

• **connecting**: `boolean`

#### Defined in

[src/useWallet.ts:14](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L14)

___

### disconnecting

• **disconnecting**: `boolean`

#### Defined in

[src/useWallet.ts:16](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L16)

___

### publicKey

• **publicKey**: ``null`` \| `string`

#### Defined in

[src/useWallet.ts:13](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L13)

___

### sendTransaction

• **sendTransaction**: `undefined`

#### Defined in

[src/useWallet.ts:22](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L22)

___

### signAllTransactions

• **signAllTransactions**: `undefined` \| <T\>(`transactions`: `T`[]) => `Promise`<`T`[]\>

#### Defined in

[src/useWallet.ts:24](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L24)

___

### signMessage

• **signMessage**: `undefined` \| (`message`: `Uint8Array`) => `Promise`<`Uint8Array`\>

#### Defined in

[src/useWallet.ts:25](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L25)

___

### signTransaction

• **signTransaction**: `undefined` \| <T\>(`transaction`: `T`) => `Promise`<`T`\>

#### Defined in

[src/useWallet.ts:23](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L23)

___

### wallet

• **wallet**: ``null`` \| [`Wallet`](Wallet.md)

#### Defined in

[src/useWallet.ts:12](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L12)

___

### wallets

• **wallets**: [`Wallet`](Wallet.md)[]

#### Defined in

[src/useWallet.ts:11](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L11)

## Methods

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/useWallet.ts:19](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L19)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/useWallet.ts:20](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L20)

___

### select

▸ **select**(`walletName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletName` | [`WalletName`](../modules.md#walletname)<`string`\> |

#### Returns

`void`

#### Defined in

[src/useWallet.ts:18](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L18)
