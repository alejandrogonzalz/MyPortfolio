import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// import { Sidebar } from "./sidebar/Sidebar";
import { App } from "./App";
import { Navbar } from "./navbar/Navbar";
export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<App />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
