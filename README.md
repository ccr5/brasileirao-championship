# Brasileirao Championship DApp
Do you think will your favorite team win the 2022 - Brazilian Championship?

**Sumary**

1. [What is Brasileirao Championship project](https://github.com/ccr5/brasileirao-championship#what-is-brasileirao-championship-project "What is Brasileirao Championship project")
2. [Requirements](https://github.com/ccr5/brasileirao-championship#1-requirements "Requirements")
3. [What is Truffle?](https://github.com/ccr5/brasileirao-championship#what-is-truffle "What is Truffle?")
4. [Usage](https://github.com/ccr5/brasileirao-championship#usage "Usage")
5. [Tests](https://github.com/ccr5/brasileirao-championship#tests "Tests")
6. [Web3](https://github.com/ccr5/brasileirao-championship#web3 "Web3")
7. [Solidity](https://github.com/ccr5/brasileirao-championship#solidity "Solidity")
8. [Tips](https://github.com/ccr5/brasileirao-championship#tips "Tips")
9. [Next steps](https://github.com/ccr5/brasileirao-championship#next-steps "Next steps")

--------------------------

# What is Brasileirao Championship project?
This project is my first dApp. The goal will be to develop a platform where 
it is possible to bet ether on any team in the brazilian championship until the tenth round and, at the end of the competition, 
if you win you will recover the amount applied plus the total bet on the other teams divided 
by the number of betting teams of the champion team.

--------------------------

# Requirements
- Node JS
- Ganache
- MetaMask (Chrome)
- Truffle Suite ($ npm install -g truffle)

--------------------------

# What is Truffle?
According to Truffle, It is a world class development environment, testing framework and asset pipeline for blockchains using 
the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.
I will add my notes below but you see more [here](http://https://www.trufflesuite.com/ "here")

### artifacts
At the beginning of the migration, we tell Truffle which contracts we would like to interact with using 
the artifacts.require () method. This method is similar to the one the node requires, but in our case, it specifically 
considers an abstraction of the contract that we can use in the rest of our deployment script.

### Truffle Console and Develop

**Truffle Console**
It is like a browser console with server console. It's used in the same way as the browser console.
You have real-time access to the information that is contained in the blockchain network / EVM.
You can use to see real time infos like address, create variables and run functions. For example: 
```
// loading info about the contract into app (front end)
truffle(development)> Brasileirao.deployed().then((instance) => { app = instance})

// get contract address
truffle(development)> app.address

// get a variable value
truffle(development)> app.time()
```
- To access truffle console run (truffle console)
- When you change something, you must to run truffle migrate --reset

**Truffle Develop**

[Click here to see more about it](https://www.trufflesuite.com/docs/truffle/getting-started/using-truffle-develop-and-the-console "Click here to see more about it")

--------------------------

# Usage
1. Install and run all requirements
2. clone this repository
3. Install all dependecies ($ npm install)
4. Make migrations (truffle migrate) to create a local smart contract
5. Start truffle dev script ($ npm run dev)

--------------------------

# Tests
Truffle has a test script that you can use to see if everything is okay.
All automated tests are into test folder
```
$ truffle test
```

--------------------------

# Web3
web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
[Click here to see the documentation](https://web3js.readthedocs.io/en/v1.3.0/web3.html "Click here to see the documentation")

--------------------------

# Solidity
To programming a smart contract, we can use Solidity or Vyper. This smart contract is using Solidity.
I will add my notes below but you can see more in [Solidity Documentation](https://docs.soliditylang.org/en/v0.8.0/ "Solidity Documentation")

### Access specified
Solidity has two types of access:
- private: only smart contract can access
- public: anyone can access

# Tips
- run truffle unbox pet-shop to create a default project and speend up your code

# Next Steps
**Create Eniac Token:** Add a page to create a eniac wallet and buy eniac tokens