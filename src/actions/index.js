
import axios from 'axios';
import { FETCH_RENTALS_BY_ID_SUCCESS, 
    FETCH_RENTALS_BY_ID_INIT, FETCH_RENTALS_SUCCESS, 
    LOGIN_SUCCESS, LOGIN_FAILURE ,LOGOUT} from './types';
import AuthService from '../services/auth-service';
import axiosService from '../services/axios-service';

const axiosInstance = axiosService.getInstance();

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
        axiosInstance.get(`/rentals`).then(
            (rentalDetails) => {
                dispatch(fetchRentalsSeccess(rentalDetails.data))
            });
    }
}


export const fetchRentalsById = (rentalId) => {
    return (dispatch) => {
        dispatch(fetchRentalsByIdInit());
        axiosInstance.get(`/rentals/${rentalId}`).then(
            (rentalDetails) => {
                dispatch(fetchRentalsByIdSeccess(rentalDetails.data))
            });
    }
}

export const register = (userdata) => {
    return axiosInstance.post('/users/register', userdata).then(
        (res) => {
            localStorage.removeItem("auth_token");
            return res.data;
        },
        (err) => { return Promise.reject(err.response.data.error) }
    )
}


const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    }

}


const loginFailure = (errors) => {
    return {
        type: LOGIN_FAILURE,
        errors
    }
}
export function checkAuthState() {
    const authService = new AuthService();
    return (dispatch) => {
        if (authService.isAuthenticated()) {
            dispatch(loginSuccess());
        }
    }
}
export function login(userdata) {
    return (dispatch) => {
        axiosInstance.post('/users/auth', userdata).then((res) => res.data).then((token) => {
            localStorage.setItem('auth_token', token.token);
            dispatch(loginSuccess());
        }).catch((err) => {
           
            dispatch(loginFailure(err.response.data.error));
        });
    }
}

export const logout=() => {
    localStorage.removeItem("auth_token");
    return {
        type: LOGOUT
    }
}

export const createBooking = (booking) => {
    debugger;
    return axiosInstance.post('/bookings', booking)
        .then(res => res.data)
        .catch((err) => Promise.reject(err.response.data.errors))
  }