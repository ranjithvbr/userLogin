import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/footer";
import Header from "./component/header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./index.scss";

export default function Router() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
