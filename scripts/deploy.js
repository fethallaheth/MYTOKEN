// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// contract 0xaD8EF739c03ea885C572cc81F2a2691F69C4dD9D
const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("MyToken");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log(
    `contract deployed to  deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
