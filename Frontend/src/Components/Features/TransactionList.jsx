import React from "react";
import ExpenseBox from "./ExpenseBox";

const TransactionList = ({ expense, onDelete }) => {
  if (expense.length === 0) {
    return <h1 className="text-2xl font-semibold mt-5">No Expense Added Yet</h1>;
  }

  return (
    <>
      {expense.map((exp, index) => (
        <ExpenseBox
          key={index.reverse}
          title={exp.title}
          expense={exp.amount}
          type={exp.type}
            createdAt={exp.createdAt}
          onDelete={() => onDelete(index)}
        />

      ))}
    </>
  );
};

export default TransactionList;
