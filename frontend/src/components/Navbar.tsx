import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import {CgDarkMode} from 'react-icons/cg'

const Navbar = () => {
  const {isLoggedIn}=useContext(UserContext)
  const handleDarkModeToggle = () => {
    document.body.classList.toggle('dark');
  };
  
  
  return (
    <div>
      <div className="navbar  backdrop-filter backdrop-blur-lg">
        <div className="flex-1">
          <h1 className="btn btn-ghost text-xl font-bold text-blue-600 dark:text-blue-500">FinTrack</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
          <li><button className="w-10" onClick={handleDarkModeToggle}>
           <CgDarkMode className="w-7 h-7 text-black dark:text-white"/>
           </button></li>
            {isLoggedIn ? (
              <>
                <li className='text-black dark:text-white'><Link to="/logout">Logout</Link></li>
             
              </>
            ) : (
              <li className='text-black dark:text-white'><Link to="/login">Login</Link></li>
            )}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
