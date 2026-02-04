interface NFTCardProps {
  image: string;
  title: string;
  sales: number;
  totalUsd: number;
}

export function NFTCard({ image, title, sales, totalUsd }: NFTCardProps) {
  return (
    <div className="flex flex-col rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      <img
        src={image}
        alt={title}
        className="mb-3 h-36 w-full rounded-md object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        <span>{sales.toLocaleString()} Sales</span>
        <br />
        <span>${totalUsd.toLocaleString()}+</span>
      </div>
    </div>
  );
}
