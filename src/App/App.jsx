// Library imports
import React from 'react'
import { Router } from '@reach/router'
import { Grommet, Box, Main } from 'grommet'

// Informational pages
import Home from '../Pages/Home'
import About from '../Pages/About'
import Questions from '../Pages/Questions'
import Contact from '../Pages/Contact'

// Component imports
import Footer from '../Components/Footer'

// Grommet global theme
import Theme from '../Utils/Theme.json'

export default () => {
	return (
		<Grommet theme={Theme} full>
			<Main>
				<Box flex='grow' margin={{ bottom: '10em' }}>
					<Box align='center'>
						<Box fill align='left' width={{ max: '800px' }}>
							<Router>
								<Home path='/' />
								<About path='about' />
								<Questions path='questions' />
								<Contact path='contact' />
							</Router>
						</Box>
					</Box>
				</Box>
				<Footer />
			</Main>
		</Grommet>
	)
}
