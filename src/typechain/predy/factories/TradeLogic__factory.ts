/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { TradeLogic, TradeLogicInterface } from '../TradeLogic'

const _abi = [
  {
    inputs: [],
    name: 'T',
    type: 'error'
  }
]

const _bytecode =
  '0x61412e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80630fb73a311461003a575b600080fd5b81801561004657600080fd5b5061005a610055366004613bd1565b6100b4565b60408051825180518252602080820151818401528184015183850152606080830151908401526080808301519084015260a0918201519183019190915283015160c082015291015160e08201526101000160405180910390f35b6100bc613b37565b6100ca8787878787876100d5565b979650505050505050565b6100dd613b37565b61050986604051806101200160405290816000820154815260200160018201548152602001600282016040518060800160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820154815260200160048201548152602001600582015481525050815260200160088201604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382015481525050815250508152602001600e82016040518060800160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820154815260200160048201548152602001600582015481525050815260200160088201604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382015481525050815250508152602001601a8201604051806060016040529081600082015481526020016001820160009054906101000a900460020b60020b60020b81526020016001820160039054906101000a900460020b60020b60020b815250508152602001601c8201604051806102200160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016000820160149054906101000a900460020b60020b60020b81526020016000820160179054906101000a900460020b60020b60020b81526020016001820160009054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a8201548152602001600b8201604051806040016040529081600082015481526020016001820154815250508152602001600d8201604051806040016040529081600082015481526020016001820154815250508152602001600f82015481526020016010820154815250508152602001602d820160009054906101000a900460ff16151515158152602001602d820160019054906101000a900460ff16151515158152602001602e8201548152505087601c016107b0565b60008061051788888861085c565b80925081935050506000806106ae8a601c018b602d0160009054906101000a900460ff168a604051806101000160405290816000820160009054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016000820160089054906101000a900460020b60020b60020b815260200160008201600b9054906101000a900460020b60020b60020b815260200160008201600e9054906101000a90046001600160401b03166001600160401b03166001600160401b0316815260200160018201604051806040016040529081600082015481526020016001820154815250508152602001600382016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820154815260200160048201548152602001600582015481525050815260200160098201604051806040016040529081600082015481526020016001820154815250508152602001600b8201604051806040016040529081600082015481526020016001820154815250508152505089610882565b601c8c015460408051606081019091529294509092506000916106fb916001600160a01b031690806106df8c613c92565b815260208101879052604001889052602d8e015460ff16610c9f565b90506107438b8a60405180604001604052808c8152602001856000015181525060405180604001604052808c815260200187876020015161073c9190613cae565b9052610f12565b8087526080015160408d015161075a918d916111da565b865160800152855160a0015160408d0151610776918d916111da565b865160a00152604081015161079b908c906107919087613cae565b8e604001516111da565b602087015250939a9950505050505050505050565b6004810154156108585760048101546060830151604001516107d590600b840161128e565b6107e790670de0b6b3a7640000613cd6565b6107f19190613d1c565b81600f0160008282546108049190613cae565b90915550506004810154604080840151015161082390600d840161128e565b61083590670de0b6b3a7640000613cd6565b61083f9190613d1c565b8160100160008282546108529190613cae565b90915550505b5050565b60008061086a8585856112e3565b90925090506108798584611817565b50935093915050565b6000808260000361089857506000905080610c96565b604080516102208101825287546001600160a01b0381168252600160a01b8104600290810b602080850191909152600160b81b909204810b8385015260018a01546001600160401b031660608401528901546080830152600389015460a0830152600489015460c0830152600589015460e08301526006890154610100830152600789015461012083015260088901546101408301526009890154610160830152600a89015461018083015282518084018452600b8a01548152600c8a0154818301526101a08301528251808401909352600d8901548352600e890154908301526101c0810191909152600f8701546101e082015260108701546102008201526109a1906118ee565b6109d75760405162461bcd60e51b8152602060048201526002602482015261281960f11b60448201526064015b60405180910390fd5b6000806000851315610b1157604080516102208101825289546001600160a01b0381168252600160a01b8104600290810b602080850191909152600160b81b909204810b8385015260018c01546001600160401b031660608401528b0154608083015260038b015460a083015260048b015460c083015260058b015460e083015260068b015461010083015260078b015461012083015260088b015461014083015260098b0154610160830152600a8b015461018083015282518084018452600b8c01548152600c8c0154818301526101a08301528251808401909352600d8b01548352600e8b0154908301526101c0810191909152600f8901546101e08201526010890154610200820152610aed9086611969565b60038a015460028b01549294509092509003610b0c57610b0c88611a61565b610c32565b6000851215610c3257604080516102208101825289546001600160a01b0381168252600160a01b8104600290810b602080850191909152600160b81b909204810b8385015260018c01546001600160401b031660608401528b0154608083015260038b015460a083015260048b015460c083015260058b015460e083015260068b015461010083015260078b015461012083015260088b015461014083015260098b0154610160830152600a8b015461018083015282518084018452600b8c01548152600c8c0154818301526101a08301528251808401909352600d8b01548352600e8b0154908301526101c0810191909152600f8901546101e08201526010890154610200820152610c2c90610c2787613c92565b611aa7565b90925090505b8615610c4357819250809350610c4a565b8092508193505b87546000908190610c74908990600160a01b8104600290810b91600160b81b9004900b8a8d611c4c565b9092509050610c838287613d4a565b9550610c8f8186613d4a565b9450505050505b94509492505050565b610cc360405180606001604052806000815260200160008152602001600081525090565b60408301516020840151845160009291610cdc91613cae565b610ce69190613cae565b8451909150158015610cfa57506020840151155b8015610d0857506040840151155b15610d3357604051806060016040528060008152602001600081526020016000815250915050610f0b565b80600003610ddd576000856001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015610d7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9f9190613d93565b50505050505090506000610dbc82670de0b6b3a764000087611d8e565b9050610dd386670de0b6b3a7640000836000611e20565b9350505050610f0b565b600080821315610def57508215610df2565b50825b600080876001600160a01b031663128acb0830858787610e3057610e2b600173fffd8963efd1fc6a506488495d951d5263988d26613e27565b610e40565b610e406401000276a36001613e47565b60405160e086901b6001600160e01b03191681526001600160a01b03948516600482015292151560248401526044830191909152909116606482015260a06084820152600060a482015260c40160408051808303816000875af1158015610eab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecf9190613e67565b9150915060008615610eeb57610ee483613c92565b9050610ef7565b610ef482613c92565b90505b610f0388868384611e20565b955050505050505b9392505050565b610f4b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6001840154600285015484516020860151610f6893929190611ea3565b608080840191909152908252604080516101008101825286546001600160401b038082168352600160401b8204600290810b602080860191909152600160581b8404820b85870152600160701b9093049091166060808501919091528451808601865260018b01548152828b01548185015284870152845160c0808201875260038c0154825260048c01548286015260058c01548288015260068c01549282019290925260078b01549681019690965260088a015460a0878101919091528401959095528351808501855260098a01548152600a8a015481840152948301949094528251808401909352600b8801548352600c8801549083015260e0810191909152601c8701548451602d89015461109794600160a01b8404810b93600160b81b9004900b919060ff16611c4c565b6060830152604082015260038401546004850154835160208501516110be93929190611ea3565b60a0830152602082015282516001850180546000906110de908490613cae565b909155505080516002850180546000906110f9908490613cae565b90915550506020810151600485018054600090611117908490613cae565b90915550506060810151600585018054600090611135908490613cae565b90915550506040810151600685018054600090611153908490613cae565b90915550508454825161116d9190601c8801908790611f75565b61119884600901826040015185600001516111889190613cae565b875460108901929190600061238b565b6111d284600b018260600151836020015184600001516111b89190613cae565b6111c29190613cae565b875460048901929190600161238b565b949350505050565b6000806111f1846111ec85600a613f6f565b612684565b9050808413156111d257601e8501541561128557601e850154600090600160801b61121c8488613d4a565b6112269190613f7e565b6112309190613f95565b602d87015490915060ff1615611262578086601c0160090160008282546112579190613fa9565b9091555061127f9050565b8086601c01600a0160008282546112799190613fa9565b90915550505b506111d2565b83915050610f0b565b6040805180820190915281548152600182015460208201526000906112b49084906126d4565b90506000826000015413156112d257608083015160018301556112dd565b60a083015160018301555b92915050565b6040805160c08101825260108501548152601185015460208201526012850154918101919091526013840154606082015260148401546080820152601584015460a0820152600090819061133a906009850161128e565b6040805160c08101825260048801548152600588015460208201526006880154918101919091526007870154606082015260088701546080820152600987015460a082015290925061138f90600b850161128e565b90506000806113a7876000015488601c0188886126ff565b915091506000806117da89604051806101200160405290816000820154815260200160018201548152602001600282016040518060800160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820154815260200160048201548152602001600582015481525050815260200160088201604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382015481525050815250508152602001600e82016040518060800160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820154815260200160048201548152602001600582015481525050815260200160088201604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382015481525050815250508152602001601a8201604051806060016040529081600082015481526020016001820160009054906101000a900460020b60020b60020b81526020016001820160039054906101000a900460020b60020b60020b815250508152602001601c8201604051806102200160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016000820160149054906101000a900460020b60020b60020b81526020016000820160179054906101000a900460020b60020b60020b81526020016001820160009054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a8201548152602001600b8201604051806040016040529081600082015481526020016001820154815250508152602001600d8201604051806040016040529081600082015481526020016001820154815250508152602001600f82015481526020016010820154815250508152602001602d820160009054906101000a900460ff16151515158152602001602d820160019054906101000a900460ff16151515158152602001602e8201548152505088600301612a6b565b90925090506117e98382613cae565b6117f39086613cae565b94506117ff8483613cae565b6118099087613cae565b955050505050935093915050565b602d8201546000908190819061183690601c870190869060ff16612b19565b91509150816000148015611848575080155b15611858576000925050506112dd565b8184600301600301600082825461186f9190613cae565b909155505060058401805482919060009061188b908490613cae565b909155506118a190506027860161118884613c92565b6118b1602986016111c283613c92565b84546118ca90601087019060098701908590600061238b565b84546118e3906004870190600b8701908490600161238b565b506001949350505050565b60008082600001516001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015611933573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119579190613d93565b5050505050915050610f0b8382612ca8565b60008060008085600001516001600160a01b0316633c8a7d8d30886020015189604001516119968a612cd2565b6040516001600160e01b031960e087901b1681526001600160a01b039094166004850152600292830b6024850152910b60448301526001600160801b0316606482015260a06084820152600060a482015260c40160408051808303816000875af1158015611a08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a2c9190613e67565b91509150611a3982612ce8565b611a4290613c92565b9350611a4d81612ce8565b611a5690613c92565b925050509250929050565b80546000908190611a92906001600160a01b03811690600160a01b8104600290810b91600160b81b9004900b612d52565b60058501919091556006909301929092555050565b600080828460a001518560800151611abf9190613fbc565b1015611af25760405162461bcd60e51b8152602060048201526002602482015261503160f01b60448201526064016109ce565b60008085600001516001600160a01b031663a34123a787602001518860400151611b1b89612cd2565b6040516001600160e01b031960e086901b168152600293840b60048201529190920b60248201526001600160801b03909116604482015260640160408051808303816000875af1158015611b73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b979190613e67565b875160208901516040808b015190516309e3d67b60e31b8152306004820152600292830b6024820152910b60448201526001600160801b036064820181905260848201529294509092506001600160a01b031690634f1eb3d89060a40160408051808303816000875af1158015611c12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c369190613fe6565b5050611c4182612ce8565b9350611a5681612ce8565b6000806000806000868a60a0015160000151611c689190613cd6565b12611c7557859150611cbf565b611c7e86613033565b60a08a015151611c8d90613033565b10611c99575084611cbf565b60a089015151611caa908790613cae565b60a08a015151909250611cbc90613c92565b90505b8115611d1f57611cdb87611cd284613033565b60008512613046565b9350611cf388611cea84613033565b60008512613063565b92506000821215611d1557611d0784613c92565b9350611d1283613c92565b92505b8415611d1f579192915b8015611d825760a08901518051604090910151611d3c9083613cd6565b611d469190613d1c565b611d509084613cae565b60a08a0151805160609091015191945090611d6b9083613cd6565b611d759190613d1c565b611d7f9085613cae565b93505b50509550959350505050565b60008115611dd05760006060611dad856001600160a01b038816613f7e565b901c90506060611dc66001600160a01b03871683613f7e565b901c915050610f0b565b60006001600160a01b038516611dea600160601b86613f7e565b611df49190613f95565b90506001600160a01b038516611e0e600160601b83613f7e565b611e189190613f95565b915050610f0b565b611e4460405180606001604052806000815260200160008152602001600081525090565b84518490611e529085613cd6565b611e5c9190613d1c565b815260208501518490611e6f9085613cd6565b611e799190613d1c565b602082018190528151611e8c9084613d4a565b611e969190613d4a565b6040820152949350505050565b60008083600003611eb957506000905080610c96565b6000611ec58588613cd6565b12611ed257829150610c96565b611edb84613033565b611ee487613033565b10611f1757600086611ef68688613cd6565b611f009190613d1c565b9250829050611f0f8185613d4a565b915050610c96565b6000611f2286613c92565b9050600085611f31818a613cae565b611f3b9087613cd6565b611f459190613d1c565b9050611f518183613cae565b935080611f5e8387613d4a565b611f689190613d4a565b9250505094509492505050565b6000806000838560030160000154611f8d9190613cd6565b12611f9a57829150611fe1565b611fa383613033565b6003850154611fb190613033565b10611fbd575081611fe1565b6003840154611fcd908490613cae565b6003850154909250611fde90613c92565b90505b8460030154856002015403611ff957611ff985611a61565b600081131561202157808560030160008282546120169190613fbc565b9091555061217c9050565b600081121561217c5761203381613c92565b604080516102208101825287546001600160a01b0381168252600160a01b8104600290810b602080850191909152600160b81b909204810b8385015260018a01546001600160401b031660608401528901546080830152600389015460a0830152600489015460c0830152600589015460e08301526006890154610100830152600789015461012083015260088901546101408301526009890154610160830152600a89015461018083015282518084018452600b8a01548152600c8a0154818301526101a08301528251808401909352600d8901548352600e890154908301526101c0810191909152600f8701546101e0820152601087015461020082015261213c9061307b565b101561215a5760405162461bcd60e51b81526004016109ce90614019565b61216381613c92565b8560020160008282546121769190613fbc565b90915550505b60008213156121b757818560020160008282546121999190613fa9565b909155505060098501546007850155600a8501546008850155612326565b6000821215612326576121c982613c92565b604080516102208101825287546001600160a01b0381168252600160a01b8104600290810b602080850191909152600160b81b909204810b8385015260018a01546001600160401b031660608401528901546080830152600389015460a0830152600489015460c0830152600589015460e08301526006890154610100830152600789015461012083015260088901546101408301526009890154610160830152600a89015461018083015282518084018452600b8a01548152600c8a0154818301526101a08301528251808401909352600d8901548352600e890154908301526101c0810191909152600f8701546101e082015260108701546102008201526122d29061307b565b10156122f05760405162461bcd60e51b81526004016109ce90614019565b6122f982613c92565b85600301600082825461230c9190613fa9565b909155505060078086015490850155600880860154908501555b8284600301600001600082825461233d9190613cae565b909155505060408051878152602081018490529081018290527fd6b5c308a56f1f33cb6d586d7f76c5e6fbf851f46dc71f0910aec5855b2c885c9060600160405180910390a1505050505050565b8354600012156123d65784600401548460010154146123d15760405162461bcd60e51b8152602060048201526002602482015261299960f11b60448201526064016109ce565b61241c565b83546000131561241c57846005015484600101541461241c5760405162461bcd60e51b8152602060048201526002602482015261299960f11b60448201526064016109ce565b60008060008587600001546124319190613cd6565b1261243e5784915061247c565b61244785613033565b865461245290613033565b1061245e57508361247c565b855461246b908690613cae565b865490925061247990613c92565b90505b60008113156124a457808760020160008282546124999190613fbc565b909155506125419050565b6000811215612541576124b681613c92565b6040805160c0810182528954815260018a0154602082015260028a0154918101919091526003890154606082015260048901546080820152600589015460a082015261250190613091565b101561251f5760405162461bcd60e51b81526004016109ce90614019565b61252881613c92565b87600101600082825461253b9190613fbc565b90915550505b6000821315612572578187600101600082825461255e9190613fa9565b909155505060048701546001870155612619565b60008212156126195761258482613c92565b6040805160c0810182528954815260018a0154602082015260028a0154918101919091526003890154606082015260048901546080820152600589015460a08201526125cf90613091565b10156125ed5760405162461bcd60e51b81526004016109ce90614019565b6125f682613c92565b8760020160008282546126099190613fa9565b9091555050600587015460018701555b8486600001600082825461262d9190613cae565b9091555050604080518581528415156020820152908101839052606081018290527ffdb6fb8e49892b73d8187dbef8b7b09543994120ac9d5bf868f3d6baba1dba0d9060800160405180910390a150505050505050565b6000808313156126ac578161269b846001856130b1565b6126a59190613f7e565b90506112dd565b816126c16126b985613c92565b6001856130cf565b6126cb9190613f7e565b6126a590613c92565b600080826000015113156126ec576126a583836130f5565b6126f68383613157565b610f0b90613c92565b600080600083600301600001541380156127335750600185015483546001600160401b03918216600160701b909104909116105b15612a3857612a128686604051806102200160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016000820160149054906101000a900460020b60020b60020b81526020016000820160179054906101000a900460020b60020b60020b81526020016001820160009054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a8201548152602001600b8201604051806040016040529081600082015481526020016001820154815250508152602001600d8201604051806040016040529081600082015481526020016001820154815250508152602001600f82015481526020016010820154815250508686604051806101000160405290816000820160009054906101000a90046001600160401b03166001600160401b03166001600160401b031681526020016000820160089054906101000a900460020b60020b60020b815260200160008201600b9054906101000a900460020b60020b60020b815260200160008201600e9054906101000a90046001600160401b03166001600160401b03166001600160401b0316815260200160018201604051806040016040529081600082015481526020016001820154815250508152602001600382016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820154815260200160048201548152602001600582015481525050815260200160098201604051806040016040529081600082015481526020016001820154815250508152602001600b820160405180604001604052908160008201548152602001600182015481525050815250506131c2565b600385015460048801805493955091935091600090612a32908490613fbc565b90915550505b60019490940154825467ffffffffffffffff60701b19166001600160401b03909116600160701b02179091559391925050565b600080612abf84846040518060c0016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820154815260200160058201548152505061327a565b8454919350915060001215612aed5760a0840151610160810151600485015561018001516005840155612b12565b825460001315612b125760a08401516101208101516004850155610140015160058401555b9250929050565b6000808360030160000154600003612b8a5750508254825462ffffff600160a01b9092048216600160401b0262ffffff60401b198216811785558554600160b81b9004909216600160581b0262ffffff60581b1990921665ffffffffffff60401b1990911617178255600080612ca0565b845484546003860154600092612bc992600160b81b909104600290810b92600160581b909204900b90612bbc90613033565b6003890154600013613362565b865486546003880154929350600092612c0992600160a01b9004600290810b92600160401b9004900b90612bfc90613033565b60038a0154600013613389565b8754875462ffffff600160a01b9092048216600160401b0262ffffff60401b19821681178a558a54600160b81b9004909216600160581b0262ffffff60581b1990921665ffffffffffff60401b1990911617178755600387015490915060001315612c8557612c7782613c92565b9150612c8281613c92565b90505b8415612c9657809350819250612c9d565b8193508092505b50505b935093915050565b60008160020b836020015160020b13158015610f0b575050604090910151600290810b91900b1290565b6000600160801b8210612ce457600080fd5b5090565b60006001600160ff1b03821115612ce45760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016109ce565b6000806000856001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015612d95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612db99190613d93565b50505050509150506000866001600160a01b031663f30583996040518163ffffffff1660e01b8152600401602060405180830381865afa158015612e01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e259190614035565b90506000876001600160a01b031663461413196040518163ffffffff1660e01b8152600401602060405180830381865afa158015612e67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e8b9190614035565b60405163f30dba9360e01b8152600289900b60048201529091506000908190819081906001600160a01b038d169063f30dba939060240161010060405180830381865afa158015612ee0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f04919061404e565b505050509350935050508a60020b8760020b12612f2657819350809250612f3f565b612f308287613fbc565b9350612f3c8186613fbc565b92505b505060405163f30dba9360e01b8152600289900b60048201526000908190819081906001600160a01b038f169063f30dba939060240161010060405180830381865afa158015612f93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fb7919061404e565b505050509350935050508b60020b8960020b1215612fda57819350809250612ff3565b612fe48289613fbc565b9350612ff08188613fbc565b92505b508290506130018588613fbc565b61300b9190613fbc565b9850806130188487613fbc565b6130229190613fbc565b975050505050505050935093915050565b600080821215612ce4576112dd82613c92565b60006111d261305e613057866133a7565b85856136ca565b612ce8565b60006111d261305e613074866133a7565b8585613709565b60008160a0015182608001516112dd9190613fbc565b600061309e826040015190565b6130a783613741565b6112dd9190613fbc565b60008260001904841183021582026130c857600080fd5b5091020490565b60008260001904841183021582026130e657600080fd5b50910281810615159190040190565b600080826000015112156131305760405162461bcd60e51b8152602060048201526002602482015261533160f01b60448201526064016109ce565b610f0b826020015184608001516131479190613fbc565b8351670de0b6b3a76400006130b1565b600080826000015113156131925760405162461bcd60e51b8152602060048201526002602482015261533160f01b60448201526064016109ce565b610f0b82602001518460a001516131a99190613fbc565b83516131b490613c92565b670de0b6b3a76400006130cf565b60008060008360a00151600001511380156131f6575084606001516001600160401b031683606001516001600160401b0316105b15610c9657600061320b87856060015161376d565b6000818152602087905260409020600101546101e0880151919250613248916132349190613d4a565b60a086015151670de0b6b3a764000061378f565b60008281526020879052604090205461020088015191945061326e916132349190613d4a565b91505094509492505050565b6000806000806000856000015113156132c85784608001518660a0015161016001516132a69190613fbc565b91508460a001518660a0015161018001516132c19190613fbc565b905061330d565b8451600013156133065784608001518660a0015161012001516132eb9190613fbc565b91508460a001518660a0015161014001516132c19190613fbc565b5050612b12565b6000613322866000015184600160801b61378f565b90506000613339876000015184600160801b61378f565b90508760c001511561335057819450809550613357565b8195508094505b505050509250929050565b6000613380613370866133a7565b613379866133a7565b85856137d1565b95945050505050565b6000613380613397866133a7565b6133a0866133a7565b858561390d565b60008060008360020b126133be578260020b6133c6565b8260020b6000035b9050620d89e88111156133ec576040516315e4079d60e11b815260040160405180910390fd5b60008160011660000361340357600160801b613415565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615613449576ffff97272373d413259a46990580e213a0260801c5b6004821615613468576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615613487576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156134a6576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156134c5576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156134e4576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615613503576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615613523576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615613543576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615613563576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615613583576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156135a3576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156135c3576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156135e3576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615613603576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615613624576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615613644576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615613663576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615613680576b048a170391f7dc42444e8fa20260801c5b60008460020b13156136a157806000198161369d5761369d613d06565b0490505b6401000000008106156136b55760016136b8565b60005b60ff16602082901c0192505050919050565b600081156136f1576136ea83600160601b866001600160a01b0316613a45565b9050610f0b565b6136ea83600160601b866001600160a01b0316613a85565b60008115613729576136ea83856001600160a01b0316600160601b613a45565b6136ea83856001600160a01b0316600160601b613a85565b6000816020015161376383600001518460600151670de0b6b3a76400006130b1565b6112dd9190613fa9565b60006001600160401b03808316906137859085613f7e565b610f0b9190613fa9565b6000836000036137a157506000610f0b565b60008413156137b5576136ea848484613a85565b6137c86137c185613c92565b8484613a45565b6136ea90613c92565b60008215806137f15750836001600160a01b0316856001600160a01b0316145b156137fe575060006111d2565b6001600160a01b03808516908616118015613817579394935b600080826138255784613828565b84155b905085811561388e57600061384b82600160601b8c6001600160a01b0316613a45565b9050600061386783600160601b8c6001600160a01b0316613a85565b905061387281612ce8565b61387b83612ce8565b6138859190613d4a565b945050506138e7565b60006138a882600160601b8c6001600160a01b0316613a85565b905060006138c483600160601b8c6001600160a01b0316613a45565b90506138cf81612ce8565b6138d883612ce8565b6138e29190613d4a565b945050505b8315613901576138f683613c92565b9450505050506111d2565b829450505050506111d2565b600082158061392d5750836001600160a01b0316856001600160a01b0316145b1561393a575060006111d2565b6001600160a01b03808516908616108015613953579394935b600080826139615784613964565b84155b905080156139c9576000613986878a6001600160a01b0316600160601b613a45565b905060006139a2888a6001600160a01b0316600160601b613a85565b90506139ad81612ce8565b6139b683612ce8565b6139c09190613d4a565b93505050613a22565b60006139e3878a6001600160a01b0316600160601b613a85565b905060006139ff888a6001600160a01b0316600160601b613a45565b9050613a0a81612ce8565b613a1383612ce8565b613a1d9190613d4a565b935050505b8215613a3b57613a3182613c92565b93505050506111d2565b5091506111d29050565b6000613a52848484613a85565b905060008280613a6457613a64613d06565b8486091115610f0b576000198110613a7b57600080fd5b6001019392505050565b6000808060001985870985870292508281108382030391505080600003613abe5760008411613ab357600080fd5b508290049050610f0b565b808411613aca57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6040518060600160405280613b7b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b815260200160008152602001600081525090565b6001600160a01b0381168114613ba457600080fd5b50565b8035613bb281613b8f565b919050565b60ff81168114613ba457600080fd5b8035613bb281613bb7565b600080600080600080868803610100811215613bec57600080fd5b6060811215613bfa57600080fd5b50604051606081018181106001600160401b0382111715613c2b57634e487b7160e01b600052604160045260246000fd5b60405287358152613c3e60208901613ba7565b6020820152613c4f60408901613bc6565b6040820152986060880135985060808801359760a0810135975060c0810135965060e00135945092505050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8201613ca757613ca7613c7c565b5060000390565b8082018281126000831280158216821582161715613cce57613cce613c7c565b505092915050565b80820260008212600160ff1b84141615613cf257613cf2613c7c565b81810583148215176112dd576112dd613c7c565b634e487b7160e01b600052601260045260246000fd5b600082613d2b57613d2b613d06565b600160ff1b821460001984141615613d4557613d45613c7c565b500590565b8181036000831280158383131683831282161715613d6a57613d6a613c7c565b5092915050565b805161ffff81168114613bb257600080fd5b80518015158114613bb257600080fd5b600080600080600080600060e0888a031215613dae57600080fd5b8751613db981613b8f565b8097505060208801518060020b8114613dd157600080fd5b9550613ddf60408901613d71565b9450613ded60608901613d71565b9350613dfb60808901613d71565b925060a0880151613e0b81613bb7565b9150613e1960c08901613d83565b905092959891949750929550565b6001600160a01b03828116828216039080821115613d6a57613d6a613c7c565b6001600160a01b03818116838216019080821115613d6a57613d6a613c7c565b60008060408385031215613e7a57600080fd5b505080516020909101519092909150565b600181815b80851115613ec6578160001904821115613eac57613eac613c7c565b80851615613eb957918102915b93841c9390800290613e90565b509250929050565b600082613edd575060016112dd565b81613eea575060006112dd565b8160018114613f005760028114613f0a57613f26565b60019150506112dd565b60ff841115613f1b57613f1b613c7c565b50506001821b6112dd565b5060208310610133831016604e8410600b8410161715613f49575081810a6112dd565b613f538383613e8b565b8060001904821115613f6757613f67613c7c565b029392505050565b6000610f0b60ff841683613ece565b80820281158282048414176112dd576112dd613c7c565b600082613fa457613fa4613d06565b500490565b808201808211156112dd576112dd613c7c565b818103818111156112dd576112dd613c7c565b80516001600160801b0381168114613bb257600080fd5b60008060408385031215613ff957600080fd5b61400283613fcf565b915061401060208401613fcf565b90509250929050565b602080825260029082015261053360f41b604082015260600190565b60006020828403121561404757600080fd5b5051919050565b600080600080600080600080610100898b03121561406b57600080fd5b61407489613fcf565b9750602089015180600f0b811461408a57600080fd5b80975050604089015195506060890151945060808901518060060b81146140b057600080fd5b60a08a01519094506140c181613b8f565b60c08a015190935063ffffffff811681146140db57600080fd5b91506140e960e08a01613d83565b9050929598509295989093965056fea2646970667358221220e1504e2cf23957630a1e8b640cd86c5bdc6cb2480a6dc9c55f8c60955e4ed34064736f6c63430008130033'

export class TradeLogic__factory extends ContractFactory {
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
  ): Promise<TradeLogic> {
    return super.deploy(overrides || {}) as Promise<TradeLogic>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): TradeLogic {
    return super.attach(address) as TradeLogic
  }
  connect(signer: Signer): TradeLogic__factory {
    return super.connect(signer) as TradeLogic__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): TradeLogicInterface {
    return new utils.Interface(_abi) as TradeLogicInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TradeLogic {
    return new Contract(address, _abi, signerOrProvider) as TradeLogic
  }
}
