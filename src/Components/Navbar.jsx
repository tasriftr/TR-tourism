import { NavLink } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  const userId = user?.email;

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">All spot</NavLink>
      </li>
      <li>
        <NavLink to="/addspot">Add spot</NavLink>
      </li>
      <li>
        <NavLink to={`/mylist/${userId}`}>My List</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar mt-2 mb-9">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <div>
            <div className="flex justify-center items-center">
              <img
                className="md:w-14 w-9"
                src="../../public/tr-tourism-round.svg"
                alt=""
              />
              <h1 className="font-bold md:text-3xl text-xl">tourism</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center hover:scale-105 font">
          <DarkModeToggle></DarkModeToggle>
        </div>

        {user && (
          <div className="flex justify-center ml-3">
            {user?.photoURL ? (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  className="w-8 h-8 rounded-full "
                  src={user.photoURL}
                  alt=""
                />
              </div>
            ) : (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  className="w-10 h-10 rounded-full dark:bg-gray-300"
                  src={
                    "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
                  }
                  alt=""
                />
              </div>
            )}
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  border-none text-gray-200 hover:bg-black transition-all  border ml-3 px-4 py-1 rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
