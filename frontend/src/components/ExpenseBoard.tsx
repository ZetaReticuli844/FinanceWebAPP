import { useContext, useEffect, useState } from 'react'
import axiosInstance from '../axios';
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
const CreateExpense = () => {
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
        axiosInstance.post(`create/expense/`, {
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
      <button className="btn text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Expense</button>
  <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id='amount'
                    className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-red-500 dark:focus:border-red-500"
                    required
                    value={formData.amount}
                    placeholder="amount"
                    name="amount"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id='date'
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-red-500 dark:focus:border-red-500"
                    required
                    value={formData.date}
                    placeholder="YYYY-MM-DD"
                    name="date"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id='category'
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-red-500 dark:focus:border-red-500"
                    required
                    value={formData.category}
                    placeholder="category"
                    name="category"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
  


const ExpenseBoard = () => {
    const {setUser}=useContext(UserContext)
    
    const {setIsLoggedIn}=useContext(UserContext)
    useEffect(()=>{
        setIsLoggedIn(true)
    },[])


    const [expense, setExpense]=useState([])

        useEffect(()=>{
            axiosInstance.get(`expense/`).then((res):any => {
                setExpense(res.data)
                console.log(res.data);
            });
        },[])

        {expense.map((item) => (
            setUser(item.user)
         
            
        
        ))}

  return (
    <div>
        <div className='flex justify-center'>

        <CreateExpense/>
        </div>
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
        {expense.map((item, index) => (
                        <tr key={index} className="bg-red-600 border-b border-red-400 hover:bg-red-500">
                            <td className="px-6 py-4 font-medium text-red-50 whitespace-nowrap dark:text-red-100">
                                ${item.amount}
                            </td>
                            <td className="px-6 py-4">
                                {item.category}
                            </td>
                            <td className="px-6 py-4">
                                {item.date}
                                <Link to={`/expense/delete/${item.id}`}>
                    <MdDelete className="w-10" />
                  </Link>
                            </td>
                        </tr>
                    ))}
        </tbody>
    </table>
</div>
</div>
  )
}

export default ExpenseBoard
