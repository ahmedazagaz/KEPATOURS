import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import AI_Travel_Assistant from "../pages/AI_Travel_Assistant";
import BudgetTravel  from "../pages/BudgetTravel.jsx";
import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import Chat from "../pages/Chat.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/budget-travel" element={<BudgetTravel />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/ai_travel" element={<AI_Travel_Assistant />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
