import axios from "axios";
import { BASE_URL } from "../commonConstants";

const NetworkService = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export default NetworkService;