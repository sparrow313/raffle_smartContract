const { network, ethers } = require("hardhat")
const { developmentChains, chainId, netWorkConfig } = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    let vrfCoorinatorV2Address

    if (developmentChains.includes(network.name)) {
        const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        vrfCoorinatorV2Address = vrfCoordinatorV2Mock.addresss
    } else {
        vrfCoorinatorV2Address = netWorkConfig[chainId]["vrfCoorinatorV2"]
    }
    const entranceFee = netWorkConfig[chainId]["entranceFee"]
    const args = [vrfCoorinatorV2Address, entranceFee]
    const raffle = await deploy("Raffle", {
        from: deployer,
        args: agrs,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
}
module.exports.tags = ["MyContract"]
