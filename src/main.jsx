import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home";
import BmiCalculator from "./components/BmiCalculator.jsx";
import Course from "./components/Course.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import CaloriesCalculator from "./components/CaloriesCalculator.jsx";
import Community from "./components/Community.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/BmiCalculator" element={<BmiCalculator />} />
      <Route path="/CaloriesCalculator" element={<CaloriesCalculator />} />
      <Route path="/Courses" element={<Course />} />
      <Route path="/Community" element={<Community/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
