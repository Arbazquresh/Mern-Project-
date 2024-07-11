import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Addemp } from "./Addemp";
import { Employe } from "./Employe";
import { EmployeItem } from "./EmployeItem";
import { Empdetail } from "./Empdetail";
import { Dashboard } from "./Dashboard";
import { Nav } from "./Nav";
import { Logout } from "./Logout";
import { Login } from "./Login";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Addemp />} />
        <Route path="/empdetail" element={<Empdetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="logout" element={<Logout />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
