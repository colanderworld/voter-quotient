import React from "react";
import {
  Box,
  ResponsiveContext,
  Heading,
  FormField,
  TextInput,
  TextArea,
} from "grommet";

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
            Contact
          </Heading>
          <form name="contact" method="POST" data-netlify="true">
            <FormField label="Your Name">
              <TextInput />
            </FormField>
            <FormField label="Your Email">
              <TextInput />
            </FormField>
            <FormField label="How did you find us?">
              <TextInput />
            </FormField>
            <Box margin={{ vertical: "large" }} height="medium">
              <TextArea placeholder="Your Message" size="large" fill={true} />
            </Box>
          </form>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
