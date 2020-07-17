import React, { useRef, useState } from "react";
import { Box, Button, Drop, Grommet, Text } from "grommet";
import { grommet } from "grommet/themes";

export default ({ message }) => {
  const [over, setOver] = useState();
  const ref = useRef();

  return (
    <Grommet theme={grommet} full>
      <Box fill align="center" justify="center">
        <Button
          label="Button"
          ref={ref}
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          onFocus={() => {}}
          onBlur={() => {}}
        />

        {ref.current && over && (
          <Drop align={{ bottom: "top" }} target={ref.current} plain>
            <Box
              margin="xsmall"
              pad="small"
              //   background="dark-4"
              border={{ size: "xsmall", color: "black" }}
              round={{ size: "xsmall" }}
            >
              <Text size="small">{message}</Text>
            </Box>
          </Drop>
        )}
      </Box>
    </Grommet>
  );
};
