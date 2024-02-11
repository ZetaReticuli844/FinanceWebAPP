import React from 'react'

const IncomeBoard = () => {
  return (

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-10">
    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                   Income
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
            <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                   $1000000
                </th>
                <td className="px-6 py-4">
                    Salary
                </td>
                <td className="px-6 py-4">
                    01-01-2024
              </td>
            </tr>
            
        </tbody>
    </table>
</div>


  )
}

export default IncomeBoard
