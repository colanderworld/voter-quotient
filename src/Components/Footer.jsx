import React, { useContext } from "react";
// import colanderLogo from "../Icons/tinhat_america.png";
import {
  Footer,
  Box,
  ResponsiveContext,
  Button
  // Text,
  // Anchor,
  // Avatar,
} from "grommet";
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
        {/* <NavLink weight={400} to="questions">
              F.A.Q.
            </NavLink> */}
      </Box>
      <Box direction={size === "small" ? "column" : "row"} gap="small">
        <Button
          primary
          size={size === "small" ? "medium" : "large"}
          label="Donate"
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PYXFUUAH9PZRC&source=url"
        />
        <Button
          size={size === "small" ? "medium" : "large"}
          label="Survey"
          href="PUT-SURVEY-LINK-HERE"
        />
      </Box>
      {/* <Box direction="column" align="center" gap="small">
            <Box
              direction={size === "small" ? "column" : "row"}
              align="center"
              gap="small"
            >
              <Text style={{ display: size === "small" && "none" }}>
                A Colander World Project
              </Text>
              <Anchor href="https://github.com/colanderworld">
                <Avatar src={colanderLogo} size="55px" alt="Colander World" />
              </Anchor>
            </Box>
          </Box> */}
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
