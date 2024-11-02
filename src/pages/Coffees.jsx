import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

export default function Coffees() {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
  );
}
