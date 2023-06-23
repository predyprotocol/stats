/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { ScaledAsset, ScaledAssetInterface } from '../ScaledAsset'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isStable',
        type: 'bool'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'open',
        type: 'int256'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'close',
        type: 'int256'
      }
    ],
    name: 'ScaledAssetPositionUpdated',
    type: 'event'
  }
]

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200cf2aa1671316837674bb0dd2abdda44340e391bc2c1bb4fac1708d16cfbeaa464736f6c63430008130033'

export class ScaledAsset__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0])
    } else {
      super(...args)
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ScaledAsset> {
    return super.deploy(overrides || {}) as Promise<ScaledAsset>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ScaledAsset {
    return super.attach(address) as ScaledAsset
  }
  connect(signer: Signer): ScaledAsset__factory {
    return super.connect(signer) as ScaledAsset__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ScaledAssetInterface {
    return new utils.Interface(_abi) as ScaledAssetInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ScaledAsset {
    return new Contract(address, _abi, signerOrProvider) as ScaledAsset
  }
}
