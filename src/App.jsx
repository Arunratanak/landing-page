import { useEffect, useState } from "react";
import "./index.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx"
import AppRoutes from "./Components/AppRoutes.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=30")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load recipes.");
        }
        return response.json();
      })
      .then((data) => setRecipes(data.recipes ?? []))
      .catch((requestError) => setError(requestError.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleAddToCart = (item) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header
          cartItems={cartItems}
          onUpdateCart={setCartItems}
        />
        <Routes>
          <Route
            path="*"
            element={
              <AppRoutes
                recipes={recipes}
                isLoading={isLoading}
                error={error}
                onAddToCart={handleAddToCart}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
