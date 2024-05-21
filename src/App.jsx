import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Feed,
  User,
  Contact,
  Search,
  Sign,
  Notifications,
  UserEdit,
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
        <Route path="/feed" element={<Feed />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/:id/edit" element={<UserEdit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign/:id" element={<Sign />} />
      </Routes>
    </>
  );
};

export default App;
