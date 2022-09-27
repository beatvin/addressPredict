// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract SampleContract {

    address public contractAddress;

    constructor(address _contractAddress) {

        contractAddress = _contractAddress;

    }
}