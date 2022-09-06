import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as action from '../../../actions';

function RentalDetail(props) {
    useEffect(() => {
        let rentalId= props.match.params.id;
        props.dispatch(action.fetchRentalsById(rentalId));
    },[]);
    const rentalDetails=props.rental;
    return (
        (rentalDetails.id)?
        <>
        <div>{rentalDetails.title}</div>
        <div>{rentalDetails.city}</div>
        <div>{rentalDetails.street}</div>
        <div>{rentalDetails.category}</div>
        <div>{rentalDetails.description}</div>
        </>
        :
        <>
        <h1>Loading.....</h1>
        </>
    );
}


function mapStateToProps(state) {
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail);