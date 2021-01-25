var Eniac = artifacts.require("./Eniac.sol")
var EniacWallet = artifacts.require("./EniacWallet.sol")

module.exports = function (deployer) {
  deployer.deploy(Eniac, 1000000).then(function () {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(EniacWallet, Eniac.address, tokenPrice);
  });
};