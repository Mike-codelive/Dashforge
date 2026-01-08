import type { FeatureCollection, Geometry } from "geojson";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";

import world from "./countries-110m.json";

const topology = world as unknown as Topology;

export const worldGeo = feature(
  topology,
  topology.objects.countries,
) as FeatureCollection<Geometry>;
