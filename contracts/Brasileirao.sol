// SPDX-License-Identifier: MIT
pragma solidity >=0.4.2;

contract Brasileirao {

    struct Team {
        uint id;
        string name;
        uint betValue;
    }

    mapping(uint => Team) public teams;
    
    uint public teamsCount;

    constructor () public {
        addTeam("Sao Paulo");
        addTeam("Corinthians");
        addTeam("Santos");
        addTeam("Palmeiras");
    }

    function addTeam (string memory _name) private {
        teamsCount++;
        teams[teamsCount] = Team(teamsCount, _name, 0);
    }
}