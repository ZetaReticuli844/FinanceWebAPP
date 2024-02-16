import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../axios'; // Import axiosInstance from appropriate location

const DeleteExpense = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axiosInstance.delete(`expense/${id}`); // Change 'income' to 'expense'
        console.log('Deleted successfully');
        navigate('/Home');
      } catch (error) {
        console.error('Error deleting:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function to cancel any pending operations
      // This will be executed when the component unmounts
      // You can add cleanup logic here if needed
    };
  }, [id]); // Dependency array including 'navigate'

  return null; // or any JSX if needed
};

export default DeleteExpense;
