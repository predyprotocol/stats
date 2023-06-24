/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Reader, ReaderInterface } from '../Reader'

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IController',
        name: '_controller',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'controller',
    outputs: [
      {
        internalType: 'contract IController',
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
        internalType: 'uint256',
        name: '_pairId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_vaultId',
        type: 'uint256'
      }
    ],
    name: 'getDelta',
    outputs: [
      {
        internalType: 'int256',
        name: '_delta',
        type: 'int256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pairId',
        type: 'uint256'
      }
    ],
    name: 'getUtilizationRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: 'sqrtAsset',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'stableAsset',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'underlyingAsset',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051610f50380380610f5083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610ebd806100936000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632da848b2146100465780639101242414610079578063f77c47911461009a575b600080fd5b61005961005436600461041b565b6100c5565b604080519384526020840192909252908201526060015b60405180910390f35b61008c610087366004610434565b6101c1565b604051908152602001610070565b6000546100ad906001600160a01b031681565b6040516001600160a01b039091168152602001610070565b60008054604051631d591eb760e31b8152600481018490528291829182916001600160a01b03169063eac8f5b89060240161066060405180830381865afa158015610114573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101389190610862565b604051632a991c0160e21b815290915073__$4278c074fd6acd31e7e5f642d169fef5d3$__9063aa64700490610172908490600401610aa3565b606060405180830381865af415801561018f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b39190610b4b565b935093509350509193909250565b60008054604051631d591eb760e31b81526004810185905282916001600160a01b03169063eac8f5b89060240161066060405180830381865afa15801561020c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102309190610862565b8051600054604051632500ed8d60e21b81526004810187905292935061031c926001600160a01b0390911690639403b63490602401600060405180830381865afa158015610282573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102aa9190810190610bd1565b6000546040516318e8074960e01b8152600481018990526001600160a01b03909116906318e8074990602401602060405180830381865afa1580156102f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103179190610d8a565b610326565b9150505b92915050565b6000805b8360a00151518110156103e6578360a00151818151811061034d5761034d610dae565b60200260200101516000015167ffffffffffffffff1685036103d4576103c7836001600160a01b03168560a00151838151811061038c5761038c610dae565b602002602001015160a00151600001518660a0015184815181106103b2576103b2610dae565b602002602001015160800151600001516103ee565b6103d19083610dda565b91505b806103de81610e02565b91505061032a565b509392505050565b6000836103ff600160601b85610e1b565b6104099190610e4b565b6104139083610dda565b949350505050565b60006020828403121561042d57600080fd5b5035919050565b6000806040838503121561044757600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561048f5761048f610456565b60405290565b60405160c0810167ffffffffffffffff8111828210171561048f5761048f610456565b604051610220810167ffffffffffffffff8111828210171561048f5761048f610456565b604051610120810167ffffffffffffffff8111828210171561048f5761048f610456565b604051610100810167ffffffffffffffff8111828210171561048f5761048f610456565b604051601f8201601f1916810167ffffffffffffffff8111828210171561054d5761054d610456565b604052919050565b6001600160a01b038116811461056a57600080fd5b50565b805161057881610555565b919050565b60006080828403121561058f57600080fd5b61059761046c565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60008183036101808112156105d557600080fd5b6105dd61046c565b915082516105ea81610555565b825260208301516105fa81610555565b602083015260c0603f198201121561061157600080fd5b5061061a610495565b60408301518152606083015160208201526080830151604082015260a0830151606082015260c0830151608082015260e083015160a08201528060408301525061066883610100840161057d565b606082015292915050565b8051600281900b811461057857600080fd5b60006060828403121561069757600080fd5b6040516060810181811067ffffffffffffffff821117156106ba576106ba610456565b604052825181529050806106d060208401610673565b60208201526106e160408401610673565b60408201525092915050565b805167ffffffffffffffff8116811461057857600080fd5b60006040828403121561071757600080fd5b6040516040810181811067ffffffffffffffff8211171561073a5761073a610456565b604052825181526020928301519281019290925250919050565b6000610260828403121561076757600080fd5b61076f6104b8565b905061077a8261056d565b815261078860208301610673565b602082015261079960408301610673565b60408201526107aa606083016106ed565b60608201526080828101519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a061081d84828501610705565b908201526101e061083084848301610705565b6101c08301526102208301519082015261024090910151610200820152919050565b8051801515811461057857600080fd5b6000610660828403121561087557600080fd5b61087d6104dc565b825181526020830151602082015261089884604085016105c1565b60408201526108ab846101c085016105c1565b60608201526108be846103408501610685565b60808201526108d1846103a08501610754565b60a08201526108e36106008401610852565b60c08201526108f56106208401610852565b60e0820152610640929092015161010083015250919050565b60018060a01b03808251168352806020830151166020840152506040810151805160408401526020810151606084015260408101516080840152606081015160a0840152608081015160c084015260a081015160e084015250606081015161099b610100840182805182526020810151602083015260408101516040830152606081015160608301525050565b505050565b80516001600160a01b0316825260208101516109c1602084018260020b9052565b5060408101516109d6604084018260020b9052565b5060608101516109f2606084018267ffffffffffffffff169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a08082015180518285015260208101516101c085015250506101c08101516101e0610a8b8185018380518252602090810151910152565b82015161022084015250610200015161024090910152565b60006106608201905082518252602083015160208301526040830151610acc604084018261090e565b506060830151610ae06101c084018261090e565b50608083015180516103408401526020810151600290810b6103608501526040820151900b6103808401525060a0830151610b1f6103a08401826109a0565b5060c0830151151561060083015260e08301511515610620830152610100909201516106409091015290565b600080600060608486031215610b6057600080fd5b8351925060208401519150604084015190509250925092565b600060c08284031215610b8b57600080fd5b610b93610495565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015292915050565b60006020808385031215610be457600080fd5b825167ffffffffffffffff80821115610bfc57600080fd5b818501915060c0808388031215610c1257600080fd5b610c1a610495565b835181528484015185820152604080850151610c3581610555565b82820152606085810151818401526080610c50818801610852565b8185015260a08088015187811115610c6757600080fd5b8089019850508b601f890112610c7c57600080fd5b875187811115610c8e57610c8e610456565b610c9c8a8260051b01610524565b8181528a8101985060099190911b89018a01908d821115610cbc57600080fd5b988a01985b818a1015610d73576102008a8f031215610cdb5760008081fd5b610ce3610500565b610cec8b6106ed565b8152610cf98c8c01610673565b8c820152610d08878c01610673565b87820152610d17868c016106ed565b86820152610d278f868d01610705565b85820152610d378f8a8d01610b79565b84820152610d498f6101808d01610705565b89820152610d5b8f6101c08d01610705565b60e082015289526102009990990198978a0197610cc1565b9186019190915250929a9950505050505050505050565b600060208284031215610d9c57600080fd5b8151610da781610555565b9392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018281126000831280158216821582161715610dfa57610dfa610dc4565b505092915050565b600060018201610e1457610e14610dc4565b5060010190565b80820260008212600160ff1b84141615610e3757610e37610dc4565b818105831482151761032057610320610dc4565b600082610e6857634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615610e8257610e82610dc4565b50059056fea2646970667358221220e8cd75c0274c6842718b3b6f5875ea48c8462bdfafb8da769d959780c25bea9464736f6c63430008130033'

