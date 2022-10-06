import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as action from '../../../actions';
import { RentalInfo } from './rentalInfo';
import { RentalMap } from './rentalMap';
import  Booking  from '../../booking/booking';

function RentalDetail(props) {
    useEffect(() => {
        let rentalId = props.match.params.id;
        props.dispatch(action.fetchRentalsById(rentalId));
    }, []);
    const rental = props.rental;
    let image=props.rental.image?props.rental.image : process.env.PUBLIC_URL+'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg';
  
    return (
        (rental._id) ?
            <>
                <section id='rentalDetails'>
                    <div className='upper-section'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={image} alt=''></img>
                            </div>
                            <div className='col-md-6'>
                                <RentalMap location={`${rental.city},${rental.street}`} />
                            </div>
                        </div>
                    </div>

                    <div className='details-section'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <RentalInfo rental={rental} />
                            </div>
                            <div className='col-md-4'> <Booking rental={rental}/></div>
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