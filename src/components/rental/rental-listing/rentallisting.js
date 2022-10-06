import React, { useEffect } from "react";
import { RentalList } from "./rentallist";
import { connect } from 'react-redux';
import * as action from '../../../actions';

function RentalListing(props) {
    useEffect(() => {
        props.dispatch(action.fetchRentals());
    },[]);
    function rentalListing() {
      

        return (<section id='rentalListing'>
            <h1 className='page-title'>Your Home All Around the World</h1>
            <div className='row'>
            <RentalList rentals={props.rentals} />
            </div>
        </section>)
    }

    return (
        rentalListing()
    );
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalListing);