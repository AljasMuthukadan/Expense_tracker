import { useState, useMemo } from "react";

export function useExpenseTracker() {
  const [expense, setExpense] = useState([]);

  const addExpense = (newExpense) => {
    setExpense((prev) => [...prev, newExpense]);
  };

  const deleteExpense = (indexToDelete) => {
    
      setExpense((prev) => prev.filter((_, i) => i !== indexToDelete));
    
  };

  const totalIncome = useMemo(
    () => expense.filter((e) => e.type === "income")
                 .reduce((sum, e) => sum + e.amount, 0),
    [expense]
  );

  const totalExpense = useMemo(
    () => expense.filter((e) => e.type === "expense")
                 .reduce((sum, e) => sum + e.amount, 0),
    [expense]
  );

  return { expense, addExpense, deleteExpense, totalIncome, totalExpense };
}
