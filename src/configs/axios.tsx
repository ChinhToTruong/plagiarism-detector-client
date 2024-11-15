import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Content-Type': 'application/json'
    }
})



axiosInstance.interceptors.response.use(
    (config) => {        
        return config;
    }
    ,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log("unauthorized");
        }
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.request.use(
    (config) => {
        if (localStorage.getItem('token'))console.log("no token");
        
        config.headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }

        return config;
    }
)


export default axiosInstance