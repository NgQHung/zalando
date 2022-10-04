import axios from "axios";
import { baseURL } from "./baseUrl";

export const authAxios = axios.create({ baseURL: baseURL.server, withCredentials: true });
