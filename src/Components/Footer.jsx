import React from "react";
// import voteLogo from '../Icons/v4a_head-1.jpg'
import voteLogoColor from "../Icons/v4a_head-1_Color.png";
import colanderLogo from "../Icons/tinhat_america.png";
import { Footer, Box, Avatar, ResponsiveContext, Button } from "grommet";
import { Link } from "@reach/router";
import styled from "styled-components";

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Footer
          pad="small"
          justify="between"
          border="top"
          background={{ dark: "black", light: "white" }}
        >
          <Box>
            <NavLink weight={600} to="/">
              Home
            </NavLink>
            <NavLink weight={400} to="about">
              About
            </NavLink>
            <NavLink weight={400} to="methods">
              Methods
            </NavLink>
            <NavLink weight={400} to="questions">
              F.A.Q.
            </NavLink>
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
          <Box direction="column" align="center" gap="small">
            <Box
              direction={size === "small" ? "column" : "row"}
              align="center"
              gap="small"
            >
              <Avatar
                src={voteLogoColor}
                size={size === "small" ? "40px" : "55px"}
                alt="Vote For Astra"
              />
              <Avatar
                src={colanderLogo}
                size={size === "small" ? "40px" : "55px"}
                alt="Colander World"
              />
            </Box>
          </Box>
        </Footer>
      )}
    </ResponsiveContext.Consumer>
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
