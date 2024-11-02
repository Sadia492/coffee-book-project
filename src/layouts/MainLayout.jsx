import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>

        <div className="min-h-[calc(100vh-228px)] py-12 container mx-auto px-12">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
