import React from "react";
import { Router } from "@reach/router";
import { Grommet, Box, ResponsiveContext, Main } from "grommet";

import secondTheme from "../Utils/secondTheme.json";

import Home from "../Components/Home";
import FooterDiv from "../Components/Footer";
import { Response } from "../Components/Response";
import DummyData from "../Components/DummyData";
// import Header from '../Components/Header'

const App = () => {
  return (
    <Grommet theme={secondTheme} full themeMode="light">
      <ResponsiveContext.Consumer>
        {(size) => (
          <Main fill={true}>
            <Box
              direction="column"
              flex="grow"
              fill={size === "small" && "vertical"}
              overflow={{ horizontal: "hidden" }}
              align="center"
            >
              <Router>
                <Home path="/" />
                <Response data={DummyData} path="lookup" />
              </Router>
            </Box>
            <FooterDiv />
          </Main>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
