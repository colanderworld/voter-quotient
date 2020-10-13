// Library imports
import React from "react";
import { Router } from "@reach/router";
import { Grommet, Box } from "grommet";

// Informational pages
import Home from "../Pages/Home";
import About from "../Pages/About";
// import Questions from "../Pages/Questions";
import Contact from "../Pages/Contact";

// Component imports
import Footer from "../Components/Footer";

// Grommet global theme
import Theme from "../Utils/Theme.json";

export default () => {
  return (
    <Grommet theme={Theme} full>
      <Box fill="vertical">
        <Box flex="grow" margin={{ bottom: "10em" }}>
          <Router>
            <Home path="/" />
            <About path="about" />
            {/* <Questions path="questions" /> */}
            <Contact path="contact" />
          </Router>
        </Box>
        <Footer />
      </Box>
    </Grommet>
  );
};
