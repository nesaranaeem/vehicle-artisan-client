import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
