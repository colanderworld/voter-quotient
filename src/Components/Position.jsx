<<<<<<< HEAD
import React from "react";
import { AccordionPanel, Box, Text, ResponsiveContext } from "grommet";
import Candidate from "./Candidate";
import Tag from "../Utils/Tag";

export default ({
  positionName,
  positionDescription,
  division,
  divisionColor,
  voteMargin,
  candidatesArray,
}) => {
  const SortedCandidates = candidatesArray
    .sort(({ incumbent }) => incumbent)
    .map(
      ({
        first_name,
        last_name,
        party_name,
        thumb_url,
        candidateOccupation, // Need to re-call /candidate endpoint
        candidateTenure, // Need to re-call /candidate endpoint
        endorsements, // Need to re-call /endorsements endpoint
      }) => (
        <Candidate
          key={last_name && last_name}
          name={first_name + last_name}
          party={party_name && party_name}
          photo={thumb_url && thumb_url}
          occupation={candidateOccupation && candidateOccupation}
          tenure={candidateTenure && candidateTenure}
          keyEndorsements={endorsements && endorsements}
          otherEndorsements={endorsements && endorsements}
        />
      )
    );
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <AccordionPanel
          focusIndicator={false}
          pad={{ top: "small", bottom: "2px" }}
          label={
            <Box
              margin={size === "small" && { horizontal: "small" }}
              direction="row"
              gap="xsmall"
              justify="between"
              align="baseline"
              flex="grow"
            >
              <Text style={{ fontSize: "1.6em" }}>
                <b>{positionName}</b>
              </Text>
              <Box direction="row" align="baseline">
                <Tag color={divisionColor}>{division}</Tag>
                <Text style={{ fontFamily: "IBM Plex Mono", fontSize: "1em" }}>
                  &nbsp;{voteMargin}
                </Text>
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
=======
import React from 'react'
import { AccordionPanel, Box, Text, ResponsiveContext, Markdown } from 'grommet'
import { Star } from 'grommet-icons'
import Candidate from './Candidate'
import MetaInfo from './MetaInfo'

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
		.sort((d) => d.occupation === 'Incumbent')
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
		)
	return (
		<ResponsiveContext.Consumer>
			{(size) => (
				<AccordionPanel
					pad={{ top: 'small', bottom: '2px' }}
					label={
						<Box
							// focusIndicator={false}
							margin={size === 'small' ? { horizontal: 'small' } : null}
							direction='row'
							gap='xsmall'
							justify='between'
							align='baseline'
							flex='grow'>
							<Box direction='row' gap='xsmall' align='center'>
								<Text style={{ fontSize: '1.6em' }}>
									<b>{normPositionName}</b>
								</Text>
								<Star color='gold' size='30px' />
							</Box>
							<Box direction='row' alignSelf='end' align='baseline'>
								<MetaInfo
									positionName={positionName}
									positionDescription={positionDescription}
									division={division}
									divisionDescription={divisionDescription}
									voteMargin={voteMargin}
								/>
							</Box>
						</Box>
					}>
					<Box
						direction={size === 'small' ? 'column' : 'row'}
						pad={{ vertical: 'xsmall' }}>
						{SortedCandidates}
					</Box>
					<Box basis='full' pad='xsmall' margin={{ bottom: '1em' }}>
						{positionDescription}
					</Box>
				</AccordionPanel>
			)}
		</ResponsiveContext.Consumer>
	)
}
>>>>>>> demo
