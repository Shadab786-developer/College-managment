// This file is the entry point for the React application.
// It sets up the router, Redux store, and Auth0 provider.
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Aboutus from "./pages/Aboutus/Aboutus";
import Noticeboard from "./pages/Noticeboard";
import Gallery from "./pages/Gallery";
import Contactus from "./pages/Contactus";
import Syllabus from "./pages/Syllabus";
import Question from "./pages/Question";

// Create the router with routes for different components
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/noticeboard" element={<Noticeboard />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/:section" element={<Gallery />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/questionpaper" element={<Question />} />
    </Route>
  )
);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
