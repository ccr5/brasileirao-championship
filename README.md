# Brasileirao Championship
Bet in your favorite team

## Sumary
1. Requirements
2. What is Truffle?
3. Usage

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
4. Make migrations (truffle migrate)

##### Truffle Console
You can use truffle console to see info like address, values of variables 
and run functions like: 
```
// loading info about the contract into app (front end)
Brasileirao.deployed().then((instance) => { app = instance})

// get contract address
app.address

// get a variable value
app.time()
```
- To access truffle console run (truffle console)