import React, { useState } from "react";
import "./App.css";
import ImageCard from "./ImageCard";
import dishesDB from "./DB/dishes";
const Task6 = () => {
  const [dishes, setDishes] = useState(dishesDB);
  // const handleBreakfast = () => {
  //   const newDishArr = dishesDB.filter((curr, index) => {
  //     return curr.category === "Breakfast";
  //   });
  //   setDishes(newDishArr);
  // };
  // const handleLunch = () => {
  //   const newDishArr = dishesDB.filter((curr, index) => {
  //     return curr.category === "Lunch";
  //   });
  //   setDishes(newDishArr);
  // };
  // const handleDinner = () => {
  //   const newDishArr = dishesDB.filter((curr, index) => {
  //     return curr.category === "Dinner";
  //   });
  //   setDishes(newDishArr);
  // };
  // const handleAll = () => {
  //   setDishes(dishesDB);
  // };

  const handleClick = (dishesType) => {
    if (dishesType === "All") {
      setDishes(dishesDB);
    } else {
      const newDishArr = dishesDB.filter((curr, index) => {
        return curr.category === dishesType;
      });
      setDishes(newDishArr);
    }
  };

  const btnDB = ["Breakfast", "Lunch", "Dinner", "All"];
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <div className="container1">
            <p>Order You Favourite Dish</p>
            {/* <div className="container11">
              <button onClick={() => handleClick("Breakfast")}>
                Breakfast
              </button>
              <button onClick={() => handleClick("Lunch")}>Lunch</button>
              <button onClick={() => handleClick("Dinner")}>Dinner</button>
              <button onClick={() => setDishes(dishesDB)}>All</button>
            </div> */}
            <div className="container11">
              {btnDB.map((curr, index) => {
                return (
                  <button key={index} onClick={() => handleClick(curr)}>
                    {curr}
                  </button>
                );
              })}
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
