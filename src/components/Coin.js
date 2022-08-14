import React from "react";

// function
import { upperCaseFunc } from "../functions/toUpperCase";

const Coin = (props) => {
  const { name, image, symbol, price, marketCap, priceChange } = props;
  return (
    <div className="conin">
      <img src={image} alt={name} />
      <span className="text-bold">{name}</span>
      <span className="d-none d-sm-inline">{upperCaseFunc(symbol)}</span>
      <span>$ {price.toLocaleString()}</span>

      <span className={priceChange > 0 ? "greenPriceChange" : "redPriceChange"}>
        {priceChange.toFixed(2)}%
      </span>
      <span className="w-100-px d-none d-md-inline">$ {marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
