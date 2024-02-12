import React from "react";
// import app from "../db/firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import db from "../db/firebase";

function Transaction() {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [walletError, setWalletError] = useState("");
  const [amountError, setAmountError] = useState("");
  const parsedAmount = parseFloat(amount);

  const validateWalletAddress = (address) => {
    const regex = /^(0x)?[0-9a-fA-F]{40}$/;
    return regex.test(address);
  };
  const clearInput = () => {
    setWalletAddress("");
    setAmount("");
  };
  const clearErrors = () => {
    setWalletError("");
    setAmountError("");
  };

  const submitTransaction = async (event) => {
    event.preventDefault();
    clearErrors();

    if (walletAddress.trim() === "") {
      setWalletError("Wallet address field cannot be empty");
      return;
    } else if (validateWalletAddress(walletAddress) == false) {
      setWalletError("Invalid Ethereum address format");
      return;
    } else if (
      isNaN(parsedAmount) ||
      parsedAmount < 0 ||
      parsedAmount > 10000
    ) {
      setAmountError("Invalid amount. Enter a number between 0 and 10,000");
      return;
    }

    // Data is valid, proceed to store in Firestore
    else {
      try {
        const docRef = await addDoc(collection(db, "Transaction"), {
          walletAddress: walletAddress.trim(),
          amount: parsedAmount,
        });

        alert("Transaction submitted successfully!");
        clearInput();

        // You can redirect or perform any other action here
      } catch (error) {
        console.error("Error adding transaction: ", error);
        alert("Error submitting transaction. Please try again later.");
      }
    }
  };
  return (
    <>
      <div className="flex flex-column justify-center items-center h-[80vh]">
        {/* <h1 className="text-center text-[30px] font-bold text-[#3128ad]">
          Enter Your Details Here
        </h1> */}
        <form
          className="bg-[#dbd9d3] shadow-md rounded px-8 pt-4 pb-8 mb-4 w-96 "
          onSubmit={submitTransaction}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="walletAddress"
            >
              Wallet Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="walletAddress"
              type="text"
              placeholder="Enter your wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
            <span style={{ color: "red" }}>{walletError}</span>
            <br />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id="amount"
              name="amount"
              min="0"
              max="10000"
              placeholder="Enter your Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <span style={{ color: "red" }}>{amountError}</span>
            <br />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Transaction;
