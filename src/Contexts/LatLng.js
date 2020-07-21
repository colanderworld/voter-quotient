import React, { createContext, useState } from 'react'

const Context = createContext({ latlng: {}, setLatlng: () => {} })

const Provider = ({ children }) => {
	const [latlng, setLatlng] = useState({})

	return (
		<Context.Provider value={{ latlng, setLatlng }}>
			{children}
		</Context.Provider>
	)
}

export { Context, Provider }
