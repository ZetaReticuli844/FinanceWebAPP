import  { useContext, useEffect, useState } from 'react'
import axiosInstance from '../axios';
import UserContext from '../context/UserContext';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const CreateIncome = () => {
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
      userId: user,
      amount: 0,
      date: '',
      category: ''
  });

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value.trim()
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      axiosInstance.post(`create/income/`, {
          user: user,
          amount: formData.amount,
          date: formData.date,
          category: formData.category
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
  };
  console.log(formData)

  return (<div>
    <button className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>document.getElementById('my_modal_2').showModal()}>Add Income</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
      <div>
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <input
                  type="text"
                  id='amount'
                  className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={formData.amount}
                  placeholder="amount"
                  name="amount"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  id='date'
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={formData.date}
                  placeholder="YYYY-MM-DD"
                  name="date"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  id='category'
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={formData.category}
                  placeholder="category"
                  name="category"
                  onChange={handleChange}
              />
              <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                  Submit
              </button>
          </form>
      </div>
      </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</div>
  );
};


const IncomeBoard = () => {
    
const {setUser}=useContext(UserContext)

    const [income, setIncome]=useState([])

        useEffect(()=>{
            axiosInstance.get(`income/`).then((res):any => {
                setIncome(res.data)
                // console.log(res.data);
            });
        },[])

        {income.map((item) => (
            setUser(item.user)
         
            
        
        ))}


    const {setIncomes}=useContext(UserContext)
    setIncomes(income)
 
  
  return (
    <div>
      <div className="flex justify-center">
        <CreateIncome />
      </div>
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
            {income.map((item, index) => (
              <tr
                key={index}
                className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500"
              >
                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                  ${item.amount}
                </td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">
                  {item.date}

                  <Link to={`/income/delete/${item.id}`}>
                    <MdDelete className="w-10" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IncomeBoard
