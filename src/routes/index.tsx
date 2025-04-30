import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <p>BLACKSWORD</p>
      <p>CONTINUE</p>
      <p>LOADGAME</p>
      <p>NEWGAME</p>
      <p>SYSTEM</p>
    </div>
  );
}
