import React from "react";
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className="header">

            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon  className="header__searchIcon" />
            </div>

			<div className="header__nav">
				
				<div className="header__option">
					<span className="header__optionLineOne">Olá"</span>
					<span className="header__optionLineTwo">Fazer Login"</span>
				</div>

				<div className="header__option">
					<span className="header__optionLineOne">Voltar</span>
					<span className="header__optionLineTwo">& Carrinho</span>
				</div>

				<div className="header__option">
					<span className="header__optionLineOne">Você</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<div className="header_optionBasket">
					<ShoppingBasketIcon />
					<span className"header__optionLineTwo header__basketCount">
						0
					</span>
				</div>

			</div>

        </div>
    );
}

export default Header;
