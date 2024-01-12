import React from "react";

export const Recipe = ({ recipie }) => {
  return (
    <article>
      <h2>{recipie.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipie.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ul>
        {recipie.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>
      <img src={recipie.image} style={{ width: "50%" }} alt={recipie.name} />
    </article>
  );
};
