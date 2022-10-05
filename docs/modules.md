[@demox-labs/leo-wallet-adapter](README.md) / Exports

# @demox-labs/leo-wallet-adapter

## Table of contents

### Namespaces

- [EventEmitter](modules/EventEmitter.md)

### Enumerations

- [WalletAdapterNetwork](enums/WalletAdapterNetwork.md)
- [WalletReadyState](enums/WalletReadyState.md)

### Classes

- [BaseMessageSignerWalletAdapter](classes/BaseMessageSignerWalletAdapter.md)
- [BaseSignerWalletAdapter](classes/BaseSignerWalletAdapter.md)
- [BaseWalletAdapter](classes/BaseWalletAdapter.md)
- [EventEmitter](classes/EventEmitter-1.md)
- [LeoWalletAdapter](classes/LeoWalletAdapter.md)
- [WalletAccountError](classes/WalletAccountError.md)
- [WalletConfigError](classes/WalletConfigError.md)
- [WalletConnectionError](classes/WalletConnectionError.md)
- [WalletDisconnectedError](classes/WalletDisconnectedError.md)
- [WalletDisconnectionError](classes/WalletDisconnectionError.md)
- [WalletError](classes/WalletError.md)
- [WalletKeypairError](classes/WalletKeypairError.md)
- [WalletLoadError](classes/WalletLoadError.md)
- [WalletNotConnectedError](classes/WalletNotConnectedError.md)
- [WalletNotReadyError](classes/WalletNotReadyError.md)
- [WalletNotSelectedError](classes/WalletNotSelectedError.md)
- [WalletPublicKeyError](classes/WalletPublicKeyError.md)
- [WalletSendTransactionError](classes/WalletSendTransactionError.md)
- [WalletSignMessageError](classes/WalletSignMessageError.md)
- [WalletSignTransactionError](classes/WalletSignTransactionError.md)
- [WalletTimeoutError](classes/WalletTimeoutError.md)
- [WalletWindowBlockedError](classes/WalletWindowBlockedError.md)
- [WalletWindowClosedError](classes/WalletWindowClosedError.md)

### Interfaces

- [LeoWalletAdapterConfig](interfaces/LeoWalletAdapterConfig.md)
- [MessageSignerWalletAdapterProps](interfaces/MessageSignerWalletAdapterProps.md)
- [SignerWalletAdapterProps](interfaces/SignerWalletAdapterProps.md)
- [Wallet](interfaces/Wallet.md)
- [WalletAdapterEvents](interfaces/WalletAdapterEvents.md)
- [WalletAdapterProps](interfaces/WalletAdapterProps.md)
- [WalletContextState](interfaces/WalletContextState.md)
- [WalletIconProps](interfaces/WalletIconProps.md)
- [WalletModalContextState](interfaces/WalletModalContextState.md)
- [WalletModalProps](interfaces/WalletModalProps.md)
- [WalletModalProviderProps](interfaces/WalletModalProviderProps.md)
- [WalletProviderProps](interfaces/WalletProviderProps.md)

### Type Aliases

