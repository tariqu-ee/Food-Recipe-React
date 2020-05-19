import React from "react";
import "./App.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="main-recipe">
      <div className="recipe">
        <img className="recipe-img" src={image} />
        <h2>{title}</h2>
        <ol style={{ listStyle: "none" }}>
          {ingredients.map((ing) => (
            <li>{ing.text}</li>
          ))}
        </ol>
        <p style={{ marginTop: "10px" }}>
          <strong> Calories : </strong> {calories}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
