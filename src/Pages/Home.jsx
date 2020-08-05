// Library imports
import React, { useContext } from "react";
import { Box, ResponsiveContext, Text, Avatar, Main } from "grommet";

// Component imports
import AddressInput from "../Components/AddressInput";
import LocationInput from "../Components/LocationInput";

// Visual imports
import Logo from "../Icons/dontwait-1.png";

const Home = () => {
  // const { latlng } = useContext(Context);
  const size = useContext(ResponsiveContext);
  return (
    <Main fill="true" align="center">
      <Avatar margin="large" size="270px" round="medium" src={Logo} />
      {size === "small" ? <LocationInput /> : <AddressInput />}
      <Box
        width={{ max: "450px" }}
        margin={{ vertical: "medium", horizontal: "small" }}
      >
        <Text size="medium">
          <i>
            <b>Disclaimer:</b> This is a demo app. It will <u>only</u> show the
            results of last year's San Francisco local elections.
          </i>
        </Text>
      </Box>
    </Main>
  );
};

export default Home;
