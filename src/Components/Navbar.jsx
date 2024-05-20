import { NavLink } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">All spot</NavLink>
      </li>
      <li>
        <NavLink to="/">Add spot</NavLink>
      </li>
      <li>
        <NavLink to="/">My List</NavLink>
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
    <div className="navbar mt-2">
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
        <div className="flex items-center">
          <DarkModeToggle></DarkModeToggle>
        </div>
        {user && (
          <button
            onClick={handleLogout}
            className="px-3 py-2 dark:bg-gray-500 bg-slate-300 ml-3 rounded-md"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
