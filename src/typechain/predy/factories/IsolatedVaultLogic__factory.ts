/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  IsolatedVaultLogic,
  IsolatedVaultLogicInterface
} from '../IsolatedVaultLogic'

const _abi = [
  {
    inputs: [],
    name: 'T',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'mainVaultId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'isolatedVaultId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'marginAmount',
        type: 'int256'
      }
    ],
    name: 'IsolatedVaultTraded',
    type: 'event'
  }
]

const _bytecode =
  '0x61442361003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80633e90de491461003a575b600080fd5b81801561004657600080fd5b5061005a610055366004613b83565b6100c1565b604080519283528151805160208086019190915280820151858401528183015160608087019190915282015160808087019190915282015160a0808701919091529091015160c085015282015160e084015201516101008201526101200160405180910390f35b60006100cb613929565b6100de87856001600160401b0316610a75565b6040805160608101825260008082526020820181905291810191909152600080896004016000886001600160401b0316815260200190815260200160002060010154905060008a6007016000336001600160a01b03166001600160a01b0316815260200190815260200160002060008381526020019081526020016000206000015490508a6003016000838152602001908152602001600020604051806060016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160149054906101000a900460ff1660ff1660ff168152505093508a600601600082815260200190815260200160002092506103b2836040518060c001604052908160008201548152602001600182015481526020016002820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600382015481526020016004820160009054906101000a900460ff1615151515815260200160058201805480602002602001604051908101604052809291908181526020016000905b828210156103a45760008481526020908190206040805161010081018252600d860290920180546001600160401b038082168552600160401b8204600290810b86880152600160581b8304810b86860152600160701b909204166060808601919091528351808501855260018085015482529284015481880152608080870191909152845160c08082018752600386015482526004860154828a0152600586015482880152600686015493820193909352600785015491810191909152600884015460a0828101919091528601528351808501855260098401548152600a84015481880152908501528251808401909352600b8201548352600c909101548285015260e0830191909152908352909201910161028d565b505050508152505033610ac5565b6040805160c08101825284548152600185015460208083019190915260028601546001600160a01b03168284015260038601546060830152600486015460ff161515608083015260058601805484518184028101840190955280855261054794889360a086019391929060009084015b828210156105395760008481526020908190206040805161010081018252600d860290920180546001600160401b038082168552600160401b8204600290810b86880152600160581b8304810b86860152600160701b909204166060808601919091528351808501855260018085015482529284015481880152608080870191909152845160c08082018752600386015482526004860154828a0152600586015482880152600686015493820193909352600785015491810191909152600884015460a0828101919091528601528351808501855260098401548152600a84015481880152908501528251808401909352600b8201548352600c909101548285015260e08301919091529083529092019101610422565b505050508152505083610b0f565b6040805160c08101825284548152600185015460208083019190915260028601546001600160a01b03168284015260038601546060830152600486015460ff16151560808301526005860180548451818402810184019095528085526106de94889360a086019391929060009084015b828210156106ce5760008481526020908190206040805161010081018252600d860290920180546001600160401b038082168552600160401b8204600290810b86880152600160581b8304810b86860152600160701b909204166060808601919091528351808501855260018085015482529284015481880152608080870191909152845160c08082018752600386015482526004860154828a0152600586015482880152600686015493820193909352600785015491810191909152600884015460a0828101919091528601528351808501855260098401548152600a84015481880152908501528251808401909352600b8201548352600c909101548285015260e083019190915290835290920191016105b7565b5050509152505060048d01610b4b565b6106ec8b8b33856000610bac565b600081815260068d01602052604081209197509092508a9003905061071b5760048101805460ff191660011790555b600061072b8b600401838a611043565b9050888360030160008282546107419190613c81565b925050819055508882600301600082825461075c9190613ca1565b9250508190555061092b8b6004018c600501856040518060c001604052908160008201548152602001600182015481526020016002820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600382015481526020016004820160009054906101000a900460ff1615151515815260200160058201805480602002602001604051908101604052809291908181526020016000905b8282101561091e5760008481526020908190206040805161010081018252600d860290920180546001600160401b038082168552600160401b8204600290810b86880152600160581b8304810b86860152600160701b909204166060808601919091528351808501855260018085015482529284015481880152608080870191909152845160c08082018752600386015482526004860154828a0152600586015482880152600686015493820193909352600785015491810191909152600884015460a0828101919091528601528351808501855260098401548152600a84015481880152908501528251808401909352600b8201548352600c909101548285015260e08301919091529083529092019101610807565b5050505081525050611058565b5060405163bfdcb20160e01b815273__$0b623280e191457df753735b6fc86de420$__9063bfdcb2019061096d9087908f9087908e9088908f90600401613ced565b61010060405180830381865af415801561098b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109af9190613dc1565b600483015490955060ff1680156109c857506040850151155b15610a225760038083015490840180548291906000906109e9908490613ca1565b909155505060006003840181905533815260078d01602090815260408083206001880154845290915290208354610a2091906110a6565b505b8254825460408051928352602083019190915281018a90527f712ff2fa2effb5717617d07848c44e17b19f395c82b5dfbbf32f81fca15ed7ac9060600160405180910390a1505050509550959350505050565b806000108015610a885750816001015481105b610ac15760405162461bcd60e51b8152602060048201526005602482015264050414952360dc1b60448201526064015b60405180910390fd5b5050565b806001600160a01b031682604001516001600160a01b031614610ac15760405162461bcd60e51b81526020600482015260026024820152612b1960f11b6044820152606401610ab8565b80826020015114610ac15760405162461bcd60e51b815260206004820152600660248201526505641554c54360d41b6044820152606401610ab8565b60005b8260a0015151811015610ba75760008360a001518281518110610b7357610b73613e4d565b6020026020010151600001516001600160401b03169050610b948382611158565b5080610b9f81613e63565b915050610b4e565b505050565b600084600003610ced57600286018054906000610bc883613e63565b9091555090506001600160a01b038416610c095760405162461bcd60e51b8152602060048201526002602482015261563560f01b6044820152606401610ab8565b600081815260068701602052604090208181556002810180546001600160a01b0319166001600160a01b0387161790556001018390558115610c79576001600160a01b038416600090815260078701602090815260408083208684529091529020610c749082611479565b610ca8565b6001600160a01b038416600090815260078701602090815260408083208684529091529020610ca890826114b1565b604080518281523360208201528315158183015290517f2426281c09515ec0a53173de7284551c54a4c6fc61de7d2ccb225a44eee0c98b9181900360600190a161103a565b610cf78686611522565b60008581526006870160209081526040808320815160c0810183528154815260018201548185015260028201546001600160a01b03168184015260038201546060820152600482015460ff1615156080820152600582018054845181870281018701909552808552610e97969295939460a087019490939084015b82821015610e895760008481526020908190206040805161010081018252600d860290920180546001600160401b038082168552600160401b8204600290810b86880152600160581b8304810b86860152600160701b909204166060808601919091528351808501855260018085015482529284015481880152608080870191909152845160c08082018752600386015482526004860154828a0152600586015482880152600686015493820193909352600785015491810191909152600884015460a0828101919091528601528351808501855260098401548152600a84015481880152908501528251808401909352600b8201548352600c909101548285015260e08301919091529083529092019101610d72565b505050508152505085610ac5565b60008581526006870160209081526040808320815160c0810183528154815260018201548185015260028201546001600160a01b03168184015260038201546060820152600482015460ff1615156080820152600582018054845181870281018701909552808552611037969295939460a087019490939084015b828210156110295760008481526020908190206040805161010081018252600d860290920180546001600160401b038082168552600160401b8204600290810b86880152600160581b8304810b86860152600160701b909204166060808601919091528351808501855260018085015482529284015481880152608080870191909152845160c08082018752600386015482526004860154828a0152600586015482880152600686015493820193909352600785015491810191909152600884015460a0828101919091528601528351808501855260098401548152600a84015481880152908501528251808401909352600b8201548352600c909101548285015260e08301919091529083529092019101610f12565b505050508152505084610b0f565b50835b95945050505050565b6000611050848484611551565b949350505050565b6000806110668585856117fa565b5090925090508061109e5760405162461bcd60e51b81526020600482015260026024820152614e5360f01b6044820152606401610ab8565b509392505050565b600081116110c65760405162461bcd60e51b8152600401610ab890613e7c565b81548190036110d3575050565b600061114c83604051806040016040529081600082015481526020016001820180548060200260200160405190810160405280929190818152602001828054801561113d57602002820191906000526020600020905b815481526020019060010190808311611129575b50505050508152505083611834565b9050610ba783826118c6565b600081815260208390526040902061117382601c8301611941565b60006111868260020183602e0154611c35565b9050600061119b83600e0184602e0154611c35565b42602e8501559050811515806111b15750600081115b15611472576040805161012080820183528554825260018601546020808401919091528351608080820186526002808a01546001600160a01b03908116845260038b0154811684860152875160c08082018a5260048d0154825260058d01548288015260068d0154828b015260078d015460608084019190915260088e01548387015260098e015460a080850191909152878c01939093528a518087018c52600a8f01548152600b8f0154818a0152600c8f0154818d0152600d8f01548183015281880152898b019690965289518086018b52600e8e015484168152600f8e01548416818901528a518083018c5260108f0154815260118f0154818a015260128f0154818d015260138f01548189015260148f01548188015260158f015481850152818c01528a518087018c5260168f0154815260178f0154818a015260188f0154818d015260198f01548189015281880152868a015289518087018b52601a8e01548152601b8e015480860b828a015263010000009004850b818c0152858a0152895161022081018b52601c8e01549384168152600160a01b8404850b81890152600160b81b90930490930b828a0152601d8c01546001600160401b031694820194909452601e8b015492810192909252601f8a015482840152838a01548282015260218a015460e08084019190915260228b01546101008481019190915260238c01549684019690965260248b015461014084015260258b015461016084015260268b01546101808401528751808901895260278c0154815260288c0154818701526101a0840152875180890190985260298b01548852602a8b0154948801949094526101c0820196909652602b8901546101e0820152602c89015461020082015290840152602d87015460ff808216151595850195909552829004909316151592820192909252602e85015491810191909152611472908383611d1f565b5050505050565b8154156114ad5760405162461bcd60e51b8152602060048201526002602482015261158d60f21b6044820152606401610ab8565b9055565b600081116114d15760405162461bcd60e51b8152600401610ab890613e7c565b6001808301805491820181556000818152602090209091018290555460641015610ac15760405162461bcd60e51b8152602060048201526002602482015261563360f01b6044820152606401610ab8565b8060001080156115355750816002015481105b610ac15760405162461bcd60e51b8152600401610ab890613e7c565b6000805b60058401548110156115dc57826001600160401b031684600501828154811061158057611580613e4d565b60009182526020909120600d90910201546001600160401b0316036115ca578360050181815481106115b4576115b4613e4d565b90600052602060002090600d02019150506117f3565b806115d481613e63565b915050611555565b50600583015460011161169d578360008460050160008154811061160257611602613e4d565b60009182526020808320600d909202909101546001600160401b031683528201929092526040019020602d015460ff6101009091041615801561166657506001600160401b0382166000908152602085905260409020602d0154610100900460ff16155b61169d5760405162461bcd60e51b81526020600482015260086024820152671254d3d31055115160c21b6044820152606401610ab8565b826005016116aa83611d77565b81546001818101845560009384526020938490208351600d909302018054858501516040808701516060808901516001600160401b03908116600160701b0267ffffffffffffffff60701b1962ffffff948516600160581b02166affffffffffffffffffffff60581b1994909616600160401b026affffffffffffffffffffff199097169190991617949094171691909117949094178255608080860151805184860155870151600284015560a08087015180516003860155808901516004860155958601516005808601919091559286015160068501559085015160078401559390930151600882015560c084015180516009830155850151600a82015560e0909301518051600b85015590930151600c909201919091558401805490916117d291613e98565b815481106117e2576117e2613e4d565b90600052602060002090600d020190505b9392505050565b60008060008061180b878787611e75565b919550909250905083811280159061182857506000856060015112155b92505093509350939050565b6000600019815b84602001515181101561188657838560200151828151811061185f5761185f613e4d565b60200260200101510361187457809150611886565b8061187e81613e63565b91505061183b565b5060648111156118bd5760405162461bcd60e51b8152602060048201526002602482015261563360f01b6044820152606401610ab8565b90505b92915050565b6001808301805490916118d891613e98565b815481106118e8576118e8613e4d565b906000526020600020015482600101828154811061190857611908613e4d565b6000918252602090912001556001820180548061192757611927613eab565b600190038181906000526020600020016000905590555050565b8060020154600003611951575050565b80546000908190611982906001600160a01b03811690600160a01b8104600290810b91600160b81b9004900b611ef7565b9150915060008360050154836119989190613e98565b905060008460060154836119ac9190613e98565b9050811580156119ba575080155b156119c757505050505050565b604080516102208101825286546001600160a01b0381168252600160a01b8104600290810b602080850191909152600160b81b909204810b8385015260018901546001600160401b031660608401528801546080830152600388015460a0830152600488015460c0830152600588015460e08301526006880154610100830152600788015461012083015260088801546101408301526009880154610160830152600a88015461018083015282518084018452600b8901548152600c890154818301526101a08301528251808401909352600d8801548352600e880154908301526101c0810191909152600f8601546101e08201526010860154610200820152600090611ad3906121d8565b90506000611ae082612239565b9050611b1c846103e8838a60030154611af99190613ec1565b611b039190613eee565b8960020154611b129190613f02565b896002015461229d565b876009016000828254611b2f9190613f02565b92505081905550611b4d836103e8838a60030154611af99190613ec1565b87600a016000828254611b609190613f02565b90915550611b7e905084611b76836103e8613f02565b6103e861229d565b876007016000828254611b919190613f02565b90915550611ba7905083611b76836103e8613f02565b876008016000828254611bba9190613f02565b9091555050600587018690556006870185905560028701546003880154604080518b81526020810193909352820152606081018590526080810184905260a081018290527f4f3e43e713f947281f0deec9c972d8bed677658e3f98271fbec9a52ca8f79bd79060c00160405180910390a15050505050505050565b6000814211611c46575060006118c0565b6040805160c08101825260028501548152600385015460208201526004850154918101919091526005840154606082015260068401546080820152600784015460a0820152600090611c979061234f565b905080600003611cab5760009150506118c0565b6301e13380611cba8442613e98565b604080516080810182526008880154815260098801546020820152600a88015491810191909152600b8701546060820152611cf59084612397565b611cff9190613ec1565b611d099190613eee565b9150611d18600285018361244b565b5092915050565b7f68fec554d30e1515ff9dd8fef00d858620f16c33b61a2ed9cc011e4c0d66b01c83600001518460400151604001518560600151604001518585604051611d6a959493929190613f15565b60405180910390a1505050565b611d7f613981565b604051806101000160405280836001600160401b03168152602001600060020b8152602001600060020b815260200160006001600160401b03168152602001604051806040016040528060008152602001600081525081526020016040518060c00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152508152602001611e3d6040805180820182526000808252602091820181905282518084019093528083529082015290565b8152602001611e6d6040805180820182526000808252602091820181905282518084019093528083529082015290565b905292915050565b6000806000806000611e88888888612559565b91965090945090925090506000611eb7620f4240611ea884611388613ec1565b611eb29190613eee565b612980565b905080611ec48487613c81565b611ece9190613ca1565b9550838015611edf5750620f424086125b15611eeb57620f424095505b50505093509350939050565b6000806000856001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015611f3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f5e9190613fdb565b50505050509150506000866001600160a01b031663f30583996040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fca9190614076565b90506000876001600160a01b031663461413196040518163ffffffff1660e01b8152600401602060405180830381865afa15801561200c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120309190614076565b60405163f30dba9360e01b8152600289900b60048201529091506000908190819081906001600160a01b038d169063f30dba939060240161010060405180830381865afa158015612085573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120a991906140b5565b505050509350935050508a60020b8760020b126120cb578193508092506120e4565b6120d58287613e98565b93506120e18186613e98565b92505b505060405163f30dba9360e01b8152600289900b60048201526000908190819081906001600160a01b038f169063f30dba939060240161010060405180830381865afa158015612138573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215c91906140b5565b505050509350935050508b60020b8960020b121561217f57819350809250612198565b6121898289613e98565b93506121958188613e98565b92505b508290506121a68588613e98565b6121b09190613e98565b9850806121bd8487613e98565b6121c79190613e98565b975050505050505050935093915050565b600081608001516000036121ee57506000919050565b60008260800151670de0b6b3a76400008460a0015161220d9190613ec1565b6122179190613eee565b9050670de0b6b3a76400008111156118c05750670de0b6b3a764000092915050565b600067016345785d8a0000821161225257506000919050565b600061226667016345785d8a000084613e98565b9050670de0b6b3a7640000808261227f81610640613ec1565b6122899190613ec1565b6122939190613eee565b6117f39190613eee565b60008080600019858709858702925082811083820303915050806000036122d657600084116122cb57600080fd5b5082900490506117f3565b8084116122e257600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b805160009015801561236357506020820151155b1561237057506000919050565b6000612217612380846040015190565b670de0b6b3a7640000612392866129ee565b612a1a565b815160208301516000919083116123dc57670de0b6b3a76400008460400151846123c19190613ec1565b6123cb9190613eee565b6123d59082613f02565b90506118bd565b670de0b6b3a7640000846040015185602001516123f99190613ec1565b6124039190613eee565b61240d9082613f02565b9050670de0b6b3a76400008460200151846124289190613e98565b85606001516124379190613ec1565b6124419190613eee565b6110509082613f02565b815415801561245c57506001820154155b15612465575050565b6040805160c0808201835284548083526001860154602080850182905260028801548587018190526003890154606080880182905260048b01546080808a0182905260058d015460a09a8b018190528b51998a018c529789529488019590955297860182905296850196909652830152918101919091526000916124ef91849190612392906129ee565b9050818360050160008282546125059190613f02565b909155505060038301546125339061252583670de0b6b3a7640000613f02565b670de0b6b3a7640000612a1a565b83600301819055508083600401600082825461254f9190613f02565b9091555050505050565b60008060008060005b8560a00151518110156129535760008660a00151828151811061258757612587613e4d565b60209081029190910181015180516001600160401b03166000818152928c90526040909220601c01549092506001600160a01b03161561293e57600081815260208b905260408120601c810154602d909101546125f0916001600160a01b03169060ff16612a38565b600083815260208d8152604080832081516101208082018452825482526001830154828601528351608080820186526002808601546001600160a01b03908116845260038701548116848a0152875160c08082018a52600489015482526005890154828c01526006890154828b0152600789015460608084019190915260088a01548387015260098a015460a080850191909152878c01939093528a518087018c52600a8b01548152600b8b0154818e0152600c8b0154818d0152600d8b01548183015281880152888b019690965289518086018b52600e8a015484168152600f8a01548416818d01528a518083018c5260108b0154815260118b0154818e015260128b0154818d015260138b01548189015260148b01548188015260158b015481850152818c01528a518087018c5260168b0154815260178b0154818e015260188b0154818d015260198b015481890152818801528689015289518087018b52601a8a01548152601b8a015480860b828e015263010000009004850b818c015285890152895161022081018b52601c8a01549384168152600160a01b8404850b818d0152600160b81b90930490930b828a0152601d8801546001600160401b031694820194909452601e87015492810192909252601f860154828401528588015482820152602186015460e08084019190915260228701546101008481019190915260238801549584019590955260248701546101408401526025870154610160840152602687015461018084015287518089018952602788015481526028880154818b01526101a0840152875180890190985260298701548852602a870154988801989098526101c0820196909652602b8501546101e0820152602c85015461020082015290830152602d83015460ff808216151595840195909552819004909316151593810193909352602e015490820152919250906128b4908c86612a4c565b600084815260208e905260409020601a01549091506128df906001600160a01b038416908390612ae4565b6128e9908a613ca1565b98506128fe826001600160a01b031682612be3565b6129089089613ca1565b975061291d826001600160a01b031685612c65565b6129279088613f02565b96508580612939575061293984612cab565b955050505b5050808061294b90613e63565b915050612562565b5060608501516129639085613ca1565b93508460600151836129759190613ca1565b925093509350935093565b60006001600160ff1b038211156129ea5760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b6064820152608401610ab8565b5090565b60008160200151612a1083600001518460600151670de0b6b3a7640000612a1a565b6118c09190613f02565b6000826000190484118302158202612a3157600080fd5b5091020490565b60006118bd612a4684612cda565b83612ce8565b612a7060405180606001604052806000815260200160008152602001600081525090565b600080612a7e868686612d15565b915091506040518060600160405280828660a0015160200151876080015160200151612aaa9190613ca1565b612ab49190613ca1565b815260a0860151516020820152608086015151604090910190612ad8908590613ca1565b90529695505050505050565b6001600160ff1b0360006305f5e100612afd8487613ec1565b612b079190613eee565b9050600083612b1a6305f5e10088613ec1565b612b249190613eee565b90506000612b328387612be3565b905083811215612b40578093505b506000612b4d8287612be3565b905083811215612b5b578093505b5060008560200151128015612b74575060008560400151135b15612bda5760008560400151600160601b8760200151612b9390614164565b612b9d9190613ec1565b612ba79190613eee565b90508082108015612bb757508281105b15612bd8576000612bc88288612be3565b905084811215612bd6578094505b505b505b50509392505050565b6000806060612bf28580613ec1565b8451911c9150600160601b612c0686612980565b8560200151612c159190614180565b612c20906002614180565b612c2a91906141b0565b600160601b612c3884612980565b8660400151612c479190614180565b612c5191906141b0565b612c5b9190613ca1565b6110509190613ca1565b60a08101515160009081811315612c805760009150506118c0565b606084612c8c83614164565b612c969190613ec1565b612ca1906002613ec1565b901c949350505050565b6000808260e00151600001511280612cc8575060a0820151516000135b806118c057505060c001515160001390565b6000611d1882610708612dc8565b60008115612d0e57612d076001600160a01b038416600160c01b613eee565b90506118c0565b50816118c0565b600080612d378360c0015186606001516040015161325590919063ffffffff16565b9150612d588360e0015186604001516040015161325590919063ffffffff16565b9050600080612d7187600001518860a001518888613280565b9092509050612d808285613ca1565b9350612d8c8184613ca1565b92505050600080612da1878660a00151613339565b9092509050612db08285613ca1565b9350612dbc8184613ca1565b92505050935093915050565b6040805160028082526060820183526000928392839290916020830190803683370190505090508381600081518110612e0357612e03613e4d565b602002602001019063ffffffff16908163ffffffff1681525050600081600181518110612e3257612e32613e4d565b602002602001019063ffffffff16908163ffffffff1681525050600080866001600160a01b031663883bdbfd60e01b84604051602401612e7291906141de565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051612eb09190614228565b600060405180830381855afa9150503d8060008114612eeb576040519150601f19603f3d011682016040523d82523d6000602084013e612ef0565b606091505b5091509150816131d05760405160206024820152600360448201526213d31160ea1b606482015260840160408051601f19818403018152919052602080820180516001600160e01b031662461bcd60e51b178152915190912082519183019190912014612f6057612f6081613421565b600080886001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015612fa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fc59190613fdb565b5050509350935050506000808a6001600160a01b031663252c09d784866001612fee9190614244565b612ff8919061425f565b6040516001600160e01b031960e084901b16815261ffff9091166004820152602401608060405180830381865afa158015613037573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061305b9190614280565b935050509150806130d65760405163252c09d760e01b8152600060048201526001600160a01b038c169063252c09d790602401608060405180830381865afa1580156130ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130cf9190614280565b5091935050505b6130e663ffffffff831642613e98565b995089876000815181106130fc576130fc613e4d565b602002602001019063ffffffff16908163ffffffff16815250508a6001600160a01b031663883bdbfd60e01b8860405160240161313991906141de565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516131779190614228565b600060405180830381855afa9150503d80600081146131b2576040519150601f19603f3d011682016040523d82523d6000602084013e6131b7565b606091505b509096509450856131cb576131cb85613421565b505050505b6000818060200190518101906131e691906142d6565b9050600087826000815181106131fe576131fe613e4d565b60200260200101518360018151811061321957613219613e4d565b602002602001015161322b9190614382565b61323591906143af565b9050600061324282613468565b97508896505050505050505b9250929050565b6000808260000151131561326d57612d07838361378b565b61327783836137ed565b6118bd90614164565b60008060008360a00151600001511380156132b4575084606001516001600160401b031683606001516001600160401b0316105b156133305760006132c9878560600151613858565b6000818152602087905260409020600101546101e0880151919250613306916132f29190613c81565b60a086015151670de0b6b3a764000061387a565b60008281526020879052604090205461020088015191945061332c916132f29190613c81565b9150505b94509492505050565b6000806000806000856000015113156133875784608001518660a0015161016001516133659190613e98565b91508460a001518660a0015161018001516133809190613e98565b90506133cc565b8451600013156133c55784608001518660a0015161012001516133aa9190613e98565b91508460a001518660a0015161014001516133809190613e98565b505061324e565b60006133e1866000015184600160801b61387a565b905060006133f8876000015184600160801b61387a565b90508760c001511561340f57819450809550613416565b8195508094505b505050509250929050565b80511561343057805181602001fd5b60405162461bcd60e51b815260206004820152600d60248201526c3297b2b6b83a3c96b2b93937b960991b6044820152606401610ab8565b60008060008360020b1261347f578260020b613487565b8260020b6000035b9050620d89e88111156134ad576040516315e4079d60e11b815260040160405180910390fd5b6000816001166000036134c457600160801b6134d6565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561350a576ffff97272373d413259a46990580e213a0260801c5b6004821615613529576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615613548576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615613567576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615613586576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156135a5576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156135c4576ffe5dee046a99a2a811c461f1969c30530260801c5b6101008216156135e4576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615613604576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615613624576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615613644576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615613664576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615613684576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156136a4576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156136c4576f31be135f97d08fd981231505542fcfa60260801c5b620100008216156136e5576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615613705576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615613724576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615613741576b048a170391f7dc42444e8fa20260801c5b60008460020b131561376257806000198161375e5761375e613ed8565b0490505b640100000000810615613776576001613779565b60005b60ff16602082901c0192505050919050565b600080826000015112156137c65760405162461bcd60e51b8152602060048201526002602482015261533160f01b6044820152606401610ab8565b6118bd826020015184608001516137dd9190613e98565b8351670de0b6b3a7640000612a1a565b600080826000015113156138285760405162461bcd60e51b8152602060048201526002602482015261533160f01b6044820152606401610ab8565b6118bd82602001518460a0015161383f9190613e98565b835161384a90614164565b670de0b6b3a76400006138c3565b60006001600160401b03808316906138709085613ec1565b6118bd9190613f02565b60008360000361388c575060006117f3565b60008413156138a7576138a084848461229d565b90506117f3565b6138ba6138b385614164565b84846138e9565b6138a090614164565b60008260001904841183021582026138da57600080fd5b50910281810615159190040190565b60006138f684848461229d565b90506000828061390857613908613ed8565b84860911156117f357600019811061391f57600080fd5b6001019392505050565b604051806060016040528061396d6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b815260200160008152602001600081525090565b60408051610100810182526000808252602080830182905282840182905260608301829052835180850190945281845283015290608082019081526020016139f86040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8152602001613a1a604051806040016040528060008152602001600081525090565b8152602001613a3c604051806040016040528060008152602001600081525090565b905290565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715613a7957613a79613a41565b60405290565b604051606081016001600160401b0381118282101715613a7957613a79613a41565b60405160c081016001600160401b0381118282101715613a7957613a79613a41565b604051601f8201601f191681016001600160401b0381118282101715613aeb57613aeb613a41565b604052919050565b8015158114613b0157600080fd5b50565b8035613b0f81613af3565b919050565b600082601f830112613b2557600080fd5b81356001600160401b03811115613b3e57613b3e613a41565b613b51601f8201601f1916602001613ac3565b818152846020838601011115613b6657600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215613b9b57600080fd5b85359450602086013593506040860135925060608601356001600160401b038082168214613bc857600080fd5b90925060808701359080821115613bde57600080fd5b9087019060e0828a031215613bf257600080fd5b613bfa613a57565b8235815260208301356020820152604083013560408201526060830135606082015260808301356080820152613c3260a08401613b04565b60a082015260c083013582811115613c4957600080fd5b613c558b828601613b14565b60c0830152508093505050509295509295909350565b634e487b7160e01b600052601160045260246000fd5b8181036000831280158383131683831282161715611d1857611d18613c6b565b8082018281126000831280158216821582161715613cc157613cc1613c6b565b505092915050565b60005b83811015613ce4578181015183820152602001613ccc565b50506000910152565b60006101008851835260018060a01b0360208a015116602084015260ff60408a01511660408401528760608401528660808401526001600160401b03861660a08401528460c08401528060e084015283518184015250602083015161012083015260408301516101408301526060830151610160830152608083015161018083015260a083015115156101a083015260c083015160e06101c08401528051806101e0850152610200613da58282870160208601613cc9565b80601f19601f8401168601019350505050979650505050505050565b6000818303610100811215613dd557600080fd5b613ddd613a7f565b60c0821215613deb57600080fd5b613df3613aa1565b9150835182526020840151602083015260408401516040830152606084015160608301526080840151608083015260a084015160a083015281815260c0840151602082015260e08401516040820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b600060018201613e7557613e75613c6b565b5060010190565b602080825260029082015261563160f01b604082015260600190565b818103818111156118c0576118c0613c6b565b634e487b7160e01b600052603160045260246000fd5b80820281158282048414176118c0576118c0613c6b565b634e487b7160e01b600052601260045260246000fd5b600082613efd57613efd613ed8565b500490565b808201808211156118c0576118c0613c6b565b8581526101e08101613f5f6020830187805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a08301525050565b845160e0830152602085015161010083015260408501516101208301526060850151610140830152608085015161016083015260a08501516101808301526101a08201939093526101c001529392505050565b80516001600160a01b0381168114613b0f57600080fd5b805161ffff81168114613b0f57600080fd5b600080600080600080600060e0888a031215613ff657600080fd5b613fff88613fb2565b965060208801518060020b811461401557600080fd5b955061402360408901613fc9565b945061403160608901613fc9565b935061403f60808901613fc9565b925060a088015160ff8116811461405557600080fd5b60c089015190925061406681613af3565b8091505092959891949750929550565b60006020828403121561408857600080fd5b5051919050565b8051600681900b8114613b0f57600080fd5b805163ffffffff81168114613b0f57600080fd5b600080600080600080600080610100898b0312156140d257600080fd5b88516fffffffffffffffffffffffffffffffff811681146140f257600080fd5b80985050602089015180600f0b811461410a57600080fd5b60408a015160608b01519198509650945061412760808a0161408f565b935061413560a08a01613fb2565b925061414360c08a016140a1565b915060e089015161415381613af3565b809150509295985092959890939650565b6000600160ff1b820161417957614179613c6b565b5060000390565b80820260008212600160ff1b8414161561419c5761419c613c6b565b81810583148215176118c0576118c0613c6b565b6000826141bf576141bf613ed8565b600160ff1b8214600019841416156141d9576141d9613c6b565b500590565b6020808252825182820181905260009190848201906040850190845b8181101561421c57835163ffffffff16835292840192918401916001016141fa565b50909695505050505050565b6000825161423a818460208701613cc9565b9190910192915050565b61ffff818116838216019080821115611d1857611d18613c6b565b600061ffff8084168061427457614274613ed8565b92169190910692915050565b6000806000806080858703121561429657600080fd5b61429f856140a1565b93506142ad6020860161408f565b92506142bb60408601613fb2565b915060608501516142cb81613af3565b939692955090935050565b600060208083850312156142e957600080fd5b82516001600160401b038082111561430057600080fd5b818501915085601f83011261431457600080fd5b81518181111561432657614326613a41565b8060051b9150614337848301613ac3565b818152918301840191848101908884111561435157600080fd5b938501935b83851015614376576143678561408f565b82529385019390850190614356565b98975050505050505050565b600682810b9082900b03667fffffffffffff198112667fffffffffffff821317156118c0576118c0613c6b565b60008160060b8360060b806143c6576143c6613ed8565b667fffffffffffff198214600019821416156143e4576143e4613c6b565b9005939250505056fea2646970667358221220851271c44061d11d7a378d344067e40bfe3a1cc467663fdd4c09a3e38054d1cb64736f6c63430008130033'

