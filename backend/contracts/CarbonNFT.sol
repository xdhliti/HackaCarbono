// contracts/CarbonNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CarbonNFT is ERC721, ERC721Burnable, Ownable {
    uint256 private _nextTokenId;

    constructor()
        ERC721("CarbonNFT", "MTK")
        Ownable()
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://images.ecycle.com.br/wp-content/uploads/2013/01/04143121/Wald-us-veeterzy-1280x720-1-1024x576-2.jpg.webp";
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

    // Set the initial owner after deployment
    function setInitialOwner(address initialOwner) external onlyOwner {
        transferOwnership(initialOwner);
    }
}
