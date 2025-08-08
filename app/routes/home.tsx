import type { Route } from "./+types/home";
import NavigationMenu from "../site-components/NavigationMenu"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "E-Commerce" },
    { name: "description", content: "Example E-Commerce site using what I learned" },
  ];
}

export default function Home() {
  return (
    <div>
      <NavigationMenu />
    </div>
  );
}
