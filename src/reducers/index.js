import { rentalReducer, rentalDetailReducer } from './rentals-reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth-reducer';
import { bookingDetailReducer } from './booking-reducer';
export const init = () => {
    const reducer = combineReducers({
        rentals: rentalReducer, rental: rentalDetailReducer, form: formReducer, auth: authReducer,
        bookings: bookingDetailReducer
    });
    const composeEnhancers =
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;
    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}