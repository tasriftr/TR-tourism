import {
  CiDollar,
  CiHome,
  CiMap,
  CiMapPin,
  CiSliderVertical,
  CiSquareCheck,
} from "react-icons/ci";
import {
  FaBus,
  FaCanadianMapleLeaf,
  FaFlag,
  FaRegBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

// bg-[url(https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg)] bg-cover bg-no-repeat bg-center

const SpotCard = ({ spot }) => {
  const {
    name,
    country,
    location,
    average_cost,
    short_description,
    seasonality,
    travel_time,
    photo,
    user_name,
    _id,
    totalVisitorsPerYear,
  } = spot;
  const image = photo;
  return (
    // <Fade>
    //   <div className="flex   flex-col border-t border-l rounded-xl border-gray-300 shadow-lg max-w-[450px] bg-[#efeee9]  flex-1 justify-between mx-auto hover:scale-[102%] transition-all hover:bg-[#f7f6f4] dark:bg-gradient-to-r dark:from-[#141414] dark:from-10% dark:via-[#000809] dark:via-60% dark:to-[#001813] dark:to-90% dark:border dark:border-gray-800 hover:dark:bg-gray-800">
    //     <div className="p-5">
    //       <img className="rounded-md h-72 object-cover" src={image} alt="" />
    //     </div>
    //     <div className="flex flex-col px-5 gap-2">
    //       <h3 className="font-web dark:text-amber-400 text-emerald-700 text-2xl font-bold ">
    //         {name}
    //       </h3>

    //       <div className="flex gap-4 text-lg">
    //         <div className="flex gap-2 items-center dark:text-sky-600 text-sky-800">
    //           <FaFlag />

    //           <p>
    //             <span className="font-semibold"> Country: </span>
    //             {country}{" "}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="border-t  border-gray-600 border-dashed"></div>
    //       <p>
    //         "
    //         {short_description.length > 150
    //           ? `${short_description.slice(0, 150)}...`
    //           : short_description}
    //         "
    //       </p>
    //       <div className="flex gap-4">
    //         <div className="flex gap-2 items-center text-gray-700 dark:text-gray-200">
    //           <span className="font-semibold">
    //             {" "}
    //             <CiDollar />
    //           </span>
    //           <p>
    //             <span className="font-semibold"> Average Cost: </span>
    //             {average_cost} USD{" "}
    //           </p>
    //         </div>
    //         <div className="flex gap-1 items-center text-gray-700 dark:text-gray-200">
    //           <CiHome />
    //           <p>Status: {user_name}</p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-2">
    //         <div className="flex gap-3">
    //           <div className="flex gap-2 items-center text-gray-700 dark:text-gray-200">
    //             <FaBus />

    //             <p>
    //               {" "}
    //               <span className="font-semibold">Travel time: </span>
    //               {travel_time} hours
    //             </p>
    //           </div>
    //           <div className="flex gap-2 items-center ">
    //             <FaCanadianMapleLeaf />

    //             <p>
    //               <span className="font-semibold"> Seasonality: </span>
    //               {seasonality}{" "}
    //             </p>
    //           </div>
    //         </div>

    //         <div className="border-t  border-gray-600 border-dashed mb-1"></div>
    //         <div className="flex gap-1 items-center   w-fit px-4 py-2 rounded-lg border dark:border-none dark:bg-slate-800 border-gray-400">
    //           <CiMapPin />

    //           <p>
    //             {" "}
    //             <span className="font-semibold">Location: </span>
    //             {location}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full dark:border-b dark:border-l border-slate-500 rounded-b-xl bg-[#f7f6f4]  dark:bg-slate-800 flex flex-col text-gray-200 gap-2 mt-3 ">
    //       <div className="flex  gap-2 px-6  text-center mx-auto mt-5">
    //         <Fade direction="up">
    //           <p className="jaro-font text-gray-700 font-semibold text-2xl tracking-widest	dark:text-blue-400">
    //             {totalVisitorsPerYear} Visitor/Year
    //           </p>
    //         </Fade>
    //       </div>

    //       <div className="px-5 my-3">
    //         <Link
    //           to={`spotdetails/${_id}`}
    //           className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn w-full border-none text-gray-200 hover:bg-black transition-all mb-2  border"
    //         >
    //           View Details
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </Fade>
    <Fade>
      <div className="flex   flex-col  rounded-xl  shadow-lg max-w-[450px] bg-[#F5F5F7]  flex-1 justify-between mx-auto hover:scale-[101%] transition-all hover:bg-[#f7f6f4] dark:bg-[#161b22]  hover:dark:bg-gray-800 hover:shadow-md">
        <div className="w-full mb-4">
          <img
            className="rounded-t-xl w-full h-72 object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col px-5 gap-2">
          <h3 className="font-web dark:text-amber-400 text-emerald-700 text-2xl font-bold ">
            {name}
          </h3>

          <div className="flex gap-4 text-lg">
            <div className="flex gap-2 items-center dark:text-sky-600 text-sky-800">
              <FaFlag />

              <p>
                <span className="font-semibold"> Country: </span>
                {country}{" "}
              </p>
            </div>
          </div>
          <div className="border-t  border-gray-300 border"></div>
          <p>
            "
            {short_description?.length > 150
              ? `${short_description.slice(0, 150)}...`
              : short_description}
            "
          </p>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-200">
              <span className="font-semibold">
                {" "}
                <CiDollar />
              </span>
              <p>
                <span className="font-semibold"> Average Cost: </span>
                {average_cost} USD{" "}
              </p>
            </div>
            <div className="flex gap-1 items-center text-gray-700 dark:text-gray-200">
              <CiHome />
              <p>Status: {user_name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <div className="flex gap-2 items-center text-gray-700 dark:text-gray-200">
                <FaBus />

                <p>
                  {" "}
                  <span className="font-semibold">Travel time: </span>
                  {travel_time} hours
                </p>
              </div>
              <div className="flex gap-2 items-center ">
                <FaCanadianMapleLeaf />

                <p>
                  <span className="font-semibold"> Seasonality: </span>
                  {seasonality}{" "}
                </p>
              </div>
            </div>

            <div className="border-t  border-gray-600 border-dashed mb-1"></div>
            <div className="flex gap-1 items-center   w-fit px-4 py-2 rounded-lg border dark:border-none dark:bg-slate-800 border-gray-400">
              <CiMapPin />

              <p>
                {" "}
                <span className="font-semibold">Location: </span>
                {location}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full   rounded-b-xl bg-[#f7f6f4]  dark:bg-[#000000] flex flex-col text-gray-200 gap-2 mt-3 ">
          <div className="flex  gap-2 px-6  text-center mx-auto mt-5">
            <Fade direction="up">
              <p className="font-web text-gray-700 font-semibold text-2xl tracking-widest	dark:text-white">
                {totalVisitorsPerYear} Visitor/Year
              </p>
            </Fade>
          </div>

          <div className="px-5 my-3">
            <Link
              to={`/spotdetails/${_id}`}
              className="bg-[#0071e3] text-white font-semibold btn w-full border-none   transition-all mb-2 rounded-full "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SpotCard;
