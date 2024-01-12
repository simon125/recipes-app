import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Recipe } from "./Recipe";

export const Recipes = () => {
  const [recipies, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/recipes?limit=15")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch(() => {
        console.error("Uups something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
      >
        <ClipLoader color="white" size={150} />
      </div>
    );
  }

  return (
    <>
      {recipies.map((recipie) => (
        <Recipe recipie={recipie} key={recipie.id} />
      ))}
    </>
  );
};
