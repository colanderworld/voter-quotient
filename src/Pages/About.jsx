import React from "react";
import { Box, ResponsiveContext, Heading, Avatar, Text } from "grommet";
import { User } from "grommet-icons";

import Eli from "../Icons/eli-scared.jpg";
import Lucas from "../Icons/lucas.jpg";
import Deven from "../Icons/deven.jpg";
import Madhi from "../Icons/madhi.jpg";

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          width={{ max: "800px" }}
          margin={size === "small" ? "small" : { bottom: "xlarge" }}
        >
          <Heading
            style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
            margin={{ top: "xlarge" }}
          >
            Mission
          </Heading>
          <Text size="medium">
            Vote for Astra is a non-partisan, non-profit organization devoted to
            the idea that voting can, should, and must be easier for college
            students. Created in 2019, it aims to provide resources and support
            to university faculty, staff, and students as they work to improve
            turnout on campus. Centered around the Campus Canvass technique, it
            emphasizes peer-to-peer contact, consistent engagement, and
            data-driven strategy.
          </Text>
          <Heading
            style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
            margin={{ top: "xlarge" }}
          >
            People
          </Heading>
          <Box gap="large">
            <Box direction="row" gap="medium">
              <Avatar
                src={Lucas}
                size="xlarge"
                border={{ size: "thin", color: "black" }}
                flex={false}
                alignSelf="center"
              />
              <Box direction="column" alignSelf="center" gap="xsmall">
                <Text size="30px" weight="bold">
                  Lucas Carmel
                </Text>
                <Text>
                  This is a super good bio of Lucas dude! He does things like
                  voting in elections and talking about baseball. His all time
                  favorite people Derek Jeter and the best dog ever, Astra, may
                  she rest in peace!
                </Text>
              </Box>
            </Box>
            <Box direction="row" gap="medium">
              <Avatar
                src={Madhi}
                size="xlarge"
                border={{ size: "thin", color: "black" }}
                flex={false}
                alignSelf="center"
              />
              <Box direction="column" gap="xsmall">
                <Text size="30px" weight="bold">
                  Madhi Fariss
                </Text>
                <Text>
                  This is a super good bio of Madhi dude! He does things like
                  voting in elections and talking about baseball. His all time
                  favorite people Derek Jeter and the best dog ever, Astra, may
                  she rest in peace!
                </Text>
              </Box>
            </Box>
            <Box direction="row" gap="medium">
              <Avatar
                src={Deven}
                size="xlarge"
                border={{ size: "thin", color: "black" }}
                flex={false}
                alignSelf="center"
              />
              <Box direction="column" alignSelf="center" gap="xsmall">
                <Text size="30px" weight="bold">
                  Deven Kirschenbaum
                </Text>
                <Text>
                  This is a super good bio of Deven dude! He does things like
                  voting in elections and talking about baseball. His all time
                  favorite people Derek Jeter and the best dog ever, Astra, may
                  she rest in peace!
                </Text>
              </Box>
            </Box>
            <Box direction="row" gap="medium">
              <Avatar
                src={Eli}
                size="xlarge"
                border={{ size: "thin", color: "black" }}
                flex={false}
                alignSelf="center"
              />
              <Box direction="column" alignSelf="center" gap="xsmall">
                <Text size="30px" weight="bold">
                  Eli Cohen
                </Text>
                <Text>
                  This is a super good bio of Eli dude! He does things like
                  voting in elections and talking about baseball. His all time
                  favorite people Derek Jeter and the best dog ever, Astra, may
                  she rest in peace!
                </Text>
              </Box>
            </Box>
            <Box direction="row" gap="medium">
              <Avatar
                // src={}
                size="xlarge"
                border={{ size: "thin", color: "black" }}
                flex={false}
                alignSelf="center"
              >
                <User size="46px" />
              </Avatar>
              <Box direction="column" alignSelf="center" gap="xsmall">
                <Text size="30px" weight="bold">
                  Alanna Browdy
                </Text>
                <Text>
                  This is a super good bio of Alanna dude! He does things like
                  voting in elections and talking about baseball. His all time
                  favorite people Derek Jeter and the best dog ever, Astra, may
                  she rest in peace!
                </Text>
              </Box>
            </Box>
            <Box direction="row" gap="medium">
              <Avatar
                // src={}
                size="xlarge"
                border={{ size: "thin", color: "black" }}
                flex={false}
                alignSelf="center"
              >
                <User size="46px" />
              </Avatar>
              <Box direction="column" alignSelf="center" gap="xsmall">
                <Text size="30px" weight="bold">
                  Lars Schwaebe
                </Text>
                <Text>
                  This is a super good bio of Lars dude! He does things like
                  voting in elections and talking about baseball. His all time
                  favorite people Derek Jeter and the best dog ever, Astra, may
                  she rest in peace!
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
