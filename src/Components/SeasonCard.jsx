import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SeasonCard = ({ season }) => {
  const { name, image } = season;

  return (
    <Fade>
      <div
        style={{ "--image-url": `url(${image})` }}
        className="bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center flex    flex-col  rounded-xl  max-w-[550px]   flex-1 justify-between mx-auto hover:scale-[102%] transition-all   text-center cursor-pointer min-h-52"
      >
        <div className="bg-gray-900   bg-opacity-40  w-full h-full p-5 hover:backdrop-blur-lg  rounded-xl flex flex-col flex-1 justify-center gap-3">
          <Fade direction="down">
            {" "}
            <h3 className="text-2xl  text-blue-100 mb-3 font-semibold [text-shadow:_0_1px_0_var(--tw-shadow-color)]">
              {name}
            </h3>
          </Fade>

          <Fade direction="up">
            <Link
              to={`/season/${name}`}
              className="bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 btn w-40 mx-auto border-none text-gray-200  transition-all mb-4  border"
            >
              View Details
            </Link>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default SeasonCard;
