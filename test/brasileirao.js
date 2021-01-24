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

  it("allows a voter to cast a vote", () => {
    return Brasileirao.deployed().then((instance) => {
      brasileiraoInstance = instance;
      teamId = 1;
      return brasileiraoInstance.bet(teamId, { from: accounts[0] });
    }).then((receipt) => {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "bettedEvent", "the event type is correct");
      assert.equal(receipt.logs[0].args._teamId.toNumber(), teamId, "the team id is correct");
      return brasileiraoInstance.betters(accounts[0]);
    }).then((betted) => {
      assert(betted, "the better was marked as voted");
      return brasileiraoInstance.teams(teamId);
    }).then((team) => {
      const betValue = team[2];
      assert.equal(betValue, 1, "increments the team's vote count");
    });
  });

  it("throws an exception for invalid candiates", () => {
    return Brasileirao.deployed().then((instance) => {
      brasileiraoInstance = instance;
      return brasileiraoInstance.bet(99, { from: accounts[1] })
    }).then(assert.fail).catch((error) => {
      assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
      return brasileiraoInstance.teams(1);
    }).then((team1) => {
      const betValue = team1[2];
      assert.equal(betValue, 1, "team 1 did not receive any votes");
      return brasileiraoInstance.teams(2);
    }).then((team2) => {
      const betValue = team2[2];
      assert.equal(betValue, 0, "team 2 did not receive any votes");
    });
  });

  it("throws an exception for double voting", () => {
    return Brasileirao.deployed().then((instance) => {
      brasileiraoInstance = instance;
      teamId = 2;
      brasileiraoInstance.bet(teamId, { from: accounts[1] });
      return brasileiraoInstance.teams(teamId);
    }).then((team) => {
      const betValue = team[2];
      assert.equal(betValue, 1, "accepts first vote");
      // Try to vote again
      return brasileiraoInstance.bet(teamId, { from: accounts[1] });
    }).then(assert.fail).catch((error) => {
      assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
      return brasileiraoInstance.teams(1);
    }).then((team1) => {
      const betValue = team1[2];
      assert.equal(betValue, 1, "team 1 did not receive any votes");
      return brasileiraoInstance.teams(2);
    }).then((team2) => {
      const betValue = team2[2];
      assert.equal(betValue, 1, "team 2 did not receive any votes");
    });
  });
});