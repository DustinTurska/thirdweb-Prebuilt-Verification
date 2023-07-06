import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { CronosBeta } from "@thirdweb-dev/chains" // Chain the contract you want to verify is on

const sdk = new ThirdwebSDK(CronosBeta)
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
