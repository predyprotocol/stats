/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  ApplyInterestLib,
  ApplyInterestLibInterface
} from '../ApplyInterestLib'

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
        components: [
          {
            internalType: 'uint256',
            name: 'totalCompoundDeposited',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalNormalDeposited',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalNormalBorrowed',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetScaler',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetGrowth',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'debtGrowth',
            type: 'uint256'
          }
        ],
        indexed: false,
        internalType: 'struct ScaledAsset.TokenStatus',
        name: 'stableStatus',
        type: 'tuple'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'totalCompoundDeposited',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalNormalDeposited',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalNormalBorrowed',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetScaler',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'assetGrowth',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'debtGrowth',
            type: 'uint256'
          }
        ],
        indexed: false,
        internalType: 'struct ScaledAsset.TokenStatus',
        name: 'underlyingStatus',
        type: 'tuple'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interestRateStable',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interestRateUnderlying',
        type: 'uint256'
      }
    ],
    name: 'InterestGrowthUpdated',
    type: 'event'
  }
]

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207d5889ace83dd2a0f5f20b4a394d02a24cf9dd329122966c5b38a26bbcb5d0ea64736f6c63430008130033'

export class ApplyInterestLib__factory extends ContractFactory {
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
  ): Promise<ApplyInterestLib> {
    return super.deploy(overrides || {}) as Promise<ApplyInterestLib>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ApplyInterestLib {
    return super.attach(address) as ApplyInterestLib
  }
  connect(signer: Signer): ApplyInterestLib__factory {
    return super.connect(signer) as ApplyInterestLib__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ApplyInterestLibInterface {
    return new utils.Interface(_abi) as ApplyInterestLibInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ApplyInterestLib {
    return new Contract(address, _abi, signerOrProvider) as ApplyInterestLib
  }
}
