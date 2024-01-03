import axios from "axios";

const config  =  {
    baseURL: "http://localhost:3000",
    ResponseType: "json"
}

export const API = axios.create(config);