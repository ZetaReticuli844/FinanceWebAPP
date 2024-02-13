import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../axios';
import UserContext from '../context/UserContext';

const AddIncome=()=>{
    const initialFormData = Object.freeze({
        user: '',
        amount: '',
        date: '',
        category:'',
      });
      const [formData, updateFormData] = useState(initialFormData);
    
      const handleChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
        });
        console.log(formData)
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      }

    axiosInstance
      .post(`create/income`, {
        user: formData.user,
        amount: formData.amount,
        date: formData.date,
        category: formData.category
      })
      .then((res) => {
  
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        
        axiosInstance.defaults.headers['Authorization'] =
          'JWT ' + localStorage.getItem('access_token') 
       
      })
      .catch((error) => {
        console.error('income was not added', error);
        
      });


      return (
      
      <div>
     {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <form onSubmit={handleSubmit}>
    <div className="mb-5">
  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User</label>
  <input onChange={handleChange} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.user} />

  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
  <input onChange={handleChange} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.amount} />

  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
  <input onChange={handleChange} type="date" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={formData.date} />

 


</div>
<label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
  <input onChange={handleChange} type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={formData.category} />
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
 </form>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button></button>
  </form>
</dialog>
      </div>


    )
}






const IncomeBoard = () => {
    const currentDate = new Date();

    const [income, setIncome]=useState<Income[]>([])

        useEffect(()=>{
            axiosInstance.get(`income/`).then((res):any => {
                setIncome(res.data)
                console.log(res.data);
            });
        },[])

        const {setUser}=useContext(UserContext)
        setUser(income.user)
        console.log(income.user)

  return (

    <div>
{/* <AddIncome/> */}
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
                        <tr key={index} className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                            <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                ${item.amount}
                            </td>
                            <td className="px-6 py-4">
                                {item.category}
                            </td>
                            <td className="px-6 py-4">
                                {item.date}
                            </td>
                        </tr>
                    ))}
        </tbody>
    </table>
</div>
</div>

  )
}

export default IncomeBoard
