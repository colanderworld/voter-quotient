import React, { useContext } from "react";
import { Accordion, ResponsiveContext, Box, Heading } from "grommet";
import Position from "./Position";

export default ({ data }) => {
  const size = useContext(ResponsiveContext);
  const Federal = data.filter(({ level }) => level === "federal");
  const State = data.filter(({ level }) => level === "state");
  const Local = data.filter(
    ({ level }) => level !== "federal" && level !== "state"
  );

  return (
    <>
      <Box
        fill={true}
        margin={size === "small" ? { horizontal: "medium" } : 0}
      ></Box>
      <Heading level={1}>Federal</Heading>
      <Accordion
        focusIndicator={false}
        fill={true}
        multiple={false}
        animate={false}
        width={size === "small" ? { max: "900px" } : "900px"}
        margin={{ top: "1em", bottom: "8em" }}
      >
        {Federal.length !== 0 &&
          Federal.map(data => (
            <Position key={data.position_id.toString()} data={data} />
          ))}
      </Accordion>
      <Heading level={1}>State</Heading>
      <Accordion
        focusIndicator={false}
        fill={true}
        multiple={false}
        animate={false}
        width={size === "small" ? { max: "900px" } : "900px"}
        margin={{ top: "1em", bottom: "8em" }}
      >
        {State.length !== 0 &&
          State.map(data => (
            <Position key={data.position_id.toString()} data={data} />
          ))}
      </Accordion>
      <Heading level={1}>Local</Heading>
      <Accordion>
        {Local.length !== 0 &&
          Local.map(data => (
            <Position key={data.position_id.toString()} data={data} />
          ))}
      </Accordion>
    </>
  );
};
