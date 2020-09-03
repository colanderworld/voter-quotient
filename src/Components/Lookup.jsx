import React, { useContext, useState } from "react";
import {
  Accordion,
  ResponsiveContext,
  Box,
  Text,
  Grid,
  CheckBox
} from "grommet";
import { Location, FormCalendar } from "grommet-icons";
import Position from "./Position";

export default ({ data, address }) => {
  const size = useContext(ResponsiveContext);
  const [checked, setChecked] = useState(false);
  const Highlighted = data.filter(({ tagged }) => tagged);
  const Regular = data.filter(({ tagged }) => !tagged);

  return (
    <Grid
      columns={["1/2", "1/2"]}
      rows={[["flex"], ["full"]]}
      areas={
        size === "small"
          ? [
              ["electionDate", "electionDate"],
              ["voterAddress", "voterAddress"],
              ["positions", "positions"]
            ]
          : [
              ["electionDate", "voterAddress"],
              ["positions", "positions"]
            ]
      }
    >
      <Box
        gridArea="electionDate"
        margin={{ vertical: "large", horizontal: "small" }}
        direction="column"
        gap="xsmall"
      >
        <Box alignSelf={size === "small" ? "start" : "center"}>
          <FormCalendar color="gold" size="large" />
          <Text size="xlarge" weight="bold">
            Next Election
          </Text>
          <Text style={{ fontFamily: "IBM PLex Mono" }}>
            Presidential General Election
            <br />
            November 3rd, 2020
          </Text>
        </Box>
      </Box>
      <Box
        gridArea="voterAddress"
        margin={{ vertical: "large", horizontal: "small" }}
        direction="column"
        gap="xsmall"
      >
        <Box alignSelf={size === "small" ? "start" : "center"}>
          <Location color="gold" size="large" />
          <Text size="large" weight="bold">
            Registration Address
          </Text>
          <Text style={{ fontFamily: "IBM PLex Mono" }}></Text>
        </Box>
      </Box>
      <Box gridArea="positions" align="center" fill="vertical">
        <CheckBox
          checked={checked}
          label="Show All Positions"
          onChange={event => setChecked(event.target.checked)}
        />
        <Accordion
          focusIndicator={false}
          fill={true}
          multiple={true}
          animate={true}
          width={{ max: "800px" }}
          margin={{ top: "1em", bottom: "8em" }}
        >
          {Highlighted.length !== 0 &&
            Highlighted.map(data => (
              <Position key={data.position_id.toString()} data={data} />
            ))}

          {checked &&
            Regular.length !== 0 &&
            Regular.map(data => (
              <Position key={data.position_id.toString()} data={data} />
            ))}
        </Accordion>
      </Box>
    </Grid>
  );
};
