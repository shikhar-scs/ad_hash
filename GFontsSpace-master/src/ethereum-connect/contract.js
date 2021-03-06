import web3 from './web3';

const address = '0xb89285da75d2e2b172b600f915e287e0796430f1';

const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "website",
				"type": "string"
			},
			{
				"name": "productName",
				"type": "string"
			},
			{
				"name": "imgURL",
				"type": "string"
			},
			{
				"name": "landingPageURL",
				"type": "string"
			}
		],
		"name": "addData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "calcNextAd",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "updateNextAdd",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index1",
				"type": "uint256"
			},
			{
				"name": "index2",
				"type": "uint256"
			},
			{
				"name": "index3",
				"type": "uint256"
			}
		],
		"name": "updateNode",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "n",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getData",
		"outputs": [
			{
				"components": [
					{
						"name": "website",
						"type": "string"
					},
					{
						"name": "score",
						"type": "uint256"
					},
					{
						"name": "productName",
						"type": "string"
					},
					{
						"name": "imgURL",
						"type": "string"
					},
					{
						"name": "landingPageURL",
						"type": "string"
					},
					{
						"name": "noVisits",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDataString",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getStructHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nextAd",
		"outputs": [
			{
				"name": "website",
				"type": "string"
			},
			{
				"name": "score",
				"type": "uint256"
			},
			{
				"name": "productName",
				"type": "string"
			},
			{
				"name": "imgURL",
				"type": "string"
			},
			{
				"name": "landingPageURL",
				"type": "string"
			},
			{
				"name": "noVisits",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nextAd1",
		"outputs": [
			{
				"name": "website",
				"type": "string"
			},
			{
				"name": "score",
				"type": "uint256"
			},
			{
				"name": "productName",
				"type": "string"
			},
			{
				"name": "imgURL",
				"type": "string"
			},
			{
				"name": "landingPageURL",
				"type": "string"
			},
			{
				"name": "noVisits",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nextAd2",
		"outputs": [
			{
				"name": "website",
				"type": "string"
			},
			{
				"name": "score",
				"type": "uint256"
			},
			{
				"name": "productName",
				"type": "string"
			},
			{
				"name": "imgURL",
				"type": "string"
			},
			{
				"name": "landingPageURL",
				"type": "string"
			},
			{
				"name": "noVisits",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nextAd3",
		"outputs": [
			{
				"name": "website",
				"type": "string"
			},
			{
				"name": "score",
				"type": "uint256"
			},
			{
				"name": "productName",
				"type": "string"
			},
			{
				"name": "imgURL",
				"type": "string"
			},
			{
				"name": "landingPageURL",
				"type": "string"
			},
			{
				"name": "noVisits",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productsViewed",
		"outputs": [
			{
				"name": "website",
				"type": "string"
			},
			{
				"name": "score",
				"type": "uint256"
			},
			{
				"name": "productName",
				"type": "string"
			},
			{
				"name": "imgURL",
				"type": "string"
			},
			{
				"name": "landingPageURL",
				"type": "string"
			},
			{
				"name": "noVisits",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "user",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "userScale",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
export default new web3.eth.Contract(ABI, address);