import { Recipes } from "./components/Recipes";

export const App = () => {
  return (
    <main className="container">
      <article>
        <h1>Welcome to the world of Recipes</h1>
      </article>
      <Recipes />
    </main>
  );
};
