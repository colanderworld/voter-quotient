import React, { useContext } from "react";
import {
  Box,
  Text,
  ResponsiveContext,
  Heading,
  Accordion,
  AccordionPanel
} from "grommet";

export default () => {
  const size = useContext(ResponsiveContext);
  return (
    <>
      <Box width={{ max: "600px" }} margin={size === "small" ? "small" : null}>
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
                <Text weight="bold">What exactly is 'Don't Wait Vote'?</Text>
              </Box>
            }
          >
            <Box pad={{ top: "small", bottom: "large" }} gap="small">
              <Text>
                <i>It's a advocacy group, at the end of the day!</i>
              </Text>
              <Text size="16px">
                But in more details, here's some really good detail. Like a lot
                of other things that you should definitely be aware of and pay
                attention to be cause there is a lot of good tuff for yuou to
                know woooo!
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
                But in more details, here's some really good detail. Like a lot
                of other things that you should definitely be aware of and pay
                attention to be cause there is a lot of good tuff for yuou to
                know woooo!
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
                But in more details, here's some really good detail. Like a lot
                of other things that you should definitely be aware of and pay
                attention to be cause there is a lot of good tuff for yuou to
                know woooo!
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
                But in more details, here's some really good detail. Like a lot
                of other things that you should definitely be aware of and pay
                attention to be cause there is a lot of good tuff for yuou to
                know woooo!
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
                But in more details, here's some really good detail. Like a lot
                of other things that you should definitely be aware of and pay
                attention to be cause there is a lot of good tuff for yuou to
                know woooo!
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
                But in more details, here's some really good detail. Like a lot
                of other things that you should definitely be aware of and pay
                attention to be cause there is a lot of good tuff for yuou to
                know woooo!
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
                But in more details, here's some really good detail. Like a lot
                of other things that you should definitely be aware of and pay
                attention to be cause there is a lot of good tuff for yuou to
                know woooo!
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
                But in more details, here's some really good detail. Like a lot
                of other things that you should definitely be aware of and pay
                attention to be cause there is a lot of good tuff for yuou to
                know woooo!
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
                But in more details, here's some really good detail. Like a lot
                of other things that you should definitely be aware of and pay
                attention to be cause there is a lot of good tuff for yuou to
                know woooo!
              </Text>
            </Box>
          </AccordionPanel>
        </Accordion>
      </Box>
    </>
  );
};
