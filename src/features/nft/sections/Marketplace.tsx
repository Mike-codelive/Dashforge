export const Marketplace = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md">
      <div className="p-4">
        <h1 className="mb-2">
          Discover, Collect, Sell and Create your own{" "}
          <span className="text-DF-green">NFTs.</span>
        </h1>
        <p className="mb-4 text-[13px]">
          The world's first and largest digital marketplace.
        </p>
        <div className="flex gap-2 text-white">
          <button className="bg-DF-blue rounded-sm px-3 py-2">
            Discover Now
          </button>
          <button className="bg-DF-green rounded-sm px-3 py-2">
            Cover Your Own
          </button>
        </div>
      </div>
    </div>
  );
};
