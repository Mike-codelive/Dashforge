import { Card } from "../../components/Card";
import { CARDS } from "../../config/cards.config";
import { AddCircle, PulseLine } from "../../icons";
// import { BestSelling } from "./sections/BestSelling";
// import { RecentOrders } from "./sections/RecentOrders";
import { Revenue } from "./sections/Revenue";
// import { SalesByLocation } from "./sections/SalesByLocation";
// import { StoreVisits } from "./sections/StoreVisits";
// import { TopSellers } from "./sections/TopSellers";

export const Dashboard = () => {
  return (
    <section className="bg-DF-bg-light dark:bg-DF-main-bg-dark">
      <div className="justify-between md:flex">
        <div>
          <h1 className="dark:text-DF-heading text-[1rem] font-semibold">
            Good Morning, Mike!
          </h1>
          <p className="dark:text-DF-secondary">
            Here's what's happening with your store today.
          </p>
        </div>
        <div className="mt-2.5 flex gap-2.5 md:mt-0">
          <button className="hover:bg-DF-green hover:text-DF-hover-btn text-DF-green bg-DF-green-bg flex cursor-pointer items-center gap-1.5 rounded-sm px-[0.9rem] py-2 text-[0.8125rem] transition-[background,color] duration-[0.25s] ease-in-out">
            <AddCircle className="h-3 w-3" />
            Add Product
          </button>
          <button className="hover:bg-DF-blue text-DF-blue hover:text-DF-hover-btn bg-DF-blue-bg flex cursor-pointer items-center gap-1.5 rounded-sm px-[0.9rem] py-2 text-[0.8125rem] transition-[background,color] duration-[0.25s] ease-in-out">
            <PulseLine className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className="my-5 grid gap-4 md:grid-cols-2">
        {CARDS.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
      <div className="mb-5 gap-6 md:flex">
        <Revenue />
        {/* <SalesByLocation /> */}
      </div>
      {/* <BestSelling />
      <TopSellers />
      <StoreVisits />
      <RecentOrders /> */}
    </section>
  );
};
