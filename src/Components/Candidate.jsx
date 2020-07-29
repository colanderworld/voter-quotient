import React, { useContext } from "react";
import { Box, Avatar, Text, ResponsiveContext, Anchor } from "grommet";
import { User } from "grommet-icons";
import { getPartyColor } from "../Utils/Helpers";
import Endorsement from "./Endorsement";

export default ({ data }) => {
  const size = useContext(ResponsiveContext);
  const {
    first_name,
    last_name,
    party_name,
    thumb_url,
    endorsements,
    election_result
  } = data;

  /*
  Split the endorsements into the ones we care about and those we don't

  endorsementsArray -> <Endorsement />  (Key Endorsements)
                    -> <Endorsement />  (Other Endorsements)
  */
  const Key = endorsements
    .filter(({ key }) => key)
    .map(data => <Endorsement key={data.id} data={data} />);

  const Other = endorsements
    .filter(({ key }) => !key)
    .map(data => <Endorsement key={data.id} data={data} />);

  return (
    <Box margin={{ vertical: "small" }}>
      {/* Candidate Porfile */}
      <Box direction="row" gap="small" pad={{ bottom: "medium" }}>
        <Avatar
          src={thumb_url && thumb_url}
          size="60px"
          border={{
            color: getPartyColor(party_name),
            size: "small"
          }}
          alignSelf="center"
        >
          {!thumb_url && <User size="34px" color={getPartyColor(party_name)} />}
        </Avatar>
        <Box direction="column" alignSelf="center">
          <Text size="20px" weight="bold">
            {first_name} {last_name}
          </Text>
          <Text size="small">{election_result} in 2019</Text>
        </Box>
      </Box>

      {/* Endorsements */}
      <Box pad={{ bottom: "medium" }} gap="xsmall">
        <Text size="16px" weight="bold">
          Key Endorsements
        </Text>
        <Box
          direction="row"
          wrap={true}
          margin={{ left: "-2px", bottom: "small" }}
        >
          {Key}
        </Box>
        <Text size="16px" weight="bold">
          Other Endorsements
        </Text>
        <Box
          direction="row"
          wrap={true}
          margin={{ left: "-2px", bottom: "small" }}
        >
          {Other}
        </Box>
      </Box>

      {/* Fundraising */}
      <Box
        round="xsmall"
        pad="small"
        border="all"
        justify="center"
        margin="xsmall"
        style={{ borderColor: "#dbdbdb" }}
      >
        <Text size="medium" textAlign="center">
          We are raising money to buy even more data on each candidate!{" "}
          <Anchor
            color="black"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PYXFUUAH9PZRC&source=url"
          >
            Can you chip in?
          </Anchor>
        </Text>
      </Box>
    </Box>
  );
};
