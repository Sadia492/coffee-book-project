import React from "react";
import BannerImg from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${BannerImg})`,
      }}
    ></div>
  );
}
