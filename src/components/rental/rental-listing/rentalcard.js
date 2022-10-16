import React from 'react';
import { Link } from 'react-router-dom';
import { rentalType } from '../../../helper/index';

export function RentalCard(props) {
 
    let image=props.rentalData.image?props.rentalData.image : process.env.PUBLIC_URL+'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg';
   
    return (
        <div className='col-md-3 col-xs-6'>
            <Link className='rental-detail-link' to={`/rentals/${props.rentalData._id}`}>
                <div className='card bwm-card'>
                    <img className='card-img-top' alt='${props.rentalData.image}' src={`${image}`} ></img>
                    <div className='card-block'>
                        <h6 className={`card-subtitle ${props.rentalData.category}`}>{rentalType(props.rentalData.shared)} {props.rentalData.category} &#183; {props.rentalData.city}</h6>
                        <h4 className='card-title'>{props.rentalData.title}</h4>
                        <p className='card-text'>$ {props.rentalData.dailyRate} per Night &#183; Free Cancelation</p>
                        <a href='' className='card-link'>More Info</a>
                    </div>
                </div>
            </Link>
        </div>
    );
}