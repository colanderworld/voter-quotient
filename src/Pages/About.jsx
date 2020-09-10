import React from "react";
import { Box, Heading, Main, Text } from "grommet";

export default () => {
  return (
    <Main align="center">
      <Box width={{ max: "800px" }} fill="horizontal" pad="small">
        <Heading
          style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
          margin={{ top: "xlarge" }}
          textAlign="start"
        >
          About
        </Heading>
        <Text size="medium" textAlign="start">
          We don't have an about page yet... <br />
          But thanks for checking!
        </Text>
      </Box>
    </Main>
  );
};
