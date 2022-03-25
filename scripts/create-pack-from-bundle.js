import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
    const bundleModuleAddress = "0xbdb6BB2ee62AFb00Db2930Fd9Cb792358c09d291";
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = "0xea39727f368BAeb3c78dcf1270D06d2c7c5334DE";
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log("Getting all the NFTs from the bundle...");
    const nftsInBundle = await bundleModule.getAll();

    console.log("NFTs in bundle:");
    console.log(nftsInBundle);

    console.log('Creating a pack containing the NFTs from bundle...');
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata: {
            name: 'Harry Potter Pack',
            image: readFileSync('assets/logo.png'),
        },
        assets: nftsInBundle.map(nft => ({
            tokenId: nft.metadata.id,
            amount: nft.supply,
        }))
    });

    console.log('Pack created!')
    console.log(created);
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs Pack", error);
    process.exit(1);
}