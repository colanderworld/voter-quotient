// Library imports
import React, { useContext } from "react";
import { Box, ResponsiveContext, Text, Avatar, Main } from "grommet";

// Component imports
import AddressInput from "../Components/AddressInput";
// import LocationInput from "../Components/LocationInput";

// import Logo from "../Icons/dontwait-1.png";
// import { Context } from "../Contexts/LatLng";
// import { Underline } from "grommet-icons";
// import { Response } from "../Components/Response";

const Home = () => {
  // const { latlng } = useContext(Context);
  const size = useContext(ResponsiveContext);
  return (
    <Main fill={true} align="center">
      <AddressInput />
    </Main>
  );
};

export default Home;
