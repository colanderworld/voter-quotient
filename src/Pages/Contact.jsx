import React from "react";
import { Box, Heading, Anchor, Text, Main, Avatar } from "grommet";
import { MailOption } from "grommet-icons";
import Eli from "../Icons/eli-scared.jpg";

export default () => {
  return (
    <Main align="center">
      <Box width={{ max: "800px" }} fill="horizontal" pad="small">
        <Heading
          style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
          margin={{ top: "xlarge" }}
        >
          Contact
        </Heading>
        <Box direction="row" gap="medium">
          <Avatar
            src={Eli}
            size="160px"
            border={{ size: "thin", color: "black" }}
            flex={false}
            alignSelf="start"
          />
          <Box direction="column" alignSelf="center" gap="xsmall">
            <Box direction="row" align="end" gap="small">
              <Text size="42px" weight="bold">
                Eli Cohen
              </Text>
              <Anchor color="black" href="mailto:eliunited@gmail.com">
                <MailOption />
              </Anchor>
            </Box>
            <Text>
              I'm currently freelancing, primarily web development and political
              reporting. My most recent project is Don't Wait, Vote!, a criminal
              justice ballot guide that focuses on local races
              <br />
              <br />
              Previously, I completed a Watson Fellowship, travelling to India,
              Nepal, and Myanmar to study the intersection of technological
              development and political power. I've produced public radio WBHM
              in Birmingham and KQED in San Francisco.
              <br />
              <br />
              Before that, I researched US Congress at The Brookings
              Institution. I'm a graduate of Pomona College in Los Angeles,
              where I studied politics and computer science.
            </Text>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};
