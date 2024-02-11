import React from 'react'

const ExpenseBoard = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mr-10">
    <table className="w-full text-sm text-left rtl:text-right text-red-100 dark:text-red-100">
        <thead className="text-xs text-white uppercase bg-red-600 border-b border-red-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                 Expense
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr className="bg-red-600 border-b border-red-400 hover:bg-red-500">
                <th scope="row" className="px-6 py-4 font-medium text-red-50 whitespace-nowrap dark:text-red-100">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
              </td>
            </tr>
            
        </tbody>
    </table>
</div>

  )
}

export default ExpenseBoard
