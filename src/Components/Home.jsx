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
              fontSize: "6em",
              lineHeight: "1em",
              letterSpacing: "-2px",
            }}
          >
            Dont Wait{" "}
            <span style={{ display: size === "small" && "none" }}>—</span> Vote
          </Heading>

          {size === "small" ? <LocationInput /> : <AddressInput />}
          <Text size="medium" margin="large">
            <i>
              <b>Disclaimer:</b> This is <u>only</u> a mockup, and as such, will
              show the same result no matter what you type!
            </i>
          </Text>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Home;
