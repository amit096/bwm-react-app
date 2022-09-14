
import { FETCH_RENTALS_BY_ID_SUCCESS, FETCH_RENTALS_BY_ID_INIT ,FETCH_RENTALS_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    rentals: {
        data: []
    },
    rental: {
        data: {}
    }
}
export const rentalReducer = (state = INITIAL_STATE.rentals, action) => {

    switch (action.type) {
        case FETCH_RENTALS_SUCCESS: {
            return { ...state, data: action.rental }
        }
        default:
            return state
    }
}

export const rentalDetailReducer = (state = INITIAL_STATE.rental, action) => {

    switch (action.type) {
        case FETCH_RENTALS_BY_ID_INIT: {
            return { ...state, data: {} }
        }
        case FETCH_RENTALS_BY_ID_SUCCESS: {
            return { ...state, data: action.rental }
        }
        default:
            return state
    }
}