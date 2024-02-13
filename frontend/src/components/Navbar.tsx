import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Navbar = () => {
  const {isLoggedIn}=useContext(UserContext)
  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">FinTrack</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {isLoggedIn ? (
              <>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="">Settings</Link></li>
              </>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
