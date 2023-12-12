import axios from "axios";
import { API_BASE_URL } from "../config";

const getUsers = () => {
	return axios.get(`${API_BASE_URL}/users`);
};

const getUserByUID = (uid) => {
	return axios.get(`${API_BASE_URL}/user/${uid}`);
};

export { getUsers, getUserByUID };
