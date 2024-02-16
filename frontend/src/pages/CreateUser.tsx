import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';
const CreateUser = () => {
 
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
    });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`user/register/`, {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then((res) => {
        navigate('/login');
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div className='mt-10'>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input name='email' type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" value={formData.email} required onChange={handleChange} />
  </div>
  <div className="mb-5">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    <input name='username' type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" value={formData.username}  required onChange={handleChange} />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input name='password' type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  value={formData.password}  required onChange={handleChange} />
  </div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

    </div>
  )
}

export default CreateUser
