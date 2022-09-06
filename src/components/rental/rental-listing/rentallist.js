import React, { useEffect } from "react";
import { RentalCard } from "./rentalcard";
import { connect } from 'react-redux';
import * as action from '../../../actions';

function RentalList(props) {
    function rentallist() {
        return (props.rentals.map((rental, index) => {
            return <RentalCard rentalData={rental} key={index} />
        })
        );
    }
    useEffect(() => {
        props.dispatch(action.fetchRentals());
    },[]);
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
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalList);