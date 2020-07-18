import React, { useState, useRef } from 'react'
import {
	AccordionPanel,
	Box,
	Text,
	ResponsiveContext,
	Drop,
	Markdown,
} from 'grommet'

import Candidate from './Candidate'
import Tag from '../Utils/Tag'

export default ({
	positionName,
	positionDescription,
	normalizedDescription,
	division,
	divisionColor,
	divisionDescription,
	voteMargin,
	candidatesArray,
}) => {
	const [over, setOver] = useState()
	const [overTwo, setOverTwo] = useState()
	const [overThree, setOverThree] = useState()

	const ref = useRef()
	const refTwo = useRef()
	const refThree = useRef()

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
							<Box
								ref={refThree}
								onMouseOver={() => setOverThree(true)}
								onMouseOut={() => setOverThree(false)}
								onFocus={() => {}}
								onBlur={() => {}}>
								<Text style={{ fontSize: '1.6em' }}>
									<b>{positionName}</b>
								</Text>
							</Box>
							{refThree.current && overThree && (
								<Drop align={{ bottom: 'top' }} target={refThree.current} plain>
									<Box
										// margin='xsmall'
										overflow={{ vertical: 'hidden' }}
										width='175px'
										pad='xsmall'
										background='white'
										border={{ size: 'xsmall', color: 'black' }}
										round={{ size: 'xsmall' }}>
										<Text style={{ lineHeight: '1.1em' }} size='small'>
											{normalizedDescription}
										</Text>
									</Box>
								</Drop>
							)}
							<Box direction='row' alignSelf='end'>
								<Box
									ref={ref}
									onMouseOver={() => setOver(true)}
									onMouseOut={() => setOver(false)}
									onFocus={() => {}}
									onBlur={() => {}}>
									<Tag color={divisionColor}>{division}</Tag>
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
												The **raw number** of votes the incumbent won the
												previous election by.
											</Markdown>
										</Box>
									</Drop>
								)}
								<Box
									ref={refTwo}
									onMouseOver={() => setOverTwo(true)}
									onMouseOut={() => setOverTwo(false)}
									onFocus={() => {}}
									onBlur={() => {}}>
									<Text
										style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}>
										&nbsp;{voteMargin}
									</Text>
								</Box>
								{refTwo.current && overTwo && (
									<Drop align={{ bottom: 'top' }} target={refTwo.current} plain>
										<Box
											width='175px'
											pad='xsmall'
											background='white'
											margin={{ bottom: '4px' }}
											border={{ size: 'xsmall', color: 'black' }}
											round={{ size: 'xsmall' }}>
											<Markdown>
												The **raw number** of votes the incumbent won the
												previous election by.
											</Markdown>
										</Box>
									</Drop>
								)}
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
