import React from 'react'
import { formatDateAndTime, formatIndianNumber } from '../functions/function'

const ExpenseBox = ({ title, expense, type, onDelete, createdAt }) => {
  // format date & time

  return (
    <div className="bg-white w-[50vh] rounded-lg flex flex-row items-center justify-between shadow-lg mt-2 p-2">
      {/* Left: Title */}
      <div className="w-[40%] flex flex-col justify-center">
        <h1 className="text-gray-600 font-semibold">{title}</h1>
      </div>

      {/* Middle: Amount + Time */}
      <div className="w-[35%] flex flex-col items-center  ml-[80px] py-1">
        {type === "income" ? (
          <h1 className="text-green-500 font-semibold">
            {formatIndianNumber(expense)} Rs
          </h1>
        ) : (
          <h1 className="text-red-500 font-semibold">
            {formatIndianNumber(expense)} Rs
          </h1>
        )}
        <p className="text-gray-400 text-xs">{formatDateAndTime(createdAt)}</p>
      </div>

      {/* Right: Delete */}
      <button
        onClick={onDelete}
        className="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600 ml-2"
      >
        Delete
      </button>
    </div>
  )
}

export default ExpenseBox
