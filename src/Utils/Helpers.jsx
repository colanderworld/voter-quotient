import React from "react";
import { Text } from "grommet";
import _ from "lodash";

export const getInitials = name =>
  name &&
  name
    .replace(/[^A-Za-z0-9À-ÿ ]/gi, "") // taking care of accented characters as well
    .replace(/ +/gi, " ") // replace multiple spaces to one
    .split(/ /) // break the name into parts
    .reduce((acc, item) => acc + item[0], ""); // assemble an abbreviation from the parts

export const BoldPostion = (position, description) => {
  const marker = description.search(position);

  const newString = (
    <Text size="small">
      {description.slice(0, marker)} <b>{position}</b>
      {description.slice(marker + position.length)}
    </Text>
  );

  return newString;
};

export const VoteTally = (raw, percent) => {
  if (percent !== 100) {
    return (
      <Text size="small">
        The incumbent recieved <b>{raw}</b> more votes than their opponent in
        the last election, winning by <b>+{percent}%</b>.
      </Text>
    );
  } else {
    return (
      <Text size="small">
        The incumbent ran <b>unopposed</b> in the last election, winning all{" "}
        <b>{raw}</b> votes cast.
      </Text>
    );
  }
};

export const DefineLevel = level => {
  if (level === "FEDERAL") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting the entire country.
      </Text>
    );
  } else if (level === "STATE") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting your state only.
      </Text>
    );
  } else if (level === "COUNTY") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting your county only.
      </Text>
    );
  } else if (level === "CITY") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting your immediate city.
      </Text>
    );
  } else if (level === "LOCAL") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning office holders
        vote on policy affecting your locality. This is the smallest
        governmental area.
      </Text>
    );
  } else if (level === "PARTY") {
    return (
      <Text size="small">
        This is a <b>{_.lowerCase(level)} position</b>, meaning they only hold
        power within their own party.
      </Text>
    );
  }
};

export const getPartyColor = party => {
  if (party === "Republican") {
    return "red";
  } else if (party === "Democrat") {
    return "blue";
  } else {
    return "gray";
  }
};
