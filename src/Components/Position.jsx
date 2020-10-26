// LIbrary imports
import React, { useContext, useRef, useState } from 'react'
import { AccordionPanel, Box, Text, ResponsiveContext, Anchor, Heading, Drop } from 'grommet'
import { Star } from 'grommet-icons'
import _ from 'lodash'

// Component imports
import Candidate from './Candidate'
import MetaInfo from './MetaInfo'

export default ({ data }) => {
	const { normalized_position_name, position_name, description, level, candidates, starred } = data

	const size = useContext(ResponsiveContext)
	const [over, setOver] = useState()
	const ref = useRef()

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
						{starred && (
							<Box
								ref={ref}
								onMouseOver={() => size !== 'small' && setOver(true)}
								onMouseOut={() => size !== 'small' && setOver(false)}>
								<Star color='gold' size='30px' />
							</Box>
						)}
					</Box>
					{ref.current && over && (
						<Drop align={{ bottom: 'top' }} target={ref.current} plain>
							<Box
								width={starred ? '250px' : '200px'}
								pad='xsmall'
								background='white'
								margin={{ bottom: '4px' }}
								border={{ size: 'xsmall', color: 'black' }}
								round={{ size: 'xsmall' }}>
								<Text size='small' style={{ display: !starred && 'none' }}>
									This is one of our <b>highlighted races</b>.
								</Text>
								<Text size='small'>
									This position has a <b>direct impact on criminal justice</b>.
								</Text>
							</Box>
						</Drop>
					)}
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
							{Democrat}
						</Box>
						<Box basis={size === 'small' ? 'full' : '1/2'} direction='column'>
							{Other}
						</Box>
					</>
				)}
			</Box>
		</AccordionPanel>
	)
}
