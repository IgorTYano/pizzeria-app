import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";

const Layout = () => {
  const [openCart, setOpenCart] = useState(false);
  
  return (
    <>
      <Header openCart={openCart} setOpenCart={setOpenCart} />
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
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
        element: <Home />
      },
      {
        path: "menu",
        element: <Menu />
      },
      {
        path: "contact",
        element: <div>Contact Page</div>
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);

const App = () => {
  const [openCart, setOpenCart] = useState(false);
  return <RouterProvider router={router} />;
};

export default App;
