import React, { useContext } from "react"; // KeyboardEvent
import styled from "styled-components";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { ResponsiveContext, Box } from "grommet";
import { FormSearch, Search } from "grommet-icons";

import { Context } from "../Contexts/LatLng";
import { navigate } from "@reach/router";

import { Response } from "../Components/Response";

export default (address) => {
  const { setLatlng, latlng } = useContext(Context);
  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "us" },
      /* Define search scope here */
    },
    debounce: 200,
  });

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component,
    // we can dismiss the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();
    address = description;
    // navigate(`/lookup`);

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
        setLatlng({ lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });

    return <Response lat={latlng.lat} lng={latlng.lng} />;
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <ComboboxOption
          key={id}
          onClick={handleSelect(suggestion)}
          value={main_text + " " + secondary_text}
          style={{ overflow: "scroll" }}
        />
      );
    });

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Combobox onSelect={handleSelect} ref={ref}>
          <Box width="550px">
            <StyledComboboxInput
              value={value}
              onChange={handleInput}
              placeholder="type address here"
            />
          </Box>
          <StyledComboboxPopover portal={false}>
            {status === "OK" && status.length > 0 ? (
              <ComboboxList
                style={{ whiteSpace: "nowrap", overflow: "scroll" }}
              >
                {renderSuggestions()}
              </ComboboxList>
            ) : (
              <ComboboxList>
                <ComboboxOption
                  value={
                    <div>
                      <span aria-label="embaressed face emoji" role="img">
                        😳
                      </span>
                      &nbsp;We couldn't find that address! Please try another.
                    </div>
                  }
                />
              </ComboboxList>
            )}
          </StyledComboboxPopover>
        </Combobox>
      )}
    </ResponsiveContext.Consumer>
  );
};

const StyledComboboxPopover = styled(ComboboxPopover)`
  /* font-family: 'IBM Plex Mono'; */
  padding: 2px;
  font-size: 1.5em;
  line-height: 1.2em;
  max-width: 544px;
  /* overflow-x: hidden; */
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
