import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import {
  About,
  Home,
  Feed,
  User,
  Profile,
  Contact,
  Notifications,
  Search,
  SignIn,
  SignUp,
} from "./pages/";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* Layout */}
      <Navbar />

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/user/:id/edit" element={<User />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
