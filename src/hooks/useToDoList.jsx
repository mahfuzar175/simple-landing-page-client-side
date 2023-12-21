import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useToDoList = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: toDo=[]} = useQuery({
        queryKey: ['toDoList', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/tasks?email=${user.email}`)
            return res.data;
        }
    })
    return [toDo, refetch]
};

export default useToDoList;