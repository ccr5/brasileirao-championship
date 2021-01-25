// SPDX-License-Identifier: MIT
pragma solidity >=0.4.2 <0.8.0;

contract Brasileirao {

    uint public teamsCount;
    mapping(uint => Team) public teams;

    struct Team {
        uint id;
        string name;
        uint bets;
    }

    event bettedEvent (uint indexed _teamId);

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

    function bet(uint _teamId) public {
        require(_teamId > 0 && _teamId <= teamsCount);
        teams[_teamId].bets++;
        emit bettedEvent(_teamId);
    }
}