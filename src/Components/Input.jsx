import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import usePlacesAutocomplete from "use-places-autocomplete";
import { Box, Text } from "grommet";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Lookup from "./Lookup";
import { Wave } from "better-react-spinkit";

export default () => {
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "us" }
    },
    debounce: 200
  });

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSelect = val => {
    setValue(val, false);
    setIsLoading(true);
    axios(`https://beta-dwv-api.vercel.app/api?address=${encodeURI(val)}`).then(
      res => {
        console.log(res);
        setPositions(res.data.data.filter(({ tagged }) => tagged));
        setIsLoading(false);
        setIsLoaded(true);
      }
    );
  };

  return (
    <>
      <Combo onSelect={handleSelect} aria-labelledby="demo">
        <Box fill={true} width={{ max: "600px" }}>
          <Input
            value={value}
            onChange={handleInput}
            disabled={!ready}
            width="600px"
            placeholder="Enter your address to begin 🗳"
          />
          <Popover>
            <ComboboxList>
              {status === "OK" ? (
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))
              ) : (
                <div>
                  <span aria-label="embaressed face emoji" role="img">
                    😳
                  </span>
                  &nbsp;We couldn't find that address! Please try another.
                </div>
              )}
            </ComboboxList>
          </Popover>
        </Box>
      </Combo>
      {isLoading ? (
        <Box align="center" gap="medium">
          <Text size="16px" weight="bold">
            Getting your election data! Please wait.
          </Text>
          <Wave size={50} />
        </Box>
      ) : (
        isLoaded && <Lookup data={positions}></Lookup>
      )}
    </>
  );
};

const Combo = styled(Combobox)`
  margin: 0 0 4em 0;
`;

const Popover = styled(ComboboxPopover)`
  padding: 2px;
  font-size: 1.5em;
  line-height: 1.2em;
  max-width: 594px;
  font-family: sans-serif;
`;

const Input = styled(ComboboxInput)`
  margin-top: 2em;
  font-size: 2em;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;

  :focus {
    outline: none;
  }
`;
