import React, { useContext } from "react";
import { Box, Heading, Button, ResponsiveContext } from "grommet";
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
          <Header />
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
          <TooltipButton message="hover flubber bruh!" />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Home;
