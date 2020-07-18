import React from 'react'
import { Box } from 'grommet'
import Endorsement from './Endorsement'

export const KeyEndorsements = ({ endorsementsArray }) => {
	const FilteredEndorsements = endorsementsArray.map(
		({ Group, Color, Logo, KeyEndorsement }) =>
<<<<<<< HEAD
			// Key Endorsements is TRUE
			KeyEndorsement && (
				<Avatar
					key={Group} // Use proper key signature once learned
					size='42px'
					background={Color}
					border={true}
					margin={{ horizontal: '2px', vertical: '1px' }}
					src={Logo !== null && Logo}>
					{Logo === null && getInitials(Group)}
				</Avatar>
=======
			KeyEndorsement && (
				<Endorsement Group={Group} Color={Color} size='medium' />
>>>>>>> demo
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
<<<<<<< HEAD
			// Key Endorsements is FALSE
			!KeyEndorsement && (
				<Avatar
					key={Group} // Use proper key signature once learned
					size='32px'
					background={Color}
					border={true}
					margin={{ horizontal: '2px', vertical: '1px' }}>
					<Text style={{ fontSize: '0.9em' }}></Text>
					{getInitials(Group)}
				</Avatar>
=======
			!KeyEndorsement && (
				<Endorsement Group={Group} Color={Color} size={'20px'} />
>>>>>>> demo
			)
	)

	return (
		<Box direction='row' wrap={true} margin={{ left: '-2px' }}>
			{FilteredEndorsements}
		</Box>
	)
}
