import axios from "axios";
import { API_BASE_URL } from "../config";

const signIn = (email, password) => {
	return axios.post(`${API_BASE_URL}/login`, {
		email: email,
		password: password,
	});
};

export { signIn };
