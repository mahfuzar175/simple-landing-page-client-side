import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import CreateTask from "../../components/CreateTask";
import useAuth from "./../../hooks/useAuth";

import useToDoList from "../../hooks/useToDoList";
import ListTasks from "../../components/ListTasks";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { user } = useAuth();
  const userName = user.displayName;
  const userProfilePic = user.photoURL;
  const [tasks, setTasks] = useState([]);
  const [toDo, refetch] = useToDoList();

  const handleTaskAdded = () => {
    // Trigger the refetch of the toDo list
    refetch();
  };

  return (
    <div className="flex">
       <Helmet>
            <title>QuickTask Hub | Dashboard</title>
            </Helmet>
      <div className="w-64 min-h-screen bg-gray-100 border border-gray-400 rounded">
        <h2 className="text-center w-full font-bold text-xl bg-pink-600 text-white font-serif border p-4 mb-4">
          QuickTask Hub
        </h2>
        <div className="flex gap-2 flex-col justify-center items-center">
          <div className="w-16 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={userProfilePic} />
          </div>
          <a className="font-semibold text-sm">{userName}</a>
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
      <DndProvider backend={HTML5Backend}>
      <div className="w-screen min-h-screen pt-8 flex flex-col items-center gap-8">
        <CreateTask
          tasks={tasks}
          setTasks={setTasks}
          onTaskAdded={handleTaskAdded}
        ></CreateTask>

        <div className="flex flex-col gap-4">
            <ListTasks tasks={tasks} setTasks={setTasks} toDo={toDo}></ListTasks>
        </div>
      </div>
      </DndProvider>
    </div>
  );
};

export default Dashboard;
