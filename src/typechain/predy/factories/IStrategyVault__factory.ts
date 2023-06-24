/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { IStrategyVault, IStrategyVaultInterface } from '../IStrategyVault'

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_strategyId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_strategyTokenAmount',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_recepient',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_maxMarginAmount',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'isQuoteMode',
        type: 'bool'
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'lowerSqrtPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'upperSqrtPrice',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          }
        ],
        internalType: 'struct IStrategyVault.StrategyTradeParams',
        name: '_tradeParams',
        type: 'tuple'
      }
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'finalDepositMargin',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

export class IStrategyVault__factory {
  static readonly abi = _abi
  static createInterface(): IStrategyVaultInterface {
    return new utils.Interface(_abi) as IStrategyVaultInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStrategyVault {
    return new Contract(address, _abi, signerOrProvider) as IStrategyVault
  }
}
