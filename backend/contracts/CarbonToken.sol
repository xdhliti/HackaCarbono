// contracts/CarbonToken.sol
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract CarbonToken is ERC20 {
    address payable public owner;
    constructor() ERC20("CarbonToken", "CTK") {
        owner = msg.sender;
        _mint(owner, 70000000 * (10 ** decimals()));
    }
    
}   