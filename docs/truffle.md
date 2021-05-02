# Truffle Framework

## What is Truffle?

According to Truffle, It is a world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.
I will add my notes below but you see more [here](http://https://www.trufflesuite.com/ "here")

## artifacts

At the beginning of the migration, we tell Truffle which contracts we would like to interact with using 
the artifacts.require () method. This method is similar to the one the node requires, but in our case, it specifically considers an abstraction of the contract that we can use in the rest of our deployment script.

## Truffle Console and Develop

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

## Tests

Truffle has a test script that you can use to see if everything is okay.
All automated tests are into test folder
```
$ truffle test
```