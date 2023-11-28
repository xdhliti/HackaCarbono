import { artifacts, ethers } from "hardhat";
import fs from "fs";
import path from "path";
import { Contract } from "ethers";

export async function main() {
    const carbonNFTFactory = await ethers.getContractFactory("CarbonNFT");

    const CarbonNFT = await carbonNFTFactory.deploy();

    console.log("CarbonNFT deployed to:", CarbonNFT.address);

    saveFrontendFiles([CarbonNFT], ["CarbonNFT"]);

    return { CarbonNFT };
}

function saveFrontendFiles(contracts: Contract[], names: string[]) {
	const contractsDir = path.join(__dirname, "..", "..", "frontend", "src", "contracts");
  
	if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
	}

    const result = [];
    for (let i = 0; i < names.length; i++) {
        const ContractArtifact = artifacts.readArtifactSync(names[i]);
        result.push({ address: contracts[i].address, abi: ContractArtifact.abi })
    }
  
	fs.writeFileSync(
        path.join(contractsDir, "contract-config.json"),
        JSON.stringify(result, undefined, 2)
	);
}

main().then(() => {
    console.log('Everything is up and running!')
}).catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
