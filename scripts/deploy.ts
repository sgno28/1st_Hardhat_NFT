import { ethers } from "hardhat";

async function main() {
  const Prius = await ethers.getContractFactory("Prius");
  const prius = await Prius.deploy("Steven's Prius", "ZOOM");

  await prius.deployed();
  console.log(`Prius was deployed to ${prius.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
