
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homes } from "./Pages/Home";
import { Toaster } from "@/Components/ui/toaster";
// import NotFount from "./Pages/NotFount";

function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <Toaster />
      <Routes>
        <Route path="/" element={<Homes />} />
        {/* <Route path="*" element={<NotFount />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

