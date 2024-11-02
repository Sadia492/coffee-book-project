import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

export default function Coffees() {
  const coffees = useLoaderData();
  const [coffee, setCoffees] = useState(coffees);

  const handleSort = (sortBy) => {
    if (sortBy == "popularity") {
      // sort by popularity
      const sorted = [...coffee].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
      console.log(sorted);
    } else if (sortBy == "rating") {
      const sorted = [...coffees].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-thin">
          Sort Coffee&apos;s by Popularity & Rating-&gt;
        </h1>
        <div className="space-x-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort By Popularity (DSC)
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning"
          >
            Sort By Rating (ASC)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
}
