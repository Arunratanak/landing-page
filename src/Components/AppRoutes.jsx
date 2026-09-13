import { Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import CategoryPage from "./Categorypage.jsx";
// Old local menu data imports:
// import { khmerCuisines } from "./data/khmerCuisine";
// import { westernFood } from "./data/westernFood";
// import { drinks } from "./data/drinks";
// import { desserts } from "./data/dessert";
import Khmercuisine from "./Khmercuisine.jsx";
import Westernfoods from "./Westernfood.jsx";
import Drinks from "./Drinks.jsx";
import Desserts from "./Desserts.jsx";

// Match API recipes to menu names before filling any remaining menu slots.
const menuMatchers = {
  khmer: /cambodian|khmer|amok|lok lak|prahok|num banh|banh chok/i,
  western: /american|italian|french|greek|spanish|mexican|burger|pizza|pasta|steak/i,
  drinks: /drink|juice|smoothie|coffee|tea|cocktail|beverage/i,
  desserts: /dessert|cake|cookie|pudding|ice cream|sweet|pie|tart|brownie/i,
};

function recipeText(recipe) {
  return [
    recipe.name,
    recipe.cuisine,
    ...(recipe.tags ?? []),
    ...(recipe.mealType ?? []),
  ].join(" ");
}

function normalizeRecipe(recipe) {
  return {
    id: recipe.id,
    image: recipe.image,
    name: recipe.name,
    description: recipe.instructions?.[0] ?? `${recipe.cuisine} recipe`,
    price: ((recipe.id % 9) + 1.99).toFixed(2),
  };
}

function buildMenus(recipes) {
  const availableRecipes = recipes.map(normalizeRecipe);
  const menuEntries = Object.entries(menuMatchers);
  const menus = Object.fromEntries(menuEntries.map(([menu]) => [menu, []]));
  const usedIds = new Set();

  menuEntries.forEach(([menu, matcher]) => {
    availableRecipes
      .filter((recipe) => !usedIds.has(recipe.id) && matcher.test(recipeText(recipe)))
      .slice(0, 7)
      .forEach((recipe) => {
        menus[menu].push(recipe);
        usedIds.add(recipe.id);
      });
  });

  const unusedRecipes = availableRecipes.filter((recipe) => !usedIds.has(recipe.id));
  menuEntries.forEach(([menu]) => {
    while (menus[menu].length < 7 && unusedRecipes.length > 0) {
      menus[menu].push(unusedRecipes.shift());
    }
  });

  return menus;
}

function AppRoutes({ recipes, isLoading, error, onAddToCart }) {
  // Old cart handler lived inside this component without access to App state:
  // const handleAddToCart = (price) => {
  //   setCartCount((count) => count + 1);
  //   setCartTotal((total) => total + Number(price));
  // };

  if (isLoading) {
    return (
      <main className="flex min-h-96 items-center justify-center">
        <span className="loading loading-spinner loading-lg" aria-label="Loading recipes" />
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-96 items-center justify-center px-4">
        <div role="alert" className="alert alert-error max-w-lg">
          <span>{error}</span>
        </div>
      </main>
    );
  }

  const menus = buildMenus(recipes);

  return (
    <Routes>
      <Route path="/" element={<Hero />} />

      <Route
        path="/khmer-cuisine"
        element={
          <CategoryPage
            title="Khmer Cuisine"
            items={menus.khmer}
            CardComponent={Khmercuisine}
            onAddToCart={onAddToCart}
          />
        }
      />

      <Route
        path="/western-food"
        element={
          <CategoryPage
            title="Western Food"
            items={menus.western}
            CardComponent={Westernfoods}
            onAddToCart={onAddToCart}
          />
        }
      />

      <Route
        path="/drinks"
        element={
          <CategoryPage
            title="Drinks"
            items={menus.drinks}
            CardComponent={Drinks}
            onAddToCart={onAddToCart}
          />
        }
      />

      <Route
        path="/desserts"
        element={
          <CategoryPage
            title="Desserts"
            items={menus.desserts}
            CardComponent={Desserts}
            onAddToCart={onAddToCart}
          />
        }
      />
    </Routes>
  );
}


export default AppRoutes