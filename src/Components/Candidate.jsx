import React from "react";
import { Box, Avatar, Text } from "grommet";
import { User } from "grommet-icons";
import { getPartyColor } from "../Utils/Helpers";
import Endorsement from "./Endorsement";

export default ({ data }) => {
  const { name, party_name, photo, endorsements, election_result } = data;
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
          <Text size="small">{election_result} in 2019</Text>
        </Box>
      </Box>
      <Box pad={{ bottom: "medium" }} gap="xsmall">
        <Text size="16px" weight="bold">
          Endorsements
        </Text>
        <Box
          direction="row"
          wrap={true}
          margin={{ left: "-2px", bottom: "small" }}
        >
          {Key}
          {Other}
        </Box>
        {/* <Text size="16px" weight="bold">
          Other Endorsements
        </Text>
        <Box
          direction="row"
          wrap={true}
          margin={{ left: "-2px", bottom: "small" }}
        >
          {Other}
        </Box> */}
      </Box>
    </Box>
  );
};
