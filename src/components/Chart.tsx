import { type ChartData, type ChartOptions, type ChartType } from "chart.js";
import { Chart as ReactChart } from "react-chartjs-2";

type ChartProps<TType extends ChartType> = {
  type: TType;
  data: ChartData<TType>;
  options?: ChartOptions<TType>;
};

export function Chart<TType extends ChartType>({
  type,
  data,
  options,
}: ChartProps<TType>) {
  return <ReactChart type={type} data={data} options={options} />;
}
