import React from "react";
import {
  AccordionPanel,
  Box,
  Text,
  ResponsiveContext,
  Markdown,
} from "grommet";
import { Star } from "grommet-icons";
import Candidate from "./Candidate";
import MetaInfo from "./MetaInfo";

export default ({
  normPositionName,
  positionName,
  positionDescription,
  normalizedDescription,
  division,
  divisionColor,
  divisionDescription,
  voteMargin,
  candidatesArray,
}) => {
  const SortedCandidates = candidatesArray
    .sort((d) => d.occupation === "Incumbent")
    .map(
      ({
        candidateName,
        candidateParty,
        candidatePhoto,
        candidateOccupation,
        candidateTenure,
        endorsements,
      }) => (
        <Candidate
          key={candidateName}
          name={candidateName}
          party={candidateParty}
          photo={candidatePhoto}
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
              margin={size === "small" && { horizontal: "small" }}
              direction={size === "small" ? "column" : "row"}
              justify="between"
              align="baseline"
              flex="grow"
              style={{ boxShadow: null }}
            >
              <Box direction="row" gap="xsmall">
                <Text style={{ fontSize: "1.6em", lineHeight: "1.5em" }}>
                  <b>{normPositionName}</b>
                </Text>
                <Star color="gold" size="30px" />
              </Box>
              <Box
                direction="row"
                alignSelf={size === "small" ? "start" : "end"}
                align="baseline"
              >
                <MetaInfo
                  positionName={positionName}
                  positionDescription={positionDescription}
                  division={division}
                  divisionDescription={divisionDescription}
                  voteMargin={voteMargin}
                />
              </Box>
            </Box>
          }
        >
          <Box
            direction={size === "small" ? "column" : "row"}
            pad={{ vertical: "xsmall" }}
          >
            {SortedCandidates}
          </Box>
          <Box basis="full" pad="xsmall" margin={{ bottom: "1em" }}>
            {positionDescription}
          </Box>
        </AccordionPanel>
      )}
    </ResponsiveContext.Consumer>
  );
};
