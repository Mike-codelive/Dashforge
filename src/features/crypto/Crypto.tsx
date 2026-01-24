import { MarketGraph } from "./sections/MarketGraph";
import { MyCurrencies } from "./sections/MyCurrencies";
import { MyPortfolio } from "./sections/MyPortfolio";

export const Crypto = () => {
  return (
    <>
      <MarketGraph />
      <MyCurrencies />
      <MyPortfolio />
    </>
  );
};
