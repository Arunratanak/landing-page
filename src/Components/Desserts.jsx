function Desserts ({image, name, description, price, addToCart, onAddToCart  }) {
    return (
        <div className="mx-auto mt-8 flex w-full max-w-sm flex-col justify-center rounded-2xl border border-black pb-4 transition-colors duration-100 hover:bg-gray-200">
        <div className="flex justify-center p-4">
            <img src={image} alt={name} className="aspect-square w-full max-w-60 rounded-2xl border-2 border-black object-cover"/>
        </div>
        <div className="flex flex-col items-center p-4 text-center">
            <p className="mb-2 text-2xl font-bold sm:text-3xl">{name}</p>
            <p>{description}</p>
        </div> 

        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:pl-8">
            <p className="text-2xl font-bold sm:text-3xl">${price}</p>
            <button onClick={onAddToCart} className="rounded-3xl bg-black p-3 text-white hover:bg-gray-500 active:bg-gray-400">{addToCart}</button>
            
        </div>
        

    </div>


    )
}

export default Desserts