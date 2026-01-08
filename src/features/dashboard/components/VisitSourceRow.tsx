type Props = {
  label: string;
  value: number;
  color: string;
};

export const VisitSourceRow = ({ label, value, color }: Props) => {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm">{label}</span>
      </div>

      <span className="text-sm font-medium">{value}%</span>
    </div>
  );
};
