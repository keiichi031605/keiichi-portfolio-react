import React from "react";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/resume`} element={<Resume />} />
        <Route path={`${process.env.PUBLIC_URL}/portfolio`} element={<Portfolio />} />
        <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
