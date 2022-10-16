


import {
    FETCH_BOOKING_BY_ID_SUCCESS,FETCH_BOOKING_BY_ID_INIT
} from '../actions/types';

const INITIAL_STATE = {
    booking: {
        data: []
    }
}

export const bookingDetailReducer = (state = INITIAL_STATE.booking, action) => {

    switch (action.type) {
        case FETCH_BOOKING_BY_ID_INIT: {
            return { ...state, data: [] }
        }
        case FETCH_BOOKING_BY_ID_SUCCESS: {
            return { ...state, data: action.booking }
        }
        default:
            return state
    }
}