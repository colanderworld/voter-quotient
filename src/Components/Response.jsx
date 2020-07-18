import React from 'react'
import { Accordion } from 'grommet'
import Position from './Position'

export const Response = ({ data }) => {
	const sortedPositions = data.map(
		({
			normPositionName,
			positionName,
			positionDescription,
			division,
			divisionColor,
			voteMargin,
			candidateArray,
		}) => (
			<Position
				key={positionName}
				normPositionName={normPositionName}
				positionName={positionName}
				positionDescription={positionDescription}
				division={division}
				divisionColor={divisionColor}
				voteMargin={voteMargin}
				candidatesArray={candidateArray}
			/>
		)
	)
	return (
		<Accordion multiple={true} width='large' margin='xsmall' animate={true}>
			{sortedPositions}
		</Accordion>
	)
}
