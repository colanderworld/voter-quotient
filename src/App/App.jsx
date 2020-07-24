// Library imports
import React from "react";
import { Router } from "@reach/router";
import { Grommet, Main } from "grommet";

// Informational pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Methods from "../Pages/Methods";
import Contact from "../Pages/Contact";

// Component imports
import Footer from "../Components/Footer";
import Lookup from "../Components/Lookup";
import { one, two } from "../Components/DummyData";

// Grommet global theme
import Theme from "../Utils/Theme.json";
import { Context } from "../Utils/LatLng";

export default () => {
  return (
    <Grommet theme={Theme} full themeMode="light">
      <Main>
        <Router>
          <Home path="/" />
          <Lookup path="lookup" data={two} />
          <About path="about" />
          <Methods path="methods" />
          <Contact path="contact" />
        </Router>
        <Footer />
      </Main>
    </Grommet>
  );
};
