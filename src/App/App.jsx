import React from 'react'
<<<<<<< HEAD
import { Router } from '@reach/router'
import { Grommet, Box, ResponsiveContext, Main } from 'grommet'
=======
import FooterDiv from '../Components/Footer'
import AddressInput from '../Components/AddressInput'
// import HeaderDiv from '../Components/Header'
// import TakeAction from '../Components/TakeAction'
import { Response } from '../Components/Response'

// import Test from '../Components/Test'

import {
	Grommet,
	Box,
	ResponsiveContext,
	Main,
	Heading,
	Button,
	// Layer,
} from 'grommet'
import { Location } from 'grommet-icons'

import { DummyData } from '../Components/DummyData'
>>>>>>> demo

import secondTheme from '../Utils/secondTheme.json'

import Home from '../Components/Home'
import FooterDiv from '../Components/Footer'
// import Header from '../Components/Header'

const App = () => {
	return (
		<Grommet theme={secondTheme} full themeMode='light'>
			<ResponsiveContext.Consumer>
				{(size) => (
					<Main fill={true}>
<<<<<<< HEAD
						<Home />
=======
						<Box
							direction='column'
							flex='grow'
							overflow={{ horizontal: 'hidden' }}
							align='center'
							justify='start'>
							<Heading>
								{size === 'small' ? (
									<Button
										primary
										label='Use Current Location'
										icon={<Location />}
									/>
								) : (
									<AddressInput />
								)}
							</Heading>
							<Response data={DummyData} />
							{/* <TakeAction /> */}
						</Box>
>>>>>>> demo
						<FooterDiv />
					</Main>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App
