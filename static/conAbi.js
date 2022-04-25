let conAbi =
    [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_djtAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "name": "current_round",
            "outputs": [
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "gameInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint16",
                    "name": "",
                    "type": "uint16"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "luck_address",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "luck_team_type",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "myInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "parent",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deposit",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "invit_rewards",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "team_rewards",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "luck_rewards",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct DJTGame.User",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nextGame",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pickAllDjt",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "_type_index",
                    "type": "uint8"
                },
                {
                    "internalType": "uint16",
                    "name": "_djt_num",
                    "type": "uint16"
                },
                {
                    "internalType": "address",
                    "name": "_parent",
                    "type": "address"
                }
            ],
            "name": "play",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ]