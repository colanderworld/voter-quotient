import React from "react";
import { Heading, Text, Box } from "grommet";

export default () => {
  return (
    <Box pad={{ horizontal: "1em" }}>
      <Heading
        style={{
          fontSize: "4em",
          lineHeight: "1em",
          fontFamily: "IBM Plex Mono"
        }}
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
  );
};