type IsolatedVaultLogicConstructorParams =
  | [linkLibraryAddresses: IsolatedVaultLogicLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: IsolatedVaultLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === 'string' ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    '_isInterface' in xs[0]
  )
}

export class IsolatedVaultLogic__factory extends ContractFactory {
  constructor(...args: IsolatedVaultLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      const [linkLibraryAddresses, signer] = args
      super(
        _abi,
        IsolatedVaultLogic__factory.linkBytecode(linkLibraryAddresses),
        signer
      )
    }
  }

  static linkBytecode(
    linkLibraryAddresses: IsolatedVaultLogicLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$0b623280e191457df753735b6fc86de420\\$__', 'g'),
      linkLibraryAddresses[
        'src/libraries/logic/TradePerpLogic.sol:TradePerpLogic'
      ]
        .replace(/^0x/, '')
        .toLowerCase()
    )

    return linkedBytecode
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IsolatedVaultLogic> {
    return super.deploy(overrides || {}) as Promise<IsolatedVaultLogic>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): IsolatedVaultLogic {
    return super.attach(address) as IsolatedVaultLogic
  }
  connect(signer: Signer): IsolatedVaultLogic__factory {
    return super.connect(signer) as IsolatedVaultLogic__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): IsolatedVaultLogicInterface {
    return new utils.Interface(_abi) as IsolatedVaultLogicInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IsolatedVaultLogic {
    return new Contract(address, _abi, signerOrProvider) as IsolatedVaultLogic
  }
}

export interface IsolatedVaultLogicLibraryAddresses {
  ['src/libraries/logic/TradePerpLogic.sol:TradePerpLogic']: string
}
