import React, { Fragment } from "react";
import Hero from "../../components/hero/Hero";
import Auto from "../../components/auto/Auto";
import Prinsp from "../../components/prinsp/Prinsp";
import Vapros from "../../components/vapros/Vapros";
import Filter from "../../components/filter/Filter";
import Catalog from "../../components/katalog/Catalog";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Filter />
      <Auto />
      <Prinsp />
      <Catalog />
      <Vapros />
    </Fragment>
  );
};

export default Home;
