// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract Prius is ERC721URIStorage, Ownable {
    // Minting one of one
    uint private tokenId = 1;
    constructor (
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}
    
    // Mint nft function
    function mintNft(address _recipient, string memory tokenURI) public onlyOwner {
        _mint(_recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}

