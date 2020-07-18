import React from "react";
// import voteLogo from '../Icons/v4a_head-1.jpg'
import voteLogoColor from "../Icons/v4a_head-1_Color.png";
import colanderLogo from "../Icons/tinhat_america.png";
import { Footer, Box, Avatar, ResponsiveContext, Button } from "grommet";
import { Router, Link } from "@reach/router";
import { WifiNone } from "grommet-icons";
import styled from "styled-components";

const NavLink = styled(Link)`
  /* font-family: 'IBM Plex Mono'; */
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

const FooterDiv = () => {
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
            <NavLink weight={400} to="PUT-SURVEY-LINK-HERE">
              Survey
            </NavLink>
            <NavLink weight={400} to="questions">
              F.A.Q.
            </NavLink>
          </Box>
          <Box direction={size === "small" ? "column" : "row"} gap="small">
            {/* <Button
							size={size === 'small' ? 'medium' : 'large'}
							label='Survey'
						/> */}
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="HYXH5AQF472ML"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
            {/* <Button
							primary
							size={size === 'small' ? 'medium' : 'large'}
							label='Donate'
						/> */}
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
export default FooterDiv;
