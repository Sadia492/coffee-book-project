import React from "react";
import { useParams } from "react-router-dom";

export default function CoffeeCard() {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <h2>coffee card</h2>
    </div>
  );
}
