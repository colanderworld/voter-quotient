import React from "react";
import { Box, Text, ResponsiveContext, Heading } from "grommet";

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          width={{ max: "800px" }}
          margin={size === "small" ? "small" : null}
        >
          <Heading
            style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
            margin={{ top: "xlarge" }}
          >
            Methodology
          </Heading>
          <Text size="medium">
            Vote for Astra is a non-partisan, non-profit organization devoted to
            the idea that voting can, should, and must be easier for college
            students. Created in 2019, it aims to provide resources and support
            to university faculty, staff, and students as they work to improve
            turnout on campus. Centered around the Campus Canvass technique, it
            emphasizes peer-to-peer contact, consistent engagement, and
            data-driven strategy.
          </Text>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
