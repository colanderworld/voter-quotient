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

// Grommet global theme
import Theme from "../Utils/Theme.json";

export default () => {
  return (
    <Grommet theme={Theme} full themeMode="light">
      <Box fill="vertical">
        <Box flex="grow">
          <Router>
            <Home path="/" />
            <Lookup path="lookup" />
            <About path="about" />
            <Methods path="methods" />
            <Contact path="contact" />
          </Router>
        </Box>
        <Footer />
      </Box>
    </Grommet>
  );
};
