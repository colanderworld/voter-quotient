import React, { useContext } from "react";
import {
  Accordion,
  ResponsiveContext,
  Box,
  Text,
  Grid,
  Heading
} from "grommet";
import { Location, FormCalendar } from "grommet-icons";
import Position from "./Position";

const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"]
};

// if size if small, we have 3 rows
// if size if medium, we have 2 rows
// if size if large or xlarge, we have 1 row
const rows = {
  small: ["auto", "auto", "auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"]
};

// set the different areas you need for every size
const areas = {
  small: [
    { name: "address", start: [0, 0], end: [0, 0] },
    { name: "date", start: [0, 1], end: [0, 1] },
    { name: "positions", start: [0, 2], end: [0, 2] }
  ],
  medium: [
    { name: "address", start: [0, 0], end: [0, 0] },
    { name: "date", start: [1, 0], end: [1, 0] },
    { name: "positions", start: [0, 1], end: [1, 1] }
  ],
  large: [
    { name: "address", start: [0, 0], end: [0, 0] },
    { name: "date", start: [1, 0], end: [1, 0] },
    { name: "positions", start: [2, 0], end: [2, 0] }
  ],
  xlarge: [
    { name: "address", start: [0, 0], end: [0, 0] },
    { name: "date", start: [1, 0], end: [1, 0] },
    { name: "positions", start: [2, 0], end: [2, 0] }
  ]
};

export default ({ data, ...props }) => {
  const { size } = useContext(ResponsiveContext);
  /*   
  Split the positions into the most important and regular ones
  positionsArray -> <Position />  (Highlighted Positions)
                 -> <Position />  (Regular Positions)
  */
  const Highlighted = data.filter(({ tagged }) => tagged);
  const Regular = data.filter(({ tagged }) => !tagged);

  return (
    <Grid fill {...props}>
      <Box gridArea="address" border="all" margin="large" direction="row">
        <Location />
        <Text size="large" weight="bold">
          Your Registration Address
        </Text>
      </Box>
      <Box gridArea="date" border="all" margin="large" direction="row">
        <FormCalendar />
        <Text size="large" weight="bold">
          Your Next Election
        </Text>
      </Box>
      <Box
        width={size === "small" ? "375px" : "450px"}
        gridArea="disclaimer"
        // alignContent="center"
      >
        <Text
          size="medium"
          margin={
            size === "small"
              ? { vertical: "small", horizontal: "xsmall" }
              : { vertical: "large", horizontal: "xsmall" }
          }
        >
          <i>
            <b>Disclaimer:</b> This is a demo app. It will <u>only</u> show the
            results of last year's San Francisco local elections.
          </i>
        </Text>
      </Box>
      <Box gridArea="positions">
        <Accordion
          multiple={true}
          animate={true}
          width={{ max: "800px" }}
          margin={{ top: "1em", bottom: "8em" }}
        >
          {Highlighted.length !== 0 &&
            Highlighted.map(data => (
              <Position key={data.position_id.toString()} data={data} />
            ))}
          {Regular.length !== 0 &&
            Regular.map(data => (
              <Position key={data.position_id.toString()} data={data} />
            ))}
        </Accordion>
      </Box>
    </Grid>
  );
};
