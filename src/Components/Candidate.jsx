import React from "react";
import { Box, Avatar, Text } from "grommet";
import { User } from "grommet-icons";
import { getPartyColor } from "../Utils/Helpers";
import _ from "lodash";

export default ({ data }) => {
  const {
    name,
    party,
    photo,
    endorsements,
    experience,
    education
    // issues
  } = data;

  return (
    <Box margin={{ vertical: "small" }}>
      <Box direction="row" gap="small" pad={{ bottom: "medium" }}>
        <Avatar
          src={photo && photo}
          size="60px"
          border={{
            color: getPartyColor(party),
            size: "small"
          }}
          alignSelf="center"
        >
          {!photo && <User size="34px" color={getPartyColor(party)} />}
        </Avatar>
        <Box direction="column" alignSelf="center">
          <Text size="20px" weight="bold">
            {name}
          </Text>
        </Box>
      </Box>
      <Box pad={{ bottom: "medium" }} gap="xsmall">
        <Text size="16px" weight="bold">
          Endorsements
        </Text>
        {_.sortBy(endorsements, "name").map(
          ({ name, description, website_url }) => (
            <Box>
              <Text size="small">{name}</Text>
            </Box>
          )
        )}

        <Text size="16px" weight="bold">
          Experience
        </Text>
        {_.sortBy(experience, "end_year")
          .reverse()
          .map(({ start_year, end_year, company, position }) => (
            <Box>
              <Text size="small">
                {position}, {company}
              </Text>
              <Text size="small">
                {start_year} - {end_year}
              </Text>
            </Box>
          ))}
        <Text size="16px" weight="bold">
          Education
        </Text>
        {_.sortBy(education, "grad_year").map(
          ({ school, major, degree, grad_year }) => (
            <Box>
              <Text size="small">
                {school}, {grad_year}
              </Text>
              <Text size="small">
                {degree} {major && "of "}
                {major}
              </Text>
            </Box>
          )
        )}

        {/* <Text size="16px" weight="bold">
          Candidacies
        </Text>
        {_.sortBy(endorsements, "name").map(
          ({ name, description, website_url }) => (
            <Box>
              <Text size="small">{name}</Text>
            </Box>
          )
        )}

        <Text size="16px" weight="bold">
          Issues
        </Text> */}
        <Box direction="row"></Box>
        <Text></Text>
      </Box>
    </Box>
  );
};
