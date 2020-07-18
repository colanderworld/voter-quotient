import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { Box, Drop, Markdown, Text } from 'grommet'

export default ({
	positionName,
	positionDescription,
	division,
	divisionDescription,
	voteMargin,
}) => {
	const [over, setOver] = useState()
	const ref = useRef()
	const [overTwo, setOverTwo] = useState()
	const refTwo = useRef()
	const [overThree, setOverThree] = useState()
	const refThree = useRef()

	const MetaData = styled(Text)`
		font-family: 'IBM Plex Mono';
		font-size: 1em;
		letter-spacing: -0.7px;

		:hover {
			font-style: italic;
			text-decoration: underline;
			text-decoration-color: gold;
		}
	`

	return (
		<Box direction='row'>
			<Box>
				<Box
					margin={{ left: '16px' }}
					ref={ref}
					onMouseOver={() => setOver(true)}
					onMouseOut={() => setOver(false)}>
					<MetaData>{positionName}</MetaData>
				</Box>
				{ref.current && over && (
					<Drop align={{ bottom: 'top' }} target={ref.current} plain>
						<Box
							width='175px'
							pad='xsmall'
							background='white'
							margin={{ bottom: '4px' }}
							border={{ size: 'xsmall', color: 'black' }}
							round={{ size: 'xsmall' }}>
							<Markdown>
								Massachusett's 7th U.S. Congressional District is one of
								**nine** in the state, and **435** in the country.
							</Markdown>
						</Box>
					</Drop>
				)}
			</Box>
			<Box>
				<Box
					align='end'
					width='60px'
					margin={{ left: '16px' }}
					ref={refTwo}
					onMouseOver={() => setOverTwo(true)}
					onMouseOut={() => setOverTwo(false)}>
					<MetaData>{division}</MetaData>
				</Box>
				{refTwo.current && overTwo && (
					<Drop align={{ bottom: 'top' }} target={refTwo.current} plain>
						<Box
							width='200px'
							pad='xsmall'
							background='white'
							margin={{ bottom: '4px' }}
							border={{ size: 'xsmall', color: 'black' }}
							round={{ size: 'xsmall' }}>
							<Markdown>
								This is a **federal position**, meaning office holders vote on
								policy affecting the entire country.
							</Markdown>
						</Box>
					</Drop>
				)}
			</Box>
			<Box>
				<Box
					align='end'
					width='70px'
					margin={{ left: '16px' }}
					ref={refThree}
					onMouseOver={() => setOverThree(true)}
					onMouseOut={() => setOverThree(false)}>
					<MetaData>{voteMargin}</MetaData>
				</Box>
				{refThree.current && overThree && (
					<Drop align={{ bottom: 'top' }} target={refThree.current} plain>
						<Box
							width='200px'
							pad='xsmall'
							background='white'
							margin={{ bottom: '4px' }}
							border={{ size: 'xsmall', color: 'black' }}
							round={{ size: 'xsmall' }}>
							<Markdown>
								The **raw number** of votes the incumbent won the previous
								election by.
							</Markdown>
						</Box>
					</Drop>
				)}
			</Box>
		</Box>
	)
}
