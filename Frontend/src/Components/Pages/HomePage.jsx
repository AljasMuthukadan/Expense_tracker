import React from "react";
import IncomeExpenseBox from "../Features/IncomeExpenseBox.jsx";
import TransactionBox from "../Features/TransactionBox.jsx";
import TransactionList from "../Features/TransactionList.jsx";
import { useExpenseTracker } from "../hooks/useExpenseTracker.jsx";
import WelcomeMessage from "../UI/welcomeMessage.jsx";

const HomePage = () => {
  const { expense, addExpense, deleteExpense, totalIncome, totalExpense } =
    useExpenseTracker();

  return (
    <div className="pt-[20px] min-h-[100vh] flex flex-col items-center bg-gray-100 pb-10">
      
     <WelcomeMessage /> 
      <IncomeExpenseBox income={totalIncome} expense={totalExpense} />

      <TransactionBox onAddTransaction={addExpense} />

      <TransactionList expense={expense} onDelete={deleteExpense} />
    </div>
  );
};

export default HomePage;
