(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{404:function(e,t,s){"use strict";s.r(t);var a=s(24),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"process-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-contract"}},[e._v("#")]),e._v(" Process Contract")]),e._v(" "),s("p",[e._v("A process is the building block around which governance is made in Vocdoni. Similarly to an Operating System, think of the Processes contract like a Kernel that receives syscalls to spawn a new governance process.")]),e._v(" "),s("p",[e._v("Governance processes span across three different components: the Ethereum smart contract, IPFS to ditribute "),s("RouterLink",{attrs:{to:"/architecture/data-schemes/process.html#process-metadata"}},[e._v("the vote metadata")]),e._v(" and the "),s("a",{attrs:{href:"/architecture/services/vochain"}},[e._v("Vochain")]),e._v(".")],1),e._v(" "),s("p",[e._v("Processes follow a declarative fashion. The expected behavior is declared on the smart contract for integrity and then the voting blockchain (called "),s("a",{attrs:{href:"/architecture/services/vochain"}},[e._v("Vochain")]),e._v(") reacts according to the current settings.")]),e._v(" "),s("p",[e._v("The instance of the Voting process contract is resolved from "),s("code",[e._v("processes.vocdoni.eth")]),e._v(" on the ENS registry.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#contract-structs"}},[e._v("Contract structs")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#process-id"}},[e._v("Process ID")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#methods"}},[e._v("Methods")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#getters"}},[e._v("Getters")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#flags"}},[e._v("Flags")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#process-status"}},[e._v("Status")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#transparent-upgrades"}},[e._v("Transparent upgrades")])])]),e._v(" "),s("h3",{attrs:{id:"contract-structs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract-structs"}},[e._v("#")]),e._v(" Contract structs")]),e._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// GLOBAL STRUCTS")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Process")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint8")]),e._v(" mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The selected process mode. See: https://docs.vocdoni.io/architecture/smart-contracts/process.html#flags")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint8")]),e._v(" envelopeType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// One of valid envelope types, see: https://docs.vocdoni.io/architecture/smart-contracts/process.html#flags")]),e._v("\n    CensusOrigin censusOrigin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// How the census proofs are computed (Off-chain vs EVM Merkle Tree)")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" entity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The address of the Entity (or contract) holding the process")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint32")]),e._v(" startBlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Vochain block number on which the voting process starts")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint32")]),e._v(" blockCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Amount of Vochain blocks during which the voting process should be active")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Content Hashed URI of the JSON meta data (See Data Origins)")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" censusRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Hex string with the Census Root. Depending on the census origin, it will be a Merkle Root or a public key.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" censusUri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Content Hashed URI of the exported Merkle Tree (not including the public keys)")]),e._v("\n\n    Status status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// One of 0 [ready], 1 [ended], 2 [canceled], 3 [paused], 4 [results]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint8")]),e._v(" questionIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The index of the currently active question (only assembly processes)")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// How many questions are available to vote")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// questionCount >= 1")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint8")]),e._v(" questionCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// How many choices can be made for each question.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 1 <= maxCount <= 100")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint8")]),e._v(" maxCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Determines the acceptable value range.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// N => valid votes will range from 0 to N (inclusive)")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint8")]),e._v(" maxValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint8")]),e._v(" maxVoteOverwrites"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// How many times a vote can be replaced (only the last one counts)")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Limits up to how much cost, the values of a vote can add up to (if applicable).")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 0 => No limit / Not applicable")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint16")]),e._v(" maxTotalCost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// Defines the exponent that will be used to compute the "cost" of the options voted and compare it against `maxTotalCost`.')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// totalCost = Σ (value[i] ** costExponent) <= maxTotalCost")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Exponent range:")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// - 0 => 0.0000")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// - 10000 => 1.0000")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// - 65535 => 6.5535")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint16")]),e._v(" costExponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint256")]),e._v(" evmBlockHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// EVM block number to use as a snapshot for the on-chain census")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" paramsSignature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// entity.sign({...}) // fields that the oracle uses to authenticate process creation")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h3",{attrs:{id:"process-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-id"}},[e._v("#")]),e._v(" Process ID")]),e._v(" "),s("p",[e._v("Processes are uniquely identified by their "),s("code",[e._v("processId")])]),e._v(" "),s("p",[e._v("It is the result of combining and hashing these three values:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entityAddress")])]),e._v(" "),s("li",[s("code",[e._v("processCountIndex")])]),e._v(" "),s("li",[s("code",[e._v("namespace")])])]),e._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getNextProcessId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" entityAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("view")]),e._v(" override "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// From 0 to N-1, the next index is N")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint256")]),e._v(" processCount "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getEntityProcessCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("entityAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getProcessId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("entityAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" processCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" namespaceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ethChainId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getProcessId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" entityAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint256")]),e._v(" processCountIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint32")]),e._v(" namespaceIdNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint32")]),e._v(" ethereumChainId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("pure")]),e._v(" override "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("encodePacked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("entityAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" processCountIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" namespaceIdNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" ethereumChainId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Where:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entityAddress")]),e._v(" is the Ethereum address that creates the process (or the token address)")]),e._v(" "),s("li",[s("code",[e._v("entityProcessCount")]),e._v(" is an incremental nonce per "),s("code",[e._v("entityAddress")])]),e._v(" "),s("li",[s("code",[e._v("ethereumChainId")]),e._v(" is the Ethereum chain Id where this contract has been deployed to")]),e._v(" "),s("li",[s("code",[e._v("namespaceId")]),e._v(" is a number that the process contract is assigned when it is deployed. See the "),s("a",{attrs:{href:"/architecture/smart-contracts/namespace"}},[e._v("Namespace contract")])])]),e._v(" "),s("h3",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("newProcess()")]),e._v(" "),s("ul",[s("li",[e._v("Sets the parameters of a new process to be run on the Vochain")]),e._v(" "),s("li",[e._v("If "),s("code",[e._v("processPrice")]),e._v(" is defined to prevent spam, the transaction must include a "),s("code",[e._v("value")]),e._v(" with at least such amount.")])])]),e._v(" "),s("li",[s("code",[e._v("setStatus()")]),e._v(" "),s("ul",[s("li",[e._v("With the appropriate flags, the creator can set the process to be "),s("code",[e._v("READY")]),e._v(", "),s("code",[e._v("ENDED")]),e._v(", "),s("code",[e._v("CANCELED")]),e._v(" or "),s("code",[e._v("PAUSED")]),e._v(".")]),e._v(" "),s("li",[e._v("See "),s("a",{attrs:{href:"#status"}},[e._v("process status")]),e._v(" below")])])]),e._v(" "),s("li",[s("code",[e._v("incrementQuestionIndex()")]),e._v(" "),s("ul",[s("li",[e._v("With the appropriate flags, the creator can define the question that can be voted on")])])]),e._v(" "),s("li",[s("code",[e._v("setCensus()")]),e._v(" "),s("ul",[s("li",[e._v("With the appropriate flags, the creator can update the census for long lasting polls")])])])]),e._v(" "),s("p",[e._v("For more details, you can see the "),s("a",{attrs:{href:"https://github.com/vocdoni/dvote-solidity/blob/main/contracts/processes.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("implementation here"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"getters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getters"}},[e._v("#")]),e._v(" Getters")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("get()")]),e._v(" "),s("ul",[s("li",[e._v("Retrieves all the parameters and flags defined for the given process")])])]),e._v(" "),s("li",[s("code",[e._v("getParamsSignature()")]),e._v(" "),s("ul",[s("li",[e._v("Retrieves the signature of the parameters above")])])]),e._v(" "),s("li",[s("code",[e._v("getCreationInstance()")]),e._v(" "),s("ul",[s("li",[e._v("Returns the address of the process contract where the given process is hosted")]),e._v(" "),s("li",[e._v("Useful to determine where an update needs to be sent to (see Transparent upgrades next)")])])])]),e._v(" "),s("h3",{attrs:{id:"flags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[e._v("#")]),e._v(" Flags")]),e._v(" "),s("p",[e._v("When a process is created, the entity needs to define what options apply to it. The combination of them produces:")]),e._v(" "),s("ul",[s("li",[e._v("The process "),s("code",[e._v("mode")]),e._v(" "),s("ul",[s("li",[e._v("It determines the external behavior of the process, when it starts, what can be updated, etc.")])])]),e._v(" "),s("li",[e._v("The "),s("code",[e._v("envelopeType")]),e._v(" "),s("ul",[s("li",[e._v("Determines the internal behavior of the votes sent by participants.")])])]),e._v(" "),s("li",[e._v("The "),s("code",[e._v("censusOrigin")]),e._v(" "),s("ul",[s("li",[e._v("Determines the way to compute and validate the voter's census proofs")])])])]),e._v(" "),s("p",[e._v("There is the case where the entity wants to start the process as soon as possible. Because of the nature\nof a blockchain it is not possible to know at which block a transaction will be mined/sealed and selecting\nan approximate block number in the future could not work if the block number selected is very close to the current\nblock number.\nFor these cases an entity can use a special block number "),s("code",[e._v("startBlock = 1")]),e._v(" if the process mode flag "),s("code",[e._v("AUTO_START")]),e._v(" is\nset to "),s("code",[e._v("true")]),e._v(". If a process is created with this flags the "),s("code",[e._v("startBlock")]),e._v(" of the process will be changed by the Oracles\nsending the transaction to the Vochain and will be set to the current Vochain block plus some delay to ensure the\nthat the "),s("code",[e._v("startBlock")]),e._v(" is never less than the current Vochain block.\nThe process will be ready to receive votes as soon as the transaction sended by the Oracles is mined.")]),e._v(" "),s("h4",{attrs:{id:"process-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-mode"}},[e._v("#")]),e._v(" Process Mode")]),e._v(" "),s("p",[e._v("The process mode affects both the Vochain, the contract itself and even the metadata. Its value is generated by combining the flags below.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("0b00011111\n     |||||\n     ||||`- autoStart\n     |||`-- interruptible\n     ||`--- dynamicCensus\n     |`---- encryptedMetadata\n     `----- preRegister\n")])])]),s("h5",{attrs:{id:"auto-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-start"}},[e._v("#")]),e._v(" AUTO_START")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("false")]),e._v(" ⇒ The process needs to be set to "),s("code",[e._v("READY")]),e._v(" by the creator before it can start. Processes start "),s("code",[e._v("PAUSED")]),e._v(" by default.")]),e._v(" "),s("li",[s("code",[e._v("true")]),e._v(" ⇒ Votes will be processes starting at block "),s("code",[e._v("startBlock")]),e._v(".")])]),e._v(" "),s("p",[s("code",[e._v("newProcess()")]),e._v(" enforces "),s("code",[e._v("startBlock")]),e._v(" > 0 accordingly")]),e._v(" "),s("h5",{attrs:{id:"interruptible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interruptible"}},[e._v("#")]),e._v(" INTERRUPTIBLE")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("false")]),e._v(" ⇒ The Vochain will "),s("code",[e._v("END")]),e._v(" the process when the block "),s("code",[e._v("startBlock + blockCount")]),e._v(" is reached")]),e._v(" "),s("li",[s("code",[e._v("true")]),e._v(" ⇒ In addition to the above, the admin can "),s("code",[e._v("END")]),e._v(", "),s("code",[e._v("PAUSE")]),e._v(" and "),s("code",[e._v("CANCEL")]),e._v(" it\n"),s("ul",[s("li",[e._v("Pausing a process prevents votes from being received and "),s("code",[e._v("blockCount")]),e._v(" stays unchanged by now")])])])]),e._v(" "),s("h5",{attrs:{id:"dynamic-census"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-census"}},[e._v("#")]),e._v(" DYNAMIC_CENSUS")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("false")]),e._v(" ⇒ The census is immutable")]),e._v(" "),s("li",[s("code",[e._v("true")]),e._v(" ⇒ The census can be edited during the life-cycle of the process. Allowing to add, subtract new keys, or change the census entirely, to a process that has already started.\n"),s("ul",[s("li",[e._v("Intended for low stake, long-term polls only")]),e._v(" "),s("li",[e._v("Warning: The admin would have the opportunity to cheat by enabling keys and then removing them later on")])])])]),e._v(" "),s("h5",{attrs:{id:"encrypted-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-metadata"}},[e._v("#")]),e._v(" ENCRYPTED_METADATA")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("false")]),e._v(" ⇒ The processMetadata should be in plain text")]),e._v(" "),s("li",[s("code",[e._v("true")]),e._v(" ⇒ The questions and options of a process should be encrypted, so an observer of the network won't be able to see what the process is about unless he/she has the key.")])]),e._v(" "),s("p",[e._v("It requires a prior process to share the encryption key with the users with the right to read the data. This will be likely be handled by the "),s("code",[e._v("User Registry")]),e._v(".")]),e._v(" "),s("h5",{attrs:{id:"pre-register"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-register"}},[e._v("#")]),e._v(" PRE_REGISTER")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("false")]),e._v(" ⇒ There is not registration phase, thus the census root used for validate votes is the "),s("code",[e._v("CensusRoot")]),e._v(" parameter defined by the "),s("code",[e._v("newProcessTx")]),e._v(" transaction.")]),e._v(" "),s("li",[s("code",[e._v("true")]),e._v(" ⇒ There is a registration phase, the census root parameter defined by "),s("code",[e._v("newProcessTx")]),e._v(" is used only during the registration (before the process "),s("code",[e._v("startBlock")]),e._v(" is reached). The voting "),s("code",[e._v("CensusRoot")]),e._v(" will be built inside the Vochain when registerVoterKeyTx are send by the elegible voters.")])]),e._v(" "),s("h4",{attrs:{id:"envelope-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#envelope-type"}},[e._v("#")]),e._v(" Envelope Type")]),e._v(" "),s("p",[e._v("The envelope type tells how the vote envelope is formatted and handled. Its value is generated by combining the flags below.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("0b00011111\n     |||||\n     ||||`- serial\n     |||`-- anonymous\n     ||`--- encryptedVotes\n     |`---- uniqueValues\n      `---- costFromWeight \n")])])]),s("h5",{attrs:{id:"serial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serial"}},[e._v("#")]),e._v(" SERIAL")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("false")]),e._v(" A single envelope is expected with all votes in it")]),e._v(" "),s("li",[s("code",[e._v("true")]),e._v(" An envelope needs to be sent for each question, as "),s("code",[e._v("questionIndex")]),e._v(" is incremented")])]),e._v(" "),s("h5",{attrs:{id:"anonymous"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anonymous"}},[e._v("#")]),e._v(" ANONYMOUS")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("false")]),e._v(" The voter identity (public key) can be known and therefore, the vote is pseudonymous. If an observer can correlate the voter public key with personal data, the voter could be identified.")]),e._v(" "),s("li",[s("code",[e._v("true")]),e._v(" The voter public key can't be known. Instead, the voter will submit a ZK-snark proof, ensuring that:\n"),s("ul",[s("li",[e._v("He/she belongs to the census of the process")]),e._v(" "),s("li",[e._v("He/she has not already voted on the process")])])])]),e._v(" "),s("h5",{attrs:{id:"encrypted-vote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-vote"}},[e._v("#")]),e._v(" ENCRYPTED_VOTE")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("false")]),e._v(" Votes are sent in plain text. Results can be seen in real time.")]),e._v(" "),s("li",[s("code",[e._v("true")]),e._v(" The vote payload will be encrypted. The results will become available once the encryption key is published at the end of the process by the miners.")])]),e._v(" "),s("h5",{attrs:{id:"unique-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unique-values"}},[e._v("#")]),e._v(" UNIQUE_VALUES")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("false")]),e._v(" The same vote value can be chosen more than once")]),e._v(" "),s("li",[s("code",[e._v("true")]),e._v(" Choices must be unique across a field")])]),e._v(" "),s("h5",{attrs:{id:"cost-from-weight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cost-from-weight"}},[e._v("#")]),e._v(" COST_FROM_WEIGHT")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("true")]),e._v(" On EVM-based census processes (weighted), the user's balance will be used as the "),s("code",[e._v("maxCost")]),e._v(". This allows splitting the voting power among several choices, even including quadratic voting scenarios.")]),e._v(" "),s("li",[s("code",[e._v("false")]),e._v(" The max cost will be taken from the value on the smart contract, being the same for everyone.")])]),e._v(" "),s("h4",{attrs:{id:"census-origin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#census-origin"}},[e._v("#")]),e._v(" Census Origin")]),e._v(" "),s("p",[e._v("The census origin is an unsigned integer holding a value defined by the following enumeration:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("OFF_CHAIN_TREE")]),e._v(" (1)\n"),s("ul",[s("li",[e._v("An exhaustive Merkle Tree contains the list of (hashed) keys allowed to vote and its root is stored on "),s("code",[e._v("censusRoot")]),e._v(".")])])]),e._v(" "),s("li",[s("code",[e._v("OFF_CHAIN_TREE_WEIGHTED")]),e._v(" (2)\n"),s("ul",[s("li",[e._v("An exhaustive Merkle Tree contains the list of (hashed) keys allowed to vote and their respective voting power. Its root is also stored on "),s("code",[e._v("censusRoot")]),e._v(".")])])]),e._v(" "),s("li",[s("code",[e._v("OFF_CHAIN_CA")]),e._v(" (3)\n"),s("ul",[s("li",[e._v("A certification authority issues signatures for all eligible voters on a per-process basis. The public key of the CA is stored on "),s("code",[e._v("censusRoot")]),e._v(".")])])]),e._v(" "),s("li",[s("code",[e._v("ERC20")]),e._v(" (11)\n"),s("ul",[s("li",[e._v("All the token holders of an ERC20 token (under the contract at the address of "),s("code",[e._v("entity")]),e._v(") are eligible to vote. "),s("code",[e._v("censusRoot")]),e._v(" contains the storage (Merkle) root of the token contract at the "),s("code",[e._v("evmBlockHeight")]),e._v(".")])])]),e._v(" "),s("li",[s("code",[e._v("ERC721")]),e._v(" (12)\n"),s("ul",[s("li",[e._v("Same as the ERC20 case, but for ERC721 contracts")])])]),e._v(" "),s("li",[s("code",[e._v("ERC1155")]),e._v(" (13)\n"),s("ul",[s("li",[e._v("Same as the ERC20 case, but for ERC1155 contracts")])])]),e._v(" "),s("li",[s("code",[e._v("ERC777")]),e._v(" (14)\n"),s("ul",[s("li",[e._v("Same as the ERC20 case, but for ERC777 contracts")])])]),e._v(" "),s("li",[s("code",[e._v("MINI_ME")]),e._v(" (15)\n"),s("ul",[s("li",[e._v("Same as the ERC20 case, but for MiniMe (ERC20) contracts")])])])]),e._v(" "),s("h3",{attrs:{id:"process-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-status"}},[e._v("#")]),e._v(" Process Status")]),e._v(" "),s("p",[e._v("The status of a process is a simple enum, defined as follows:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("READY")]),e._v(" (0)\n"),s("ul",[s("li",[e._v("The process is marked as ready. It is intended as a "),s("strong",[e._v("passive authorization")]),e._v(" to open the process")]),e._v(" "),s("li",[e._v("Vochain nodes will accept incoming votes if "),s("code",[e._v("AUTO_START")]),e._v(" is disabled")]),e._v(" "),s("li",[e._v("Otherwise, they will accept votes when the Vochain block number reaches "),s("code",[e._v("startBlock")])])])]),e._v(" "),s("li",[s("code",[e._v("ENDED")]),e._v(" (1)\n"),s("ul",[s("li",[e._v("Tells the Vochain to stop accepting votes and start computing the results (if not already available)")]),e._v(" "),s("li",[e._v("Only when "),s("code",[e._v("INTERRUPTIBLE")]),e._v(" is set")])])]),e._v(" "),s("li",[s("code",[e._v("CANCELED")]),e._v(" (2)\n"),s("ul",[s("li",[e._v("Tells the Vochain to stop accepting votes and drop the existing data. No results will be published.")]),e._v(" "),s("li",[e._v("Only when "),s("code",[e._v("INTERRUPTIBLE")]),e._v(" is set")])])]),e._v(" "),s("li",[s("code",[e._v("PAUSED")]),e._v(" (3)\n"),s("ul",[s("li",[e._v("Tells the Vochain to stop processing votes temporarily. The process might be resumed in the future.")]),e._v(" "),s("li",[e._v("Only when "),s("code",[e._v("INTERRUPTIBLE")]),e._v(" is set, or after creation if "),s("code",[e._v("AUTO_START")]),e._v(" is not set")])])]),e._v(" "),s("li",[s("code",[e._v("RESULTS")]),e._v(" (4)\n"),s("ul",[s("li",[e._v("Set by the Oracle from the Results contract as soon as the tally of a process has become available")])])])]),e._v(" "),s("h3",{attrs:{id:"transparent-upgrades"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transparent-upgrades"}},[e._v("#")]),e._v(" Transparent upgrades")]),e._v(" "),s("p",[e._v("Even if there are tools to deploy upgradeable smart contracts, we believe that newer versions of a contract should not be able to alter any of processes stored in the past. Existing data should remain intact, independently of future contract versions. In order to enforce transparency and full auditability:")]),e._v(" "),s("ul",[s("li",[e._v("Upcoming contract versions allow to keep historical data by forking and chaining new instances")]),e._v(" "),s("li",[e._v("A common interface is available between old and new instances, so that backwards compatibility is preserved")]),e._v(" "),s("li",[e._v("When a new instance is deployed, it can have a "),s("strong",[e._v("predecessor")]),e._v(", which can "),s("code",[e._v("activate")]),e._v(" the new version as its "),s("strong",[e._v("successor")])]),e._v(" "),s("li",[e._v("New processes can only be created on the last successor of the chain")]),e._v(" "),s("li",[e._v("From successors, clients can navigate back in time transparently and read processes stored on old instances")])]),e._v(" "),s("p",[e._v("This behavior is encapsulated "),s("a",{attrs:{href:"https://github.com/vocdoni/dvote-solidity/blob/main/contracts/base.sol#L22",target:"_blank",rel:"noopener noreferrer"}},[e._v("into the "),s("code",[e._v("Chained")]),s("OutboundLink")],1),e._v(" base contract.")]),e._v(" "),s("p",[e._v("However:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://solidity.readthedocs.io/en/v0.6.0/security-considerations.html#tx-origin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Due to security concerns"),s("OutboundLink")],1),e._v(", updates on a process coming from a successor are not acceptable")]),e._v(" "),s("li",[e._v("Updates on legacy processes need to be sent directly to the original contract instance")]),e._v(" "),s("li",[e._v("Use "),s("code",[e._v("getCreationInstance(processId)")]),e._v(" to retrieve the appropriate address")])])])}),[],!1,null,null,null);t.default=n.exports}}]);