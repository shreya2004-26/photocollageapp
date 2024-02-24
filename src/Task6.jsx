import React, { useState } from "react";
import "./App.css";
import ImageCard from "./ImageCard";
import dishesDB from "./DB/dishes";
const Task6 = () => {
  const [dishes, setDishes] = useState(dishesDB);
  const handleBreakfast = () => {
    const newDishArr = dishesDB.filter((curr, index) => {
      return curr.category === "Breakfast";
    });
    setDishes(newDishArr);
  };
  const handleLunch = () => {
    const newDishArr = dishesDB.filter((curr, index) => {
      return curr.category === "Lunch";
    });
    setDishes(newDishArr);
  };
  const handleDinner = () => {
    const newDishArr = dishesDB.filter((curr, index) => {
      return curr.category === "Dinner";
    });
    setDishes(newDishArr);
  };
  const handleAll = () => {
    setDishes(dishesDB);
  };
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <div className="container1">
            <p>Order You Favourite Dish</p>
            <div className="container11">
              <button onClick={handleBreakfast}>Breakfast</button>
              <button onClick={handleLunch}>Lunch</button>
              <button onClick={handleDinner}>Dinner</button>
              <button onClick={handleAll}>All</button>
            </div>
          </div>
          <div className="container2">
            {dishes.map((curr, index) => {
              return (
                <ImageCard
                  key={index}
                  imgSrc={curr.imgSrc}
                  heading={curr.name}
                  para1={curr.description}
                  price={curr.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Task6;
