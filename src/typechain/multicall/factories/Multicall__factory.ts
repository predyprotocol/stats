/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { Multicall } from '../Multicall'

export class Multicall__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Multicall {
    return super.attach(address) as Multicall
  }
  connect(signer: Signer): Multicall__factory {
    return super.connect(signer) as Multicall__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes'
          }
        ],
        internalType: 'struct Multicall.Call[]',
        name: 'calls',
        type: 'tuple[]'
      }
    ],
    name: 'aggregate',
    outputs: [
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256'
      },
      {
        internalType: 'bytes[]',
        name: 'returnData',
        type: 'bytes[]'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'requireSuccess',
        type: 'bool'
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes'
          }
        ],
        internalType: 'struct Multicall.Call[]',
        name: 'calls',
        type: 'tuple[]'
      }
    ],
    name: 'tryAggregate',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'success',
            type: 'bool'
          },
          {
            internalType: 'bytes',
            name: 'returnData',
            type: 'bytes'
          }
        ],
        internalType: 'struct Multicall.Result[]',
        name: 'returnData',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610788806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063252dba421461003b578063bce38bd714610065575b600080fd5b61004e610049366004610512565b610085565b60405161005c92919061064c565b60405180910390f35b61007861007336600461054d565b6101fd565b60405161005c91906105e7565b8051439060609067ffffffffffffffff8111156100b257634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156100e557816020015b60608152602001906001900390816100d05790505b50905060005b83518110156101f75760008085838151811061011757634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b031686848151811061014c57634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160405161016591906105cb565b6000604051808303816000865af19150503d80600081146101a2576040519150601f19603f3d011682016040523d82523d6000602084013e6101a7565b606091505b5091509150816101b657600080fd5b808484815181106101d757634e487b7160e01b600052603260045260246000fd5b6020026020010181905250505080806101ef90610715565b9150506100eb565b50915091565b6060815167ffffffffffffffff81111561022757634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561026d57816020015b6040805180820190915260008152606060208201528152602001906001900390816102455790505b50905060005b82518110156103ec5760008084838151811061029f57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001516001600160a01b03168584815181106102d457634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516040516102ed91906105cb565b6000604051808303816000865af19150503d806000811461032a576040519150601f19603f3d011682016040523d82523d6000602084013e61032f565b606091505b5091509150851561039557816103955760405162461bcd60e51b815260206004820152602160248201527f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c656044820152601960fa1b606482015260840160405180910390fd5b60405180604001604052808315158152602001828152508484815181106103cc57634e487b7160e01b600052603260045260246000fd5b6020026020010181905250505080806103e490610715565b915050610273565b5092915050565b600082601f830112610403578081fd5b8135602067ffffffffffffffff808311156104205761042061073c565b61042d82838502016106b4565b83815282810190868401865b8681101561050457813589016040601f198181848f0301121561045a578a8bfd5b610463826106b4565b838a01356001600160a01b038116811461047b578c8dfd5b8152838301358981111561048d578c8dfd5b8085019450508d603f8501126104a1578b8cfd5b89840135898111156104b5576104b561073c565b6104c58b84601f840116016106b4565b92508083528e848287010111156104da578c8dfd5b808486018c85013782018a018c9052808a0191909152865250509285019290850190600101610439565b509098975050505050505050565b600060208284031215610523578081fd5b813567ffffffffffffffff811115610539578182fd5b610545848285016103f3565b949350505050565b6000806040838503121561055f578081fd5b8235801515811461056e578182fd5b9150602083013567ffffffffffffffff811115610589578182fd5b610595858286016103f3565b9150509250929050565b600081518084526105b78160208601602086016106e5565b601f01601f19169290920160200192915050565b600082516105dd8184602087016106e5565b9190910192915050565b60208082528251828201819052600091906040908185019080840286018301878501865b8381101561050457888303603f1901855281518051151584528701518784018790526106398785018261059f565b958801959350509086019060010161060b565b600060408201848352602060408185015281855180845260608601915060608382028701019350828701855b828110156106a657605f1988870301845261069486835161059f565b95509284019290840190600101610678565b509398975050505050505050565b604051601f8201601f1916810167ffffffffffffffff811182821017156106dd576106dd61073c565b604052919050565b60005b838110156107005781810151838201526020016106e8565b8381111561070f576000848401525b50505050565b600060001982141561073557634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea26469706673582212200ceac705a17db8fc202c89ba11205daaed91c572c3b25bcd60dd894ef5037bf764736f6c63430008020033'