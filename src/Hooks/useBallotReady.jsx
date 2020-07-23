import React from "react";
import useSWR from "swr";
import fetch from "unfetch";
import { ballotReadyKeyLudo } from "../Utils/apiKeys";

// import fetch from "unfetch";
// import useSWR from "swr";

// import { ballotReadyKeyLudo } from '../Utils/apiKeys'
// import { ballotReadyKeyAstra } from "../Utils/apiKeys";
// import criminalJusticePositions from "../Utils/criminalJusticePositions.json";
// import moment from "moment";
// import { Heading } from "grommet";

// const fetcher = (...args) =>
//   fetch(...args, {
//     headers: { "x-api-key": ballotReadyKeyAstra },
//   }).then((res) => res.json());

const fetcher = url =>
  fetch(url, {
    headers: { "x-api-key": ballotReadyKeyLudo }
  })
    .then(res => res.json())
    .then(txt => console.log(txt));

const useBallotReady = ({ lat, lng }) => {
  const { data, error } = useSWR(
    `https://api.civicengine.com/positions?` +
      `lat=${lat}&` +
      `lon=${lng}&` +
      `include_candidates=${1}&` +
      `include_endorsements=${1}&` +
      `include_office_holders=${1}&` +
      `include_volunteer_urls=${1}`,
    fetcher
  );
  if (error)
    return (
      <div>
        <span aria-label="embaressed face emoji" role="img">
          😳
        </span>
        failed to load
      </div>
    );
  if (!data)
    return (
      <div>
        <span aria-label="confused face emoji" role="img">
          🤔
        </span>
        loading...
      </div>
    );
  // render data
  return <div>{data}</div>;
};

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

export default useBallotReady;
