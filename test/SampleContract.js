const { ethers } = require('hardhat');

const { expect } = require("chai");

const { extendConfig } = require('hardhat/config');

describe("SampleContract", function () {
    it("Compare predicted and deployed contract address", async () => {

        const [owner] = await ethers.getSigners();

        const transactionCount = await owner.getTransactionCount();

        const predictedAddress = await ethers.utils.getContractAddress({ from: await owner.address, nonce: transactionCount });

        const contract = await ethers.getContractFactory("SampleContract");

        const deployedContract = await contract.deploy(predictedAddress);

        expect(deployedContract.address = predictedAddress);
        expect(deployedContract.address = deployedContract.contractAddress());

    });
});