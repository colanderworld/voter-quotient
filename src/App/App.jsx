// Library imports
import React, { useContext } from "react";
import { Router } from "@reach/router";
import { Grommet, Box } from "grommet";

// Informational pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Methods from "../Pages/Methods";
import Contact from "../Pages/Contact";

// Component imports
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Grommet global theme
import Theme from "../Utils/Theme.json";

export default () => {
  return (
    <Grommet theme={Theme} full themeMode="light">
      <Box fill="vertical">
        <Box flex="grow">
          {/* <Header /> */}
          <Router>
            <Home path="/" />
            {/* <About path="about" />
            <Methods path="methods" />
            <Contact path="contact" /> */}
          </Router>
        </Box>
        <Footer />
      </Box>
    </Grommet>
  );
};
