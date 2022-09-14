//https://www.npmjs.com/package/@geoapify/react-geocoder-autocomplete
//https://apidocs.geoapify.com/samples/autocomplete/react-geoapify-geocoder-autocomplete/

import React, { useState } from "react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

export const LocationAutofillInput = () => {
  function onPlaceSelect(value) {
    console.log(value);
  }

  function onSuggectionChange(value) {
    console.log(value);
  }

  //   function preprocessHook(value) {
  //     return `${value}, Munich, Germany`
  //   }

  //   function postprocessHook(feature) {
  //     return feature.properties.street;
  //   }

  //   function suggestionsFilter(suggestions) {
  //     const processedStreets = [];

  //     const filtered = suggestions.filter(value => {
  //       if (!value.properties.street || processedStreets.indexOf(value.properties.street) >= 0) {
  //         return false;
  //       } else {
  //         processedStreets.push(value.properties.street);
  //         return true;
  //       }
  //     })

  //     return filtered;
  //   }

  return (
    <GeoapifyContext apiKey="ef144ea6739444caa967540413691482">
      {/*     
          <GeoapifyGeocoderAutocomplete
            placeSelect={onPlaceSelect}
            suggestionsChange={onSuggectionChange}
          /> */}

      <GeoapifyGeocoderAutocomplete
        placeholder="Enter address here"
        value={value}
        type={type}
        lang={language}
        position={position}
        countryCodes={countryCodes}
        limit={limit}
        // filterByCountryCode={filterByCountryCode}
        // filterByCircle={filterByCircle}
        // filterByRect={filterByRect}
        // biasByCountryCode={biasByCountryCode}
        // biasByCircle={biasByCircle}
        // biasByRect={biasByRect}
        // biasByProximity={biasByProximity}
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
      />
      {/*     
          <GeoapifyGeocoderAutocomplete
            placeSelect={onPlaceSelect}
            suggestionsChange={onSuggectionChange}
            preprocessHook={preprocessHook}
            postprocessHook={postprocessHook}
            suggestionsFilter={suggestionsFilter}
          /> */}
    </GeoapifyContext>
  );
};
