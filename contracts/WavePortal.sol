// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {

    uint256 totalWaves;
    address[] public wavers;

    constructor() {
        console.log("holla die Waldfee");
    }

    function wave() public {
        totalWaves += 1;
        wavers.push(msg.sender);
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        console.log("So far, wavers are:");
        for (uint i = 0; i < wavers.length; i++) {
            console.log(wavers[i]);
        }
        return totalWaves;
    }
}