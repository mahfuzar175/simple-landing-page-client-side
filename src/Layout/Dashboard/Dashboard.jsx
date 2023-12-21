import { useState } from "react";
import {
    FaHome,
  } from "react-icons/fa";
  import { FcHome } from "react-icons/fc";
  import { NavLink } from "react-router-dom";
import CreateTask from "../../components/CreateTask";
import ListTasks from "../../components/ListTasks";
import useAuth from './../../hooks/useAuth';

  const Dashboard = () => {
    const { user } = useAuth();
    const userName = user.displayName;
    const userProfilePic = user.photoURL;
    const [tasks, setTasks] = useState([]);
  
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
        <div className="w-screen h-screen pt-8 flex flex-col items-center gap-8">
          <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
          <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
        </div>
      </div>
    );
  };
  
  export default Dashboard;