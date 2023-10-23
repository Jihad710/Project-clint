
import logo from '../../../assets/logo-default-131x43.png'

import { FaMoon, FaSun } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider';








const Navbar = () => {
const {user,logOut} = useContext(AuthContext);

const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = (e) => {
    e.preventDefault();
    toggleTheme();
    setIsDarkMode(!isDarkMode);

    const htmlElement = document.getElementById('html-theme');
    htmlElement.setAttribute('data-theme', theme)
  };



const handleLogOut = () => {
  logOut()
  .then(() => {})
  .catch(error => console.log(error))
}




  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
   
      
      <li><Link to='/instructors'>Instructors</Link></li>
      <li><Link to='/classes'>Classes</Link></li>
      
      <li><Link to="/dashboard/home">Dashboard </Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link>
        <button type="button" className='' onClick={handleToggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </Link></li>
        
     
      
      

      
     
    </>
   
  );
  return (
    <div className="navbar  z-10 bg-base-100 h-28 mb-4 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path

                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

              {navItems}
            </ul>
        </div>
      <div >
      <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
        <h2 className='ml-5 font-medium'>Music Course Agency</h2>
      </div>
        
       
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navItems}
        </ul>
      </div>
     <div className="navbar-end">
  {
    user ? (
      <>
        <div className="tooltip tooltip-left" data-tip={user?.displayName}>
          {
            user?.photoURL ? <img style={{ height: 50, width: 50 }} src={user.photoURL} className="rounded-full mx-5" /> : ""
          }
        </div>
        <button onClick={handleLogOut} className="btn btn-outline btn-warning">Logout</button>
      </>
    ) : (
      <>
        <li>
          <Link className='btn btn-outline btn-warning' to='/login'>Login</Link>
        </li>
      </>
    )
  }
</div>

    </div>
  );
};

export default Navbar;
