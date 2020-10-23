// Library Imports
import React from "react";
import styled from "styled-components";
import { Box, Text } from "grommet";

export default ({ normalizedPosition }) => {
  return (
    <Box direction="row-reverse">
      <Box>
        <Box align="start">
          <MetaData>{normalizedPosition}</MetaData>
        </Box>
      </Box>
    </Box>
  );
};

const MetaData = styled(Text)`
  font-family: "IBM Plex Mono";
  font-size: 1em;
  letter-spacing: -0.7px;

  @media screen and (max-width: 375px) {
    font-size: 0.9em;
  }

  :hover {
    font-style: italic;
    text-decoration: underline;
    text-decoration-color: gold;
  }
`;
