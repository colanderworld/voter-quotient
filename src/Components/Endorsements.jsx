import React from "react";
import { Box } from "grommet";
import Endorsement from "./Endorsement";

export const KeyEndorsements = ({ endorsementsArray }) => {
  const FilteredEndorsements = endorsementsArray.map(
    ({ Group, Color, Logo, KeyEndorsement }) =>
      KeyEndorsement && (
        <Endorsement Group={Group} Color={Color} size="medium" />
      )
  );

  return (
    <Box direction="row" wrap={true} margin={{ left: "-2px" }}>
      {FilteredEndorsements}
    </Box>
  );
};

export const OtherEndorsements = ({ endorsementsArray }) => {
  const FilteredEndorsements = endorsementsArray.map(
    ({ Group, Color, KeyEndorsement }) =>
      !KeyEndorsement && (
        <Endorsement Group={Group} Color={Color} size={"20px"} />
      )
  );

  return (
    <Box direction="row" wrap={true} margin={{ left: "-2px" }}>
      {FilteredEndorsements}
    </Box>
  );
};
