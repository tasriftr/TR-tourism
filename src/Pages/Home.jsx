import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import TouristSpot from "../Components/TouristSpot";
import Country from "../Components/Country";
import Slider from "../Components/Slider";
import Season from "../Components/Season";
import { Fade } from "react-awesome-reveal";
import toast from "react-hot-toast";

const Home = () => {
  const subs = () => {
    toast.success("You are subscribed");
  };
  const image =
    "https://www.thebanjomountain.com/wp-content/uploads/2021/04/Foggy-Mountains.jpg";
  const { user } = useContext(AuthContext);
  const spots = useLoaderData();
  console.log(user);
  return (
    <div className="w-full mx-auto">
      {/* <p className="dark:text-blue-400 text-red-600 text-6xl font-bold">
        hi how are u
      </p> */}
      {/* <h1 className="bg-gradient-to-r from-[#757067] via-[#3F3B32] to-[#302C25] inline-block text-transparent bg-clip-text font-semibold text-xl md:text-2xl lg:text-3xl text-center   mb-2">
        Hello {user.displayName}
      </h1> */}

      {/* <p>{user?.email}</p> */}
      <Slider></Slider>
      <TouristSpot spots={spots}></TouristSpot>
      <Country></Country>
      <Season></Season>

      <Fade>
        <div
          style={{ "--image-url": `url(${image})` }}
          className="bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center flex    flex-col  rounded-xl     flex-1 justify-between mx-auto w-full   text-center cursor-pointer h-96"
        >
          <div className="bg-gray-900   dark:bg-opacity-50 bg-opacity-20 w-full h-full p-5 hover:backdrop-blur-lg  rounded-xl flex flex-col flex-1 justify-center items-center ">
            <Fade direction="down">
              <div>
                <h3 className="font-bold text-blue-200 text-3xl">Subscribe</h3>
                <p className="text-blue-100 mb-5">Get updated with our deals</p>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="join">
                <input
                  className="input input-bordered join-item"
                  placeholder="Email"
                  type="email"
                  required
                />
                <button onClick={subs} className="btn join-item rounded-r-full">
                  Subscribe
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
