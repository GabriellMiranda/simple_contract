import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();

const providerUrl = process.env.URL_ALCHEMY; // URL do provedor (Infura, Alchemy, etc.)
const web3 = new Web3(providerUrl);

const contractAddress = '0x6865fFc56093Cb10C9c7b9B2c44571765c1ba574'; // Endereço do contrato
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newCount",
				"type": "uint256"
			}
		],
		"name": "CountUpdated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "decrement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "increment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(abi, contractAddress);

const account = process.env.ACCOUNT; // Endereço da conta
const privateKey = process.env.PRIVATE_KEY; // Chave privada da conta

// Função para obter o valor do contador
async function getCount() {
  return await contract.methods.getCount().call();
}

// Função para enviar transações (incrementar e decrementar)
async function sendTransaction(method) {
  const data = method.encodeABI();
  const gasPrice = await web3.eth.getGasPrice();

  const tx = {
    from: account,
    to: contractAddress,
    data,
    gas: web3.utils.toHex(2000000),
    gasPrice: web3.utils.toHex(gasPrice),
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
  return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

async function interactWithContract() {
  try {
    console.log('Interacting with the contract...');

    // Exibe o valor atual do contador
    let currentCount = await getCount();
    console.log('Current Count:', currentCount);

    // Executa a transação de incremento
    const incrementTxReceipt = await sendTransaction(contract.methods.increment());
    console.log('Increment Transaction:', incrementTxReceipt.transactionHash);

	// Exibe o valor atual do contador
	currentCount = await getCount();
	console.log('Current Count:', currentCount);

    // Executa a transação de decremento
    const decrementTxReceipt = await sendTransaction(contract.methods.decrement());
    console.log('Decrement Transaction:', decrementTxReceipt.transactionHash);

    // Exibe o valor atualizado do contador
    const updatedCount = await getCount();
    console.log('Updated Count:', updatedCount);
    
  } catch (error) {
    console.error('Error interacting with the contract:', error);
  }
}

// Executa a interação com o contrato
interactWithContract();
