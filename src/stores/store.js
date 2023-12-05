import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(/* any other middleware */),
	devTools: process.env.NODE_ENV !== "production",
	// No need to specify enhancers for basic Redux DevTools setup
});

export default store;
