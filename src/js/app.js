App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasBet: false,

  /**
   * main function of App object
   * @returns App.initWeb3 function
   */
  init: () => {
    return App.initWeb3()
  },

  /**
   * Start and connect with MetaMask or a local network (ganache)
   * @returns App.initContract function.
   */
  initWeb3: () => {
    
    if (window.ethereum) {
      // If a web3 instance is already provided by Meta Mask.
      window.web3 = new Web3(window.ethereum);
      App.web3Provider = window.web3.currentProvider;
      window.ethereum.enable();
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  /**
   * Instantiate a new truffle contract from the artifact,
   * Connect provider to interact with contract and add listen events.
   * @returns App.render();
   */
  initContract: () => {
    $.getJSON("Brasileirao.json", (brasileirao) => {
      App.contracts.Brasileirao = TruffleContract(brasileirao);
      App.contracts.Brasileirao.setProvider(App.web3Provider);
      // App.listenForEvents();

      return App.render();
    });
  },

  // Listen for events emitted from the contract
  listenForEvents: function() {
    App.contracts.Brasileirao.deployed().then(function(instance) {
      // Restart Chrome if you are unable to receive this event
      // This is a known issue with Metamask
      // https://github.com/MetaMask/metamask-extension/issues/2393
      // instance.votedEvent({}, {
      //   fromBlock: 0,
      //   toBlock: 'latest'
      // }).watch(function(error, event) {
      //   console.log("event triggered", event)
      //   // Reload when a new vote is recorded
      //   App.render();
      // });
    });
  },

  /**
   * Load datas on the website
   */
  render: () => {
    let brasileiraoInstance;
    const loader = $("#loader");
    const content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Brasileirao.deployed().then((instance) => {
      brasileiraoInstance = instance;
      return brasileiraoInstance.teamsCount();
    }).then((teamsCount) => {
      const teamsResults = $("#teamsResults");
      teamsResults.empty();

      const teamsSelect = $('#teamsSelect');
      teamsSelect.empty();

      for (let i = 1; i <= teamsCount; i++) {
        brasileiraoInstance.teams(i).then((team) => {
          let id = team[0];
          let name = team[1];
          let voteCount = team[2];

          // Render candidate Result
          let teamTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
          teamsResults.append(teamTemplate);

          // Render candidate ballot option
          let teamOption = "<option value='" + id + "' >" + name + "</ option>"
          teamsSelect.append(teamOption);
        });
      }
      // return brasileiraoInstance.voters(App.account);
      loader.hide();
      content.show();
    });
  },
  //   .then(function(hasBet) {
  //     // Do not allow a user to vote
  //     if(hasBet) {
  //       $('form').hide();
  //     }
  //     loader.hide();
  //     content.show();
  //   }).catch(function(error) {
  //     console.warn(error);
  //   });
  // },

  castVote: function() {
    var teamId = $('#candidatesSelect').val();
    App.contracts.Brasileirao.deployed().then(function(instance) {
      return instance.vote(teamId, { from: App.account });
    }).then(function(result) {
      // Wait for votes to update
      $("#content").hide();
      $("#loader").show();
    }).catch(function(err) {
      console.error(err);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});