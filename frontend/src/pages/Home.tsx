import React from 'react';
import ExpenseBoard from '../components/ExpenseBoard';
import IncomeBoard from '../components/IncomeBoard';
import StatsBoard from '../components/StatsBoard';

const Home = () => {
  return (
    <div className="flex justify-between mt-10">
      <div className="w-1/3">
        <IncomeBoard />
      </div>
      <div className="w-1/3">
        <StatsBoard />
      </div>
      
      <div className="w-1/3">
        <ExpenseBoard />
      </div>
    </div>
  );
};

export default Home;
