import React from 'react'
import { useState } from 'react'
import { dottedNumber } from '../functions/function'
import { formatIndianNumber } from '../functions/function'

const IncomeExpenseBox = ({ income , expense}) => {
   
   
  return (
    
     <div className='w-[50vh] h-[100px] bg-white shadow-xl mb-[20px] mt-[30px] flex flex-row rounded-sm' >
        <div className='w-[50%] h-[100%] border-r-2  border-dotted border-gray-200 flex flex-col items-center justify-evenly' >
            <h1 className='font-medium'>INCOME</h1>
            <h1 className='text-green-600'>{ formatIndianNumber(income)  } Rs</h1>
        </div>
         <div className='w-[50%] h-[100%]  border-gray-200 flex flex-col items-center justify-evenly' >
            <h1 className='font-medium'>EXPENSE</h1>

            <h1 className='text-red-600'>{ formatIndianNumber(expense) } Rs</h1>
         </div>
     </div>


  )
}
export default IncomeExpenseBox