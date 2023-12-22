import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Blog from "./Blog";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>QuickTask Hub | Home</title>
            </Helmet>
            <div>
            <Banner></Banner>
            <Blog></Blog>
            </div>
        </div>
    );
};

export default Home;