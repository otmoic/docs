---
sidebar_position: 4
---

# Fee Explanation


## Protocol fee
The Obridge protocol takes 0.04% from each transaction as the protocol fee. The user pays the protocol fee. The protocol fee is collected and managed by the Obridge DAO.

## LP node self-defined transaction fee
An LP node can add a transaction fee to its quote when responding to a broadcasted request from a relay server. The relay server will pick the most competitive quote and present it to the user. The LP node can only receive its requested transaction fee and protocol fee when its quote is picked. So, it is in the LP node's self-interest to keep the transaction fee competitive. Obridge creates the right incentives for the network participants to improve efficiency and reduce costs.
We recommend an initial transaction fee rate of 0.3% for most LP nodes. LPs could configure their edge node agent to increase or reduce the fee rate as needed. For example, the fee rate could be increased when
* The transaction is very small and the 0.3% is not going to cover the gas cost for the LP node.
* The transaction is very large and is unlikely to be fulfilled by other LP nodes.
* The LP node is providing liquidity to a token that is highly illiquid and hence does not have much competition in the network.

Conversely, the fee rate should probably be decreased when

* The LP node is a lock-and-mint provider of a wrapped token, and has very low cost in minting any amount.
* The LP node is responding to an average size exchange request for a high liquid token.