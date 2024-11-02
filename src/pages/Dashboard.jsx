import React, { useEffect, useState } from "react";
import { getFavoritesFromLs, removeFromLs } from "../Utilities/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Heading from "../components/Heading";

export default function Dashboard() {
  const [coffee, setCoffee] = useState([]);
  const coffees = useLoaderData();

  useEffect(() => {
    if (coffees.length) {
      const favorites = getFavoritesFromLs();
      const storedFavorite = [];
      for (const id of favorites) {
        const selectedFavorites = coffees.find((coffee) => coffee.id === id);
        if (selectedFavorites) {
          storedFavorite.push(selectedFavorites);
        }
      }
      setCoffee(storedFavorite);
    }
  }, [coffees]);
  const handleRemove = (id) => {
    const remaining = coffee.filter((coffee) => coffee.id !== id);
    setCoffee(remaining);

    removeFromLs(id);
  };
  return (
    <div>
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={
          "Manage coffees that you have previously added as favorite. You can view or remove them from here."
        }
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffee.map((single) => (
          <Card
            handleRemove={handleRemove}
            key={single.id}
            coffee={single}
          ></Card>
        ))}
      </div>
    </div>
  );
}
