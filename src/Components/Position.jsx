// LIbrary imports
import React, { useRef, useState, useContext } from "react";
import {
  AccordionPanel,
  Box,
  Text,
  ResponsiveContext,
  Drop,
  Anchor,
  Heading
} from "grommet";

// Visual imports
import { Star } from "grommet-icons";

// Component imports
import Candidate from "./Candidate";
import MetaInfo from "./MetaInfo";

export default ({ data }) => {
  const {
    normalized_position_name,
    position_name,
    description,
    level,
    tagged,
    candidates
  } = data;

  const size = useContext(ResponsiveContext);
  const [over, setOver] = useState(false);
  const ref = useRef();

  const Democrat = candidates
    .filter(({ party }) => party === "Democratic")
    .map(filtered => <Candidate key={filtered.name} data={filtered} />);

  const Other = candidates
    .filter(({ party }) => party !== "Democratic")
    .map(filtered => <Candidate key={filtered.name} data={filtered} />);

  return (
    <AccordionPanel
      pad={{ top: "small" }}
      label={
        <Box
          margin={size === "small" && { horizontal: "small", top: "small" }}
          direction={size === "small" ? "column" : "row"}
          justify="between"
          align="baseline"
          flex="grow"
        >
          <Box direction="row" gap="xsmall">
            <Text
              weight="bold"
              style={{ fontSize: "1.6em", lineHeight: "1.5em" }}
            >
              {normalized_position_name}
            </Text>
            {tagged && (
              <Box
                ref={ref}
                onMouseOver={() => size !== "small" && setOver(true)}
                onMouseOut={() => size !== "small" && setOver(false)}
              >
                <Star color="gold" size="30px" />
              </Box>
            )}
          </Box>
          {ref.current && over && (
            <Drop align={{ bottom: "top" }} target={ref.current} plain>
              <Box
                width={tagged ? "250px" : "200px"}
                pad="xsmall"
                background="white"
                margin={{ bottom: "4px" }}
                border={{ size: "xsmall", color: "black" }}
                round={{ size: "xsmall" }}
              >
                <Text size="small" style={{ display: !tagged && "none" }}>
                  This is one of our <b>highlighted races</b>.
                </Text>
                <Text size="small">
                  This position has a <b>direct impact on police</b>.
                </Text>
              </Box>
            </Drop>
          )}
          <Box
            direction="row"
            alignSelf={size === "small" ? "start" : "end"}
            align="baseline"
          >
            <MetaInfo
              margin={size === "small" && { horizontal: "small" }}
              normalizedPosition={normalized_position_name}
              positionName={position_name}
              description={description}
              level={level}
            />
          </Box>
        </Box>
      }
    >
      <Box direction={size === "small" ? "column" : "row"} pad="xsmall">
        {candidates.length === 0 ? (
          <Box
            border={{ color: "brand", size: "xsmall" }}
            pad="medium"
            round="medium"
          >
            <Heading level={2}>No data yet :(</Heading>{" "}
            <Text>
              We use{" "}
              <Anchor to="https://www.ballotready.org/">BallotReady</Anchor> for
              candidate info. <br />
              Please consult{" "}
              <Anchor to="https://docs.google.com/spreadsheets/d/1vONk2dmSVJg-6aRbEPbNcPLE08V9K79CGDo5fwGxE6A/edit?mc_cid=3fb5adf7dd&mc_eid=f15ad0889d#gid=2026863387">
                their calendar
              </Anchor>{" "}
              to see when your data will be available.
            </Text>
          </Box>
        ) : (
          <>
            <Box basis={size === "small" ? "full" : "1/2"} direction="column">
              {Democrat.length === 0 ? (
                <Box
                  border={{ color: "brand", size: "xsmall" }}
                  pad="medium"
                  margin="medium"
                  round="medium"
                >
                  <Heading level={2}>Running unopposed</Heading>{" "}
                </Box>
              ) : (
                Democrat
              )}
            </Box>
            <Box basis={size === "small" ? "full" : "1/2"} direction="column">
              {Other.length === 0 ? (
                <Box
                  border={{ color: "brand", size: "xsmall" }}
                  pad="medium"
                  margin="medium"
                  round="medium"
                >
                  <Heading level={2}>Running unopposed</Heading>{" "}
                </Box>
              ) : (
                Other
              )}
            </Box>
          </>
        )}
      </Box>
    </AccordionPanel>
  );
};
