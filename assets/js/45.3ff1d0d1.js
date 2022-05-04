(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{410:function(e,t,a){"use strict";a.r(t);var s=a(24),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"oracle-deployment-stage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-deployment-stage"}},[e._v("#")]),e._v(" Oracle Deployment (stage)")]),e._v(" "),a("p",[e._v("This section shows how to deploy a node with the oracle role running on Vocdoni network, relay Ethereum transactions and signal events within the own Vochain. This component also requires an Ethereum node, ideally running next to it, so we are going to deploy both components.")]),e._v(" "),a("p",[e._v("To get more information about the oracle component, read the "),a("a",{attrs:{href:"https://docs.vocdoni.io/#/architecture/components",target:"_blank",rel:"noopener noreferrer"}},[e._v("component docs"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("h3",{attrs:{id:"hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),a("ul",[a("li",[e._v("4 Cores")]),e._v(" "),a("li",[e._v("16GB RAM")]),e._v(" "),a("li",[e._v("80GB SSD disk space")])]),e._v(" "),a("p",[e._v("Note: 2 Cores or 40GB SSD might be enough, but it is not recommended.")]),e._v(" "),a("h3",{attrs:{id:"software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software")]),e._v(" "),a("ul",[a("li",[e._v("GNU/Linux based operating system")]),e._v(" "),a("li",[e._v("Git")]),e._v(" "),a("li",[e._v("Docker engine (version 19.03 or above) "),a("a",{attrs:{href:"https://docs.docker.com/engine/install/#server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installation"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Docker compose (version 1.24 or above) "),a("a",{attrs:{href:"https://docs.docker.com/compose/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installation"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[e._v("#")]),e._v(" Network")]),e._v(" "),a("p",[e._v("The list of exposed ports to the Internet is as follows:")]),e._v(" "),a("ul",[a("li",[e._v("9090")]),e._v(" "),a("li",[e._v("26656")]),e._v(" "),a("li",[e._v("26657")]),e._v(" "),a("li",[e._v("37671")])]),e._v(" "),a("p",[e._v("Note: All all ports are TCP.")]),e._v(" "),a("h2",{attrs:{id:"deploy-with-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-with-docker-compose"}},[e._v("#")]),e._v(" Deploy with docker compose")]),e._v(" "),a("p",[e._v("Clone the repository "),a("a",{attrs:{href:"https://github.com/vocdoni/vocdoni-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("vocdoni-node"),a("OutboundLink")],1),e._v(" in your current path, and checkout the "),a("code",[e._v("stage")]),e._v(" branch:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/vocdoni/vocdoni-node\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" vocdoni-node\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout stage\n")])])]),a("p",[e._v("This is the source path of the go-dvote. We are going to use files provided for a docker compose deploy:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" dockerfiles/dvotenode\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])])]),a("p",[e._v("As you can see here, there are many YAML files. The main one we are going to use is "),a("code",[e._v("docker-compose.yml")]),e._v(". This file uses the "),a("code",[e._v("env")]),e._v(" file to configure the node with environment variables. There are many parameters to configure, but we are going to show a selection of them just to get started with the stage deployment. To get a reference of all the variables, check the "),a("code",[e._v("env.example")]),e._v(" file.")]),e._v(" "),a("p",[e._v("We are also going to use "),a("code",[e._v("docker-compose.web3.yml")]),e._v(" and "),a("code",[e._v("docker-compose.watchtower.yml")]),e._v(", to run the side containers.")]),e._v(" "),a("p",[e._v("Now, create and edit the "),a("code",[e._v("env")]),e._v(" file and add the content as follows:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_DATADIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/app/run\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_MODE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("oracle\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_ETHCONFIG_SIGNINGKEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_W3CONFIG_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("False\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_VOCHAINCONFIG_KEYKEEPERINDEX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_W3CONFIG_W3EXTERNAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/app/eth/jsonrpc.ipc\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_METRICS_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("True\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_METRICS_REFRESHINTERVAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_VOCHAIN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("stage\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DVOTE_ETHCONFIG_CHAINTYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("xdaistage\n")])])]),a("p",[a("strong",[e._v("Warning:")]),e._v(" The "),a("code",[e._v("DVOTE_VOCHAINCONFIG_KEYKEEPERINDEX")]),e._v(" value is specific for every oracle, so you will need to coordinate with the rest and make sure you have the correct index configured.")]),e._v(" "),a("p",[e._v("Now, we are going to generate a random number of 32bits and we will use as a private key, and to have a fixed public address derived from it. Run the following command (only once) to add the key to the env file.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"s/DVOTE_ETHCONFIG_SIGNINGKEY=/&'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("openssl rand -hex "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),e._v("\n")])])]),a("p",[e._v("Now we have to pull the docker images:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose -f docker-compose.watchtower.yml -f docker-compose.web3.yml -f docker-compose.yml pull\n")])])]),a("p",[e._v("After this step, we are ready to deploy the oracle node with:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose -f docker-compose.watchtower.yml -f docker-compose.web3.yml -f docker-compose.yml up -d\n")])])]),a("p",[e._v("After this step, the oracle node will start and the Ethereum node will start to synchronize. It can take many hours to complete the process.")]),e._v(" "),a("h2",{attrs:{id:"obtain-oracle-s-public-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtain-oracle-s-public-key"}},[e._v("#")]),e._v(" Obtain oracle's public key")]),e._v(" "),a("p",[e._v("To obtain the oracle Ethereum public key run the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker-compose  logs | grep "Ethereum address"\n')])])]),a("p",[e._v("The output should be similar to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dvotenode_1  | 2021-02-08T20:25:05Z\tINFO\tchain/chain.go:206\tmy Ethereum address 3a6197fc630591c718b625b0388ebe018c653672\n")])])]),a("p",[e._v("Copy and paste the last part, this public key will be needed to add it to the list of trusted oracles.")]),e._v(" "),a("p",[a("strong",[e._v("Warning:")]),e._v(" Do not share the private key with other oracles of the network, and save a backup as it could be needed in case of data loss.")])])}),[],!1,null,null,null);t.default=o.exports}}]);