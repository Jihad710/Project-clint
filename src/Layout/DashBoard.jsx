import { NavLink, Outlet } from 'react-router-dom';

import { FcAddDatabase  , FcServices } from "react-icons/fc";
import { MdLibraryBooks, MdOutlineManageAccounts } from "react-icons/md";
import { FaHome } from 'react-icons/fa';
import {  AiOutlineBook } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";
import Navbar from '../Pages/Shared/Navbar/Navbar';
import useAdmin from '../components/hooks/useAdmin';
import useInstructor from '../components/hooks/useInstructor';




const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  
  console.log('isAdmin',isAdmin,'isInstructor',isInstructor)
return (
    <>
    <Navbar/>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center overflow-auto">
          <label htmlFor="my-drawer-2" className="lg:hidden text-center btn w-1/3 mx-auto">
          
          </label>
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-black text-base-100">
          {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home" activeClassName="text-neutral">
                    <FaHome className="text-3xl" />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers" activeClassName="text-neutral">
                    <RiSettings4Line className="text-3xl" />
                    Manage User
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClasses" activeClassName="text-neutral">
                    <MdOutlineManageAccounts className="text-3xl" />
                    Manage Classes
                  </NavLink>
                </li>
                
               
              </>
               ) :
                isInstructor ? (
              
              
              
              <>
            <div className="divider"></div>
                <li>
                  <NavLink to="/dashboard/home" activeClassName="text-neutral">
                    <FaHome className="text-3xl" />
                    Instructor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addaclass" activeClassName="text-neutral">
                    <FcAddDatabase className="text-3xl" />
                    Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses" activeClassName="text-neutral">
                    <FcServices className="text-3xl" />
                    My Classes
                  </NavLink>
                </li>
              </>
    ) : (
              
              <>
              <div className="divider"></div>
                <li>
                  <NavLink to="/dashboard/home" activeClassName="text-neutral">
                    <FaHome className="text-3xl" />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/selectedClasses" activeClassName="text-neutral">
                    <AiOutlineBook className="text-3xl" />
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledClasses" activeClassName="text-neutral">
                    <MdLibraryBooks className="text-3xl" />
                    My Enrolled Classes
                  </NavLink>
                </li>
              </>
       )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
