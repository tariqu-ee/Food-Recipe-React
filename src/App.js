import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./recipes";

function App() {
  const App_Api = "a19e2d6c";
  const App_Key = "7389537dd0d5111cb1b0c249bb08d944	";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    getRecepies();
  }, [query]);

  const getRecepies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_Api}&app_key=${App_Key}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="app-form">
        <input className="form-input" value={search} onChange={updateSearch} />
        <button className="form-button"> Search </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
