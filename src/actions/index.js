
import axios from 'axios';
import { FETCH_RENTALS_BY_ID_SUCCESS, FETCH_RENTALS_BY_ID_INIT ,FETCH_RENTALS_SUCCESS,LOGIN_SUCCESS,LOGIN_FAILURE} from './types';

const fetchRentalsByIdSeccess = (rentalDetails) => {
    return {
        type: FETCH_RENTALS_BY_ID_SUCCESS,
        rental: rentalDetails
    }
}
const fetchRentalsByIdInit = () => {
    return {
        type: FETCH_RENTALS_BY_ID_INIT
    }
}

const fetchRentalsSeccess = (rentalDetails) => {
    return {
        type: FETCH_RENTALS_SUCCESS,
        rental: rentalDetails
    }
}

export const fetchRentals = () => {
    return (dispatch) => {
        axios.get(`/api/v1/rentals`).then(
            (rentalDetails) => {
                dispatch(fetchRentalsSeccess(rentalDetails.data))
            });
    }
}


export const fetchRentalsById = (rentalId) => {
    return (dispatch) => {
        dispatch(fetchRentalsByIdInit());
        axios.get(`/api/v1/rentals/${rentalId}`).then(
            (rentalDetails) => {
                dispatch(fetchRentalsByIdSeccess(rentalDetails.data))
            });
    }
}

export const register =(userdata)=>{
 return axios.post('/api/v1/users/register',{...userdata}).then(
    (res)=>{ return res.data;},
    (err)=>{ return Promise.reject(err.response.data.error)}
 )
}


const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        token: token
    }
}


const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        error
    }
}

export function login(userdata){
    return (dispatch) => {
        axios.post('/api/v1/users/auth',{...userdata}).then((res)=>res.data).then((token)=>{
            localStorage.setItem('auth_token',token);
            dispatch(loginSuccess(token));
        }).catch((err)=>{
            dispatch(loginFailure(err.response.data.errors));
        });
    }
}
