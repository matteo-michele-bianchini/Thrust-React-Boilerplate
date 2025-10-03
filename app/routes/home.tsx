import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { appTitle } from "~/lib/constants/uiText";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: appTitle },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
