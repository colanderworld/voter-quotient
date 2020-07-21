import React, { useContext } from "react";
import { Context } from "../Contexts/LatLng";
import { Header } from "grommet";
// import AddressInput from '../Components/AddressInput.jsx'

export default () => {
  const { latlng } = useContext(Context);

  return (
    <Header
      pad="small"
      justify="start"
      border="bottom"
      background={{ dark: "black", light: "white" }}
    >
      <b>Your Address:</b>
      <div>
        lat: {latlng.lat} lng: {latlng.lng}
      </div>
    </Header>
  );
};
