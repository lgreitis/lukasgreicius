import Plutus from "./descriptions/plutus.mdx";

export interface CardItem {
  id: string;
  title: string;
  for: string;
  image: string;
  shortDescription: string;
  year: string;
  techIcons: TechIcons[];
  description?: JSX.Element;
  images?: string[];
}

export enum TechIcons {
  nextjs = "/small_icons/nextjs.svg",
  nodejs = "/small_icons/nodejs.png",
  redis = "/small_icons/redis.png",
  react = "/small_icons/react.png",
  postgresql = "/small_icons/postgresql.png",
  symfony = "/small_icons/symfony.png",
  firebase = "/small_icons/firebase.png",
}

export const workItems: CardItem[] = [
  {
    id: "lukasgreicius",
    title: "Lukas Greičius",
    for: "Personal website",
    image: "/lukas_greicius.png",
    shortDescription:
      "This website was made using Next.js TailwindCSS, MDX and Three.js.",
    year: "2023",
    techIcons: [TechIcons.nextjs],
  },
  {
    id: "viena_saskaita",
    title: "Viena sąskaita",
    for: "Work @ Viena sąskaita",
    image: "/viena_saskaita.png",
    shortDescription:
      "Maintaining and developing the website for Viena sąskaita. One year as a solo developer, now working with a team.",
    year: "2022 - now",
    techIcons: [TechIcons.react, TechIcons.symfony],
  },
  {
    id: "plutus",
    title: "Plutus",
    for: "Bachelor thesis",
    image: "/plutus/plutus_banner.png",
    shortDescription:
      "Tool for CS:GO players and investors that has comprehensive CS:GO item statistics, portfolio valuations, and interactive graphs.",
    year: "2023",
    techIcons: [
      TechIcons.nextjs,
      TechIcons.nodejs,
      TechIcons.postgresql,
      TechIcons.redis,
    ],
    description: <Plutus />,
    images: [
      "/plutus/plutus_landing.png",
      "/plutus/plutus_dash.png",
      "/plutus/plutus_inventory.png",
      "/plutus/plutus_item.png",
      "/plutus/plutus_discord.png",
      "/plutus/plutus_email.png",
    ],
  },
  {
    id: "todo",
    title: "TODO:",
    for: "University module",
    image: "/todo/todo_editor.png",
    shortDescription:
      "Simple rich text editor with folder system that supports live collaboration, teams and more.",
    year: "2022",
    techIcons: [TechIcons.react, TechIcons.nodejs, TechIcons.postgresql],
    images: [
      "/todo/todo_dash.png",
      "/todo/todo_landing.png",
      "/todo/todo_login.png",
      "/todo/todo_register.png",
      "/todo/todo_invite.png",
      "/todo/todo_org_invites.png",
    ],
  },
  {
    id: "trakiecio_kortele",
    title: "Trakiečio kortelė",
    for: "Work @ ThinkBig",
    image: "/trakiecio_kortele.png",
    shortDescription:
      'Admin dashboard and landing page for Trakiečio kortelė. Also includes integration with the Lihuanian "Valdžios vartai" user indentification system.',
    year: "2022",
    techIcons: [
      TechIcons.react,
      TechIcons.nodejs,
      TechIcons.firebase,
      TechIcons.redis,
    ],
  },
];