- [Adapter](modules.md#adapter)
- [MessageSignerWalletAdapter](modules.md#messagesignerwalletadapter)
- [SignerWalletAdapter](modules.md#signerwalletadapter)
- [SupportedTransactionVersions](modules.md#supportedtransactionversions)
- [TransactionOrVersionedTransaction](modules.md#transactionorversionedtransaction)
- [WalletAdapter](modules.md#walletadapter)
- [WalletName](modules.md#walletname)

### Variables

- [LeoWalletName](modules.md#leowalletname)
- [WalletContext](modules.md#walletcontext)
- [WalletModalContext](modules.md#walletmodalcontext)

### Functions

- [WalletConnectButton](modules.md#walletconnectbutton)
- [WalletDisconnectButton](modules.md#walletdisconnectbutton)
- [WalletIcon](modules.md#walleticon)
- [WalletModal](modules.md#walletmodal)
- [WalletModalButton](modules.md#walletmodalbutton)
- [WalletModalProvider](modules.md#walletmodalprovider)
- [WalletMultiButton](modules.md#walletmultibutton)
- [WalletProvider](modules.md#walletprovider)
- [scopePollingDetectionStrategy](modules.md#scopepollingdetectionstrategy)
- [useLocalStorage](modules.md#uselocalstorage)
- [useWallet](modules.md#usewallet)
- [useWalletModal](modules.md#usewalletmodal)

## Type Aliases

### Adapter

Ƭ **Adapter**: [`WalletAdapter`](modules.md#walletadapter) \| [`SignerWalletAdapter`](modules.md#signerwalletadapter) \| [`MessageSignerWalletAdapter`](modules.md#messagesignerwalletadapter)

#### Defined in

[src/base/types.ts:4](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/types.ts#L4)

___

### MessageSignerWalletAdapter

Ƭ **MessageSignerWalletAdapter**<`Name`\>: [`WalletAdapter`](modules.md#walletadapter)<`Name`\> & [`MessageSignerWalletAdapterProps`](interfaces/MessageSignerWalletAdapterProps.md)<`Name`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Defined in

[src/base/signer.ts:33](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L33)

___

### SignerWalletAdapter

Ƭ **SignerWalletAdapter**<`Name`\>: [`WalletAdapter`](modules.md#walletadapter)<`Name`\> & [`SignerWalletAdapterProps`](interfaces/SignerWalletAdapterProps.md)<`Name`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Defined in

[src/base/signer.ts:15](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/signer.ts#L15)

___

### SupportedTransactionVersions

Ƭ **SupportedTransactionVersions**: `ReadonlySet`<`any`\> \| ``null``

#### Defined in

[src/base/types.ts:12](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/types.ts#L12)

___

### TransactionOrVersionedTransaction

Ƭ **TransactionOrVersionedTransaction**<`S`\>: `S` extends ``null`` ? `any` : `any` \| `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`SupportedTransactionVersions`](modules.md#supportedtransactionversions) |

#### Defined in

[src/base/types.ts:14](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/types.ts#L14)

___

### WalletAdapter

Ƭ **WalletAdapter**<`Name`\>: [`WalletAdapterProps`](interfaces/WalletAdapterProps.md)<`Name`\> & [`EventEmitter`](classes/EventEmitter-1.md)<[`WalletAdapterEvents`](interfaces/WalletAdapterEvents.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Defined in

[src/base/adapter.ts:32](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L32)

___

### WalletName

Ƭ **WalletName**<`T`\>: `T` & { `__brand__`: ``"WalletName"``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` = `string` |

#### Defined in

[src/base/adapter.ts:16](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L16)

## Variables

### LeoWalletName

• `Const` **LeoWalletName**: [`WalletName`](modules.md#walletname)<``"Leo Wallet"``\>

#### Defined in

[src/wallets/leo/adapter.ts:50](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/wallets/leo/adapter.ts#L50)

___

### WalletContext

• `Const` **WalletContext**: `Context`<[`WalletContextState`](interfaces/WalletContextState.md)\>

#### Defined in

[src/useWallet.ts:84](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L84)

___

### WalletModalContext

• `Const` **WalletModalContext**: `Context`<[`WalletModalContextState`](interfaces/WalletModalContextState.md)\>

#### Defined in

[src/ui/useWalletModal.tsx:32](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/ui/useWalletModal.tsx#L32)

## Functions

### WalletConnectButton

▸ **WalletConnectButton**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ButtonProps` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### WalletDisconnectButton

▸ **WalletDisconnectButton**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ButtonProps` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### WalletIcon

▸ **WalletIcon**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WalletIconProps`](interfaces/WalletIconProps.md) |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### WalletModal

▸ **WalletModal**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WalletModalProps`](interfaces/WalletModalProps.md) |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### WalletModalButton

▸ **WalletModalButton**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ButtonProps` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### WalletModalProvider

▸ **WalletModalProvider**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WalletModalProviderProps`](interfaces/WalletModalProviderProps.md) |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### WalletMultiButton

▸ **WalletMultiButton**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ButtonProps` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### WalletProvider

▸ **WalletProvider**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WalletProviderProps`](interfaces/WalletProviderProps.md) |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

___

### scopePollingDetectionStrategy

▸ **scopePollingDetectionStrategy**(`detect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `detect` | () => `boolean` |

#### Returns

`void`

#### Defined in

[src/base/adapter.ts:83](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L83)

___

### useLocalStorage

▸ **useLocalStorage**<`T`\>(`key`, `defaultState`): [`T`, `Dispatch`<`SetStateAction`<`T`\>\>]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultState` | `T` |

#### Returns

[`T`, `Dispatch`<`SetStateAction`<`T`\>\>]

#### Defined in

[src/useLocalStorage.ts:4](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useLocalStorage.ts#L4)

___

### useWallet

▸ **useWallet**(): [`WalletContextState`](interfaces/WalletContextState.md)

#### Returns

[`WalletContextState`](interfaces/WalletContextState.md)

#### Defined in

[src/useWallet.ts:86](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/useWallet.ts#L86)

___

### useWalletModal

▸ **useWalletModal**(): [`WalletModalContextState`](interfaces/WalletModalContextState.md)

#### Returns

[`WalletModalContextState`](interfaces/WalletModalContextState.md)

#### Defined in

[src/ui/useWalletModal.tsx:34](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/ui/useWalletModal.tsx#L34)
