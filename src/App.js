/*
 * HMR - Hot Module Reloading
 * File Watcher Algorithm
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compatible with older versions of browsers
 * Adds polyfils
 * HTTPS of dev
 * Manages port Number for dev
 * Consistent Hasing algorithm
 * Zero Config Bundler
 * Tree shaking
 *
 *
 * Transitive Dependencies
 *
 *
 */

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
// import InstaMart from "./components/InstaMart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ShimmerUI from "./components/Shimmer";

// Chunking
// Code Splitting
// Dynamice Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

// Routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        // children: [
        //   {
        //     path: "profile",
        //     element: <ProfileClass name={"HARSH"} />,
        //   },
        // ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
