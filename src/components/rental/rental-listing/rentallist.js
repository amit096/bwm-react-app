import React from "react";
import { RentalCard } from "./rentalcard";

export function RentalList(props) {
  ;
    function rentallist() {
        return ( props.rentals && props.rentals.map((rental, index) => {
            return <RentalCard rentalData={rental} key={index} />
        })
        );
    }
    function rentalListing() {
        return (
            <div className='row'>
                {rentallist()}
            </div>)
    }

    return (
        rentalListing()
    );
}
