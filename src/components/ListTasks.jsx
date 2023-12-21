import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const ListTasks = ({ tasks, setTasks, toDo }) => {
  // const { title, _id } = item;
  const [todos, setTodos] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fTodos = toDo.filter((task) => task.status === "todo");
    const fOnGoing = toDo.filter((task) => task.status === "ongoing");
    const fCompleted = toDo.filter((task) => task.status === "completed");

    setTodos(fTodos);
    setOnGoing(fOnGoing);
    setCompleted(fCompleted);
  }, [toDo]);

  const statuses = ["todo", "ongoing", "completed"];

  return (
    <div className="flex flex-col md:flex-row gap-16">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          onGoing={onGoing}
          completed={completed}
        />
      ))}
    </div>
  );
};

export default ListTasks;

const Section = ({ status, tasks, setTasks, todos, onGoing, completed }) => {

    const [{ isDer }, drop] = useDrop(() => ({
       accept: "task",
        drop: (item) => addItemSection,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))


  let text = "Todo";
  let bg = "bg-slate-500";
  let tasksToMap = todos;

  if (status === "ongoing") {
    text = "On Going";
    bg = "bg-purple-500";
    tasksToMap = onGoing;
  }

  if (status === "completed") {
    text = "Completed";
    bg = "bg-green-500";
    tasksToMap = completed;
  }

  return (
    <div className={`w-64`}>
      <Header text={text} bg={bg} count={tasksToMap.length}></Header>
      {tasksToMap.length > 0 &&
        tasksToMap.map((task) => (
          <Task
            key={task._id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          ></Task>
        ))}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    >
      {text}{" "}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex justify-center items-center">
        {count}
      </div>
    </div>
  );
};

const Task = ({ task, tasks, setTasks }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

  return (
    <div ref={drag} className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging ? "opacity-25" : "opacity-100"}`}>
      {task.title}
    </div>
  );
};
