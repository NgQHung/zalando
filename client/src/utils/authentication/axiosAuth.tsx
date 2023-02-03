import axios from "axios";
// import { baseURL } from "./baseUrl";
import { herokuUrl } from "./herokuUrl";
const uriBase = {
  server: "http://localhost:8080",
};

export const authAxios = axios.create({ baseURL: uriBase.server, withCredentials: true });
