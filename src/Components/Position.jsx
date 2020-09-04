// LIbrary imports
import React, { useRef, useState, useContext } from "react";
import { AccordionPanel, Box, Text, ResponsiveContext, Drop } from "grommet";

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
    voteMargin,
    voteRaw,
    tagged,
    candidates_meta,
    candidates
  } = data;

  const size = useContext(ResponsiveContext);
  const [over, setOver] = useState();
  const ref = useRef();

  /*
  Split the candidates into current office holders and those we don't

  candidatesArray -> <Candidate />  (Incumbent Candidates)
                  -> <Candidate />  (Challenger Candidates)
  */
  const Incumbent = candidates
    .filter(({ candidacies }) => candidacies[0].incumbent)
    .map(filtered => <Candidate key={filtered.name} data={filtered} />);

  const Challenger = candidates
    .filter(({ candidacies }) => !candidacies[0].incumbent)
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
                <Text size="small">Click to see the candidates!</Text>
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
        <Box basis={size === "small" ? "full" : "1/2"} direction="column">
          {Incumbent}
        </Box>
        <Box basis={size === "small" ? "full" : "1/2"} direction="column">
          {Challenger}
        </Box>
      </Box>
    </AccordionPanel>
  );
};
