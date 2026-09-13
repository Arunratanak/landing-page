function CategoryPage({ title, items, CardComponent, onAddToCart }) {
	return (
		<main className="mt-32 px-3 pb-8 sm:px-4">
			<h1 className="mb-6 text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
				{title}
			</h1>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
				{items.map((item) => (
					<CardComponent
						key={item.id}
						image={item.image}
						name={item.name}
						description={item.description}
						price={item.price}
						addToCart={item.addToCartBtn || "Add to Cart"}
						onAddToCart={() => onAddToCart(item)}
					/>
				))}
			</div>
		</main>
	);
}

export default CategoryPage;
