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
import Notfound from "./pages/Notfound";
import Verify from "./components/Verify.jsx";
import CartToSelect from "./components/Singin/CartToSelect.jsx";
import AdminRegister from "./components/Singin/AdminRegister.jsx";
import UserRegistration from "./components/Singin/UserRegistration.jsx";
import CartToSelectLogin from "./components/Login/CartToSelectLogin.jsx";
import AdminLogin from "./components/Login/AdminLogin.jsx";
import UserLogin from "./components/Login/UserLogin.jsx";
import UploadResourceForm from "./pages/Upload.jsx";
// Create the router with routes for different components
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/register/" element={<CartToSelect />}>
        <Route index element={<AdminRegister />} />
        <Route path="admin" element={<AdminRegister />} />
        <Route path="user" element={<UserRegistration />} />
      </Route>
      <Route path="/login/" element={<CartToSelectLogin />}>
        <Route index element={<AdminLogin />} />
        <Route path="admin" element={<AdminLogin />} />
        <Route path="user" element={<UserLogin />} />
      </Route>

      <Route path="/verify" element={<Verify />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/upload" element={<UploadResourceForm />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/noticeboard" element={<Noticeboard />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/:section" element={<Gallery />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/notfound" element={<Notfound />} />
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
