import React, { useContext } from "react";
import { Box, Text, ResponsiveContext, Heading } from "grommet";

export default () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      width={size !== "small" && "800px"}
      margin={size === "small" && "small"}
    >
      <Heading
        style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
        margin={{ top: "xlarge" }}
      >
        Methodology
      </Heading>
      <Text size="medium">
        Yeah not much here either...
        <br />
        Soon!
      </Text>
    </Box>
  );
};
