/* 
1. Put your dummy data here! Don't worry about sorting, the program handles that automatically
2. Text goes in single quotes, i.e. 'Governor'. Numbers do not, i.e. 47. true and false are lowercase without quotes. If you don't know what to put, just write null
3. When done, scroll to the bottom and hit "Make New Branch." Title it something short and memorable. It will appear as branch.voterforastra.org.

REFERENCE (each of these elements can be repeated infinitely)
- Positions
    - Candidates
        - Endorsements
*/

// You can import more photos here using the same syntax.
// But if you leave the photo blank, it will default to a generic avatar icon
// import EliPlay from '../Icons/eli-fun.jpg'
// import EliWork from '../Icons/eli-serious.jpg'
import Barry from '../Icons/barry.jpg'

export const DummyData = [
	{
		// First Position
		positionName: 'Mr. Potato Head!',
		positionDescription:
			'The Governor of Colorado is the chief executive of the U.S. state of Colorado. The governor is the head of the executive branch of Colorado state government and is charged with enforcing state laws. The governor has the power to either approve or veto bills passed by the Colorado General Assembly, to convene the legislature, and to grant pardons, except in cases of treason or impeachment. The governor is also the commander-in-chief of the state military forces.',
		division: 'Location #1',
		divisionDescription: '',
		divisionColor: 'green', // colors should always be lowercase
		voteMargin: '123,456', // vote margin should be in quotes because of the comma, i.e. '123,456'
		candidateArray: [
			// First Candidate
			{
				candidateName: 'Charles Fauci',
				candidateParty: 'Democrat',
				candidatePhoto: Barry, // If you don't want to use your own photo, just write null
				candidateOccupation: 'Incumbent',
				candidateTenure: 23,
				endorsements: [
					{
						Group: 'National Rifle Association',
						Color: 'red',
						Logo: null,
						KeyEndorsement: true,
					},
					{
						Group: 'Color of Change',
						Color: 'green',
						Logo: null,
						KeyEndorsement: true,
					},
					{
						Group: 'National Rifle Association',
						Color: 'red',
						Logo: null,
						KeyEndorsement: true,
					},
					{
						Group: 'Color of Change',
						Color: 'green',
						Logo: null,
						KeyEndorsement: true,
					},
					{
						Group: 'National Rifle Association',
						Color: 'red',
						Logo: null,
						KeyEndorsement: true,
					},
					{
						Group: 'Color of Change',
						Color: 'green',
						Logo: null,
						KeyEndorsement: true,
					},
					{
						Group: 'National Rifle Association',
						Color: 'red',
						Logo: null,
						KeyEndorsement: true,
					},
					{
						Group: 'Color of Change',
						Color: 'green',
						Logo: null,
						KeyEndorsement: true,
					},
				],
			},

			// Second Candidate
			{
				candidateName: 'Candidate #2',
				candidateParty: 'Republican',
				candidatePhoto: null,
				endorsements: [
					{
						Group: 'National Rifle Association',
						Color: 'red',
						Logo: null,
						KeyEndorsement: false,
					},
					{
						Group: 'Color of Change',
						Color: 'green',
						Logo: null,
						KeyEndorsement: true,
					},
				],
			},
		],
	},
	{
		// Second Position - You can copy and paste each element infinitely
		positionName: 'Position #2',
		positionDescription: '',
		division: 'Location #2',
		divisionDescription: '',
		divisionColor: 'blue',
		voteMargin: '654,321',
		candidateArray: [
			{
				candidateName: '',
				candidateParty: '',
				candidatePhoto: null,
				endorsements: [
					{
						Group: 'National Rifle Association',
						Color: 'red',
						Logo: null,
						KeyEndorsement: false,
					},
					{
						Group: 'Color of Change',
						Color: 'green',
						Logo: null,
						KeyEndorsement: true,
					},
				],
			},
		],
	},
]
