import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: "https://simple-landing-page-server-side.vercel.app"
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;