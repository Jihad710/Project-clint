import { Link } from "react-router-dom";
import image from "../../assets/Banner/vocal-teacher-showing-breathing-and-singing-excerc-2021-09-24-04-29-09-utc.jpg";

const Blog = () => {
  return (
    
    <div className="flex flex-col md:flex-row">
        
      <div className="md:w-1/2">
        <img src={image} alt="" />
        <div className="mt-10 mb-5">
          <h2 className="text-3xl font-bold text-center mb-5">
            Vocal Practice
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col px-4 md:px-8 -5">
        <h2 className=" mb-3 text-xl font-normal">Recent News</h2>
        <div className="mt-7  ">
            <hr className="mb-5" />
        <div className="space-y-3 text-xl font-light">
        <li>
            <Link className="hover:text-green-400" to="/">Singing With Kindergarten</Link>
          </li>
          <li>
            <Link className="hover:text-green-400" to="/about">About Work Music</Link>
          </li>
          <li>
            <Link className="hover:text-green-400" to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link className="hover:text-green-400" to="/instructors">Band Music</Link>
          </li>
          <li>
            <Link className="hover:text-green-400" to="/instructors">Master Ceremony</Link>
          </li>
        </div>
        </div>
        <div className="mt-10 text-xl font-normal">
            <h2>Popular Post</h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
