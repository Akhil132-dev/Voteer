import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Switche } from "react-router-dom";
import Homepage from "./component/Homepage";
import Vote from "./Vote";
import Web3 from "web3";
import Selectovoter from "./Selectovoter";
import { Button, Input, makeStyles, Modal } from "@material-ui/core";
import { setstate } from "./context";

function App() {

	let Election;
	const [contract, setcontract] = useState({})

	const [open, setopen] = useState(false);
	const [email, setemail] = useState("");
	/**
	 * 
	 * @dev this will lode the functions 
	 */
	useEffect(() => {
		loadWeb3();
		loadBlockchainDate();
		startApp()
	}, [])

	/**
	 *@dev will check for the @param ethereum  accounts 
	 */
	const loadWeb3 = () => {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum)
			window.ethereum.enable()

		}
		/**
		 * @dev if there is @param window.web3 then then we set it to window.web3  
		 */
		else if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider)
		}
		else window.alert("Non-Etherem browser detected . You should consider to use metamask ")

	}

	const address = "0x09c277E090Bea0d7DcB63d7cED18E245420B28FA";
	let abi = [
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_candidate_name",
					"type": "string"
				}
			],
			"name": "setCandidates",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_candidate_id",
					"type": "uint256"
				}
			],
			"name": "voteforParticiten",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "count",
					"type": "uint256"
				}
			],
			"name": "getallcandidate",
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
			"name": "getLength",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "candidate_name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "VoteCount",
							"type": "uint256"
						}
					],
					"internalType": "struct Election.Candidates[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "isOwner",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
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
			"name": "showresult",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "candidate_name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "VoteCount",
							"type": "uint256"
						}
					],
					"internalType": "struct Election.Candidates[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
	const [account, setaccount] = useState()

	const loadBlockchainDate = async () => {
		const web3 = window.web3;
		/**
		 * here we get the all account that are conneceted to over @param blockchain
		 *  
		 * */
		const accounts = await web3.eth.getAccounts();
		setaccount(accounts[0]);
		console.log(accounts)
	}

	const [election, setelection] = useState({});

	function startApp() {
		console.log(window.web3.eth);
		Election = new window.web3.eth.Contract(abi, address);
		setelection(Election)
		console.log(Election);
	}


	const getModalStyle = () => {
		const top = 50;
		const left = 50;
		const wi = 50;

		return {
			outline: `none`,
			border: `none`,
			width: `${wi}`,
			top: `${top}%`,
			left: `${left}%`,
			transform: `translate(-${top}%, -${left}%)`,
		};
	};
	const useStyles = makeStyles((theme) => ({
		paper: {
			position: "absolute",
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: "2px solid #000",
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
	}));
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const body2 = (
		<div style={modalStyle} className={classes.paper}>
			<form>
				<center className="sine_up">
					<Input
						className="input1"
						placeholder="Enter Voter id"
						type="text"
						value={email}
						onChange={(e) => setemail(e.target.value)}
					/>
					<button className="buttons" type="submit">
						Confrom
          </button>
				</center>
			</form>
		</div>
	);




	return (

		<setstate.Provider value={{ account, election }}>
			<Router>
				<div className="app">
					<Modal open={open} onClose={() => setopen(false)}>
						{body2}
					</Modal>
					<Header setopen={setopen} />
					<Homepage />

					<Selectovoter />
					<Vote />
				</div>
			</Router>
		</setstate.Provider>
	);
}

export default App;
