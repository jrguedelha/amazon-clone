import React from "react";
import "./Product.css"

function Product({ id, title, image, price, rating }) {
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

			<button>Adicionar a cesta</button>

		</div>
	);
}

export default Product;
