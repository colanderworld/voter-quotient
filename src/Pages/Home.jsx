// Library imports
import React, { useContext } from "react";
import styled from "styled-components";
import { ResponsiveContext, Text, Heading, Box } from "grommet";
import Input from "../Components/Input";

const Home = () => {
  const size = useContext(ResponsiveContext);
  return (
    <>
      <Box margin={size === "small" && { horizontal: "medium" }}>
        <Title>Don't Wait, Vote!</Title>
        <Text>
          This summer has proved that policing in America is broken.
          {size !== "small" ? <br /> : <span>&nbsp;</span>}
          Politicians in Washington D.C. won't fix the problem.
          {size !== "small" ? <br /> : <span>&nbsp;</span>}
          Learn about the <b>elected offices</b> that can <b>actually</b> make a
          difference.
        </Text>
      </Box>
      <Input />
    </>
  );
};

const Title = styled(Heading)`
  font-family: "IBM Plex Mono", monospace;
`;

export default Home;
