import axios from "axios";
import { getEnvVariables } from "../helpers";

const {VITE_API_URL} = getEnvVariables()

const nutricionApi = axios.create({
    baseURL: VITE_API_URL
});

//CONFIGURAR INTERCEPTORES
nutricionApi.interceptors.request.use(config=>{
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})


export default nutricionApi;