import { Event, yearsAgo } from "@/content/timeline";
import { FaCross, FaDiceD20, FaBaby } from "react-icons/fa";
import { FaExplosion } from "react-icons/fa6";
import { GiVampireDracula } from "react-icons/gi";

export const vampireIcon = <GiVampireDracula size='24px' />;
export const gameIcon = <FaDiceD20 size='24px' />;
export const duskvaultIcon = <FaCross size='24px' />;
export const birthIcon = <FaBaby size='24px' />;

export const VIOLET_INTRUSION: Event = {
  name: "Violet Intrusion",
  color: "violet",
  description:
    "Eilif defeats Casimir and takes his place as the darklord of Duskvault. A shockwave of energy pulsates through the domain as the realm adjusts to its new leader. All creatures are shunted from the realm (mainly residents from the nearby town), many not surviving the impact. As Eilif's desire is <b>eternal youth</b>, only small children survive the impact.",
  year: yearsAgo(14),
  icon: <FaExplosion size='24px' />,
};

export const START_OF_CAMPAIGN: Event = {
  name: "Start of campaign",
  color: "game",
  year: yearsAgo(0),
  icon: gameIcon,
};
