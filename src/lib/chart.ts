import { Chart as ChartJS, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

import {
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ProjectionScale,
} from "chartjs-chart-geo";

ChartJS.register(
  ...registerables,
  zoomPlugin,
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ProjectionScale,
);
