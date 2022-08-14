import axios from "axios";

const BASIC_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

const getCoin = async () => {
  const responce = await axios.get(BASIC_URL);
  return responce.data;
};

export { getCoin };
