var Brasileirao = artifacts.require("./Brasileirao.sol");

contract("Brasileirao", (accounts) => {

  it("initialize with four teams", () => {
    return Brasileirao.deployed().then((instance) => {
      return instance.teamsCount();
    }).then((count) => {
      assert.equal(count, 4);
    })
  });

  it("initialize the teams with the correct values", () => {
    return Brasileirao.deployed().then((instance) => {
      brasileiraoInstance = instance;
      return instance.teams(1);
    }).then((team) => {
      assert.equal(team[0], 1, "id Ok");
      assert.equal(team[1], "Sao Paulo", "name Ok");
      assert.equal(team[2], 0, "betValue OK");
      return brasileiraoInstance.teams(2)
    }).then((team) => {
      assert.equal(team[0], 2, "id Ok");
      assert.equal(team[1], "Corinthians", "name Ok");
      assert.equal(team[2], 0, "betValue OK");
      return brasileiraoInstance.teams(3)
    })
    .then((team) => {
      assert.equal(team[0], 3, "id Ok");
      assert.equal(team[1], "Santos", "name Ok");
      assert.equal(team[2], 0, "betValue OK");
      return brasileiraoInstance.teams(4)
    })
    .then((team) => {
      assert.equal(team[0], 4, "id Ok");
      assert.equal(team[1], "Palmeiras", "name Ok");
      assert.equal(team[2], 0, "betValue OK");
    })

  });

});