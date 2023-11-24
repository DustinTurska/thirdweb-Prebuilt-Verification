import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { CronosBeta } from "@thirdweb-dev/chains" // Chain the contract you want to verify is on

const sdk = new ThirdwebSDK(CronosBeta, {
  clientId: "YOUR_CLIENT_ID", // Use client id if using on the client side, get it from dashboard settings
  secretKey: "YOUR_SECRET_KEY", // Use secret key if using on the server, get it from dashboard settings
});

const explorerAPIUrl = ""; // e.g. https://api.etherscan.io/api
const explorerAPIKey = ""; // Generate API key on the explorer

await sdk.verifier.verifyThirdwebContract(
  "DropERC721",
  // "DropERC1155",
  // "DropERC20",
  // "SignatureDrop",
  // "Marketplace",
  // "MarketplaceV3",
  // "Multiwrap",
  // "Pack",
  // "Split",
  // "TokenERC721",
  // "TokenERC1155",
  // "TokenERC20",
  // "VoteERC20",
  // "AirdropERC721",
  // "AirdropERC1155",
  // "AirdropERC20",
  // "NFTStake",
  // "EditionStake",
  // "TokenStake",
  explorerAPIUrl,
  explorerAPIKey,
);
