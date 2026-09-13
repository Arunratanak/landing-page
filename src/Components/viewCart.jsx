function ViewCart({ isOpen, items, total, onClose, onUpdateCart }) {
	if (!isOpen) return null;

	const updateQuantity = (id, quantity) => {
		const nextQuantity = Math.max(0, Number(quantity) || 0);
		onUpdateCart((currentItems) => currentItems
			.map((item) => item.id === id ? { ...item, quantity: nextQuantity } : item)
			.filter((item) => item.quantity > 0));
	};

	return (
		<div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4">
			<section
				role="dialog"
				aria-modal="true"
				aria-labelledby="cart-title"
				className="card max-h-[90vh] w-full max-w-3xl overflow-hidden bg-base-100 shadow-2xl"
			>
				<div className="flex items-center justify-between border-b border-base-300 p-5">
					<div>
						<h2 id="cart-title" className="text-2xl font-bold">Your cart</h2>
						<p className="text-sm text-base-content/60">Review your order before checkout.</p>
					</div>
					<button className="btn btn-circle btn-ghost text-xl" onClick={onClose} aria-label="Close cart">
						x
					</button>
				</div>

				<div className="overflow-y-auto p-5">
					{items.length === 0 ? (
						<p className="py-12 text-center text-base-content/60">Your cart is empty.</p>
					) : (
						<div className="space-y-4">
							{items.map((item) => (
								<article key={item.id} className="flex flex-col gap-4 rounded-box border border-base-300 p-3 sm:flex-row sm:items-center">
									<img src={item.image} alt={item.name} className="h-24 w-full rounded-box object-cover sm:w-24" />
									<div className="min-w-0 flex-1">
										<h3 className="font-bold">{item.name}</h3>
										<p className="text-sm text-base-content/60">${Number(item.price).toFixed(2)} each</p>
									</div>
									<div className="flex items-center justify-between gap-3 sm:justify-end">
										<div className="join">
											<button className="btn btn-sm join-item" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}>-</button>
											<input
												className="input input-sm join-item w-14 text-center"
												type="number"
												min="0"
												value={item.quantity}
												onChange={(event) => updateQuantity(item.id, event.target.value)}
												aria-label={`${item.name} quantity`}
											/>
											<button className="btn btn-sm join-item" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
										</div>
										<strong className="w-20 text-right">${(Number(item.price) * item.quantity).toFixed(2)}</strong>
										<button className="btn btn-sm btn-ghost text-error" onClick={() => updateQuantity(item.id, 0)}>Remove</button>
									</div>
								</article>
							))}
						</div>
					)}
				</div>

				<div className="flex items-center justify-between border-t border-base-300 p-5">
					<span className="font-bold">Subtotal</span>
					<span className="text-xl font-bold">${total.toFixed(2)}</span>
				</div>
			</section>
		</div>
	);
}

export default ViewCart;
