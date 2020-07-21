import React, { useRef, useState } from "react";
import {
  AccordionPanel,
  Box,
  Text,
  ResponsiveContext,
  Markdown,
  Drop,
  Heading,
} from "grommet";
import { Star } from "grommet-icons";
import Candidate from "./Candidate";
import MetaInfo from "./MetaInfo";

export default ({
  normalizedPosition,
  positionName,
  description,
  level,
  divisionDescription,
  voteMargin,
  candidatesArray,
  tagged,
}) => {
  const [over, setOver] = useState();
  const ref = useRef();

  const SortedCandidates = candidatesArray
    .sort((d) => d.election_result !== "Won")
    .map(
      ({
        first_name,
        last_name,
        candidateParty,
        thumb_url,
        candidateOccupation,
        candidateTenure,
        endorsements,
      }) => (
        <Candidate
          key={last_name}
          name={first_name + " " + last_name}
          party={candidateParty}
          thumb_url={thumb_url}
          occupation={candidateOccupation}
          tenure={candidateTenure}
          keyEndorsements={endorsements}
          otherEndorsements={endorsements}
        />
      )
    );
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <AccordionPanel
          pad={{ top: "small" }}
          label={
            <Box
              margin={size === "small" && { horizontal: "small", top: "small" }}
              direction={size === "small" ? "column" : "row"}
              justify="between"
              align="baseline"
              flex="grow"
              style={{ boxShadow: null }}
            >
              <Box
                direction="row"
                gap="xsmall"
                ref={ref}
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
              >
                <Text style={{ fontSize: "1.6em", lineHeight: "1.5em" }}>
                  <b>{normalizedPosition}</b>
                </Text>
                {tagged && <Star color="gold" size="30px" />}
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
                      This is one of our <b>highlighted races</b>. We believe it
                      will have an outsized impact on policing and prisons in
                      your community.
                      <br />
                      <br />
                    </Text>
                    <Text size="small">
                      <b>Click to see the candidates!</b>
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
                  normalizedPosition={normalizedPosition}
                  positionName={positionName}
                  description={description}
                  level={level}
                  divisionDescription={divisionDescription}
                  voteMargin={voteMargin}
                  // winner={candidatesArray
                  //   .sort((d) => d.election_result !== "Won")
                  //   .slice(1)}
                />
              </Box>
            </Box>
          }
        >
          <Box
            direction={size === "small" ? "column" : "row"}
            pad={{ vertical: "xsmall" }}
          >
            <Box basis="1/2">{SortedCandidates.slice(0, 1)}</Box>
            {SortedCandidates.length !== 1 ? (
              <Box basis="1/2" direction="column">
                {SortedCandidates.slice(1)}
              </Box>
            ) : (
              <Box fill={true} background="#dbdbdb" round="small">
                <Heading alignSelf="center">Unopposed</Heading>
              </Box>
            )}
          </Box>
          {/* <Box basis="full" pad="xsmall" margin={{ bottom: "1em" }}>
            {description}
          </Box> */}
        </AccordionPanel>
      )}
    </ResponsiveContext.Consumer>
  );
};
