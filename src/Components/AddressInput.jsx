import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { Box, Text, Main, Heading } from "grommet";
import { Context } from "../Utils/LatLng";
import Lookup from "../Components/Lookup";
import { navigate } from "@reach/router";

import { dummy } from "../Components/DummyData";

export default address => {
  const { setLatlng, latlng } = useContext(Context);
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "us" }
    },
    debounce: 200
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    clearSuggestions();
    setValue(description, false);
    address = description;

    getGeocode({ address: description })
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
        setLatlng({ lat, lng });
        setIsLoading(true);
        axios(
          `https://dont-wait-api.vercel.app/api?lat=${lat}&lon=${lng}`
        ).then(res => {
          console.log(res);
          setPositions(res.data.data);
          setIsLoading(false);
          setIsLoaded(true);
        });
      })
      .catch(error => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <ComboboxOption
          key={id}
          onClick={handleSelect(suggestion)}
          value={
            <Box direction="row">
              <Text weight="bold">{main_text}</Text>
              ,&nbsp;
              <Text>{secondary_text}</Text>
            </Box>
          }
          style={{ overflow: "scroll" }}
        />
      );
    });

  return (
    <Main fill={true} align="center">
      <Combobox onSelect={handleSelect} ref={ref}>
        <Box width="550px">
          <StyledComboboxInput
            value={value}
            onChange={handleInput}
            placeholder="Type your address here"
          />
        </Box>
        <StyledComboboxPopover portal={false}>
          {status === "OK" && status.length > 0 ? (
            <ComboboxList
              style={{ whiteSpace: "nowrap", overflow: "scroll" }}
              key={"id"}
            >
              {renderSuggestions()}
            </ComboboxList>
          ) : (
            <div>
              <span aria-label="embaressed face emoji" role="img">
                😳
              </span>
              &nbsp;We couldn't find that address! Please try another.
            </div>
          )}
        </StyledComboboxPopover>
      </Combobox>
      <Lookup data={dummy.data} address={address}></Lookup>
      {/* {isLoading ? (
        <Heading>
          <span aria-label="embaressed face emoji" role="img">
            🙃
          </span>
          &nbsp;Getting your election data! Please wait.
        </Heading>
      ) : (
        isLoaded && <Lookup data={dummy} address={address}></Lookup>
      )} */}
    </Main>
  );
};

const StyledComboboxPopover = styled(ComboboxPopover)`
  padding: 2px;
  font-size: 1.5em;
  line-height: 1.2em;
  max-width: 544px;
`;

const StyledComboboxInput = styled(ComboboxInput)`
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
