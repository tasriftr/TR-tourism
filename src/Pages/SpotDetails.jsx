import React from "react";
import { Link, useLoaderData } from "react-router-dom";
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

const SpotDetails = () => {
  const spot = useLoaderData();
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
  return (
    <div className="flex w-full flex-col border rounded-xl border-gray-300 shadow-lg  bg-[#efeee9] flex-1 justify-between mx-auto hover:scale-[102%] transition-all hover:bg-[#f7f6f4] dark:bg-gradient-to-r dark:from-[#141414] dark:from-10% dark:via-[#000809] dark:via-60% dark:to-[#001813] dark:to-90% dark:border dark:border-gray-800 hover:dark:bg-gray-800">
      <div className="p-5">
        <img className="rounded-md " src={photo} alt="" />
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
        <div className="border-t  border-gray-600 border-dashed"></div>
        <p>"{short_description}"</p>
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
      <div className="w-full border-b border-slate-500 rounded-b-xl bg-slate-800 flex flex-col text-gray-200 gap-2 mt-3">
        <div className="flex  gap-2 px-6  text-center mx-auto mt-5">
          <p className="jaro-font text-blue-500">
            {" "}
            Total Visitor : {totalVisitorsPerYear}
          </p>
        </div>
        <div className="px-5 my-3">
          <Link
            to={`spotdetails/${_id}`}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn w-full border-none text-gray-200 hover:bg-black transition-all mb-2 "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
