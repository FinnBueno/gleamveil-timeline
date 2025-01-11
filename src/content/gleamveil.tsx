import { duskvaultIcon, gameIcon, VIOLET_INTRUSION } from "@/content/common";
import { Event, START_YEAR, Timeline, yearsAgo } from "@/content/timeline";

const EILIF_FINDS_DUSKVAULT = {
  name: "Eilif finds Duskvault",
  color: "duskvault",
  description:
    "Eilif finds the vampire he has been reading about and enters his domain. Shortly after, he becomes a trusted servant of Casimir, and the vampire enables him to do experiments and research.",
  year: yearsAgo(23),
  icon: duskvaultIcon,
};

const START_OF_CAMPAIGN: Event = {
  name: "Start of campaign",
  color: "game",
  year: START_YEAR,
  icon: gameIcon,
};

export const GLEAMVEIL: Timeline = {
  events: [EILIF_FINDS_DUSKVAULT, VIOLET_INTRUSION, START_OF_CAMPAIGN],
};
