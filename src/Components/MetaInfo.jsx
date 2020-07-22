// Library Imports
import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import _ from "lodash";
import { Box, Drop, Text, ResponsiveContext } from "grommet";

// Helper functions
import { DefineLevel, VoteTally, BoldPostion } from "../Utils/Helpers";

export default ({
  normalizedPosition,
  positionName,
  description,
  level,
  divisionDescription,
  voteMargin,
  voteRaw,
  winner,
}) => {
  const size = useContext(ResponsiveContext);
  const [over, setOver] = useState();
  const ref = useRef();
  const [overTwo, setOverTwo] = useState();
  const refTwo = useRef();
  const [overThree, setOverThree] = useState();
  const refThree = useRef();

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

  return (
    <Box direction={size === "small" ? "row-reverse" : "row"}>
      <Box>
        <Box
          align={size === "small" ? "start" : "end"}
          margin={size === "small" ? { left: "4px" } : { right: "8px" }}
          ref={ref}
          onMouseEnter={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
        >
          <MetaData>{positionName}</MetaData>
        </Box>
        {ref.current && over && (
          <Drop align={{ bottom: "top" }} target={ref.current} plain>
            <Box
              width="250px"
              pad="xsmall"
              background="white"
              margin={{ bottom: "4px" }}
              border={{ size: "xsmall", color: "black" }}
              round={{ size: "xsmall" }}
            >
              {BoldPostion(normalizedPosition, description)}
            </Box>
          </Drop>
        )}
      </Box>
      <MetaData>|</MetaData>
      <Box>
        <Box
          align={size === "small" ? "start" : "end"}
          width="47px"
          margin={
            size === "small" ? { horizontal: "4px" } : { horizontal: "8px" }
          }
          ref={refTwo}
          onMouseEnter={() => setOverTwo(true)}
          onMouseLeave={() => setOverTwo(false)}
        >
          <MetaData>{_.upperFirst(_.lowerCase(level))}</MetaData>
        </Box>
        {refTwo.current && overTwo && (
          <Drop align={{ bottom: "top" }} target={refTwo.current} plain>
            <Box
              width="200px"
              pad="xsmall"
              background="white"
              margin={{ bottom: "4px" }}
              border={{ size: "xsmall", color: "black" }}
              round={{ size: "xsmall" }}
            >
              {DefineLevel(level)}
            </Box>
          </Drop>
        )}
      </Box>
      <MetaData>|</MetaData>
      <Box>
        <Box
          align={size === "small" ? "start" : "end"}
          width="55px"
          margin={size === "small" ? { right: "4px" } : { left: "8px" }}
          ref={refThree}
          onMouseEnter={() => setOverThree(true)}
          onMouseLeave={() => setOverThree(false)}
        >
          <MetaData>{voteRaw}</MetaData>
        </Box>
        {refThree.current && overThree && (
          <Drop align={{ bottom: "top" }} target={refThree.current} plain>
            <Box
              width="210px"
              pad="xsmall"
              background="white"
              margin={{ bottom: "4px" }}
              border={{ size: "xsmall", color: "black" }}
              round={{ size: "xsmall" }}
            >
              {VoteTally(voteRaw, voteMargin)}
            </Box>
          </Drop>
        )}
      </Box>
    </Box>
  );
};
