import React, { useEffect, useState } from "react";

//Component
import Loader from "./Loader";
import Coin from "./Coin";

// API
import { getCoin } from "../service/api";

const Landing = () => {
  const [conins, setConins] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCoin();
      setConins(data);
      console.log(data);
    };
    fetchApi();
  }, []);

  const searchHandler = (event) => [setSearch(event.target.value)];

  const searchCoins = conins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toString().toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
          className="search-box"
          placeholder="Search"
          value={search}
          onChange={searchHandler}
        />
      </div>
      {conins.length ? (
        <div className="coins-container">
          {searchCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.market_cap_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
