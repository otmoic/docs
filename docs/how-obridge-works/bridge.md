---
sidebar_position: 2
---

# Obridge works as a Bridge

As an automated trading network, Obridge could be a DEX. There is no doubt that Obridge could act as a bridge, a particular case of DEX.  

You could exchange the same tokens on any blockchains that Obridge supported.

This article will cover two parts. One is the introduction of the complete exchange process. The other one is what Obridge did behind the process.

## The complete exchanging process 

Let's follow a user's journey to exchange USDT-ERC20 (USDT from Ethereum) for MATICUSDT (USDT from Polygon) in minutes through Obridge!

![](https://i.imgur.com/ASUPZl4.png)



The specifical steps will be the following:

**First**, Users come to the Dapp UI to request an exchange.

Let's say Bob wants to exchange 10,000 ERC20-USDT for MATICUSDT and confirm his request via the Dapp UI.

**Second**, Obridge broadcasts the user's request to all LP nodes.

Obridge notices all LP Nodes that there is an offer for exchanging 10,000 ERC20-USDT for MATICUSDT.

**Third**, Each LP node runs an automated agent to listen for requests. They will respond with a quote If they are interested in this request. The automated agent bot can perform this step. LP nodes also could customize their own trading strategy for the agent considering the crypto market is changing in minutes. 

Automated agents of four LP nodes found Bob's request meets their trading strategy. So they respond to this request with a quote like their exchange rate. 

**Fourth**, The user selects the best quote. Or users could also assign Obridge to choose the best quote automatically by setting up rules.

After browsing all the offers, he chooses the most efficient one through the Dapp UI.

**Fifth**, Obridge facilities the user and the LP node to securely complete the exchange using atomic swap. 

Bob just needs to click through the Dapp UI to interact with the automated agent on the LP node he chose. 

That's all. With Onbridge's innovation, all the steps will be finished in minutes. Want to know why? Let's go to the next part.


## Enhanced Atomic swap in Obridge

In this part, we will explore Obridge's innovation on Atomic swap.

Pool-based cross-chain transaction is insecure. The news that millions of money are hacked in Bridges constantly happens. The current gold standard for cross-chain transactions is Atomic Swap. That is to rely on off-chain actors to validate transactions in a trustless manner and record the results in on-chain smart contracts. See an example here.

The advantage of the atomic swap approach is that it is entirely decentralized and trustless. However, we didn't see the atomic swap approach going to the mainstream. The following reasons may explain why.

First, creating interoperable HTLCs across blockchains, programming languages, and VM runtimes is difficult.

Second,  The multi-step process involving on-chain smart contract calls and cryptographic proofs is too complex for most users. It is challenging to grasp those concepts. And worse, if you do not understand the technical details, it is straightforward to make mistakes and fall into scams. 

The UI and UX of HTLC-based atomic swap are very challenging. Unfortunately, that has severely limited its usefulness.

Third, atomic swap requires both parties of the exchange (i.e., users who exchange tokens and users who could provide the token that needs to be exchanged) to be online at the same time. Since cross-chain exchanges do not happen often, it is nearly impossible to match parties with exact opposite exchange needs simultaneously.


The critical innovation in Obridge is creating a network of LP nodes instead of a shared pool. Obridge requires LPs in its network to run automated software agents that are authorized to perform atomic swaps on behalf of the LPs in real-time. The "always-on" software agents can be matched to exchange with users at all times, providing instant liquidity. The LP nodes only need to call capital at the time of exchange, and hence is very capital efficient. 

Furthermore, the software agents can perform complex interactions in the atomic swap algorithm, making it much easier for the users.

In addition, Obridge provides a UX on par with pool-based cross-chain bridges but with much-improved safety, withdrawal speed, gas cost, capital efficiency, and censorship resistance. See the User Guide Section for more details.

Real-time liquidity plus easy-to-use UI/UX made atomic swap on Obridge complete in minutes.

