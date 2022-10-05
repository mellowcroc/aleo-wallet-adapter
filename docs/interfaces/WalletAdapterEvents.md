[@demox-labs/leo-wallet-adapter](../README.md) / [Exports](../modules.md) / WalletAdapterEvents

# Interface: WalletAdapterEvents

## Table of contents

### Methods

- [connect](WalletAdapterEvents.md#connect)
- [disconnect](WalletAdapterEvents.md#disconnect)
- [error](WalletAdapterEvents.md#error)
- [readyStateChange](WalletAdapterEvents.md#readystatechange)

## Methods

### connect

▸ **connect**(`publicKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`void`

#### Defined in

[src/base/adapter.ts:8](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L8)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[src/base/adapter.ts:9](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L9)

___

### error

▸ **error**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`WalletError`](../classes/WalletError.md) |

#### Returns

`void`

#### Defined in

[src/base/adapter.ts:10](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L10)

___

### readyStateChange

▸ **readyStateChange**(`readyState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `readyState` | [`WalletReadyState`](../enums/WalletReadyState.md) |

#### Returns

`void`

#### Defined in

[src/base/adapter.ts:11](https://github.com/demox-labs/leo-wallet-adapter/blob/60deb2b/src/base/adapter.ts#L11)