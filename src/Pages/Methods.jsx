import React from "react";
import { Box, Markdown, ResponsiveContext, Heading } from "grommet";

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box path="methods">
          <Heading>Methods</Heading>
          <Markdown>Hello *Method* _man_!</Markdown>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
