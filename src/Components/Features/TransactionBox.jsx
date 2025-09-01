import React, { useState } from "react";

const TransactionBox = ({onAddTransaction}) => {
  const [transactionText, setTransactionText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState(""); // "income" or "expense"
  console.log(transactionText)
  console.log(amount)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!transactionText || !amount || !type) {
      alert("Please fill all fields and select Income or Expense.");
      return;
    }
    if(isNaN(amount) || parseFloat(amount) <= 0){
      alert("Please enter a valid positive number for amount.");
      return;
    }
    if(type !== "income" && type !== "expense"){
      alert("Please select either Income or Expense.");
      return;
    }
    if(amount.includes('.')){
      const decimalPart = amount.split('.')[1];
      if(decimalPart.length > 2){
        alert("Please enter amount up to two decimal places.");
        return;
      }

    }
    if(transactionText.length > 20){
      alert("Please enter a shorter text (max 20 characters).");
      return;
    }
    if(transactionText.trim().length === 0){
      alert("Please enter a valid text.");
      return;
    }
    if(amount.trim().length === 0){
      alert("Please enter a valid amount.");
      return;
    }
    if(amount.length > 15){
      alert("Please enter a smaller amount (max 15 digits).");
      return;
    }
    // Call the onAddTransaction prop function to pass data to parent component
    const newTransaction = {
      title: transactionText,
      amount: parseFloat(amount),
      type: type,
    };
    if(onAddTransaction){
      onAddTransaction(newTransaction);
    }

    // For demonstration, we'll just alert the data here    
    

    // Clear form
    setTransactionText("");
    setAmount("");
    setType("");
  };

  return (
    <div className="w-[50vh] h-[200px] bg-gray-200 mt-5 rounded-lg shadow-lg flex flex-col items-center mb-8 justify-around">
      <div className="flex flex-row w-[90%] h-[30%] justify-around">
        <div>
          <h1>Text</h1>
          <input
            className="bg-white w-[100%] h-[30px] p-2 rounded-sm"
            type="text"
            placeholder="Enter Text ..."
            value={transactionText}
            onChange={(e) => setTransactionText(e.target.value)}
          />
        </div>
        <div>
          <h1>Amount</h1>
          <input
            className="bg-white w-[100%] h-[30px] p-2 rounded-sm"
            type="number"
            placeholder="Enter Amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between w-[50%]">
        <input
          type="radio"
          name="expenseTrack"
          id="Income"
          checked={type === "income"}
          onChange={() => setType("income")}
        />
        <label htmlFor="Income">Income</label>

        <input
          type="radio"
          name="expenseTrack"
          id="Expense"
          checked={type === "expense"}
          onChange={() => setType("expense")}
        />
        <label htmlFor="Expense">Expense</label>
      </div>

      <div className="flex justify-center mt-5">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 w-[30vh] h-[50px] rounded-lg text-white"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionBox;
