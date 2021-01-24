# Brasileirao Championship
Bet in your favorite team

## Sumary
1. Requirements
2. What is Truffle?
3. Usage
4. Tests
5. Web3
6. Solidity

--------------------------

### 1. Requirements
- Node JS
- Ganache
- MetaMask (Chrome)
- Truffle Suite ($ npm install -g truffle)

##### others info
- run truffle unbox pet-shop to create a default project and speend up your code

--------------------------

### 2. What is Truffle?
It is a world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.
I will add my notes below but you see more [here](http://https://www.trufflesuite.com/ "here")

##### artifacts
No início da migração, dizemos a Truffle com quais contratos gostaríamos de interagir por meio do artifacts.require()método. 
Este método é semelhante ao do Node require, mas em nosso caso, ele retorna especificamente uma abstração de contrato 
que podemos usar no restante do nosso script de implantação.

##### Truffle Console and Develop

**Truffle Console**
It is like a browser console with server console. It's used in the same way as the browser console.
You have real-time access to the information that is contained in the blockchain network.
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

### 3. Usage
1. Install and run all requirements
2. clone this repository
3. Install all dependecies ($ npm install)
4. Make migrations (truffle migrate) to create a local smart contract
5. Start truffle dev script ($ npm run dev)

--------------------------

### 4. Tests
Truffle has a test script that you can use to see if everything is okay.
All automated tests are into test folder
```
$ truffle test
```

--------------------------

### 5. Web3
web3.js é uma coleção de bibliotecas que permitem que você interaja com um nó ethereum local ou remoto usando HTTP, IPC ou WebSocket.
[Click here to see the documentation](https://web3js.readthedocs.io/en/v1.3.0/web3.html "Click here to see the documentation")

--------------------------

### 6. Solidity
To programming a smart contract, we can use Solidity or Vyper. This smart contract is using Solidity.
I will add my notes below but you can see more in [Solidity Documentation](https://docs.soliditylang.org/en/v0.8.0/ "Solidity Documentation")

##### Access specified
Solidity has two types of access:
- private: only smart contract can access
- public: anyone can access