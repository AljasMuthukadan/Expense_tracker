import React from 'react'
import ExpenseBox from '../Features/ExpenseBox'
import IncomeExpenseBox from '../Features/IncomeExpenseBox'
import TransactionBox from '../Features/TransactionBox'
import { useState } from 'react'

const HomePage = () => {
  const [expense , setExpense] = useState([]);

  const addExpense = (newExpense) => {
    setExpense([...expense, newExpense]);
  }
  const totalIncome = expense
    .filter(typ => typ.type === "income")
    .reduce((runningTotal, currentTrans) => runningTotal + currentTrans.amount, 0);

  const totalExpense = expense
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
   <>
    <div className="pt-[20px] min-h-[100vh] h-[auto] flex flex-col items-center  bg-gray-100 pb-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Expense Tracker</h1>
      <p className="text-lg text-gray-700">Track your expenses easily and efficiently.</p>
      <IncomeExpenseBox income={totalIncome} expense={totalExpense} />
        <TransactionBox onAddTransaction={addExpense} />
 

        { 
          expense.length == 0 ? <h1 className='text-2xl font-semibold mt-5'>No Expense Added Yet</h1> :
          expense.map((exp, index) => (
            <ExpenseBox key={index} title={exp.title} expense={exp.amount} type={exp.type} />
            
          ))
        }

        
    </div>
   
   </>
  )
}

export default HomePage