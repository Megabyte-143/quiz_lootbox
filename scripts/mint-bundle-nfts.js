import { readFileSync } from "fs";
import { sdk } from "./helpers.js"

async function main() {
    const bundleModuleAddress = "0xbdb6BB2ee62AFb00Db2930Fd9Cb792358c09d291";
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log("Creating NFT batch...");

    const created = await bundleModule.createAndMintBatch([
        {
            metadata: {
                name: 'Invisibility Cloak',
                description: 'Gift on Christmas',
                image: readFileSync('assets/cloak.jpeg'),
                properties: {
                    rarity: 'Common',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: 'Elder Wand',
                description: 'Most Powerful Wand',
                image: readFileSync('assets/wand.jpeg'),
                properties: {
                    rarity: 'Rare',
                    fanciness: 8,
                }
            },
            supply: 30,
        },
        {
            metadata: {
                name: 'Resurrection Stone',
                description: 'Bring back a form of the dead.',
                image: readFileSync('assets/stone.jpeg'),
                properties: {
                    rarity: 'Ultra Rare',
                    fanciness: 10,
                }
            },
            supply: 10,
        },
    ]);

    console.log('NFTs created!')
    console.log(JSON.stringify(created, null, 2));

}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs Bundle", error);
    process.exit(1);
}