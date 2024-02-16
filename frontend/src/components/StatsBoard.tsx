import { useContext } from "react";
import UserContext from "../context/UserContext";
import { DonutChart } from '@tremor/react';
import { BarChart } from '@tremor/react';

const StatsBoard = () => {
  const { incomes } = useContext(UserContext);
  const { expenses } = useContext(UserContext);

  const dataFormatter = (number) =>
    `$ ${Intl.NumberFormat('us').format(number).toString()}`;

  const incomeWithNumbers = incomes.map(item => ({
    ...item,
    amount: parseFloat(item.amount)
  }));

  const expensesWithNumbers = expenses.map(item => ({
    ...item,
    amount: parseFloat(item.amount)
  }));

  // Function to convert date to month name
  function getMonthName(date) {
    return new Date(date).toLocaleString('en-US', { month: 'long' });
  }

  // Function to calculate monthly summary
  function calculateMonthlySummary(income, expense) {
    const monthlySummary = {};

    // Iterate through income array
    income.forEach(item => {
      const month = getMonthName(item.date);
      if (!monthlySummary[month]) {
        monthlySummary[month] = { month, expenses: 0, income: 0 };
      }
      monthlySummary[month].income += item.amount;
    });

    // Iterate through expense array
    expense.forEach(item => {
      const month = getMonthName(item.date);
      if (!monthlySummary[month]) {
        monthlySummary[month] = { month, expenses: 0, income: 0 };
      }
      monthlySummary[month].expenses += item.amount;
    });

    // Convert object to array
    return Object.values(monthlySummary);
  }

  const monthlySummary = calculateMonthlySummary(incomeWithNumbers, expensesWithNumbers);

  return (
    <div className='ml-10 mr-10'>
      <div className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="mx-auto space-y-12">
          <div className="space-y-3">
            <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Income categories
            </span>
            <div className="flex justify-between">
              <DonutChart
                data={incomeWithNumbers}
                category="amount"
                index="category"
                valueFormatter={dataFormatter}
                onValueChange={(v) => console.log(v)}
              />
              <DonutChart
                data={expensesWithNumbers}
                category="amount"
                index="category"
                valueFormatter={dataFormatter}
                onValueChange={(v) => console.log(v)}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Monthly income and expenses summary
            </h3>
            <BarChart
              className="mt-6 "
              data={monthlySummary}
              index="month"
              categories={['income', 'expenses']}
              colors={['blue', 'red']}
              valueFormatter={dataFormatter}
              yAxisWidth={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsBoard;
