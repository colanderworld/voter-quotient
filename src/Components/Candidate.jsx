import React, { useState } from 'react'
import { Box, Avatar, Text, Anchor } from 'grommet'
import { Underline, User } from 'grommet-icons'
import { getPartyColor } from '../Utils/Helpers'
import _ from 'lodash'
import { black } from 'grommet-controls/components/basicColors'

const KEY_ENDORSEMENTS = [
	'Working Families Party',
	'Run for Something',
	'Brady United Against Gun Violence',
	'Democracy for America',
	'Everytown for Gun Safety',
	'Warren Democrats',
	'New American Leaders Action Fund',
	"People for the American Way's Next Up Victory Fund",
	'Indivisible',
	'Progressive Change Campaign Committee',
	'CollectivePac.org',
	'Latino Victory Fund',
	'MoveOn.org',
	'Asian American Action Fund',
	'Justice Democrats',
	'Giffords Courage to Fight Gun Violence',
	'Center for Popular Democracy',
	'Democratic Socialists of America',
	'Emgage Action',
	'Color of Change'
]

export default ({ data }) => {
	const {
		name,
		party,
		photo,
		endorsements,
		experience,
		education
		// issues
	} = data

	const [expand, setExpand] = useState(false)

	return (
		<Box margin={{ vertical: 'small' }}>
			<Box direction='row' gap='small' pad={{ bottom: 'medium' }}>
				<Avatar
					src={photo && photo}
					size='60px'
					border={{
						color: getPartyColor(party),
						size: 'small'
					}}
					alignSelf='center'>
					{!photo && <User size='34px' color={getPartyColor(party)} />}
				</Avatar>
				<Box direction='column' alignSelf='center'>
					<Text size='20px' weight='bold'>
						{name}
					</Text>
				</Box>
			</Box>
			<Box pad={{ bottom: 'medium' }} gap='xsmall'>
				{endorsements.filter(({ name }) => KEY_ENDORSEMENTS.includes(name)).length !== 0 ? (
					<>
						<Text size='16px' weight='bold'>
							Key Endorsements
						</Text>{' '}
						{_.sortBy(endorsements, 'name')
							.filter(({ name }) => KEY_ENDORSEMENTS.includes(name))
							.map(({ name, description, website_url }) => (
								<Box>
									<Text size='small'>{name}</Text>
								</Box>
							))}
						{endorsements.filter(({ name }) => KEY_ENDORSEMENTS.includes(name)).length !==
							0 && (
							<>
								<Anchor
									margin={{ top: 'small' }}
									weight='bold'
									style={{ textDecoration: 'underline', color: 'black' }}
									onClick={() => {
										expand ? setExpand(false) : setExpand(true)
									}}
									label='Show All'
								/>
								{expand &&
									_.sortBy(endorsements, 'name')
										.filter(({ name }) => !KEY_ENDORSEMENTS.includes(name))
										.map(({ name, description, website_url }) => (
											<Box>
												<Text size='small'>{name}</Text>
											</Box>
										))}
							</>
						)}
					</>
				) : (
					<>
						<Text size='16px' weight='bold'>
							Endorsements
						</Text>{' '}
						{_.sortBy(endorsements, 'name').map(({ name, description, website_url }) => (
							<Box>
								<Text size='small'>{name}</Text>
							</Box>
						))}
					</>
				)}
				<Text size='16px' weight='bold' margin={{ top: 'medium' }}>
					Experience
				</Text>
				{_.sortBy(experience, 'end_year')
					.reverse()
					.map(({ start_year, end_year, company, position }) => (
						<Box>
							<Text size='small'>
								{position}, {company}
							</Text>
							<Text size='small'>
								{start_year} - {end_year}
							</Text>
						</Box>
					))}
				<Text size='16px' weight='bold' margin={{ top: 'medium' }}>
					Education
				</Text>
				{_.sortBy(education, 'grad_year').map(({ school, major, degree, grad_year }) => (
					<Box>
						<Text size='small'>
							{school}, {grad_year}
						</Text>
						<Text size='small'>
							{degree} {major && 'of '}
							{major}
						</Text>
					</Box>
				))}

				{/* <Text size="16px" weight="bold">
          Candidacies
        </Text>
        {_.sortBy(endorsements, "name").map(
          ({ name, description, website_url }) => (
            <Box>
              <Text size="small">{name}</Text>
            </Box>
          )
        )}

        <Text size="16px" weight="bold">
          Issues
        </Text> */}
				<Box direction='row'></Box>
				<Text></Text>
			</Box>
		</Box>
	)
}
