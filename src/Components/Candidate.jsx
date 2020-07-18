<<<<<<< HEAD
import React from "react";
import { Box, Avatar, Text, Paragraph, ResponsiveContext } from "grommet";
import { KeyEndorsements, OtherEndorsements } from "./Endorsements";
=======
import React from 'react'
import { Box, Avatar, Text, ResponsiveContext } from 'grommet'
import { User } from 'grommet-icons'
import { KeyEndorsements, OtherEndorsements } from './Endorsements'
>>>>>>> demo

const getPartyColor = (party) => {
  if (party === "Republican") {
    return "red";
  } else if (party === "Democrat") {
    return "blue";
  } else {
    return "gray";
  }
};

export default ({
  name,
  party,
  photo,
  occupation,
  tenure,
  keyEndorsements,
  otherEndorsements,
}) => {
<<<<<<< HEAD
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box basis="1/2" alignSelf="start" pad="xsmall">
          <Box align="center" direction="row" gap="small">
            <Avatar
              src={photo}
              size="54px"
              border={{
                color: getPartyColor(party),
                size: "small",
              }}
            />
            <Text>{name}</Text>
          </Box>
          <Paragraph>
            <b>{occupation}</b> of <b>{tenure}</b> years.
          </Paragraph>
          <Text style={{ fontFamily: "IBM Plex Mono", fontSize: "1em" }}>
            <b>Key Endorsements</b>
          </Text>
          <KeyEndorsements endorsementsArray={keyEndorsements} />
          <Text
            style={{ fontFamily: "IBM Plex Mono", fontSize: "1em" }}
            margin={{ top: "medium" }}
          >
            <b>All Endorsements</b>
          </Text>
          <OtherEndorsements endorsementsArray={otherEndorsements} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
=======
	return (
		<ResponsiveContext.Consumer>
			{(size) => (
				<Box basis='1/2' alignSelf='start' pad='xsmall'>
					<Box align='center' direction='row' gap='small'>
						<Avatar
							src={photo && photo}
							size='60px'
							border={{
								color: getPartyColor(party),
								size: 'small',
							}}
							margin={{ bottom: 'medium' }}>
							{!photo && <User size='34px' color={getPartyColor(party)} />}
						</Avatar>
						<Box direction='column' alignSelf='start'>
							<Text size='medium' weight='bold'>
								{name}
							</Text>
							<Text size='small'>
								<i>{occupation}</i> of <i>{tenure}</i> years.
							</Text>
						</Box>
					</Box>

					<Text
					// style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}
					>
						<b>Key Endorsements</b>
					</Text>
					<KeyEndorsements endorsementsArray={keyEndorsements} />
					<Text
						// style={{ fontFamily: 'IBM Plex Mono', fontSize: '1em' }}
						margin={{ top: 'medium' }}>
						<b>Other Endorsements</b>
					</Text>
					<OtherEndorsements endorsementsArray={otherEndorsements} />
				</Box>
			)}
		</ResponsiveContext.Consumer>
	)
}
>>>>>>> demo
