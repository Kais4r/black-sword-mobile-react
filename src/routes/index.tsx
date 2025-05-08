import { createFileRoute } from "@tanstack/react-router";

import MainMenu from "../features/navigation/components/MainMenu";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <MainMenu />
    </div>
  );
}
