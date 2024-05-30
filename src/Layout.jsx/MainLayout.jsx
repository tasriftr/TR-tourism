import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="w-[96%] md:w-11/12 mx-auto lg:max-w-[1600px] flex flex-col items-center ">
        <Navbar></Navbar>

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
