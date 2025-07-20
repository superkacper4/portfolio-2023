import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import Nav from "./components/Nav";
import BlogPage from "./pages/BlogPage/BlogPage";
import { Helmet } from "react-helmet";
import GlobalStyle from "./styles/GlobalStyles";
import BlogPostPage from "./pages/BlogPostPage/BlogPostPage";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/#about",
  component: App,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/#projects",
  component: App,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/#contact",
  component: App,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});

export const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$postId",
  component: BlogPostPage,
});

//@ts-ignorej
const routeTree = rootRoute.addChildren([
  aboutRoute,
  blogRoute,
  contactRoute,
  indexRoute,
  postRoute,
  projectsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
