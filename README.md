# Brasileirao Championship
Bet in your favorite team

## Sumary
1. Requirements
2. What is Truffle?
3. Usage
4. Tests
5. Web3

### 1. Requirements
- Node JS
- Ganache
- MetaMask (Chrome)
- Truffle Suite (npm install -g truffle)

##### others info
- run truffle unbox pet-shop to create a default project and speend up your code

### 2. What is Truffle?
[Truffle Suite](http://https://www.trufflesuite.com/ "Truffle Suite") is a world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.

### 3. Usage
1. Install and run all requirements
2. clone this repository
3. Install all dependecies (npm install)
4. Make migrations (truffle migrate) to create a local smart contract

##### Truffle Console and Develop

**Truffle Console**
It is like a browser console with server console. It's used in the same way as the browser console.
You have real-time access to the information that is contained in the blockchain network.
You can use to see real time infos like address, create variables and run functions. For example: 
```
// loading info about the contract into app (front end)
Brasileirao.deployed().then((instance) => { app = instance})

// get contract address
app.address

// get a variable value
app.time()
```
- To access truffle console run (truffle console)
- When you change something, you must to run truffle migrate --reset

**Truffle Develop**

[Click here to see more about it](https://www.trufflesuite.com/docs/truffle/getting-started/using-truffle-develop-and-the-console "Click here to see more about it")

### 4. Tests
Truffle has a test script that you can use to see if everything is okay.
All automated tests are into test folder
```
$ truffle test
```

### 5. Web3
web3.js é uma coleção de bibliotecas que permitem que você interaja com um nó ethereum local ou remoto usando HTTP, IPC ou WebSocket.
[Click here to see the documentation](https://web3js.readthedocs.io/en/v1.3.0/web3.html "Click here to see the documentation")