import React from "react";
import { Box, Heading, Main, Text } from "grommet";

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
        <Text size="medium" textAlign="start">
          Please direct all questions or concerns to Eli Cohen.
          <br />
          <br />
          <i>eliunited [at] google mail</i>
        </Text>
      </Box>
    </Main>
  );
};
