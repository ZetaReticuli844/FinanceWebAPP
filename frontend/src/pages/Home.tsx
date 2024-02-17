import { useParams } from 'react-router-dom';
import ExpenseBoard from '../components/ExpenseBoard';
import IncomeBoard from '../components/IncomeBoard';
import StatsBoard from '../components/StatsBoard';

const Home = () => {
  return (
  
    <div className="flex justify-between mt-5">
      <div className='w-full'>
      <div className="w-full mr-3">
        <IncomeBoard />
      </div>
      <div className="w-full ml-10 mt-3">
        <ExpenseBoard />
      </div>
      </div>
      <div className="w-full">
        <StatsBoard />
      </div>
      
     
    </div>
  );
};

export default Home;
