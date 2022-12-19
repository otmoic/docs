---
sidebar_position: 1
---
# Obridge is secure by design

Crypto assets security is the top important thing in Web3. As an automated trading network, Obrige adapts the atomic swap to secure LP Node's assets. It is secure by design.

## No Pool to Hack

Based on the HTLC atomic swap, Obirdge is born without a long-lived asset pool. As a result, there is no chance for hackers to attack an asset pool with tons of money.

Unlike the ephemeral HTLCs, the asset pools are long-lived and must be maintained and managed by their owner. That, by definition, is a centralized setup. Those liquidity pools require users to trust their custodians even with multiple owners or DAO-like governance structures (e.g., multi-party signatures, or multi-party computation, MPCs).

Asset pools are notoriously prone to hacks. Almost all leading bridges' asset pools had security issues that resulted in fund loss in the past. The hackers could exploit asset pool smart contracts' code errors, steal pool admin's private keys, or even manipulate pool assets through flash loans. As Ethereum founder Vitalik Buterin has observed, pool-based bridges could bring security risks from a weak/vulnerable blockchain to a robust blockchain and reduce the security of the entire ecosystem.

> "If you move 100 ETH onto a bridge on Solana to get 100 Solana-WETH, and then Ethereum gets 51% attacked … The Solana-WETH contract is no longer fully backed, and perhaps your 100 Solana-WETH is now only worth 60 ETH." Vitalik Buterin, Founder of Ethereum, explains why cross-chain bridge pools are unsafe. The hypothetical Solana-WETH contract here is the pool that holds the ETH asset for the bridge to lock-and-mint WETH.

Without long-lived liquidity and lock-and-mint pools, the Obridge is much safer than pool-based bridges.

## Only funds in transactions are at risk

The only risk in bridges/DEXes based on the atomic swap algorithm is the funds in transactions. This dramatically narrows down the attack surface for hackers, which means more security.

Let's dive into the Atomic Swap.

Atomic Swap is to rely on off-chain actors to validate transactions in a trustless manner and record the results in on-chain smart contracts. For example, let's say that Alice holds a token on chain A, and Bob holds a token on chain B. They want to do a swap, allowing Alice to move her token from chain A to chain B, and vice versa for Bob. An atomic swap consists of multiple steps performed by both Alice and Bob, and the swap is only successful after all the steps are successful. If any one of them fails to perform any step, the swap will not happen, and they will each still hold their original tokens.

* Alice uses her private key A to create a Hashed Timelock Contract (HTLC) on chain A.
* Alice deposits her tokens to HTLC A. The contract generates a hashed key A and stores it in HTLC A for the public to see.
* Bob sees hashed key A and wants to trade with Alice.
* Bob uses his private key B and hashed key A to create another HTLC on chain B.
* Bob deposits his tokens to the HTLC B he just created on chain B.
* Now, if Alice is satisfied that Bob puts enough tokens in HTLC B, Alice uses her private key A to unlock HTLC B and withdraws Bob's tokens.
* In the process, HTLC B will record proof of withdrawal in HTLC B for everyone to see.
* Bob uses his private key B and the proof of withdrawal on B to unlock HTLC A and get Alice's tokens.

![](https://i.imgur.com/an9RRP2.png)

**All these happen without Alice or Bob knowing each other.** They can use public communication channels to exchange information about the next step in the process. 

## No one has hacked the atomic swap algorithm

Obridge is based on the atomic swap algorithm. As described in the above section, there are no pools, and the attack surface is narrowed down to one transaction.

Pool-based bridges are hacked every day. But have you ever heard that the atomic swap algorithm is hacked before? The answer is no.
