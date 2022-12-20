"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2890],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,g=d["".concat(l,".").concat(u)]||d[u]||h[u]||s;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:1},o="Obridge works as a DEX",i={unversionedId:"how-obridge-works/dex",id:"how-obridge-works/dex",title:"Obridge works as a DEX",description:"Because Obridge is a decentralized and automated RFQ network, using it as a DEX is straightforward.",source:"@site/docs/how-obridge-works/dex.md",sourceDirName:"how-obridge-works",slug:"/how-obridge-works/dex",permalink:"/docs/how-obridge-works/dex",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-obridge-works/dex.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How Obridge Works",permalink:"/docs/category/how-obridge-works"},next:{title:"Obridge works as a Bridge",permalink:"/docs/how-obridge-works/bridge"}},l={},c=[{value:"The complete exchange process",id:"the-complete-exchange-process",level:2},{value:"Enhanced Atomic swap in Obridge",id:"enhanced-atomic-swap-in-obridge",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"obridge-works-as-a-dex"},"Obridge works as a DEX"),(0,n.kt)("p",null,"Because Obridge is a decentralized and automated RFQ network, using it as a DEX is straightforward."),(0,n.kt)("p",null,"In short, you can exchange any tokens on any blockchains that Obridge supports."),(0,n.kt)("p",null,"This page is divided into two sections. The first section is a high-level overview of Obridge's exchange process, and the second section explains what Obridge does behind the scenes to facilitate exchanges."),(0,n.kt)("h2",{id:"the-complete-exchange-process"},"The complete exchange process"),(0,n.kt)("p",null,"As an example, let's follow a user's journey on Obridge to exchange ETH (the native token of Ethereum) for MATIC (the native token of Polygon). This entire experience takes only a few minutes."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/Syx1hjM.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"First"),", a user requests an exchange on Obridge's simple Dapp UI."),(0,n.kt)("p",null,"Let's say our user, Alice, wants to exchange O.5 ETH for MATIC and confirms her request via the Dapp UI."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Second"),", Obridge broadcasts the user's request to all LP nodes."),(0,n.kt)("p",null,"Obridge notifies LP nodes that an offer has been made to exchange 0.5 ETH for MATIC."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Third"),", each LP node runs an automated agent (i.e., a customized software assistant) to listen for exchange requests. If a request satisfies the requirements specified by an agent's LP for a node, the agent will respond with a quote. (Note: LPs' can customize their trading strategy based on their priorities and to account for the volatility of the crypto market.)"),(0,n.kt)("p",null,"Automated agents of four LP nodes found that Alice's request aligns with their trading strategy, so they respond to this request with a quote (essentially, their proposed exchange rate). "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fourth"),", the user selects the best quote or assigns Obridge to automatically do so on his or her behalf according to pre-defined rules."),(0,n.kt)("p",null,"After considering each offer, Alice chooses the one she prefers through the Dapp UI."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fifth"),", Obridge facilities an atomic swap between the user and the LP node to securely complete the exchange. "),(0,n.kt)("p",null,"Alice clicks through the Dapp UI to finalize the exchange. "),(0,n.kt)("p",null,"That's it! With Onbridge's innovation, all of the above steps will be finished in minutes. "),(0,n.kt)("p",null,"Want a better idea of how this works? Read on."),(0,n.kt)("h2",{id:"enhanced-atomic-swap-in-obridge"},"Enhanced Atomic swap in Obridge"),(0,n.kt)("p",null,"In this section, we will explore Obridge's innovative design, which overcomes significant problems with existing DEXs."),(0,n.kt)("p",null,"To date, countless hacks have plagued DEXs. While smart contracts have helped with some security vulnerabilities, they can only assist in exchanges performed on a single blockchain. Thus, security problems posed by cross-chain exchanges remain largely unaddressed."),(0,n.kt)("p",null,"With Obridge, we use an improved version of atomic swap to make exchanges secure. "),(0,n.kt)("p",null,"Atomic swap is the current gold standard for cross-chain transactions. It relies on off-chain actors to validate transactions in a trustless manner and record the results in on-chain smart contracts. Atomic swaps are secure, decentralized, and trustless. "),(0,n.kt)("p",null,"However, the atomic swap has several weaknesses that have prevented its mass adoption. The following reasons explain why:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"First"),", creating interoperable Hashed Timelock Contracts (HTLCs) across different blockchains, programming languages, and VM runtimes is difficult."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Second"),", the multi-step atomic swap process, which involves on-chain smart contract calls and cryptographic proofs, is too complex for most users. Consequently, a user who does not understand the technical details is likely to make mistakes and fall prey to scams."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Third"),", an atomic swap requires two willing parties (each of whom wants the other's specific tokens) to be online at the same time. Because particular cross-chain exchanges happen relatively infrequently, this is unlikely to occur."),(0,n.kt)("p",null,"In summary, it has historically been impractical to scale the use of atomic swaps due to challenges posed by interoperability, a complex user experience, and the low probability of quickly pairing compatible partners for an exchange."),(0,n.kt)("p",null,"Other DEXs have attempted to address these problems by creating large liquidity pools where tokens are always available for exchange. This approach attracts hackers, however, and must be managed via centralized control."),(0,n.kt)("p",null,'Obridge\'s critical innovation, on the other hand, solves these problems without relying on a liquidity pool. Instead, Obridge uses a network of LP nodes, each of which runs an automated software agent that is authorized to perform atomic swaps on behalf of its LP in real time. These "always-on" software agents can exchange with users at any time, providing instant liquidity. Moreover, LP nodes only need to call capital at the time of an exchange instead of leaving their assets in a liquidity pool. Thus, the capital efficiency of LPs is significantly improved.'),(0,n.kt)("p",null,"Additionally, software agents automate most of the atomic swap algorithm, simplifying users' experience and reducing error. As a result, Obridge's UX is on par with pool-based cross-chain bridges while offering significantly better safety, withdrawal speeds, gas costs, capital efficiency, and censorship resistance. See the User Guide Section for more details."))}d.isMDXComponent=!0}}]);