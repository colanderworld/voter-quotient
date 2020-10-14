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
// import { Star } from "grommet-icons";

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
          direction="column"
          justify="between"
          align="baseline"
          flex="grow"
        >
          <Box direction="row" gap="xsmall">
            <Text
              weight="bold"
              style={{ fontSize: "1.6em", lineHeight: "1.5em" }}
            >
              {position_name}
            </Text>
          </Box>

          <Box direction="row" alignSelf="start" align="baseline">
            <MetaInfo
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
