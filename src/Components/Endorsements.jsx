import React, { useRef, useState } from 'react'
import { Box, Avatar, Text, Drop } from 'grommet'

const getInitials = (name) =>
	name
		.replace(/[^A-Za-z0-9À-ÿ ]/gi, '') // taking care of accented characters as well
		.replace(/ +/gi, ' ') // replace multiple spaces to one
		.split(/ /) // break the name into parts
		.reduce((acc, item) => acc + item[0], '') // assemble an abbreviation from the parts

export const KeyEndorsements = ({ endorsementsArray }) => {
	const [over, setOver] = useState()
	const ref = useRef()

	const FilteredEndorsements = endorsementsArray.map(
		({ Group, Color, Logo, KeyEndorsement }, index) =>
			// Key Endorsements is TRUE
			KeyEndorsement && (
				<Box
					ref={ref}
					round='small'
					label='Avatar'
					onMouseOver={() => setOver(true)}
					onMouseOut={() => setOver(false)}
					onFocus={() => {}}
					onBlur={() => {}}
					size='42px'
					background={Color}
					border={true}
					margin={{ horizontal: '2px', vertical: '1px' }}
					src={Logo !== null ? Logo : null}>
					{Logo === null ? getInitials(Group) : null}
					{ref.current && over && (
						<Drop align={{ left: 'right' }} target={ref.current} plain>
							<Box
								margin={{ left: 'xsmall' }}
								pad='xsmall'
								border={{ size: 'xsmall', color: 'black' }}
								round={{ size: 'xsmall' }}>
								<Text size='xsmall'>{Group}</Text>
							</Box>
						</Drop>
					)}
				</Box>
			)
	)

	return (
		<Box direction='row' wrap={true} margin={{ left: '-2px' }}>
			{FilteredEndorsements}
		</Box>
	)
}

export const OtherEndorsements = ({ endorsementsArray }) => {
	const FilteredEndorsements = endorsementsArray.map(
		({ Group, Color, KeyEndorsement }) =>
			// Key Endorsements is FALSE
			!KeyEndorsement ? (
				<Avatar
					key={Group} // Use proper key signature once learned
					size='32px'
					background={Color}
					border={true}
					margin={{ horizontal: '2px', vertical: '1px' }}>
					<Text style={{ fontSize: '0.9em' }}></Text>
					{getInitials(Group)}
				</Avatar>
			) : null
	)

	return (
		<Box direction='row' wrap={true} margin={{ left: '-2px' }}>
			{FilteredEndorsements}
		</Box>
	)
}
