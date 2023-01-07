import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { DetailsPages } from "./pages/details/DetailsPages";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<DetailsPages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
