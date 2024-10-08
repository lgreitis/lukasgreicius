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
  mongodb = "/small_icons/mongodb.svg",
  csharp = "/small_icons/csharp.png",
  xamarin = "/small_icons/xamarin.png",
  electron = "/small_icons/electron.png",
  tailwindcss = "/small_icons/tailwindcss.svg",
}

export const workItems: CardItem[] = [
  {
    id: "kawa",
    title: "Kawa",
    for: "Personal app",
    image: "/kawa/kawa_main.png",
    shortDescription:
      "Stream anime through torrents on a Mac/Linux/Windows app. Powered by Electron and WebTorrent. Planning for AndroidTV and mobile.",
    year: "2024",
    techIcons: [TechIcons.react, TechIcons.tailwindcss, TechIcons.electron],
    images: ["/kawa/kawa_anime.png"],
  },
  {
    id: "lukasgreicius",
    title: "Lukas Greičius",
    for: "Personal website",
    image: "/lukas_greicius.png",
    shortDescription:
      "This website was made using Next.js TailwindCSS, MDX and Three.js.",
    year: "2023",
    techIcons: [TechIcons.nextjs, TechIcons.tailwindcss],
  },
  {
    id: "viena_saskaita",
    title: "Viena sąskaita",
    for: "Work @ Viena sąskaita",
    image: "/viena_saskaita.png",
    shortDescription:
      "Maintaining and developing the website for Viena sąskaita. One year as a solo developer, now working with a team.",
    year: "2022 - now",
    techIcons: [TechIcons.react, TechIcons.symfony, TechIcons.tailwindcss],
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
      TechIcons.tailwindcss,
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
  {
    id: "meta_tune",
    title: "meta.tune",
    for: "University module",
    image: "/meta.tune.png",
    shortDescription:
      "Shared music experience, similar to plug.dj, where users can queue music, vote for songs, chat, and more.",
    year: "2021",
    techIcons: [
      TechIcons.react,
      TechIcons.nodejs,
      TechIcons.mongodb,
      TechIcons.redis,
    ],
  },
  {
    id: "brief_for_reddit",
    title: "Brief for Reddit",
    for: "Personal app",
    image: "/brief_for_reddit.png",
    shortDescription:
      "Brief for Reddit is a simple app that allows you to read Reddit posts on Galaxy Watch 3.",
    year: "2021",
    techIcons: [TechIcons.csharp, TechIcons.xamarin],
  },
];
