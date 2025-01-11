import { birthIcon, duskvaultIcon, START_OF_CAMPAIGN, vampireIcon, VIOLET_INTRUSION } from "@/content/common";
import { Event, Timeline, yearsAgo } from "@/content/timeline";
import { IoChatbubbleEllipses } from "react-icons/io5";

const CASIMIR_STARTS_RUMOUR: Event = {
  name: "Casimir starts vampiric rumour",
  color: "blood",
  description: "Casimir starts spreading the rumour that he is a vampire, at the age of 52.",
  year: yearsAgo(429),
  icon: <IoChatbubbleEllipses size='24px' />,
};

const CASIMIR_BECOMES_VAMPIRIC = {
  name: "Casimir becomes a vampire",
  color: "blood",
  description: "Casimir defeats the vampire that came to teach him a lesson and drinks his blood.",
  year: yearsAgo(421),
  icon: vampireIcon,
};

const DUSKVAULT_CREATED = {
  name: "Duskvault is created",
  color: "duskvault",
  description:
    "As Casimir becomes a vampire, he (along with his wife) is dragged by the Dark Powers into his own domain: <b>Duskvault</b>.<br/><br/>Lisbeth is furious with what happened, and she seperates from Casimir. She becomes the heart of the nearby town and their first mayor.",
  year: yearsAgo(421),
  icon: duskvaultIcon,
};

const LISBETH_DIES = {
  name: "Lisbeth dies",
  color: "duskvault",
  description: "Lisbeth dies after serving as the mayor of Duskvault's town for 31 years.",
  year: yearsAgo(390),
  icon: duskvaultIcon,
};

const CASIMIRS_SON_IS_BORN = {
  name: "Casimir's son is born",
  color: "duskvault",
  description:
    "Casimir can no longer take the loniless and has a child with a woman from Sunrest, who perishes soon after the birth of their son.",
  year: yearsAgo(300),
  icon: birthIcon,
};

const STELLA_IS_BORN = {
  name: "Casimir's grandchild is born",
  color: "duskvault",
  description: "Casimir's son and his wife have a child: Stella",
  year: yearsAgo(16),
  icon: birthIcon,
};

export const VERITAS: Timeline = {
  events: [
    CASIMIR_STARTS_RUMOUR,
    VIOLET_INTRUSION,
    START_OF_CAMPAIGN,
    CASIMIR_BECOMES_VAMPIRIC,
    DUSKVAULT_CREATED,
    LISBETH_DIES,
    CASIMIRS_SON_IS_BORN,
    STELLA_IS_BORN,
  ],
};
