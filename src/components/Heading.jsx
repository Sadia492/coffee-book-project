import React from "react";

export default function Heading({ title, subtitle }) {
  return (
    <div className="mt-8">
      <h2 className="text-3xl text-center">{title}</h2>
      <p className="font-thin text-center text-xl">{subtitle}</p>
    </div>
  );
}
