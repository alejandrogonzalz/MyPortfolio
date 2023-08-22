import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import { Sidebar } from "./sidebar/Sidebar";
import { App } from "./App";
export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<App />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
