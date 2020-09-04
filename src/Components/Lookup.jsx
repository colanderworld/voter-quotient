import React, { useContext, useState } from "react";
import { Accordion, ResponsiveContext, Text, CheckBox, Box } from "grommet";
import Position from "./Position";

export default ({ data }) => {
  const size = useContext(ResponsiveContext);
  const [checked, setChecked] = useState(false);
  const Highlighted = data.filter(({ tagged }) => tagged);
  const Regular = data.filter(({ tagged }) => !tagged);

  return (
    <>
      <Box fill={true} margin={size === "small" ? { horizontal: "medium" } : 0}>
        <CheckBox
          checked={checked}
          label={
            <Text size="18px" weight="bolc">
              Show All Positions
            </Text>
          }
          onChange={event => setChecked(event.target.checked)}
        />
      </Box>
      <Accordion
        focusIndicator={false}
        fill={true}
        multiple={false}
        animate={false}
        width={size === "small" ? { max: "800px" } : "800px"}
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
    </>
  );
};
