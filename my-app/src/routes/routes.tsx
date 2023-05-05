import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Chart } from "../components/Chart/Chart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },
]);
