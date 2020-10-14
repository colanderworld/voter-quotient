import React, { useContext } from "react";
import { Footer, Box, ResponsiveContext, Button } from "grommet";
import { Link } from "@reach/router";
import styled from "styled-components";

export default () => {
  const size = useContext(ResponsiveContext);

  return (
    <Footer pad="small" justify="between" border="top" background="white">
      <Box>
        <NavLink weight={600} to="/">
          Home
        </NavLink>
        <NavLink weight={400} to="about">
          About
        </NavLink>
        <NavLink weight={400} to="questions">
          Questions
        </NavLink>
        <NavLink weight={400} to="contact">
          Contact
        </NavLink>
      </Box>
      <Box direction={size === "small" ? "column" : "row"} gap="small">
        <Button
          alignSelf="center"
          primary
          size={size === "small" ? "medium" : "large"}
          label="Vote Now"
          href="https://www.ballotready.org/"
        />
        <Button
          alignSelf="center"
          size={size === "small" ? "medium" : "large"}
          label="Feedback"
          href="PUT-SURVEY-LINK-HERE"
        />
      </Box>
    </Footer>
  );
};

const NavLink = styled(Link)`
  font-size: 1.2em;
  line-height: 1.3em;
  color: black;
  text-decoration: none;
  font-weight: ${({ weight }) => weight};

  :hover {
    font-style: italic;
    text-decoration: underline;
    text-decoration-color: gold;
  }
`;
