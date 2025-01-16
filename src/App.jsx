import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Company from "./pages/Company/Company";
import Partner from "./pages/partner/Partner";
import Newost from "./pages/newost/Newost";
import Contact from "./pages/Contact/Contact";
import Razdel from "./pages/razdel/Razdel";
import Header from "./components/header/Header";
import Single from "./pages/single/Single";
import Footer from "./components/footer/Footer";
import Result from "./pages/result/Result";
import FilterSearch from "./pages/filterSearch/FilterSearch";
import SearchProduct from "./pages/searchProduct/SearchProduct";
import Accardion from "./pages/accardion/Accardion";
// salom
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/razdel" element={<Razdel />} />
        <Route path="/company" element={<Company />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single" element={<Single />} />
        <Route path="/filter" element={<FilterSearch />} />
        <Route path="/newost" element={<Newost />} />
        <Route path="/result" element={<Result />} />
        <Route path="/accardion" element={<Accardion />} />
        <Route path="/search" element={<SearchProduct />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
