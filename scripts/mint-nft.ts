import { ethers } from "hardhat";
import * as dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY);
const privateKey = process.env.PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey!, provider);

const contract = require("../artifacts/contracts/Prius.sol/Prius.json");
const abi = contract.abi;
const contractAddress = '0x8DDC8819be6577Ae7B68F645704d2Cb652418652'
const myNftContract = new ethers.Contract(contractAddress, abi, signer);
const tokenUri = "https://gateway.pinata.cloud/ipfs/QmfFBzRgetCZZqva72jpQzcSfTiZ17zTxejdRkALsEx4Tf";

const mintPrius = async () => {
    const nftTxn = await myNftContract.mintNft(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT PRIUS MINTED: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
}

mintPrius()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });