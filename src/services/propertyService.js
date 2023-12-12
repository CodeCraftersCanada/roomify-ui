import axios from "axios";
import { API_BASE_URL } from "../config";

const getProperties = () => {
	return axios.get(`${API_BASE_URL}/properties`);
};

const getPropertiesByID = (id) => {
	return axios.get(`${API_BASE_URL}/properties/${id}`);
};

export { getProperties, getPropertiesByID };
