import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as action from '../../actions/index';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

function BookingDetail(props) {
    useEffect(() => {
        let bookingIds = localStorage.getItem('bookings');
        props.dispatch(action.fetchBookingById(bookingIds))
    }, []);
    let image = process.env.PUBLIC_URL + 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg';
    let bookings = props.bookings || [];
    return (

        Array.isArray(bookings) && bookings.length > 0 ? bookings?.map((booking) => {
            const mStartAt = moment(booking.startAt);
            const mEndAt = moment(booking.endAt);
            return (
                <div className='row'>
                    <div className='card bwm-card'>
                        <img className='card-img-top' alt='${image}' src={`${image}`} ></img>
                        <div className='card-block'>
                            <p className='card-text'>You have {booking.days} days upcoming booking.</p>
                            <p className='card-text'>Your stays starts at {mStartAt.format('Y/MM/DD')}  till {mEndAt.format('Y/MM/DD')}  </p>
                            <p className='card-text'>You need to pay total of $ {booking.totalPrice} at the time of check inn</p>
                            <p className='card-text'>Enjoy Staying !! </p>
                            <p className='card-text'><Link to={`/rentals/${booking.rental}`}> click here for More Info</Link></p>
                        </div>
                    </div>
                </div>

            )
        }) :
            <>
                <h1>You don't have any bookings.Please Book and enjoy staying !!!</h1>
            </>
    );
}


function mapStateToProps(state) {
    return {
        bookings: state.bookings.data || []
    }
}

export default connect(mapStateToProps)(BookingDetail);