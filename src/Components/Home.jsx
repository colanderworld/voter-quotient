import React, { useContext } from "react";
import { Box, Heading, ResponsiveContext, Text } from "grommet";
import AddressInput from "../Components/AddressInput";
import { Response } from "../Components/Response";
import LocationInput from "../Components/LocationInput";
import { Context } from "../Contexts/LatLng";
import { Underline } from "grommet-icons";

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
          <Heading
            responsive={true}
            textAlign="center"
            style={{
              fontFamily: "IBM Plex Mono",
              fontStyle: "italic",
              fontSize: "5.5em",
              lineHeight: "1em",
              letterSpacing: "-2px",
            }}
          >
            Dont Wait
            <span style={{ display: size === "small" && "none" }}>.</span> Vote!
          </Heading>
          <Box width="520px">
            <Text size="medium" margin="small">
              <i>
                <b>Disclaimer:</b> This is a demo app. It will <u>only</u> show
                the results of last year's San Francisco local elections.
              </i>
            </Text>
          </Box>
          {size === "small" ? <LocationInput /> : <AddressInput />}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Home;
