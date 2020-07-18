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
