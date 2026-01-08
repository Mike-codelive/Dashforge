import type { BestSellingProduct } from "../types/bestSelling";

type Props = {
  product: BestSellingProduct;
};

export const BestSellingProductRow = ({ product }: Props) => {
  const stockConfig = {
    in: "bg-emerald-500/10 text-emerald-400",
    low: "bg-amber-500/10 text-amber-400",
    out: "bg-red-500/10 text-red-400",
  };

  return (
    <div className="grid cursor-pointer grid-cols-12 items-center gap-4 px-4 py-4 transition-colors hover:bg-white/5">
      <div className="col-span-4 flex items-center gap-3">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-10 w-10 rounded object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded bg-white/10" />
        )}

        <div>
          <p className="font-medium">{product.name}</p>
          <p className="text-DF-muted text-sm">{product.category}</p>
        </div>
      </div>

      <div className="col-span-2 text-center font-medium">
        ${product.price.toFixed(2)}
      </div>

      <div className="col-span-2 text-center">{product.orders}</div>

      <div className="col-span-2 text-center">
        <span
          className={`rounded px-2 py-1 text-xs font-medium ${
            stockConfig[product.stock]
          }`}
        >
          {product.stock === "in"
            ? "In Stock"
            : product.stock === "low"
              ? "Low Stock"
              : "Out of Stock"}
        </span>
      </div>

      <div className="col-span-2 text-right font-semibold">
        ${product.amount.toLocaleString()}
      </div>
    </div>
  );
};
