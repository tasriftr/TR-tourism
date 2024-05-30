import { Fade } from "react-awesome-reveal";
import { FaD } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { country_name, country_des, country_image } = country;

  return (
    <Fade>
      <div
        style={{ "--image-url": `url(${country_image})` }}
        className="bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center flex    flex-col  rounded-xl  max-w-[550px]   flex-1 justify-between mx-auto hover:scale-[102%] transition-all   text-center cursor-pointer "
      >
        <div className="dark:bg-gray-900 bg-white  dark:bg-opacity-40 bg-opacity-60 w-full h-full p-5 hover:backdrop-blur-lg  rounded-xl flex flex-col flex-1 justify-between">
          <Fade direction="down">
            {" "}
            <h3 className="text-2xl text-black dark:text-blue-100 mb-3 font-semibold [text-shadow:_0_1px_0_var(--tw-shadow-color)]">
              {country_name}
            </h3>
          </Fade>
          <Fade>
            <p className="font-normal dark:text-white text-black mb-5">
              {country_des.length > 150
                ? `${country_des.slice(0, 150)}...`
                : country_des}
            </p>
          </Fade>
          <Fade direction="up">
            <Link
              to={`country/${country_name}`}
              //   className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 btn w-40 mx-auto border-none text-gray-200  transition-all mb-4  border"
              className="bg-[#0071e3] text-white font-semibold mb-2 flex items-center justify-center px-7 rounded-full  py-2 w-40 mx-auto"
            >
              View Details
            </Link>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default CountryCard;
