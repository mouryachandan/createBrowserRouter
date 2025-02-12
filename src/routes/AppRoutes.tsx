import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contect = lazy(() => import("../pages/Contect"));
const Help = lazy(() => import("../pages/Help"));

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/",
        element: <Home /> 
      },

      { path: "/about",
        element: <About /> 
      },

      { 
        path: "/contect",
         element: <Contect />
         },

      { path: "/help",
         element: <Help /> 
        },
    ],
  },
]);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoutes;
