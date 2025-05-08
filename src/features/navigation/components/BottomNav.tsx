import { useRouterState } from "@tanstack/react-router";
const HIDDEN_ROUTES = ["/"];

export default function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const shouldHide = HIDDEN_ROUTES.includes(pathname);

  if (shouldHide) return null;

  return <div className="bg-black">test</div>;
}
