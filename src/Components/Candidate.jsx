import React, { useContext } from "react";
import { Box, Avatar, Text, ResponsiveContext, Anchor } from "grommet";
import { User } from "grommet-icons";
// import { KeyEndorsements, OtherEndorsements } from "./Endorsements";

const getPartyColor = (party) => {
  if (party === "Republican") {
    return "red";
  } else if (party === "Democrat") {
    return "blue";
  } else {
    return "gray";
  }
};

export default ({ candidatesInfo }) => {
  const size = useContext(ResponsiveContext);
  const {
    name,
    party,
    thumb_url,
    occupation,
    tenure,
    keyEndorsements,
    otherEndorsements,
    status,
  } = candidatesInfo;

  return (
    <Box
      pad={{ top: "small" }}
      margin={{ horizontal: "xsmall", top: "xsmall", bottom: "medium" }}
    >
      <Box direction="row" gap="small">
        <Avatar
          src={thumb_url && thumb_url}
          size="60px"
          border={{
            color: getPartyColor(party),
            size: "small",
          }}
          margin={{ bottom: "medium" }}
          alignSelf="center"
        >
          {!thumb_url && <User size="34px" color={getPartyColor(party)} />}
        </Avatar>
        <Box direction="column" alignSelf="start">
          <Text size="medium" weight="bold">
            {name}
          </Text>
          <Text size="small">{status} in 2019</Text>
        </Box>
      </Box>
      <Box
        fill={true}
        round="xsmall"
        pad="small"
        border="all"
        justify="center"
        style={{ borderColor: "#dbdbdb" }}
      >
        <Text
          size="medium"
          textAlign="center"
          margin={size === "small" && { vertical: "medium" }}
        >
          We are raising money to buy detailed candidate data!
          <br />
          <Anchor
            color="black"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PYXFUUAH9PZRC&source=url"
          >
            Can you chip in?
          </Anchor>
        </Text>
      </Box>

      {/* <Text>
            <b>Key Endorsements</b>
          </Text>
          <KeyEndorsements endorsementsArray={keyEndorsements} />
          <Text margin={{ top: "medium" }}>
            <b>Other Endorsements</b>
          </Text>
          <OtherEndorsements endorsementsArray={otherEndorsements} /> */}
    </Box>
  );
};
