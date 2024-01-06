import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { CronosBeta } from "@thirdweb-dev/chains" // Chain the contract you want to verify is on

const sdk = new ThirdwebSDK(CronosBeta, {
  clientId: "YOUR_CLIENT_ID", // Use client id if using on the client side, get it from dashboard settings
  secretKey: "YOUR_SECRET_KEY", // Use secret key if using on the server, get it from dashboard settings
});

const explorerAPIUrl = ""; // e.g. https://api.etherscan.io/api
const explorerAPIKey = ""; // Generate API key on the explorer
const contractAddress = ""; // contract address to verify 

await sdk.verifier.verifyContract(
    contractAddress,
    explorerAPIUrl,
    explorerAPIKey,
  );
