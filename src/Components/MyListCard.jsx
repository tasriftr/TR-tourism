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
import Swal from "sweetalert2";

const MyListCard = ({ spot, setSpots, spots }) => {
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
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirmed");
        fetch(`https://tr-tourism.vercel.app/spot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = spots.filter((spt) => spt._id !== _id);
              setSpots(remaining);
            }
          });
      }
    });
  };
  return (
    <Fade>
      <div className="flex   flex-col  rounded-xl  shadow-lg max-w-[450px] bg-[#F5F5F7]  flex-1 justify-between mx-auto hover:scale-[101%] transition-all hover:bg-[#f7f6f4] dark:bg-[#161b22]  hover:dark:bg-gray-800 hover:shadow-md">
        <div className="p-5">
          <img className="rounded-md h-72 object-cover" src={image} alt="" />
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
            {short_description.length > 150
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
              <p className="font-web text-gray-700 font-semibold text-2xl tracking-widest	dark:text-blue-400">
                {totalVisitorsPerYear} Visitor/Year
              </p>
            </Fade>
          </div>

          <div className="px-5 mt-3 mb-5 flex gap-3 justify-center ">
            <Link
              to={`updatespot/${_id}`}
              className="bg-[#0071e3] text-white font-semibold mb-2 flex items-center px-7 rounded-full hover:scale-105 transition-transform py-2"
            >
              Update
            </Link>
            <button
              className="border border-[#06c] text-[#06c] ont-semibold mb-2 flex items-center px-7 rounded-full hover:scale-105 transition-transform py-2"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MyListCard;
