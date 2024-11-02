import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

export default function CoffeeCard() {
  const [categoryCoffee, setCategoryCoffee] = useState([]);
  const { category } = useParams();
  const coffees = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const selectedCategory = coffees.filter(
        (coffee) => coffee.category === category
      );
      setCategoryCoffee(selectedCategory);
    } else {
      setCategoryCoffee(coffees.slice(0, 6));
    }
  }, [category, coffees]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {categoryCoffee.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button className="btn btn-warning" onClick={() => navigate("/coffees")}>
        View all
      </button>
    </div>
  );
}
