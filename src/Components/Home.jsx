import React, { useContext } from "react";
import {
  Box,
  Heading,
  Button,
  ResponsiveContext,
  Markdown,
  Text,
} from "grommet";
import AddressInput from "../Components/AddressInput";
import { Response } from "../Components/Response";
import LocationInput from "../Components/LocationInput";
import Header from "../Components/Header";

import TooltipButton from "../Components/TooltipButton";

import { Context } from "../Contexts/LatLng";
import { Router } from "@reach/router";

const Home = () => {
  const { latlng } = useContext(Context);
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          direction="column"
          flex="grow"
          fill={size === "small" && "vertical"}
          overflow={{ horizontal: "hidden" }}
          align="center"
        >
          {/* <Header /> */}
          <Heading
            responsive={true}
            textAlign="center"
            style={{
              fontFamily: "IBM Plex Mono",
              fontStyle: "italic",
              fontSize: "6em",
              lineHeight: "1em",
              letterSpacing: "-2px",
            }}
          >
            Dont Wait{" "}
            <span style={{ display: size === "small" && "none" }}>—</span> Vote
          </Heading>

          {size === "small" ? <LocationInput /> : <AddressInput />}
          <Text size="medium" margin={{ top: "large" }}>
            <i>
              <b>Disclaimer:</b> This is a demo app—and as such—will show you
              the same result no matter what you type!
            </i>
          </Text>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Home;
