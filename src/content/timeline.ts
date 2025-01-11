import { ReactNode } from "react";

export type Timeline = {
  events: Event[];
};

export type Event = {
  name: string;
  color: string;
  description?: string;
  url?: string;
  year: number;
  month?: number;
  day?: number;
  icon: ReactNode;
};

export const START_YEAR = 893;

export const yearsAgo = (howMany: number) => START_YEAR - howMany;
