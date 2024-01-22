import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="/1_3r_pD2W2gItal3hfeHpU1w.gif"
					alt="Banner"
				/>

				<div>
					{basket.length === 0 ? (
						<h2 className="checkout__title">Shopping Cart Is Empty</h2>
					) : (
						<>
							<h2 className="checkout__title">Shopping Cart</h2>
							{basket.map((item) => (
								<CheckoutProduct
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							))}
						</>
					)}
				</div>
			</div>

			<div className="checkout__right">
			<img
                    src="/Animated GIF Banner AD 1.gif" // Replace with your image path
                    alt="Descriptive Text" // Replace with your alt text
                />
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
