type Props = {
  daysLeft: number;
  onUpgrade?: () => void;
};

export const TrialUpgradeCard = ({ daysLeft }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-amber-200 bg-amber-50 p-4 md:p-6 dark:border-amber-800 dark:bg-amber-900/20">
      <div>
        <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
          Your free trial expires in{" "}
          <span className="font-bold">{daysLeft}</span> days.
        </p>
        <span className="text-xs text-amber-700 dark:text-amber-400">
          Upgrade now to unlock all features.
        </span>
      </div>

      <button className="cursor-pointer rounded-md bg-amber-600 px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition hover:bg-amber-700">
        Upgrade Account
      </button>
    </div>
  );
};
