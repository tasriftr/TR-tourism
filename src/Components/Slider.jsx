// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../public/slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Slider = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://tr-tourism.vercel.app/country")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const slideContent = (image, name, des) => {
    return (
      <div
        style={{ "--image-url": `url(${image})` }}
        className="bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center object-cover w-full h-full flex flex-col justify-center items-center "
      >
        <div className="bg-gray-900 text-white  dark:bg-opacity-40 bg-opacity-60 w-full h-full px-5 py-10 md:py-28 lg:py-44 hover:backdrop-blur-sm  rounded-xl flex flex-col  justify-center gap-4 ">
          <h3 className="text-3xl md:text-5xl font-bold text-blue-100">
            <span>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[name]}
                loop={0 | false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <p className="font-lg md:font-xl">
            Lets go to{" "}
            <span>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Tour", "Dream", "Refreshment", "Peace!"]}
                loop={0 | false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <Fade>
            <p className="text-gray-200 text-sm  md:text-base lg:text-lg ">
              {des.length > 150 ? `${des.slice(0, 150)}...` : des}
            </p>
          </Fade>
        </div>
      </div>
    );
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {countries.map((country) => (
          <SwiperSlide key={country._id + 12}>
            {() =>
              slideContent(
                country.country_image,
                country.country_name,
                country.country_des
              )
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
