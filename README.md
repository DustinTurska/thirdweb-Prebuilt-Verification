# Verify thirdweb Prebuilt contracts

Verify any thirdweb prebuilt contract deployed from the thirdweb dashboard.

## Usage

- Install dependencies
  
  ```bash
  npm install
  # or
  yarn
  ```

- Replace `CronosBeta` on `import { CronosBeta } from "@thirdweb-dev/chains"` with the Chain you're using.
- Update `explorerAPIUrl` e.g. https://api.etherscan.io/api
- Update `explorerAPIKey` with your apiKey `Generate API key on the explorer`.
- Update `contractType` with one of the following:
  
  `"DropERC721" | "DropERC1155" | "DropERC20" | "SignatureDrop" | "Marketplace" | "MarketplaceV3" | "Multiwrap"`
  
  `"Pack" | "Split" | "TokenERC721" | "TokenERC1155" | "TokenERC20" | "VoteERC20" | "AirdropERC721" | "AirdropERC1155"`
  
  `"AirdropERC20" | "NFTStake" | "EditionStake" | "TokenStake"`
  
- Run with `node verify.mjs`
