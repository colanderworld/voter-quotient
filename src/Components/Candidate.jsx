import React from "react";
import { Box, Avatar, Text } from "grommet";
import { User } from "grommet-icons";
import { getPartyColor } from "../Utils/Helpers";
import Endorsement from "./Endorsement";
import _ from "lodash";

export default ({ data }) => {
  const {
    name,
    party,
    photo,
    endorsements,
    candidacies,
    experience,
    education,
    issues
  } = data;
  const Key = endorsements
    .filter(({ key }) => key)
    .map(data => <Endorsement key={data.id} data={data} />);

  const Other = endorsements
    .filter(({ key }) => !key)
    .map(data => <Endorsement key={data.id} data={data} />);

  return (
    <Box margin={{ vertical: "small" }}>
      <Box direction="row" gap="small" pad={{ bottom: "medium" }}>
        <Avatar
          src={photo && photo}
          size="60px"
          border={{
            color: getPartyColor(party_name),
            size: "small"
          }}
          alignSelf="center"
        >
          {!photo && <User size="34px" color={getPartyColor(party_name)} />}
        </Avatar>
        <Box direction="column" alignSelf="center">
          <Text size="20px" weight="bold">
            {name}
          </Text>
          {console.log(_.sortBy(experience, "end_year"))}
          <Text size="small">ugh</Text>
        </Box>
      </Box>
      <Box pad={{ bottom: "medium" }} gap="xsmall">
        <Text size="16px" weight="bold">
          Endorsements
        </Text>
        <Text size="16px" weight="bold">
          Candidacies
        </Text>
        <Text size="16px" weight="bold">
          Experience
        </Text>
        <Text size="16px" weight="bold">
          Education
        </Text>
        <Text size="16px" weight="bold">
          Issues
        </Text>
        <Box direction="row"></Box>
        <Text></Text>
      </Box>
    </Box>
  );
};
