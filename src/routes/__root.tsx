import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import BottomNav from "../features/navigation/components/BottomNav";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div className="flex gap-2 p-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />

        <div className="flex flex-col">
          <main className="flex-grow">
            <Outlet />
          </main>
          <BottomNav />
        </div>
        {/* <TanStackRouterDevtools /> */}
      </>
    );
  },
});
