import React from 'react'
import { formatIndianNumber } from '../functions/function'
const ExpenseBox = ({title,expense, type}) => {
  return (
    <>
    
        <div className='bg-white w-[50vh] h-[50px] rounded-lg flex flex-row items-center justify-around shadow-lg mt-2'>
           <div className=' w-[70%] h-[100%]  rounded-l-lg flex items-baseline pl-5 justify-center flex-col'>
            <h1 className='text-gray-600 font-semibold text-x'>{title}</h1>
           </div>
           <div className=' w-[30%] h-[100%] bg-white rounded-r-lg flex items-baseline-last pr-5 justify-center flex-col'>
            {
              (type == "income") ?
              <h1 className='text-green-500 font-normal text-x ' >{ formatIndianNumber(expense)} Rs.</h1> :
            <h1 className='text-red-500 font-normal text-x ' >{ formatIndianNumber(expense)} Rs.</h1>
}
           </div>
           
        </div>
    
    </>
  )
}

export default ExpenseBox