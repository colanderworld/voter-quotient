// Library imports
import React from "react";
import { Router } from "@reach/router";
import { Grommet, Main, Box } from "grommet";

// Informational pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Methods from "../Pages/Methods";
import Contact from "../Pages/Contact";

// Component imports
import Footer from "../Components/Footer";
import Lookup from "../Components/Lookup";
import { testTwo } from "../Components/DummyData";

// Grommet global theme
import Theme from "../Utils/Theme.json";

export default () => {
  return (
    <Grommet theme={Theme} full themeMode="light">
      <Main>
        <Box fill="vertical">
          <Router>
            <Home path="/" />
            <Lookup path="lookup" data={testTwo} />
            <About path="about" />
            <Methods path="methods" />
            <Contact path="contact" />
          </Router>
        </Box>
        <Footer />
      </Main>
    </Grommet>
  );
};
