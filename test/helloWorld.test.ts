import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Test if the contract is well declared", function() {
    it("should say Hello World !", async function() {
        const HelloWorld = await ethers.getContractFactory("helloWorldOui");
        const hello = await HelloWorld.deploy();
        await hello.deployed();

        expect(await hello.hello()).to.equal("Hello World FEM")
    })
})
