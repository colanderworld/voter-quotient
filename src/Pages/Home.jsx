// Library imports
import React, { useContext } from "react";
import styled from "styled-components";
import { ResponsiveContext, Text, Main, Heading, Box } from "grommet";
import Input from "../Components/Input";

const Home = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Main fill={true} align="center">
      <Box fill={true} align="left" width={{ max: "800px" }}>
        <Box
          fill={true}
          margin={size === "small" ? { horizontal: "medium" } : 0}
        >
          <Title>Don't Wait, Vote!</Title>
          <Text>
            This summer has proved that policing in America is broken.
            {size !== "small" ? <br /> : <span>&nbsp;</span>}
            Politicians in Washington D.C. won't fix the problem.
            {size !== "small" ? <br /> : <span>&nbsp;</span>}
            Learn about <b>state</b> and <b>local</b> officials who can make a
            difference.
          </Text>
        </Box>
        <Input />
      </Box>
    </Main>
  );
};

const Title = styled(Heading)`
  font-family: "IBM Plex Mono", monospace;
`;

export default Home;
