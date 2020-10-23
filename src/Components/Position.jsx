// LIbrary imports
import React, { useContext } from 'react'
import { AccordionPanel, Box, Text, ResponsiveContext, Anchor, Heading } from 'grommet'
import _ from 'lodash'

// Component imports
import Candidate from './Candidate'
import MetaInfo from './MetaInfo'

export default ({ data }) => {
	const { normalized_position_name, position_name, description, level, candidates } = data

	const size = useContext(ResponsiveContext)

	const uniqueCandidates = _.uniqBy(candidates, 'name')
	console.log(uniqueCandidates)

	const Democrat = uniqueCandidates
		.filter(({ party }) => party === 'Democratic')
		.map(filtered => <Candidate key={filtered.name} data={filtered} />)

	const Other = uniqueCandidates
		.filter(({ party }) => party !== 'Democratic')
		.map(filtered => <Candidate key={filtered.name} data={filtered} />)

	function sortCandidates(candidatesArray) {
		if (_.includes(candidatesArray, _.matchesProperty('party', 'Nonpartisan'))) {
		}
	}

	return (
		<AccordionPanel
			pad={{ top: 'small' }}
			label={
				<Box
					margin={size === 'small' && { horizontal: 'small', top: 'small' }}
					direction='column'
					justify='between'
					align='baseline'
					flex='grow'>
					<Box direction='row' gap='xsmall'>
						<Text weight='bold' style={{ fontSize: '1.6em', lineHeight: '1.5em' }}>
							{position_name}
						</Text>
					</Box>

					<Box direction='row' alignSelf='start' align='baseline'>
						<MetaInfo
							normalizedPosition={normalized_position_name}
							positionName={position_name}
							description={description}
							level={level}
						/>
					</Box>
				</Box>
			}>
			<Box direction={size === 'small' ? 'column' : 'row'} pad='xsmall'>
				{candidates.length === 0 ? (
					<Box border={{ color: 'brand', size: 'xsmall' }} pad='medium' round='medium'>
						<Heading level={2}>No data yet :(</Heading>{' '}
						<Text>
							We use <Anchor href='https://www.ballotready.org/'>BallotReady</Anchor> for
							candidate info. <br />
							Please consult{' '}
							<Anchor href='https://docs.google.com/spreadsheets/d/1vONk2dmSVJg-6aRbEPbNcPLE08V9K79CGDo5fwGxE6A/edit?mc_cid=3fb5adf7dd&mc_eid=f15ad0889d#gid=2026863387'>
								their calendar
							</Anchor>{' '}
							to see when your data will be available.
						</Text>
					</Box>
				) : (
					<>
						<Box basis={size === 'small' ? 'full' : '1/2'} direction='column'>
							{Democrat.length === 0 ? (
								<Box
									border={{ color: 'brand', size: 'xsmall' }}
									pad='medium'
									margin='medium'
									round='medium'>
									<Heading level={2}>Running unopposed</Heading>{' '}
								</Box>
							) : (
								Democrat
							)}
						</Box>
						<Box basis={size === 'small' ? 'full' : '1/2'} direction='column'>
							{Other.length === 0 ? (
								<Box
									border={{ color: 'brand', size: 'xsmall' }}
									pad='medium'
									margin='medium'
									round='medium'>
									<Heading level={2}>Running unopposed</Heading>{' '}
								</Box>
							) : (
								Other
							)}
						</Box>
					</>
				)}
			</Box>
		</AccordionPanel>
	)
}
