import React from 'react'
import useSWR from 'swr'
import fetch from 'unfetch'
import { ballotReadyKeyLudo } from '../Utils/apiKeys'

const fetcher = (url) =>
	fetch(url, {
		headers: { 'x-api-key': ballotReadyKeyLudo },
	})
		.then((res) => res.json())
		.then((txt) => console.log(txt))

const useBallotReady = ({ lat, lng }) => {
	const { data, error } = useSWR(
		`https://api.civicengine.com/positions?` +
			`lat=${lat}&` +
			`lon=${lng}&` +
			`include_candidates=${1}&` +
			`include_endorsements=${1}&` +
			`include_office_holders=${1}&` +
			`include_volunteer_urls=${1}`,
		fetcher
	)
	if (error)
		return (
			<div>
				<span aria-label='embaressed face emoji' role='img'>
					😳
				</span>
				failed to load
			</div>
		)
	if (!data)
		return (
			<div>
				<span aria-label='confused face emoji' role='img'>
					🤔
				</span>
				loading...
			</div>
		)
	// render data
	return <div>{data}</div>
}

export default useBallotReady
