import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { App } from "./App";
import { Navbar } from "./navbar/Navbar";
import { Projects } from "./projects/Projects";
// import { Loading } from "./shared/Loading";

export function Router() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<App />} />
        <Route element={<Projects />} path="/projects" />
      </Route>
    )
  );

  
  return   <RouterProvider router={router} />;
}