type ReaderConstructorParams =
  | [linkLibraryAddresses: ReaderLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: ReaderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === 'string' ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    '_isInterface' in xs[0]
  )
}

export class Reader__factory extends ContractFactory {
  constructor(...args: ReaderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      const [linkLibraryAddresses, signer] = args
      super(_abi, Reader__factory.linkBytecode(linkLibraryAddresses), signer)
    }
  }

  static linkBytecode(linkLibraryAddresses: ReaderLibraryAddresses): string {
    let linkedBytecode = _bytecode

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$4278c074fd6acd31e7e5f642d169fef5d3\\$__', 'g'),
      linkLibraryAddresses['src/libraries/logic/ReaderLogic.sol:ReaderLogic']
        .replace(/^0x/, '')
        .toLowerCase()
    )

    return linkedBytecode
  }

  deploy(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Reader> {
    return super.deploy(_controller, overrides || {}) as Promise<Reader>
  }
  getDeployTransaction(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_controller, overrides || {})
  }
  attach(address: string): Reader {
    return super.attach(address) as Reader
  }
  connect(signer: Signer): Reader__factory {
    return super.connect(signer) as Reader__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ReaderInterface {
    return new utils.Interface(_abi) as ReaderInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Reader {
    return new Contract(address, _abi, signerOrProvider) as Reader
  }
}

export interface ReaderLibraryAddresses {
  ['src/libraries/logic/ReaderLogic.sol:ReaderLogic']: string
}