import React, { useRef, useState } from "react";
import { Box, Drop, Text, Avatar } from "grommet";
import { getInitials } from "../Utils/Helpers";

export default ({ data }) => {
  const [over, setOver] = useState();
  const ref = useRef();

  const { name, color, key } = data;

  return (
    <Box>
      <Text color={color}>{name}</Text>
    </Box>
  );
};
