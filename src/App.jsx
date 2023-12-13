// src/App.js
import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { useRoutes, HashRouter, Navigate } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Testimonials } from "./pages/Testimonials";
import { Teachers } from "./pages/Teachers";
import { Courses } from "./pages/Courses";
import { Events } from "./pages/Events";
import { SignIn } from "./pages/SignIn";
import { Contact } from "./pages/Contact";
import { FAQPage } from "./pages/Faq";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/teachers",
      element: <Teachers />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/testimonios",
      element: <Testimonials />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/faq",
      element: <FAQPage />,
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Navbar />
        <div>
          <AppRoutes />
        </div>
      </HashRouter>
    </React.StrictMode>
  );
};

export default App;
