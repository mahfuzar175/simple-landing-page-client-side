import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/sbH6T2y/management.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Welcome To <br /><span className="text-pink-500 text-5xl">QuickTask Hub</span></h1>
            <p className="mb-5">
            Efficient task management website, boasting a user-friendly interface for seamless organization and prioritization.
            </p>
            <Link to='/dashboard'><div data-aos="fade-left" data-aos-duration="500"><button className="btn btn-primary">Let's Explore</button></div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
