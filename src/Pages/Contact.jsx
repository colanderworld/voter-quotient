import React from "react";
import { Box, Heading, Main } from "grommet";

export default () => {
  return (
    <Main align="center">
      <Box width={{ max: "800px" }} fill="horizontal" pad="small">
        <Heading
          style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
          margin={{ top: "xlarge" }}
        >
          Contact
        </Heading>
      </Box>
    </Main>
  );
};
