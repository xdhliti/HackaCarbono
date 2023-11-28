import { artifacts, ethers } from "hardhat";
import fs from "fs";
import path from "path";
import { Contract } from "ethers";

export async function main() {
    const creditosCarbonoFactory = await ethers.getContractFactory("GameItem");

    const creditosCarbono = await creditosCarbonoFactory.deploy();

    console.log("CreditosCarbono deployed to:", creditosCarbono.address);

    saveFrontendFiles([creditosCarbono], ["CreditosCarbono"]);

    return { creditosCarbono };
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
