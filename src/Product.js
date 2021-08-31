import React from "react";
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating
			},
		});
	}

	return (
		<div className="product">

			<div clasName="product__info">
				<p>{title}</p
>				<p className="produt__price">
					<small>R$</small>
					<strong>{price}</strong>
				</p>

				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>🌟</p>
						))}
				</div>

			</div>

			<img src={image} alt="" />

			<button onClick={addToBasket}>Adicionar a cesta</button>

		</div>
	);
}

export default Product;
