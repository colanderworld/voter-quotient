import React, { useRef, useState } from "react";
import { Box, Drop, Text, Avatar } from "grommet";

export default ({ Group, Color, Size }) => {
  const [over, setOver] = useState();
  const ref = useRef();

  return (
    <Box>
      <Box
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        margin={{ horizontal: "2px", vertical: "1px" }}
      >
        <Avatar background={Color} border="black" size={Size} />
      </Box>
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            pad={{ horizontal: "4px", vertical: "2px" }}
            background="white"
            margin={{ left: "4px" }}
            border={{ size: "xsmall", color: "black" }}
            round={{ size: "xsmall" }}
          >
            <Text size="small">{Group}</Text>
          </Box>
        </Drop>
      )}
    </Box>
  );
};
