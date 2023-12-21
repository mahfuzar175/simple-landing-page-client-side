import { useContext } from "react";
import {
    FaHome,
  } from "react-icons/fa";
  import { FcHome } from "react-icons/fc";
  import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

  const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const userName = user.displayName;
    const userProfilePic = user.photoURL;
  
    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-gray-100 border border-gray-400 rounded">
          <h2 className="text-center w-full font-bold text-xl bg-pink-600 text-white font-serif border p-4 mb-4">
          QuickTask Hub
          </h2>
          <div className="flex gap-2 flex-col justify-center items-center">
          <div className="w-16 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userProfilePic} />
        </div>
        <a className="font-semibold text-sm">
            {userName}
          </a>
          </div>
          <ul className="menu p-4">
            <li>
              <NavLink to="/dashboard">
                <FcHome></FcHome> Dashboard
              </NavLink>
            </li>
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> HOME
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    );
  };
  
  export default Dashboard;