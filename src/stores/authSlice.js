import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: !!localStorage.getItem("isLoggedIn"),
	token: localStorage.getItem("token") || null,
	userTypeId: null,
	filename: null,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isLoggedIn = true;
			state.token = action.payload.token;
			localStorage.setItem("isLoggedIn", "true");
			localStorage.setItem("token", action.payload.token);
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.token = null;
			localStorage.removeItem("isLoggedIn");
			localStorage.removeItem("token");
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
