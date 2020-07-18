import React from "react";
import { Box, Markdown, ResponsiveContext, Heading } from "grommet";

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box path="contact">
          <Heading>Contact</Heading>
          <Markdown>Hello *Contact* _man_!</Markdown>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
