import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Cart from "./pages/Cart";
import WatchCatalog from "./pages/WatchCatalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "watches", element: <WatchCatalog/> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router
