import { useState } from "react";
import "./index.css";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Food from "./Components/Food.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddToCart = (price) => {
    setCartCount((count) => count + 1);
    setCartTotal((total) => total + Number(price));
  };

  const handleScroll = (sectionId) => {
    if (sectionId === "food-hub") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.getElementById(sectionId);
    const navigation = document.querySelector("nav");

    if (section) {
      const navigationHeight = navigation?.getBoundingClientRect().height ?? 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - navigationHeight - 8,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="pt-40 lg:pt-28">
      <div>
        <Header
          onScrollClick={handleScroll}
          cartCount={cartCount}
          cartTotal={cartTotal}
        />
      </div>

      <div>
        <Hero></Hero>
      </div>

      <div>
        <Food onAddToCart={handleAddToCart} />
      </div>

      <div>
        <Footer></Footer>
      </div>
    </main>
  );
}

export default App;
