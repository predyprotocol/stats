/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { BaseStrategy, BaseStrategyInterface } from '../BaseStrategy'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8'
      }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }
    ],
    name: 'OperatorUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'strategyId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256'
      }
    ],
    name: 'StrategyAdded',
    type: 'event'
  },
  {
    inputs: [],
    name: 'operator',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOperator',
        type: 'address'
      }
    ],
    name: 'setOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'strategies',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        internalType: 'uint64',
        name: 'pairGroupId',
        type: 'uint64'
      },
      {
        internalType: 'uint64',
        name: 'pairId',
        type: 'uint64'
      },
      {
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'marginToken',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'marginRoundedScaler',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'strategyToken',
        type: 'address'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'lastHedgeTimestamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'lastHedgePrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'hedgeInterval',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'hedgeSqrtPriceThreshold',
            type: 'uint256'
          }
        ],
        internalType: 'struct BaseStrategy.HedgeStatus',
        name: 'hedgeStatus',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'strategyCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610316806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806322068b4414610051578063570ca7351461006d578063b3ab15fb14610098578063d574ea3d146100ad575b600080fd5b61005a60025481565b6040519081526020015b60405180910390f35b600554610080906001600160a01b031681565b6040516001600160a01b039091168152602001610064565b6100ab6100a6366004610297565b6101c6565b005b61014d6100bb3660046102c7565b60016020818152600092835260409283902080549281015460028201546003830154600484015460058501548851608081018a52600687015481526007870154978101979097526008860154988701989098526009909401546060860152949567ffffffffffffffff8084169668010000000000000000909404169491936001600160a01b0393841693909291169088565b6040805198895267ffffffffffffffff9788166020808b019190915296909716888801526060808901959095526001600160a01b03938416608089015260a088019290925290911660c0860152805160e08601529182015161010085015291810151610120840152015161014082015261016001610064565b6005546001600160a01b031633146102305760405162461bcd60e51b8152602060048201526024808201527f4261736553747261746567793a2063616c6c6572206973206e6f74206f70657260448201526330ba37b960e11b606482015260840160405180910390fd5b6001600160a01b03811661024357600080fd5b600580546001600160a01b0319166001600160a01b0383169081179091556040519081527fb3b3f5f64ab192e4b5fefde1f51ce9733bbdcf831951543b325aebd49cc27ec49060200160405180910390a150565b6000602082840312156102a957600080fd5b81356001600160a01b03811681146102c057600080fd5b9392505050565b6000602082840312156102d957600080fd5b503591905056fea264697066735822122087258c4ac0549d6c45308cf0475af98a67bf3845925e96f1e78f4bcf177d1a5f64736f6c63430008130033'

export class BaseStrategy__factory extends ContractFactory {
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
  ): Promise<BaseStrategy> {
    return super.deploy(overrides || {}) as Promise<BaseStrategy>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): BaseStrategy {
    return super.attach(address) as BaseStrategy
  }
  connect(signer: Signer): BaseStrategy__factory {
    return super.connect(signer) as BaseStrategy__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): BaseStrategyInterface {
    return new utils.Interface(_abi) as BaseStrategyInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseStrategy {
    return new Contract(address, _abi, signerOrProvider) as BaseStrategy
  }
}