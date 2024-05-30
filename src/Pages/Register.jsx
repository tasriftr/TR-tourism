import { useContext, useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import mountain from "/mountain.svg";
import { IoMdPhotos } from "react-icons/io";
import SocialLogin from "../Components/SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [registerError, setRegisterError] = useState("");

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    const name = form.name.value;
    if (password.length < 6) {
      setRegisterError("Password must be more then or equal to 6 character");
      return;
    } else if (!/(?=.*[A-Z])(?=.*[a-z])/.test(password)) {
      setRegisterError(
        "Password contain at least one uppercase and lower case character"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, image);
        navigate(from);
      })
      .catch((error) => console.log(error.message));
  };
  const showPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between w-full h-screen animated-bg lg:px-32 md:px-2 gap-5">
      <div className="dark:bg-gray-800 bg-gray-200 px-6 py-8 rounded-xl ">
        <h3 className="text-3xl mx-auto text-center font-semibold">Register</h3>
        <div className="w-10/12 mx-auto border-t border mt-4 border-gray-300 "></div>
        <form
          onSubmit={handleRegister}
          className="p-5 flex flex-col space-y-2 "
        >
          <label className="input input-bordered flex items-center gap-2 dark:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow dark:bg-gray-700  h-full w-full"
              placeholder="Username"
              defaultValue=""
              name="name"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 dark:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow dark:bg-gray-700"
              placeholder="Email"
              name="email"
              required
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 dark:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type={showPass ? "text" : "password"}
              className="grow dark:bg-gray-700"
              placeholder="Password"
              defaultValue=""
              name="password"
              required
            />
            <div className="cursor-pointer" onClick={showPassword}>
              {showPass ? <FaEyeSlash /> : <FaRegEye />}
            </div>
          </label>

          <label className="input input-bordered flex items-center gap-2 dark:bg-gray-700">
            <IoMdPhotos />

            <input
              type="text"
              className="grow"
              placeholder="Photo url"
              name="image"
            />
          </label>

          <input
            className="btn w-full dark:bg-blue-900 dark:text-gray-50 border-none"
            type="submit"
            value="Register"
          />
          {registerError && <p className="text-red-700">{registerError}</p>}
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline font-bold">
            Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
      <div className="w-[400px] md:w-[500] lg:w-[600px]">
        <img src={mountain} alt="" />
        <h4 className="font-medium md:font-bold text-3xl text-center tracking-widest mt-2">
          Your Tour Start Here
        </h4>
      </div>
    </div>
  );
};

export default Register;
