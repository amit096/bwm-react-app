import React from "react";
import { MapWithAMarker } from '../../maps/googleMaps';

export function RentalMap(props) {
    const location = props.location;
    return (
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap" // need to buy a key
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
    />
    );
}