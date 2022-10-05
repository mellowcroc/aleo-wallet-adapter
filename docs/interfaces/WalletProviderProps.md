[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / WalletProviderProps

# Interface: WalletProviderProps

## Table of contents

### Properties

- [autoConnect](WalletProviderProps.md#autoconnect)
- [children](WalletProviderProps.md#children)
- [localStorageKey](WalletProviderProps.md#localstoragekey)
- [onError](WalletProviderProps.md#onerror)
- [wallets](WalletProviderProps.md#wallets)

## Properties

### autoConnect

• `Optional` **autoConnect**: `boolean`

#### Defined in

[src/WalletProvider.tsx:22](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/WalletProvider.tsx#L22)

___

### children

• **children**: `ReactNode`

#### Defined in

[src/WalletProvider.tsx:20](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/WalletProvider.tsx#L20)

___

### localStorageKey

• `Optional` **localStorageKey**: `string`

#### Defined in

[src/WalletProvider.tsx:24](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/WalletProvider.tsx#L24)

___

### onError

• `Optional` **onError**: (`error`: [`WalletError`](../classes/WalletError.md)) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`WalletError`](../classes/WalletError.md) |

##### Returns

`void`

#### Defined in

[src/WalletProvider.tsx:23](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/WalletProvider.tsx#L23)

___

### wallets

• **wallets**: [`Adapter`](../modules.md#adapter)[]

#### Defined in

[src/WalletProvider.tsx:21](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/WalletProvider.tsx#L21)
