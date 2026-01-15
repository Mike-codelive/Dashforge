import * as echarts from "echarts";
import worldJson from "../../assets/maps/world.json";

/**
 * ECharts registerMap expects MapInput | GeoJSONSourceInput,
 * but does not export compatible public typings.
 * Runtime is correct — typings are incomplete.
 */
// @ts-expect-error — ECharts GeoJSON typing gap
echarts.registerMap("world", worldJson);
