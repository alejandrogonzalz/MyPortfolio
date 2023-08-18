import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import { Sidebar } from "./sidebar/Sidebar";
import { Landing } from "./home/Landing";

export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Landing />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
