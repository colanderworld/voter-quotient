import React, { useContext } from 'react'
import { Accordion, ResponsiveContext, Box, Heading } from 'grommet'
import Position from './Position'

export default ({ data }) => {
	const size = useContext(ResponsiveContext)
	const Federal = data.filter(({ level }) => level === 'federal')
	const State = data.filter(({ level }) => level === 'state')
	const Local = data.filter(({ level }) => level !== 'federal' && level !== 'state')

	return (
		<>
			<Box fill={true} margin={size === 'small' ? { horizontal: 'medium' } : 0}></Box>
			<Heading level={1} margin={{ horizontal: 0, vertical: 'small' }}>
				Federal
			</Heading>
			<Accordion
				focusIndicator={false}
				fill={true}
				multiple={false}
				animate={false}
				width={size === 'small' ? { max: '900px' } : '900px'}
				margin={{ top: '1em', bottom: '4em' }}>
				{Federal.length !== 0 &&
					Federal.map(data => <Position key={data.position_id.toString()} data={data} />)}
			</Accordion>
			<Heading level={1} margin={{ horizontal: 0, vertical: 'small' }}>
				State
			</Heading>
			<Accordion
				focusIndicator={false}
				fill={true}
				multiple={false}
				animate={false}
				width={size === 'small' ? { max: '900px' } : '900px'}
				margin={{ top: '1em', bottom: '4em' }}>
				{State.length !== 0 &&
					State.map(data => <Position key={data.position_id.toString()} data={data} />)}
			</Accordion>
			<Heading level={1} margin={{ horizontal: 0, vertical: 'small' }}>
				Local
			</Heading>
			<Accordion
				focusIndicator={false}
				fill={true}
				multiple={false}
				animate={false}
				width={size === 'small' ? { max: '900px' } : '900px'}
				margin={{ top: '1em', bottom: '4em' }}>
				{Local.length !== 0 &&
					Local.map(data => <Position key={data.position_id.toString()} data={data} />)}
			</Accordion>
		</>
	)
}
