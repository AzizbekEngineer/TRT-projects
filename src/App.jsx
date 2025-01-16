import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/home/Home"));
const Company = lazy(() => import("./pages/Company/Company"));
const Partner = lazy(() => import("./pages/partner/Partner"));
const Newost = lazy(() => import("./pages/newost/Newost"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Razdel = lazy(() => import("./pages/razdel/Razdel"));
const Header = lazy(() => import("./components/header/Header"));
const Single = lazy(() => import("./pages/single/Single"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Result = lazy(() => import("./pages/result/Result"));
const FilterSearch = lazy(() => import("./pages/filterSearch/FilterSearch"));
const SearchProduct = lazy(() => import("./pages/searchProduct/SearchProduct"));
const Accardion = lazy(() => import("./pages/accardion/Accardion"));
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
