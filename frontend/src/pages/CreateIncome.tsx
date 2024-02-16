import React, { useContext, useState } from "react";
import axiosInstance from "../axios";
import UserContext from "../context/UserContext";

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

    return (
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
    );
};

export default CreateIncome;
