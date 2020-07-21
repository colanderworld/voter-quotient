import React from "react";
import {
  Box,
  ResponsiveContext,
  Heading,
  Avatar,
  Text,
  Accordion,
  AccordionPanel,
} from "grommet";
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
            Motivation
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
                This is a super good bio of Eli dude! He does things like voting
                in elections and talking about baseball. His all time favorite
                people Derek Jeter and the best dog ever, Astra, may she rest in
                peace!
              </Text>
            </Box>
          </Box>
          <Box
            width={{ max: "600px" }}
            margin={size === "small" ? "small" : null}
          >
            <Heading
              style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
              margin={{ top: "xlarge" }}
            >
              F.A.Q.
            </Heading>
            <Accordion width="700px">
              <AccordionPanel
                pad={{ top: "small" }}
                label={
                  <Box margin={size === "small" && { horizontal: "small" }}>
                    <Text weight="bold">
                      What exactly is 'Don't Wait Vote'?
                    </Text>
                  </Box>
                }
              >
                <Box pad={{ top: "small", bottom: "large" }} gap="small">
                  <Text>
                    <i>It's a advocacy group, at the end of the day!</i>
                  </Text>
                  <Text size="16px">
                    But in more details, here's some really good detail. Like a
                    lot of other things that you should definitely be aware of
                    and pay attention to be cause there is a lot of good tuff
                    for yuou to know woooo!
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel
                pad={{ top: "small" }}
                label={
                  <Box margin={size === "small" && { horizontal: "small" }}>
                    <Text weight="bold">Are you a registered non-profit?</Text>
                  </Box>
                }
              >
                <Box pad={{ top: "small", bottom: "large" }} gap="small">
                  <Text>
                    <i>It's a advocacy group, at the end of the day!</i>
                  </Text>
                  <Text size="16px">
                    But in more details, here's some really good detail. Like a
                    lot of other things that you should definitely be aware of
                    and pay attention to be cause there is a lot of good tuff
                    for yuou to know woooo!
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel
                pad={{ top: "small" }}
                label={
                  <Box margin={size === "small" && { horizontal: "small" }}>
                    <Text weight="bold">Who else do you work with?</Text>
                  </Box>
                }
              >
                <Box pad={{ top: "small", bottom: "large" }} gap="small">
                  <Text>
                    <i>It's a advocacy group, at the end of the day!</i>
                  </Text>
                  <Text size="16px">
                    But in more details, here's some really good detail. Like a
                    lot of other things that you should definitely be aware of
                    and pay attention to be cause there is a lot of good tuff
                    for yuou to know woooo!
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel
                pad={{ top: "small" }}
                label={
                  <Box margin={size === "small" && { horizontal: "small" }}>
                    <Text weight="bold">So who pays for this?</Text>
                  </Box>
                }
              >
                <Box pad={{ top: "small", bottom: "large" }} gap="small">
                  <Text>
                    <i>It's a advocacy group, at the end of the day!</i>
                  </Text>
                  <Text size="16px">
                    But in more details, here's some really good detail. Like a
                    lot of other things that you should definitely be aware of
                    and pay attention to be cause there is a lot of good tuff
                    for yuou to know woooo!
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel
                pad={{ top: "small" }}
                label={
                  <Box margin={size === "small" && { horizontal: "small" }}>
                    <Text weight="bold">Where do you get your data?</Text>
                  </Box>
                }
              >
                <Box pad={{ top: "small", bottom: "large" }} gap="small">
                  <Text>
                    <i>It's a advocacy group, at the end of the day!</i>
                  </Text>
                  <Text size="16px">
                    But in more details, here's some really good detail. Like a
                    lot of other things that you should definitely be aware of
                    and pay attention to be cause there is a lot of good tuff
                    for yuou to know woooo!
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel
                pad={{ top: "small" }}
                label={
                  <Box margin={size === "small" && { horizontal: "small" }}>
                    <Text weight="bold">
                      I see a mistake. Where do I report it?
                    </Text>
                  </Box>
                }
              >
                <Box pad={{ top: "small", bottom: "large" }} gap="small">
                  <Text>
                    <i>It's a advocacy group, at the end of the day!</i>
                  </Text>
                  <Text size="16px">
                    But in more details, here's some really good detail. Like a
                    lot of other things that you should definitely be aware of
                    and pay attention to be cause there is a lot of good tuff
                    for yuou to know woooo!
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel
                pad={{ top: "small" }}
                label={
                  <Box margin={size === "small" && { horizontal: "small" }}>
                    <Text weight="bold">Is this open source?</Text>
                  </Box>
                }
              >
                <Box pad={{ top: "small", bottom: "large" }} gap="small">
                  <Text>
                    <i>It's a advocacy group, at the end of the day!</i>
                  </Text>
                  <Text size="16px">
                    But in more details, here's some really good detail. Like a
                    lot of other things that you should definitely be aware of
                    and pay attention to be cause there is a lot of good tuff
                    for yuou to know woooo!
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel
                pad={{ top: "small" }}
                label={
                  <Box margin={size === "small" && { horizontal: "small" }}>
                    <Text weight="bold">Y'all have a privacy policy?</Text>
                  </Box>
                }
              >
                <Box pad={{ top: "small", bottom: "large" }} gap="small">
                  <Text>
                    <i>It's a advocacy group, at the end of the day!</i>
                  </Text>
                  <Text size="16px">
                    But in more details, here's some really good detail. Like a
                    lot of other things that you should definitely be aware of
                    and pay attention to be cause there is a lot of good tuff
                    for yuou to know woooo!
                  </Text>
                </Box>
              </AccordionPanel>
              <AccordionPanel
                pad={{ top: "small" }}
                label={
                  <Box margin={size === "small" && { horizontal: "small" }}>
                    <Text weight="bold">Okay. How about terms of service?</Text>
                  </Box>
                }
              >
                <Box pad={{ top: "small", bottom: "large" }} gap="small">
                  <Text>
                    <i>It's a advocacy group, at the end of the day!</i>
                  </Text>
                  <Text size="16px">
                    But in more details, here's some really good detail. Like a
                    lot of other things that you should definitely be aware of
                    and pay attention to be cause there is a lot of good tuff
                    for yuou to know woooo!
                  </Text>
                </Box>
              </AccordionPanel>
            </Accordion>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
