import { Speed, Apps, Moon, Dollar } from "./index";

export const ICONS = {
  speed: Speed,
  apps: Apps,
  moon: Moon,
  dollar: Dollar,
} as const;

export type IconName = keyof typeof ICONS;
