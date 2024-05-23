// import { Navigate, useLocation } from "react-router-dom";
// import Loader from "../Components/Loader";

// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const loacation = useLocation();
//   //   const navigate = useNavigate();
//   if (loading) {
//     return <Loader></Loader>;
//   }
//   if (user) {
//     return children;
//   }
//   return <Navigate state={loacation.pathname} to={"/login"}></Navigate>;
// };

// export default PrivateRoute;
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [navigateToHome, setNavigateToHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      if (!loading) {
        setTimeout(() => {
          setIsLoading(false);
          return children;
        }, 1000); // 1 second delay
      }
    }
    if (!user) {
      if (loading) {
        setTimeout(() => {
          setNavigateToHome(true);
          setIsLoading(false);
          toast.error("You have to login first");
        }, 1000); // 1 second delay
      }
    }
  }, [loading, user, children]);

  if (isLoading) {
    return <Loader />;
  }

  if (navigateToHome) {
    return <Navigate to="/login" />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" />;
};

export default PrivateRoute;
