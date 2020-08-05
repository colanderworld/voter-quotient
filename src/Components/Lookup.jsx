import React, { useContext, useState, useEffect } from "react";
import {
  Accordion,
  ResponsiveContext,
  Box,
  Text,
  Grid,
  RadioButtonGroup
} from "grommet";
import { Location, FormCalendar } from "grommet-icons";
import Position from "./Position";
import { one, two } from "../Components/DummyData";
import styled from "styled-components";
import useSWR from "swr";
import fetch from "unfetch";
import { ballotReadyKeyLudo, googleKey } from "../Utils/apiKeys";

export default () => {
  const size = useContext(ResponsiveContext);
  const [value, setValue] = useState("c2");

  const fetcher = url => fetch(url).then(res => res.json());

  const address = "918 Linwood Road, Birmingham AL, 35222";

  // const { data, error } = useSWR(
  //   encodeURI(
  //     `https://www.googleapis.com/civicinfo/v2/representatives?` +
  //       `key=${googleKey}&` +
  //       `address=${address}`
  //   ),
  //   fetcher
  // );

  const { dataTwo, errorTwo } = useSWR(
    `https://www.googleapis.com/civicinfo/v2/representatives?` +
      `key=${googleKey}&` +
      `address=${encodeURI(address)}`,
    fetcher
  );

  console.log("DATA: " + dataTwo, "ERROR: " + errorTwo);

  // const categorizedData = new Map(
  //   Array.from(
  //     new Map(data.offices.map(d => [d.name, [d]])),
  //     ([office, value]) => ({
  //       office,
  //       level: value[0].levels[0],
  //       politicians: value[0].officialIndices.map(d => data.officials[d])
  //     })
  //   )
  //     .reverse()
  //     .map(d => [categorize(d.level), d])
  // );

  // console.log(categorizedData);

  function categorize(input) {
    if (input === "country") {
      return "Federal";
    } else if (input === "administrativeArea1") {
      return "State";
    } else {
      return "Local";
    }
  }

  /*   
  Split the positions into the most important and regular ones
  positionsArray -> <Position />  (Highlighted Positions)
                 -> <Position />  (Regular Positions)           
  */
  const Highlighted =
    value === "c1"
      ? one.filter(({ tagged }) => tagged)
      : two.filter(({ tagged }) => tagged);
  const Regular =
    value === "c1"
      ? one.filter(({ tagged }) => !tagged)
      : two.filter(({ tagged }) => !tagged);

  ////////// BALLOTREADY API //////////
  // const fetcher = url =>
  //   fetch(url, {
  //     headers: { "x-api-key": ballotReadyKeyLudo }
  //   })
  //     .then(res => res.json())
  //     .then(txt => console.log(txt));

  // const { data, error } = useSWR(
  //   `https://api.civicengine.com/positions?` +
  //     `lat=${lat}&` +
  //     `lon=${lng}&` +
  //     `include_candidates=${1}&` +
  //     `include_endorsements=${1}&` +
  //     `include_office_holders=${1}&` +
  //     `include_volunteer_urls=${1}`,
  //   fetcher
  // );

  return (
    <Grid
      fill
      columns={["1/2", "1/2"]}
      rows={[["flex"], ["full"]]}
      areas={
        size === "small"
          ? [
              ["electionDate", "electionDate"],
              ["voterAddress", "voterAddress"],
              ["positions", "positions"]
            ]
          : [
              ["electionDate", "voterAddress"],
              ["positions", "positions"]
            ]
      }
    >
      <Box
        gridArea="electionDate"
        align={size === "small" ? "start" : "center"}
        pad="medium"
        direction="column"
        gap="xsmall"
      >
        <FormCalendar color="gold" size="large" />
        <Text size="xlarge" weight="bold" textAlign="start">
          Next Election
        </Text>
        <Text style={{ fontFamily: "IBM PLex Mono" }} textAlign="start">
          Presidential General Election
          <br />
          November 3rd, 2020
        </Text>
      </Box>
      <Box
        gridArea="voterAddress"
        align={size === "small" ? "start" : "center"}
        pad="medium"
        direction="column"
        gap="xsmall"
      >
        <Location color="gold" size="large" />
        <Text size="large" weight="bold" textAlign="start">
          Registration Address
        </Text>
        <Text style={{ fontFamily: "IBM PLex Mono" }} textAlign="start">
          501 Twin Peaks Boulevard
          <br />
          San Francisco, California
          <br />
          94114
        </Text>
      </Box>
      <Box gridArea="positions" align="center" fill="vertical">
        <Box alignSelf={size === "small" ? "start" : "center"} pad="medium">
          <RadioButtonGroup
            style={{ fontFamily: "IBM Plex Mono" }}
            direction="row"
            name="radio"
            options={[
              {
                label: <MetaData>Police & Prisons</MetaData>,
                value: "c1"
              },
              { label: <MetaData>All Elected Officials</MetaData>, value: "c2" }
            ]}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Box>
        <Accordion
          focusIndicator={false}
          fill={true}
          multiple={true}
          animate={true}
          width={{ max: "800px" }}
          margin={{ top: "1em", bottom: "8em" }}
        >
          {Highlighted.length !== 0 &&
            Highlighted.map(data => (
              <Position key={data.position_id.toString()} data={data} />
            ))}
          {Regular.length !== 0 &&
            Regular.map(data => (
              <Position key={data.position_id.toString()} data={data} />
            ))}
        </Accordion>
      </Box>
    </Grid>
  );
};

const MetaData = styled(Text)`
  font-family: "IBM Plex Mono";
  font-size: 1em;
  letter-spacing: -0.7px;

  @media screen and (max-width: 375px) {
    font-size: 0.9em;
  }

  :hover {
    font-style: italic;
    text-decoration: underline;
    text-decoration-color: gold;
  }
`;
