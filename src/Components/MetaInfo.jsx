import React, { useRef, useState } from "react";
import styled from "styled-components";
import _ from "lodash";

import { Box, Drop, Text, ResponsiveContext } from "grommet";

export default ({
  normalizedPosition,
  positionName,
  description,
  level,
  divisionDescription,
  voteMargin,
  voteRaw,
  winner
}) => {
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

  const marginDescription = (raw, percent) => {
    return (
      <Text size="small">
        The incumbent recieved <b>{raw}</b> more votes in their last election,
        winning by <b>+{percent}%</b>.
      </Text>
    );
  };

  const boldPostion = (position, description) => {
    const marker = description.search(position);

    const newString = (
      <html>
        {description.slice(0, marker)} <b>{position}</b>
        {description.slice(marker + position.length)}
      </html>
    );

    return newString;
  };

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box direction={size === "small" ? "row-reverse" : "row"}>
          <Box>
            <Box
              pad="xsmall"
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
                  <Text size="small">
                    {boldPostion(normalizedPosition, description)}
                  </Text>
                </Box>
              </Drop>
            )}
          </Box>
          <Box pad="xsmall">
            <MetaData>|</MetaData>
          </Box>
          <Box>
            <Box
              pad="xsmall"
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
                  {defineLevel(level)}
                </Box>
              </Drop>
            )}
          </Box>
          <Box pad="xsmall">
            <MetaData>|</MetaData>
          </Box>
          <Box>
            <Box
              pad="xsmall"
              align={size === "small" ? "start" : "end"}
              width="70px"
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
                  {marginDescription(voteRaw, voteMargin)}
                </Box>
              </Drop>
            )}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

const defineLevel = level => {
  if (level === "FEDERAL") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting the entire country.
      </Text>
    );
  } else if (level === "STATE") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting your state only.
      </Text>
    );
  } else if (level === "COUNTY") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting your county only.
      </Text>
    );
  } else if (level === "CITY") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting your immediate city.
      </Text>
    );
  } else if (level === "LOCAL") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting your locality. This is the smallest
        governmental area.
      </Text>
    );
  } else if (level === "PARTY") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning they only hold
        power within their own party.
      </Text>
    );
  }
};
