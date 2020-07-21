import React, { useRef, useState } from "react";
import { AccordionPanel, Box, Text, ResponsiveContext, Drop } from "grommet";
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

  const Winner = candidatesArray
    .filter((d) => d.election_result === "Won")
    .map(
      ({
        first_name,
        last_name,
        candidateParty,
        thumb_url,
        candidateOccupation,
        candidateTenure,
        endorsements,
        election_result,
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
          status={election_result}
        />
      )
    );

  const Losers = candidatesArray
    .filter((d) => d.election_result !== "Won")
    .map(
      ({
        first_name,
        last_name,
        candidateParty,
        thumb_url,
        candidateOccupation,
        candidateTenure,
        endorsements,
        election_result,
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
          status={election_result}
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
                onMouseOver={() => size !== "small" && setOver(true)}
                onMouseOut={() => size !== "small" && setOver(false)}
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
            <Box basis="1/2" direction="column">
              {Winner}
            </Box>
            {Losers.length !== 0 ? (
              <Box basis="1/2" direction="column">
                {Losers}
              </Box>
            ) : (
              <Box
                basis="1/2"
                round="xsmall"
                border="all"
                justify="center"
                margin="xsmall"
                style={{
                  borderColor: "#FFE91D",
                }}
              >
                <Text textAlign="center" margin={{ vertical: "medium" }}>
                  This candidate ran <b>unopposed</b> in 2019!
                  <br />
                  Elections should be contested!
                </Text>
              </Box>
            )}
          </Box>
        </AccordionPanel>
      )}
    </ResponsiveContext.Consumer>
  );
};
