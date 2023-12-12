import axios from "axios";
import { API_BASE_URL } from "../config";

const getUsers = () => {
	return axios.get(`${API_BASE_URL}/users`);
};

const getUserByUID = (uid) => {
	return axios.get(`${API_BASE_URL}/user/${uid}`);
};

const updateUser = (data: any) => {
	return axios.put(`${API_BASE_URL}/edit-user`, data);
};

export { getUsers, getUserByUID, updateUser };
