import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navbar } from "../site-components/navbar"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "E-Commerce" },
    { name: "description", content: "Example E-Commerce site using Markov chain based searching" },
  ];
}

export default function Home() {
  return (
    <Navbar />
  );
}
