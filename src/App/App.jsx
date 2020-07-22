// Library imports
import React from "react";
import { Router } from "@reach/router";
import { Grommet, Main } from "grommet";

// Informational pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Methods from "../Pages/Methods";
import Contact from "../Pages/Contact";
import Questions from "../Pages/Questions";

// Component imports
import Footer from "../Components/Footer";
import Lookup from "../Components/Lookup";
import DummyData from "../Components/DummyData";

// Grommet global theme
import Theme from "../Utils/Theme.json";

export default () => {
  return (
    <Grommet theme={Theme} full themeMode="light">
      <Main>
        <Router>
          <Home path="/" />
          <Lookup path="lookup" data={DummyData} />
          <About path="about" />
          <Methods path="methods" />
          <Contact path="contact" />
          <Questions path="questions" />
        </Router>
        <Footer />
      </Main>
    </Grommet>
  );
};
