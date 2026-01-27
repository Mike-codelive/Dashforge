type Props = {
  value: number;
};

export const ProjectProgressBar = ({ value }: Props) => {
  return (
    <div className="h-2 w-full rounded-full bg-white/5">
      <div
        className="h-2 rounded-full bg-indigo-500 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
