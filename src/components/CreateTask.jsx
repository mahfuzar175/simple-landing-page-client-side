// import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2"; // Assuming you are using SweetAlert2
// import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (user && user.email) {
      const listItems = {
        email: user.email,
        title: data.title,
        descriptions: data.descriptions,
        deadlines: data.deadlines,
        priority: data.priority,
      };

      axiosSecure.post("/tasks", listItems)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Task Added",
              showConfirmButton: false,
              timer: 1500,
            });
            // Reset the form after successful submission
            reset();
          } else {
            // Handle server response indicating failure
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        })
        .catch((error) => {
          // Handle Axios errors here
          console.error("Error submitting form:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Title*</span>
          </div>
          <input
        //   onChange={(data) => setTask({...task, id: uuidv4(), name: data.target.value})}
            type="text"
            placeholder="Title Name"
            {...register("title")}
            required
            className="input input-bordered w-full "
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Descriptions*</span>
          </div>
          <input
            type="text"
            placeholder="Descriptions"
            required
            {...register("descriptions")}
            className="input input-bordered w-full "
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Deadlines*</span>
          </div>
          <input
            type="text"
            required
            placeholder="Deadlines"
            {...register("deadlines")}
            className="input input-bordered w-full "
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Priority*</span>
          </div>
          <select defaultValue="default"
          {...register("priority")}
          className="select select-bordered w-full"
        >
          <option disabled value="default">
            Select Priortiy
          </option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
        </label>
        </div>
        
        
        <div className="flex justify-end my-2"><button className="btn btn-primary rounded-none">Add Task</button></div>
      </form>
    </div>
  );
};

export default CreateTask;
