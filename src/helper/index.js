
import titleize from 'titleize';

export const rentalType = (isShared) => {
    return (isShared) ? 'shared' : 'entire';
}

export const toTitleize = value => (value) ? titleize(value) : ''; 