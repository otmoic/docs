---
sidebar_position: 1
---

# How Obridge works as a DEX

Because Obridge is a decentralized and automated RFQ network, using it as a DEX is straightforward.

In short, you can exchange any tokens on any blockchains that Obridge supports.

This page is divided into two sections. The first section is a high-level overview of Obridge's exchange process, and the second section explains what Obridge does behind the scenes to facilitate exchanges.

## The complete exchange process 

As an example, let's follow a user's journey on Obridge to exchange ETH (the native token of Ethereum) for MATIC (the native token of Polygon). This entire experience takes only a few minutes.

![](https://i.imgur.com/Syx1hjM.png)


**First**, a user requests an exchange on Obridge's simple Dapp UI.

Let's say our user, Alice, wants to exchange O.5 ETH for MATIC and confirms her request via the Dapp UI.

**Second**, Obridge broadcasts the user's request to all LP nodes.

Obridge notifies LP nodes that an offer has been made to exchange 0.5 ETH for MATIC.

**Third**, each LP node runs an automated agent (i.e., a customized software assistant) to listen for exchange requests. If a request satisfies the requirements specified by an agent's LP for a node, the agent will respond with a quote. (Note: LPs' can customize their trading strategy based on their priorities and to account for the volatility of the crypto market.)

Automated agents of four LP nodes found that Alice's request aligns with their trading strategy, so they respond to this request with a quote (essentially, their proposed exchange rate). 

**Fourth**, the user selects the best quote or assigns Obridge to automatically do so on his or her behalf according to pre-defined rules.

After considering each offer, Alice chooses the one she prefers through the Dapp UI.

**Fifth**, Obridge facilities an atomic swap between the user and the LP node to securely complete the exchange. 

Alice clicks through the Dapp UI to finalize the exchange. 

That's it! With Onbridge's innovation, all of the above steps will be finished in minutes. 

Want a better idea of how this works? Read on.


## Enhanced Atomic swap in Obridge

In this section, we will explore Obridge's innovative design, which overcomes significant problems with existing DEXs.

To date, countless hacks have plagued DEXs. While smart contracts have helped with some security vulnerabilities, they can only assist in exchanges performed on a single blockchain. Thus, security problems posed by cross-chain exchanges remain largely unaddressed.

With Obridge, we use an improved version of atomic swap to make exchanges secure. 

Atomic swap is the current gold standard for cross-chain transactions. It relies on off-chain actors to validate transactions in a trustless manner and record the results in on-chain smart contracts. Atomic swaps are secure, decentralized, and trustless. 

However, the atomic swap has several weaknesses that have prevented its mass adoption. The following reasons explain why:

**First**, creating interoperable Hashed Timelock Contracts (HTLCs) across different blockchains, programming languages, and VM runtimes is difficult.

**Second**, the multi-step atomic swap process, which involves on-chain smart contract calls and cryptographic proofs, is too complex for most users. Consequently, a user who does not understand the technical details is likely to make mistakes and fall prey to scams.

**Third**, an atomic swap requires two willing parties (each of whom wants the other's specific tokens) to be online at the same time. Because particular cross-chain exchanges happen relatively infrequently, this is unlikely to occur.

In summary, it has historically been impractical to scale the use of atomic swaps due to challenges posed by interoperability, a complex user experience, and the low probability of quickly pairing compatible partners for an exchange.

Other DEXs have attempted to address these problems by creating large liquidity pools where tokens are always available for exchange. This approach attracts hackers, however, and must be managed via centralized control.

Obridge's critical innovation, on the other hand, solves these problems without relying on a liquidity pool. Instead, Obridge uses a network of LP nodes, each of which runs an automated software agent that is authorized to perform atomic swaps on behalf of its LP in real time. These "always-on" software agents can exchange with users at any time, providing instant liquidity. Moreover, LP nodes only need to call capital at the time of an exchange instead of leaving their assets in a liquidity pool. Thus, the capital efficiency of LPs is significantly improved.

Additionally, software agents automate most of the atomic swap algorithm, simplifying users' experience and reducing error. As a result, Obridge's UX is on par with pool-based cross-chain bridges while offering significantly better safety, withdrawal speeds, gas costs, capital efficiency, and censorship resistance. See the User Guide Section for more details.

