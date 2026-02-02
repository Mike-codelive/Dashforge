import { Marketplace } from "./sections/Marketplace";
import { NftMark } from "./sections/NftMark";
import { NftRevenueOverview } from "./sections/NftRevenueOverview";

export const Nft = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Marketplace />
        <NftRevenueOverview />
      </div>
      <NftMark />
    </>
  );
};
