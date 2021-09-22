/* 
This run.js file is:
1. Creating a new local Ethereum network.
2. Deploying your contract.
3. Then, when the script ends Hardhat will automatically destroy that local network. */




const main = async () => {
    const [owner, randoPerson] = await hre.ethers.getSigners();
    // compiling contract & getting necessary docs under "artifacts"
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    // Hardhat to create local Ethereum network just for this contract. 
    // after script completes destroys that local network. 
    // fresh blockchain every time run contract => easier to debug errors.
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed(); // constructor runs when actually deployed

    console.log("Contract deployed to:", waveContract.address); // to get address of the contract
    console.log("Contract deployed by:", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randoPerson).wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();