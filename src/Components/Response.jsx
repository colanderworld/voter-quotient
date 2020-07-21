import React, { useEffect } from "react";
import { Accordion, ResponsiveContext, Box, Text } from "grommet";
import Position from "./Position";
import useSWR from "swr";
import fetch from "unfetch";
import DummyData from "./DummyData";
import { Router } from "@reach/router";

// import { ballotReadyKeyLudo } from '../Utils/apiKeys'
import { ballotReadyKeyAstra } from "../Utils/apiKeys";
import criminalJusticePositions from "../Utils/criminalJusticePositions.json";
import moment from "moment";
import { Heading } from "grommet";

const fetcher = (...args) =>
  fetch(...args, {
    headers: { "x-api-key": ballotReadyKeyAstra },
  }).then((res) => res.json());

export const Response = ({ data }) => {
  // console.log(`🤯 Recieved ${lat} and ${lng}`);
  // useEffect(() => {
  //   API.subscribe()
  //   return function cleanup() {
  //     API.unsubscribe()
  //   }
  // })

  // const { data, error } = useSWR(
  //   () =>
  //     `https://api.civicengine.com/positions?` +
  //     `lat=${lat}&` +
  //     `lon=${lng}&` +
  //     `include_candidates=${1}&` +
  //     `include_endorsements=${1}&` +
  //     `include_office_holders=${1}&` +
  //     `include_volunteer_urls=${1}`,
  //   fetcher,
  //   { suspense: false }
  // );

  // if (error)
  //   return (
  //     <Heading>
  //       <span aria-label="embaressed face emoji" role="img">
  //         😳
  //       </span>
  //       &nbsp;failed to load
  //     </Heading>
  //   );
  // if (!data)
  //   return (
  //     <Heading>
  //       <span aria-label="confused face emoji" role="img">
  //         🤔
  //       </span>
  //       &nbsp;loading...
  //     </Heading>
  //   );

  // const groupedPositions = data.positions.map((d) =>
  //   Object({
  //     tagged: criminalJusticePositions
  //       .map((l) => l.id)
  //       .includes(d.normalized_position.id),
  //     candidateArray: d.candidates.filter((i) =>
  //       moment(i.election_day).isAfter("2020-01-01", "day")
  //     ),
  //     office_holders: d.office_holders,
  //     position_id: d.position_id,
  //     voteMargin: "123,456",
  //     divisionColor: "blue",
  //     division: d.level,
  //     positionName: d.normalized_position.name,
  //     positionDescription: d.description,
  //   })
  // );

  // console.log("Data:" + data.positions);
  // console.log("Error:" + error);

  // const filteredPositons = groupedPositions.filter(({ tagged }) => tagged);

  // console.log("Filtered Positions:" + filteredPositons.candidateArray);

  // const sortedPositions = groupedPositions.map(
  //   ({
  //     positionName,
  //     positionDescription,
  //     division,
  //     divisionColor,
  //     voteMargin,
  //     candidateArray,
  //   }) => (
  //     <Position
  //       key={positionName && positionName}
  //       positionName={positionName && positionName}
  //       positionDescription={positionDescription && positionDescription}
  //       division={division && division}
  //       divisionColor={divisionColor && divisionColor}
  //       voteMargin={voteMargin && voteMargin}
  //       candidatesArray={candidateArray && candidateArray}
  //     />
  //   )
  // );

  //////////
  const sortedPositions = data
    .sort((d) => d.tagged === false)
    .map(
      ({
        normalizedPosition,
        positionName,
        description,
        level,
        divisionColor,
        voteMargin,
        candidatesArray,
        tagged,
      }) => (
        <Position
          key={positionName}
          normalizedPosition={normalizedPosition}
          positionName={positionName}
          description={description}
          level={level}
          divisionColor={divisionColor}
          voteMargin={voteMargin}
          candidatesArray={candidatesArray}
          tagged={tagged}
        />
      )
    );
  /////////

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box align="center">
          <Box width={size === "small" ? "375px" : "450px"}>
            <Text
              size="medium"
              margin={
                size === "small"
                  ? "xsmall"
                  : { vertical: "large", horizontal: "xsmall" }
              }
            >
              <i>
                <b>Disclaimer:</b> This is a demo app. It will <u>only</u> show
                the results of last year's San Francisco local elections.
              </i>
            </Text>
          </Box>
          <Accordion
            multiple={true}
            width={size !== "small" && "800px"}
            responsive={true}
            margin="xsmall"
            animate={true}
            focusIndicator={false}
            margin={{ vertical: "1em" }}
          >
            {sortedPositions}
          </Accordion>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
