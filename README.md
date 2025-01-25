# Counter Smart Contract Interaction

This project demonstrates how to interact with a simple Counter smart contract deployed on the Ethereum blockchain using Web3.js.

## Project Structure

```
.env
.gitignore
.vscode/
    launch.json
Counter.sol
index.js
package.json
```

- `.env`: Contains environment variables such as account address, private key, and provider URL.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `.vscode/launch.json`: Configuration for debugging in Visual Studio Code.
- `Counter.sol`: Solidity smart contract for the Counter.
- `index.js`: JavaScript file to interact with the Counter smart contract.
- `package.json`: Project dependencies.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```env
   ACCOUNT=<your-account-address>
   PRIVATE_KEY=<your-private-key>
   URL_ALCHEMY=<your-alchemy-url>
   ```

## Usage

1. Compile and deploy the `Counter.sol` contract to the Ethereum blockchain.

2. Update the `contractAddress` variable in `index.js` with the deployed contract address.

3. Run the script to interact with the contract:
   ```sh
   node index.js
   ```

## Debugging

To debug the `index.js` file in Visual Studio Code, use the provided configuration in `.vscode/launch.json`.

## License

This project is licensed under the MIT License.