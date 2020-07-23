import React from "react"; // , { useContext }
import { Box, Heading, ResponsiveContext, Text, Avatar } from "grommet";
import AddressInput from "../Components/AddressInput";
import LocationInput from "../Components/LocationInput";
import Logo from "../Icons/dontwait-1.png";
// import { Context } from "../Contexts/LatLng";
// import { Underline } from "grommet-icons";
// import { Response } from "../Components/Response";

const Home = () => {
  // const { latlng } = useContext(Context);
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          direction="column"
          flex="grow"
          fill={size === "small" && "vertical"}
          overflow={{ horizontal: "hidden" }}
          align="center"
        >
          <Avatar
            margin={
              size === "small" ? "xlarge" : { top: "medium", bottom: "xsmall" }
            }
            size="270px"
            round="medium"
            src={Logo}
          />
          {size === "small" ? <LocationInput /> : <AddressInput />}
          <Box
            width={{ max: "450px" }}
            margin={
              size !== "small"
                ? { vertical: "large", horizontal: "small" }
                : { vertical: "xlarge", horizontal: "small" }
            }
          >
            <Text size="medium">
              <i>
                <b>Disclaimer:</b> This is a demo app. It simulates some one
                using the app in San Francisco last year.
              </i>
            </Text>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Home;
