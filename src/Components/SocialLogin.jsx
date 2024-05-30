import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import google from "/google.png";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex flex-col justify-around gap-2 p-4">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn text-white  bg-black w-full rounded-full border-none"
        >
          {" "}
          <img className="w-5" src={google} alt="" />
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn text-white  bg-black w-full rounded-full border-none hover:bg-none hover:border-black"
        >
          <FaGithub className="text-gray-300" size={20}></FaGithub>
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
