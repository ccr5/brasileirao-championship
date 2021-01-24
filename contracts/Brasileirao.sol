// SPDX-License-Identifier: MIT
pragma solidity >=0.4.2;

contract Brasileirao {

    uint public teamsCount;
    mapping(uint => Team) public teams;
    mapping(address => bool) public betters;

    struct Team {
        uint id;
        string name;
        uint betValue;
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
        require(!betters[msg.sender]);
        require(_teamId > 0 && _teamId < teamsCount);
        betters[msg.sender] = true;
        teams[_teamId].betValue++;
        emit bettedEvent(_teamId);
    }
}