import React, { useRef, useState } from "react";
import { Box, Drop, Text, Avatar } from "grommet";

export default ({ data }) => {
  const [over, setOver] = useState();
  const ref = useRef();

  const { name, color, key } = data;

  return (
    <Box>
      <Box
        margin={{ horizontal: "2px", vertical: "1px" }}
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <Avatar
          background={color}
          border="black"
          size={key ? "40px" : "30px"}
        />
      </Box>
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            margin={{ left: "xsmall" }}
            background="white"
            border={{ size: "xsmall", color: "black" }}
            round="xsmall"
            pad={{ vertical: "2px", horizontal: "4px" }}
          >
            <Text size="small" weight="bold">
              {name}
            </Text>
          </Box>
        </Drop>
      )}
    </Box>
  );
};
