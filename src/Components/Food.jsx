import { khmerCuisines } from "../data/khmerCuisine";
import { westernFood } from "../data/westernFood";
import { drinks } from "../data/drinks";
import { desserts } from "../data/dessert";
import Khmercuisine from "./Khmercuisine";
import Westernfood from "./Westernfood";
import Drinks from "../Components/Drinks"
import Desserts from "./Desserts";

function Food({ onAddToCart }) {
  return (
    <>
      <div id="khmer-cuisine" className="mt-4 px-3 sm:px-4">
        <p className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">Khmer Cuisines</p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 sm:px-4 md:gap-6 lg:grid-cols-4">
        {khmerCuisines.map((element) => (
          <Khmercuisine
            image={element.image}
            name={element.name}
            description={element.description}
            price={element.price}
            addToCart={element.addToCartBtn}
            onAddToCart={() => onAddToCart(element.price)}
          />
        ))}
      </div>
      <div className="w-full h-2 bg-black" />

      <div id="western-food" className="mt-4 px-3 sm:px-4">
        <p className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">Western Foods</p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 sm:px-4 md:gap-6 lg:grid-cols-4">
        {westernFood.map((element) => (
          <Westernfood
            image={element.image}
            name={element.name}
            description={element.description}
            price={element.price}
            addToCart={element.addToCartBtn}
            onAddToCart={() => onAddToCart(element.price)}
          />
        ))}
      </div>
      <div className="w-full h-2 bg-black" />

      <div id="dessert" className="mt-4 px-3 sm:px-4">
        <p className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">Desserts</p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 sm:px-4 md:gap-6 lg:grid-cols-4">
        {desserts.map((element) => (
          <Desserts
            image={element.image}
            name={element.name}
            description={element.description}
            price={element.price}
            addToCart={element.addToCartBtn}
            onAddToCart={() => onAddToCart(element.price)}
          />
        ))}
      </div>
      <div className="w-full h-2 bg-black" />

      <div id="drinks" className="mt-4 px-3 sm:px-4">
        <p className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">Drinks</p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-3 sm:grid-cols-2 sm:px-4 md:gap-6 lg:grid-cols-4">
        {drinks.map((element) => (
          <Drinks
            image={element.image}
            name={element.name}
            description={element.description}
            price={element.price}
            addToCart={element.addToCartBtn}
            onAddToCart={() => onAddToCart(element.price)}
          />
        ))}
      </div>
     

      
    </>
  );
}

export default Food;
