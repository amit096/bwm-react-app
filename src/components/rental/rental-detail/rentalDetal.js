import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as action from '../../../actions';
import { RentalInfo } from './rentalInfo';
import {MapWithAMarker} from '../../maps/googleMaps';
function RentalDetail(props) {
    useEffect(() => {
        let rentalId = props.match.params.id;
        props.dispatch(action.fetchRentalsById(rentalId));
    }, []);
    const rental = props.rental;
    return (
        (rental._id) ?
            <>
                <section id='rentalDetails'>
                    <div className='upper-section'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={rental.image} alt=''></img>
                            </div>
                            <div className='col-md-6'>
                                <MapWithAMarker
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `360px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='details-section'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <RentalInfo rental={rental} />
                            </div>
                            <div className='col-md-4'> BOOKING</div>
                        </div>
                    </div>
                </section>
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