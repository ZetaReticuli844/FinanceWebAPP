import { useContext,useEffect,useState } from "react"
import UserContext from "../context/UserContext"
import { DonutChart } from '@tremor/react';

const StatsBoard = () => {
  const {incomes}=useContext(UserContext)
  const {expenses}=useContext(UserContext)
  const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;


 const incomeWithNumbers = incomes.map(item => ({
  ...item,
  amount: parseFloat(item.amount)
}));

const expensesWithNUmbers=expenses.map(item => ({
    ...item,
    amount: parseFloat(item.amount)
  })
)

  return (
    <div className='ml-10'>

<div  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<div className="mx-auto space-y-12">
      <div className="space-y-3">
        <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Income categories
        </span>
        <div className="flex justify-center">
          <DonutChart
            data={incomeWithNumbers}
            category="amount"
            index="category"
          valueFormatter={dataFormatter}
            onValueChange={(v) => console.log(v)}
          />
        </div>
        <div className="space-y-3">
        <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Expense categories
        </span>
        <div className="flex justify-center">
          <DonutChart
            data={expensesWithNUmbers}
            category="amount"
            index="category"
          valueFormatter={dataFormatter}
            onValueChange={(v) => console.log(v)}
          />
        </div>
      </div>
      
    </div>
</div>
   </div>
  </div>
  )
}

export default StatsBoard
