import React from "react";
import Navbar from "../pages/user/Navbar";
import Footer from "../pages/user/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders child routes */}
      <Footer />
    </>
  );
};

export default UserLayout;
