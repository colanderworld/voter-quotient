import React from 'react'
import { Box, Text, Anchor } from 'grommet'
import { Facebook, Twitter, Instagram } from 'grommet-icons'

export default () => {
	return (
		<Box align='center' margin={{ top: 'large' }}>
			<Text>Your election is soon! </Text>
			<Text>
				Get your ballot <Anchor to='/'>here!</Anchor>
			</Text>
			<Text>And tell others!</Text>
			<Box direction='row' pad='xsmall'>
				<Anchor icon={<Facebook />} hoverIndicator />
				<Anchor icon={<Twitter />} hoverIndicator />
				<Anchor icon={<Instagram />} hoverIndicator />
			</Box>
		</Box>
	)
}
