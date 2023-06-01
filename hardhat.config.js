require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")
import "dotenv/config" 

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
task("balance", "get account balance ")
.addParam("account" , "the Accounts Address ")
.setAction(async (taskArgs) => {
  const balance = await ethers.provider.getBalance(taskArgs.account);
  console.log(ethers.utils.formatEther(balance) , "eth")
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "AWSJATSYRE4X5E4IAA5PBMZNHJKY11EZBU",
  },
};
