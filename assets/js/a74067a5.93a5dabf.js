"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[146],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),f=n,m=h["".concat(l,".").concat(f)]||h[f]||p[f]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:4},o="Low gas fees",s={unversionedId:"hidden/why-obridge/gas-fee",id:"hidden/why-obridge/gas-fee",title:"Low gas fees",description:"Because of the simple and efficient implementation of the atomic swap smart contract across several blockchains, the gas fee on Obridge is much lower.",source:"@site/docs/hidden/why-obridge/gas-fee.md",sourceDirName:"hidden/why-obridge",slug:"/hidden/why-obridge/gas-fee",permalink:"/docs/hidden/why-obridge/gas-fee",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hidden/why-obridge/gas-fee.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Capital Efficiency",permalink:"/docs/hidden/why-obridge/capital"},next:{title:"Much faster withdraws",permalink:"/docs/hidden/why-obridge/fast"}},l={},c=[{value:"The Gas fee comparison among different cross-chain bridges",id:"the-gas-fee-comparison-among-different-cross-chain-bridges",level:2},{value:"The ultimate metric",id:"the-ultimate-metric",level:2},{value:"The mechanism introduction",id:"the-mechanism-introduction",level:2},{value:"Pool-based bridge",id:"pool-based-bridge",level:3},{value:"Atomic swap-based bridge",id:"atomic-swap-based-bridge",level:3},{value:"The data",id:"the-data",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"low-gas-fees"},"Low gas fees"),(0,n.kt)("p",null,"Because of the simple and efficient implementation of the atomic swap smart contract across several blockchains, the gas fee on Obridge is much lower."),(0,n.kt)("p",null,"Please refer to this gas fee analysis article for more details."),(0,n.kt)("h2",{id:"the-gas-fee-comparison-among-different-cross-chain-bridges"},"The Gas fee comparison among different cross-chain bridges"),(0,n.kt)("p",null,"In this article, we compared Obridge, Hop, Connext, and Cbridge V2's gas fees for moving USDT from Ethereum to BSC or Optimistic."),(0,n.kt)("h2",{id:"the-ultimate-metric"},"The ultimate metric"),(0,n.kt)("p",null,"Before we start, let's clarify the metric this article used."),(0,n.kt)("p",null,"When you request a cross-chain transaction with a cross-chain product, it will generate lots of fees."),(0,n.kt)("p",null,"First, Approving smart contracts to access your assets need to pay the gas fee when you first use a cross-chain product. We won't cover this Approve fee because it only charges the first time."),(0,n.kt)("p",null,"Besides the first-time Approve fee, the fee for cross-chain transactions usually includes the gas fee generated by the two blockchains we want to exchange, the protocol fee, and exchange rate movements. We only take the gas fee as the primary metric."),(0,n.kt)("p",null,"The gas fee is calculated using Gas Limit * Gas Price per Unit. Considering the gas price constantly fluctuates, we take ",(0,n.kt)("strong",{parentName:"p"},"the gas limit as the only metric")," in this gas analysis. "),(0,n.kt)("h2",{id:"the-mechanism-introduction"},"The mechanism introduction"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://medium.com/amber-group/bridges-designs-trade-offs-and-opportunities-2196b8754e70"},"Exchanging tokens mechanism")," from Pool-based bridge is much different from an atomic-swap based bridge like Obridge."),(0,n.kt)("h3",{id:"pool-based-bridge"},"Pool-based bridge"),(0,n.kt)("p",null,"Let's say Alice wants to exchange 100 USDT from Ethereum to BSC, which is our gas benchmark does. The bridge operates all the asset pools."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Alice deposited 100 USDT to a USDT pool on Ethereum. This would generate a gas fee for transferring USDTs to a smart contract."),(0,n.kt)("li",{parentName:"ol"},"After the bridge operator confirms the transaction, it will transfer the corresponding amount of USDT from a USDT pool on BSC to Alice. This will generate a gas fee for transferring USDTs from a smart contract to Alice's address.")),(0,n.kt)("h3",{id:"atomic-swap-based-bridge"},"Atomic swap-based bridge"),(0,n.kt)("p",null,"The same transaction happens on an atomic swap-based bridge like Obridge. Alice wants to move 100 USDT from  Ethereum to BSC. There are no pools on Obridge. With the centralized third party to operate, the exchange process may be complicated, but it is easy to understand."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"After Alice inputs the amount in the UI, it will create a Hashed Timelock Contract (HTLC) on Ethereum."),(0,n.kt)("li",{parentName:"ol"},"Alice's 100 USDT will be deposited to the HTLC on Ethereum. This will generate a gas fee for transferring USDTs to an Ethereum smart contract."),(0,n.kt)("li",{parentName:"ol"},"Bob sees this request and decides to make a deal with Alice. So Bob will create a Hashed Timelock Contract (HTLC) on BSC."),(0,n.kt)("li",{parentName:"ol"},"Bob's 100 UDST will also be deposited to the HTLC on BSC. This will generate a gas fee for transferring USDTs to a BSC smart contract."),(0,n.kt)("li",{parentName:"ol"},"Now, if Alice is satisfied with Bob's offer, she could withdraw Bob's USDT on BSC to her own address. This will generate a gas fee for transferring USDT on BSC to an account."),(0,n.kt)("li",{parentName:"ol"},"After that, Bob could go to Alice's HELC on Ethereum to withdraw USDT at his address. This will generate a gas fee for transferring USDT on Ethereum to an account.")),(0,n.kt)("p",null,"For a better understanding of the gas mechanism, I simplified the whole process and didn't cover the details of how atomic swaps secure Alice and Bob's asset without a third party. See XYZ for more information. "),(0,n.kt)("h2",{id:"the-data"},"The data"),(0,n.kt)("p",null,"Now it's time to dive into the data after understanding the mechanism."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Ethereum"),(0,n.kt)("th",{parentName:"tr",align:null},"BSC/Optimistic"),(0,n.kt)("th",{parentName:"tr",align:null},"A total of Gas Limit"),(0,n.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Obridge"),(0,n.kt)("td",{parentName:"tr",align:null},"1. Alice deposits USDT in an HTLC on Ethereum: ",(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/tx/0x2df1a68136bf2cb2eaca9260a47d864e99dc270fdbbad6c83c62f9adb55a93d9"},"92,756")," 2. Bob withdraws USDT in the HTLC on Ethereum: ",(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/tx/0x39cedddfd39baebfd8a65324619e4b709eec364b971df66c21bacf44e2c3efd8"},"66,391")),(0,n.kt)("td",{parentName:"tr",align:null},"1. Bob deposits USDT in an HTLC on BSC: ",(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/tx/0xa6cc359b2e24f71af9bc2239d9cbc5c20474eb53f83699421e4547ac6d2e7302"},"83,640")," 2.Alice withdraws USDT the HTLC on BSC: ",(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/tx/0xf0d5ea03e22421bf61e54aa5d2fa5a0d37534d889333e26003728b98820595fd"},"56,961")),(0,n.kt)("td",{parentName:"tr",align:null},"299,748"),(0,n.kt)("td",{parentName:"tr",align:null},"Using BSC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Connext"),(0,n.kt)("td",{parentName:"tr",align:null},"1. Prepare on Ethereum: ",(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/tx/0x7f0f5978468c9c8b2b4f751e59fd277b990fb1b538d7d32cdd558bfc78e37162"},"140,617")," 2.Fulfill on Ethereum: ",(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/tx/0x7a8260e8cb5a21cc321bcca73311bb6ab983ed01960a692828088fc567bc229d"},"151,493")),(0,n.kt)("td",{parentName:"tr",align:null},"1. Prepare on BSC: ",(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/tx/0xcc17d611d016a8da01b5332f5e8b288bf4891f47eb358107df605e1c68dca0a9"},"162,491")," 2. Fulfillon on BSC: ",(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/tx/0xcaf0e671127c641a28121fffd8fd590a7891e5e7acc42b531ce6e14b470dee22"},"140,017")),(0,n.kt)("td",{parentName:"tr",align:null},"594,618"),(0,n.kt)("td",{parentName:"tr",align:null},"Connext adds Routers for instant liquidity. So the gas fee is different from the normal pool-based bridge.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hop"),(0,n.kt)("td",{parentName:"tr",align:null},"Alice deposits USDT in the USDT Pool on Ethereum: ",(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/tx/0x6089712292d45ccff99ac1cc92bb5614d8fa8086a6c9b2d79b6f33ca3e7af1f9"},"182,175")),(0,n.kt)("td",{parentName:"tr",align:null},"Alice withdraws USDT in the USDT pool on Optimistic: ",(0,n.kt)("a",{parentName:"td",href:"https://optimistic.etherscan.io//tx/0xdbdff21947e642d9253f696294cd85dc1ea4d22edb9fa4edcea1019c513a8110"},"281,308 + 6,084 (L1 GAS)")),(0,n.kt)("td",{parentName:"tr",align:null},"469,567"),(0,n.kt)("td",{parentName:"tr",align:null},"Using Optimistic, because Connext doesn't support BSC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cbridge V2"),(0,n.kt)("td",{parentName:"tr",align:null},"Alice deposits USDT in the USDT Pool on Ethereum: ",(0,n.kt)("a",{parentName:"td",href:"https://etherscan.io/tx/0xa3ade7dfcaa582fa741e675e80f2cadf6797f96091411221026b29c2cd7ad035"},"97,399")),(0,n.kt)("td",{parentName:"tr",align:null},"Alice withdraws USDT in the USDT pool on BSC: ",(0,n.kt)("a",{parentName:"td",href:"https://bscscan.com/tx/0x01a137c3e1c569f339c7c44d5f1f63eb243afc6f39063ec5f8198684423d25a1"},"141,682")),(0,n.kt)("td",{parentName:"tr",align:null},"239,081"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"From the above table, we can conclude that atomic swap-based Obridge has apparent advantages over Connext and Hop and slight disadvantages over the centralized Cbridge V2."))}h.isMDXComponent=!0}}]);