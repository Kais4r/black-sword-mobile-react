import { createFileRoute } from "@tanstack/react-router";

import MainMenu from "../features/navigation/components/MainMenu";
import Test from "../features/test/components/Test";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Test />
      <MainMenu />
    </div>
  );
}
