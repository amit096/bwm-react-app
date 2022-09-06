import React from "react";
import { RentalCard } from "./rentalcard";
import { connect } from 'react-redux';

 function RentalList(props) {
    function rentallist() {
        return (props.rentals.map((rental, index) => {
            return <RentalCard rentalData={rental} key={index} />
        })
        );
    }
    function rentalListing() {
        return (<section id='rentalListing'>
            <h1 className='page-title'>Your Home All Around the World</h1>
            <div className='row'>
                {rentallist()}
            </div>
        </section>)
    }

    return (
        rentalListing()
    );
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals
    }
}

export default connect(mapStateToProps)(RentalList);