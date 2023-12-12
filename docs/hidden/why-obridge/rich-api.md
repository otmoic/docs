---
sidebar_position: 8
---

# Rich APIs for automation

In Obridge's design, Each LP node runs an automated agent to listen for requests. They will respond with a quote If they are interested in this request. The automates agent is like a trading bot, it should have the ability to listen to real-time requests, respond a quote instantly, customize their trading strategy, and so on.

That requires LP node could write their own bot with APIs. All LP nodes are based on the ByteTrade network. ByteTrade provides a rich API for LPs to automate the agents on their nodes.

With the APIs, LP node could make the agent

* decide whether to respond a quote when a request is comming
* conduct automated trades to rebalance positions
* fund the transaction from external accounts (eg CEX accounts)
* and more

See LP Node API for more information.
