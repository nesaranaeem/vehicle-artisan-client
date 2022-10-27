import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Homepage.css";
// import required modules
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

const HomePage = () => {
  SwiperCore.use([Autoplay]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://vehicle-artisan-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    // slider start
    <div>
      <Swiper
        loop={true}
        autoplay={{ delay: 8000 }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "blue",
        }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="hero w-full md:w-1/2 bg-neutral-focus">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Vehicle Artisan</h1>
                <p className="py-6">
                  Learn Vehicle Repairing With Vehicle Artisan
                </p>
                <Link to="/tutorials" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {categories.map((category) => (
          <SwiperSlide key={category.categoryId}>
            <div className="card w-96 bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={category.categoryImage}
                  alt="Car"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center text-gray-900">
                <h2 className="card-title">{category.categoryName}</h2>
                <p>{category.categoryDescription}</p>
                <div className="card-actions">
                  <Link to="/tutorials" className="btn btn-primary">
                    Get Tutorial
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    // slider end
  );
};

export default HomePage;
