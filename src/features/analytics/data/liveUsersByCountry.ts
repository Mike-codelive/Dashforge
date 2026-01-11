import type { ChartData } from "chart.js";
import type { IChoroplethDataPoint } from "chartjs-chart-geo";
import type { FeatureCollection } from "geojson";

export const liveUsersByCountry = (
  worldGeo: FeatureCollection,
): ChartData<"choropleth", IChoroplethDataPoint[]> => {
  return {
    datasets: [
      {
        label: "Live Users",
        outline: worldGeo.features,
        data: worldGeo.features.map((feature) => ({
          feature,
          value: Math.floor(Math.random() * 5000) + 200,
        })),
      },
    ],
  };
};
