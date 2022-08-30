const {ethers} = require("ethers");
const RPC = "https://ropsten.infura.io/v3/946495a534fd4bd7b27246e9d287e10d";
const account = "0xAB186867aC273AbC0054ef37917b8c41a64C9CC8";
const privateKey= "ca775376d2d7e4ae3eb8d535110e010058745587438de1e8b975399f11574621";
const provider = new ethers.providers.JsonRpcProvider(RPC);
const wallet = new ethers.Wallet(privateKey, provider);


async function call(){
    const bal = await provider.getBalance(account);
    console.log(account,":",ethers.utils.formatEther(bal));
    console.log(await wallet.getAddress(), ":", ethers.utils.formatEther(await wallet.getBalance()));
    const trans =await wallet.sendTransaction({
        to:account,
        value:ethers.utils.parseEther("0.25")
    })
    await trans.wait();
    const bal2 = await provider.getBalance(account);
    console.log(account,":",ethers.utils.formatEther(bal2));
    console.log(await wallet.getAddress(), ":", ethers.utils.formatEther(await wallet.getBalance()));
}
call();