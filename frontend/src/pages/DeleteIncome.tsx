import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
 // Import axiosInstance from appropriate location

const DeleteIncome = () => {
    const navigate=useNavigate()
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axiosInstance.delete(`income/${id}`);
        console.log('Deleted successfully');
        navigate('/Home')
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
  }, [id]); // Dependency array

  return null; // or any JSX if needed
};

export default DeleteIncome;
