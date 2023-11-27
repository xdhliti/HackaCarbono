// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FootCoin is ERC20 {
    address owner;

    constructor() ERC20 ("FootCoin", "FTC") {
        owner= msg.sender;
        mint(msg.sender, 10000 * 10 * 18);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "GFT: Only owner");
        _;
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }

    function burn(address account, uint amount) public {
        _burn(account, amount);
    }
}
