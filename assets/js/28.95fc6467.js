(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{394:function(t,e,s){"use strict";s.r(e);var a=s(24),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"json-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-api"}},[t._v("#")]),t._v(" JSON API")]),t._v(" "),s("p",[t._v("Most of the components described on the docs expose or use a JSON API to communicate with other components. This page defines the common standard which is the foundation to all APIs interactions.")]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[t._v("API request calls must contain the following fields:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(" Arbitrary value given by the client, so that it can match incoming responses with the originating request. Ideally a salted hash of the current timestamp to prevent correlation analysis).")]),t._v(" "),s("li",[s("code",[t._v("request.method")]),t._v(" String defining the method which is being called")])]),t._v(" "),s("p",[t._v("Any field other than "),s("code",[t._v("id")]),t._v(" and "),s("code",[t._v("request.method")]),t._v(" is accepted if the specification of the API method allows it.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"req-12345678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"addFile"')]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional fields, depending on the method's expected parameters")]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[t._v("The response API calls take two shapes depending on the result of the request.")]),t._v(" "),s("h3",{attrs:{id:"success"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success"}},[t._v("#")]),t._v(" Success")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("id")]),t._v(" The value given in the request "),s("code",[t._v("id")]),t._v(" field")]),t._v(" "),s("li",[s("code",[t._v("response")]),t._v(" A JSON object with the response fields provided by the method")]),t._v(" "),s("li",[s("code",[t._v("response.request")]),t._v(" The value given in the request "),s("code",[t._v("id")]),t._v(" field")])]),t._v(" "),s("p",[s("strong",[t._v("Why is the Request ID present twice?")])]),t._v(" "),s("ul",[s("li",[t._v("When the response field becomes encrypted, the Request ID would become unavailable")]),t._v(" "),s("li",[t._v("This would prevent clients from matching incoming responses")]),t._v(" "),s("li",[t._v("However, keeping the request ID out of the "),s("code",[t._v("request")]),t._v(" payload (signed) would leave request ID's out of the signature")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"req-12345678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ID of the originating request")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"req-12345678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request ID here as well")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ok"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Whetever there has been an error or not")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// any additional values returned by the method")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[t._v("#")]),t._v(" Error")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("response.ok")]),t._v(" A bool indicating if the request failed")]),t._v(" "),s("li",[s("code",[t._v("response.request")]),t._v(" The value given in the request "),s("code",[t._v("id")]),t._v(" field")]),t._v(" "),s("li",[s("code",[t._v("response.message")]),t._v(" Explanation of what went wrong")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"req-12345678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ID of the originating request")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ok"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false if error found")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"req-12345678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request ID here as well")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unknown method"')]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// What went wrong")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),s("p",[t._v("Some methods may require authentication. To authenticate API calls, ECDSA signatures are used.")]),t._v(" "),s("p",[t._v("Since not all JS libraries/wallets (Metamask, Web3, Ethers.js, etc) will be able to sign raw messages, Gateways are expected to accept Ethereum signatures. An Ethereum signature is created by prepending "),s("code",[t._v("\\x19Ethereum Signed Message:\\n<len>")]),t._v(" to the actual payload to hash and sign.")]),t._v(" "),s("p",[t._v("In the future, it's likely that Gateways have to accept both Ethereum and raw ECDSA signatures.")]),t._v(" "),s("h3",{attrs:{id:"authenticated-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authenticated-requests"}},[t._v("#")]),t._v(" Authenticated Requests")]),t._v(" "),s("p",[t._v("The verifier (component running the API server) needs a whitelist of accounts entitled to perform a certain set of methods. An Ethereum address is a truncated hash of the actual public key.")]),t._v(" "),s("p",[t._v("Any method enforcing authentication needs to provide two additional fields:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("request.timestamp")]),t._v("  The current UNIX timestamp, in seconds. Used to avoid replay attacks and to add randomless. Clients should only accept the response if the given and the current timestamp differ by 10 seconds, at most.")]),t._v(" "),s("li",[s("code",[t._v("signature")]),t._v("  The ECDSA signature of the message, which proves that the sender is the owner of the whitelisted address")])]),t._v(" "),s("p",[t._v("The signature is a keccak256 hash of payload's "),s("code",[t._v("request")]),t._v(" field stringified.")]),t._v(" "),s("p",[t._v("In the following example, the payload is:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"req-12345678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"method-name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// any additional values required by the method")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1556110671")]),t._v("   <<<\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signature"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x1234..."')]),t._v("   <<<\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Then:")]),t._v(" "),s("p",[s("code",[t._v("payload.signature")]),t._v(" = "),s("code",[t._v("ECDSA.SIGN")]),t._v(" ( "),s("code",[t._v("keccak256")]),t._v(" ( "),s("code",[t._v("stringify")]),t._v(" ( "),s("code",[t._v("payload.request")]),t._v(" ) ) )")]),t._v(" "),s("p",[t._v("The verifier will verify the signature, extract the ECDSA public key from the signature, convert it to Ethereum like address and finally compare it with the list of allowed addresses.")]),t._v(" "),s("p",[s("strong",[t._v("Important")]),t._v(": To avoid signature mismatches, the stringified data of the "),s("code",[t._v("request")]),t._v(" has to be computed always the JSON fields "),s("strong",[t._v("sorted alphabetically")]),t._v(".")]),t._v(" "),s("p",[t._v("So, given a "),s("code",[t._v("request")]),t._v(" field like:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Smith"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alias"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Its signature should be computed from:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alias"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fullName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Smith"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"authenticated-responses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authenticated-responses"}},[t._v("#")]),t._v(" Authenticated Responses")]),t._v(" "),s("p",[t._v("Response messages can also be signed. Keeping the examples above:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"req-12345678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// any additional values returned by the method")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1556110671")]),t._v("   <<<\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signature"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x1234..."')]),t._v("   <<<\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Where:")]),t._v(" "),s("p",[s("code",[t._v("payload.signature")]),t._v(" = "),s("code",[t._v("ECDSA.SIGN")]),t._v(" ( "),s("code",[t._v("sha256")]),t._v(" ( "),s("code",[t._v("stringify")]),t._v(" ( "),s("code",[t._v("payload.response")]),t._v(" ) ) )")])])}),[],!1,null,null,null);e.default=n.exports}}]);