import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import 'moment-timezone';

class AuthService {
    constructor() { }

    getToke() {
        return localStorage.getItem('auth_token');
    }

    getExpiration(token) {
        const decodeToken = jwt.decode(token);
        return decodeToken.exp;
    }

    isValid(token) {
        return (new Date()).getTime() / 1000 < this.getExpiration(token);
    }

    isAuthenticated() {
        const token = this.getToke();
       
        if (token && this.isValid(token)) {
            return true;
        }
       
        return false;
    }
}

export default AuthService;
