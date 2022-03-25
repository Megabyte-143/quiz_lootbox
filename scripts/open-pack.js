import { sdk } from "./helpers.js";

async function main() {
    const packModuleAddress = "0xea39727f368BAeb3c78dcf1270D06d2c7c5334DE";
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Opening the pack...');
    const opened = await packModule.open('0');
    console.log('Opened the pack!');
    console.log(opened);
}

try {
    await main();
} catch (error) {
    console.error("Error opening the pack", error);
    process.exit(1);
}