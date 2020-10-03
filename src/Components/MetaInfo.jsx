// Library Imports
import React, { useContext } from "react";
import styled from "styled-components";
import _ from "lodash";
import { Box, Text, ResponsiveContext } from "grommet";

// Helper functions
// import { DefineLevel, VoteTally, BoldPostion } from "../Utils/Helpers";

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

export default ({ positionName, normalizedPosition, level }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box direction={size === "small" ? "row-reverse" : "row"}>
      <Box>
        <Box
          align={size === "small" ? "start" : "end"}
          margin={
            size === "small" ? { horizontal: "4px" } : { horizontal: "8px" }
          }
        >
          <MetaData>{positionName}</MetaData>
        </Box>
      </Box>
      <MetaData> | </MetaData>
      <Box>
        <Box
          align={size === "small" ? "start" : "end"}
          width="53px"
          margin={size === "small" ? { left: "4px" } : { right: "8px" }}
        >
          <MetaData>{_.upperFirst(_.lowerCase(level))}</MetaData>
        </Box>
      </Box>
    </Box>
  );
};
