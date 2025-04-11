import React from "react";
import { Route, Routes } from "react-router-dom";
import './index.css'
import Home from "./Pages/Home/Home";
import Login from "./Pages/auth/Login";
import Sign from "./Pages/auth/Sign";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/sign" element={<Sign />} />
      </Routes>
    </>
  );
}

export default App;
