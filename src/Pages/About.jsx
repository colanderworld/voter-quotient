import React from "react";
import { Heading, Text, Box } from "grommet";

export default () => {
  return (
    <Box pad={{ horizontal: "1em" }}>
      <Heading
        style={{
          fontSize: "4em",
          lineHeight: "1em",
          fontFamily: "IBM Plex Mono"
        }}
        margin={{ top: "xlarge" }}
        textAlign="start"
      >
        About
      </Heading>
      <Text size="medium" textAlign="start">
        In the wake of the protests surrounding the death of George Floyd, we
        sought a way to better inform the public about elections that affect
        criminal justice reform.. When you put in your address, our service
        pulls relevant criminal justice races from our database. The results,
        for several key positions, shows who is running, who they are endorsed
        by, and some basic biographical information about them. It will also
        give an alert if a candidate is running unopposed. We hope that this
        information can be a starting ground for helping others become more
        informed about key local elections and the effects of those elections on
        the criminal justice system.
        <br />
        <br />
        This is a beta product for the 2020 election. We appreciate any and all
        feedback.
      </Text>
      <Heading
        style={{
          fontSize: "4em",
          lineHeight: "1em",
          fontFamily: "IBM Plex Mono"
        }}
        margin={{ top: "xlarge" }}
        textAlign="start"
      >
        Privacy
      </Heading>
      <Text size="medium" textAlign="start">
        DontWait.Vote collects the minimal amount of data about its users to
        provide good service, and we will never monetize this data. We do not
        host or display any advertisements, nor serve any trackers for any
        purpose.
        <br />
        <br />
        We do not store any personal information on any internal databases. As
        much as possible, we will respect and respond to your privacy requests.
        DontWait.Vote does not explicitly use, transfer, sell, or monetize any
        collected personal information for any commercial purposes outside of
        DontWait.Vote.
        <br />
        <br />
        To understand who utilizes our site, we employ Netlify Analytics, which
        collects service usage data. You can read their data policies here. We
        do not advertise on this site, nor do we serve any cookies for any
        purpose.
        <br />
        <br />
        Though use of the website requires the input of a user’s address, we do
        not store that information, nor sell and/or further distribute it in any
        way. We do not employ any user login system or payment integration.
        Thus, we do not store any passwords or tokens from other services with
        highly-sensitive information. DontWait.Vote is a statically-generated
        site. Our service is the same for every user. Input addresses are never
        stored.
      </Text>
      <Heading
        style={{
          fontSize: "4em",
          lineHeight: "1em",
          fontFamily: "IBM Plex Mono"
        }}
        margin={{ top: "xlarge" }}
        textAlign="start"
      >
        Terms of Service
      </Heading>
      <Text size="medium" textAlign="start">
        By accessing and using Don’t Wait, Vote, you accept and agree to be
        bound by the terms and provision of this agreement. In addition, when
        using these particular services, you shall be subject to any posted
        guidelines or rules applicable to such services. Any participation in
        this service will constitute acceptance of this agreement. If you do not
        agree to abide by the above, please do not use this service.
        <br />
        <br />
        This site and its components are offered for informational purposes
        only; this site shall not be responsible or liable for the accuracy,
        usefulness or availability of any information transmitted or made
        available via the site, and shall not be responsible or liable for any
        error or omissions in that information.
        <br />
        <br />
        The Site and its original content, features, and functionality are owned
        by Eli Cohen and are protected by international copyright, trademark,
        patent, trade secret, and other intellectual property or proprietary
        rights laws.
      </Text>
    </Box>
  );
};
