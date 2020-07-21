import React from "react";
import { Box, Avatar, Text, ResponsiveContext } from "grommet";
import { User } from "grommet-icons";
import { KeyEndorsements, OtherEndorsements } from "./Endorsements";

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
  thumb_url,
  occupation,
  tenure,
  keyEndorsements,
  otherEndorsements,
}) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box flex="grow" alignSelf="start" pad="xsmall">
          <Box align="center" direction="row" gap="small">
            <Avatar
              src={thumb_url && thumb_url}
              size="60px"
              border={{
                color: getPartyColor(party),
                size: "small",
              }}
              margin={{ bottom: "medium" }}
            >
              {!thumb_url && <User size="34px" color={getPartyColor(party)} />}
            </Avatar>
            <Box direction="column" alignSelf="start">
              <Text size="medium" weight="bold">
                {name}
              </Text>
              <Text size="small">
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
            margin={{ top: "medium" }}
          >
            <b>Other Endorsements</b>
          </Text>
          <OtherEndorsements endorsementsArray={otherEndorsements} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
