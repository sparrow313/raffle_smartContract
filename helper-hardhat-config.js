const { ethers } = require("hardhat")

const netWorkConfig = {
    4: {
        name: "rinkeby",
        vrfCoorinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        entranceFee: ethers.utils.parseEther("0.01"),
    },
    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.01"),
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    netWorkConfig,
    developmentChains,
}
