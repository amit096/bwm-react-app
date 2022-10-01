import axios from "axios";
import AuthService from "./auth-service";

class AxiosService {
    axiosInstance = {};
    authService;
    constructor() {
        this.initInstance();
        this.authService = new AuthService();
    }

    initInstance() {
        this.axiosInstance = axios.create({
            baseURL: '/api/v1',
            timeout: 5000
        })
        this.axiosInstance.interceptors.request.use((config) => {
            const token = this.authService.getToke();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        })
        return this.axiosInstance;
    }

    getInstance(){
        return this.axiosInstance ||this.initInstance();
    }
}

export default  new AxiosService();