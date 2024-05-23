import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { country_name, country_des, country_image } = country;
  const image =
    "https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg";
  return (
    <div
      style={{ "--image-url": `url(${country_image})` }}
      className="bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center flex    flex-col  rounded-xl  max-w-[450px]   flex-1 justify-between mx-auto hover:scale-[102%] transition-all   text-center "
    >
      <div className="bg-gray-900 bg-opacity-40 w-full h-full p-5 hover:backdrop-blur-lg  rounded-xl flex flex-col flex-1 justify-between">
        <h3 className="text-xl font-semibold [text-shadow:_0_1px_0_var(--tw-shadow-color)]">
          {country_name}
        </h3>
        <p>{country_des}</p>
        <Link
          to={`spotdetails/${country_name}`}
          className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 btn w-40 mx-auto border-none text-gray-200  transition-all mb-2  border"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
