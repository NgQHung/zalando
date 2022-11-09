import axios from "axios";
// import { baseURL } from "./baseUrl";
import { herokuUrl } from "./herokuUrl";

export const authAxios = axios.create({ baseURL: herokuUrl.server, withCredentials: true });
