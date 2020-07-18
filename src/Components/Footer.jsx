import React from "react";
// import voteLogo from '../Icons/v4a_head-1.jpg'
import voteLogoColor from "../Icons/v4a_head-1_Color.png";
import colanderLogo from "../Icons/tinhat_america.png";
import {
  Footer,
  Box,
  Avatar,
  Anchor,
  ResponsiveContext,
  Button,
} from "grommet";
// import { Router, Link } from '@reach/router'

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
            {/* <Anchor
              href="/"
              color="Black"
              style={{ fontSize: "1.2em", lineHeight: "1.3em" }}
            >
              Home
            </Anchor> */}
            <Anchor
              href="about"
              color="Black"
              style={{
                fontSize: "1.2em",
                lineHeight: "1.3em",
                fontWeight: 400,
              }}
            >
              About Us
            </Anchor>
            <Anchor
              href="methods"
              color="Black"
              style={{
                fontSize: "1.3em",
                lineHeight: "1.3em",
                fontWeight: 400,
              }}
            >
              Methods
            </Anchor>
            <Anchor
              href="PUT-SURVEY-LINK-HERE"
              color="Black"
              style={{
                fontSize: "1.3em",
                lineHeight: "1.3em",
                fontWeight: 400,
              }}
            >
              Survey
            </Anchor>
            <Anchor
              href="questions"
              color="Black"
              style={{
                fontSize: "1.3em",
                lineHeight: "1.3em",
                fontWeight: 400,
              }}
            >
              F.A.Q.
            </Anchor>
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
