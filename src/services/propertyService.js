import axios from "axios";
import { API_BASE_URL } from "../config";

const getProperties = () => {
	return axios.get(`${API_BASE_URL}/properties`);
};

const getPropertiesByID = (id) => {
	return axios.get(`${API_BASE_URL}/properties/${id}`);
};

const updateProperties = (id, data) => {
	return axios.put(`${API_BASE_URL}/properties/${id}`, data);
};

export { getProperties, getPropertiesByID, updateProperties };
