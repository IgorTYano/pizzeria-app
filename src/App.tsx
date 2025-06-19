import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import ShopContextProvider from "./context/shopContext";

const Layout = () => {
  return (
    <>
      <Header />
      <Cart />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "contact",
        element: <div>Contact Page</div>,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
};

export default App;
