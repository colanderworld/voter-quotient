import React from "react";
import {
  Box,
  ResponsiveContext,
  Heading,
  // Avatar,
  Text,
  Accordion,
  AccordionPanel,
} from "grommet";
// import { User } from "grommet-icons";

// import Eli from "../Icons/eli-scared.jpg";
// import Lucas from "../Icons/lucas.jpg";
// import Deven from "../Icons/deven.jpg";
// import Madhi from "../Icons/madhi.jpg";

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          width={size !== "small" && "800px"}
          margin={size === "small" && "small"}
        >
          <Heading
            style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
            margin={{ top: "xlarge" }}
          >
            About
          </Heading>
          <Text size="medium">
            We don't have an about page yet... <br />
            But thanks for checking!
          </Text>
          {/* <Heading
            style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
            margin={{ top: "xlarge" }}
          >
            People
          </Heading> */}

          {/* <Box direction="row" gap="medium">
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
          </Box> */}
          {/* <Box
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
          </Box> */}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
