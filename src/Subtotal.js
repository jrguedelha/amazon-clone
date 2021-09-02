import React from "react";
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal(){
	const history = useHistory();
	const [{ basket }, dispath] = useStateValue();

	return (
		<div className="subtotal">
			<CurrentFormat
				renderText={(value)} => (
					<>
						<p>
							{/* Part of the homework */}
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="Subtotal__gift">
							<input type="checkbox" />Esta compra contem um cupom de desconto
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)} // Part of the homework
				displayType={"texto"}
				thousandSeparator={true}
				prefix={"R$"}
			/>
			<button>Ir para o pagamento</button>
		</div>
	);
}
