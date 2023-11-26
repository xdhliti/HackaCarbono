// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

contract CreditosCarbono is ERC721 {
    using Strings for uint256;
    uint256 tokenId;
    uint256 maxSupplay = 5;
    uint256 price = 0.05 ether;
    string baseUri = "https://ipfs.io/ipfs/QmZVM4vYuVrAZcLHq9bXHxpP7hw3MWJxpJtLTNxZmmVWfD?filename=ipfs.json";

    constructor() ERC721("CreditosCarbono", "CCC") {
    }

    function makeMint(address _to, uint256 _amount) public payable {
        uint256 calcValue = price * _amount;
        require(msg.value == calcValue, "CCC: value is not enough");

        for(uint256 i=0; i < _amount; i++) {
            tokenId += 1;
            _safeMint(_to, tokenId);
        }
    }

    function totalSupply() public view returns(uint256) {
        return tokenId;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseUri;
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked (
                        currentBaseURI,
                        _tokenId.toString(),
                        ".json"
                    )
                )
                :"";
    }

    function getBalance() public view returns (uint256) {
        return address (this).balance;
    }

}