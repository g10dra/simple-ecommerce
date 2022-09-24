import axios from "axios";
import { BASE_URL } from "../commonConstants";

const NetworkService = axios.create({
    baseURL: BASE_URL,
})

export default NetworkService;