import React from "react";
import { Router } from "@reach/router";
import { Grommet, Box, ResponsiveContext, Main } from "grommet";
import About from "../Pages/About";
import Methods from "../Pages/Methods";
import Contact from "../Pages/Contact";
import Questions from "../Pages/Questions";
import secondTheme from "../Utils/secondTheme.json";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import { Response } from "../Components/Response";
import DummyData from "../Components/DummyData";

const App = () => {
  return (
    <Grommet theme={secondTheme} full themeMode="light">
      <ResponsiveContext.Consumer>
        {(size) => (
          <Main fill={true}>
            <Box
              direction="column"
              flex="grow"
              //   fill={size === "small" && "vertical"}
              overflow={{ horizontal: "hidden" }}
              align="center"
              justify="start"
            >
              <Router>
                <Home path="/" />
                <Response data={DummyData} path="lookup" />
                <About path="about" />
                <Methods path="methods" />
                <Contact path="contact" />
                <Questions path="questions" />
              </Router>
            </Box>
            <Footer />
          </Main>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
