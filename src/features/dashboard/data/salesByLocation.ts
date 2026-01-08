import type { ChartData } from "chart.js";
import type { FeatureCollection } from "geojson";

export const salesByLocation = (
  geo: FeatureCollection,
): ChartData<"choropleth"> => ({
  labels: geo.features.map((f) => f.properties?.name ?? "Unknown"),
  datasets: [
    {
      label: "Sales",
      data: geo.features.map((feature) => ({
        feature,
        value: Math.floor(Math.random() * 10000),
      })),
    },
  ],
});
