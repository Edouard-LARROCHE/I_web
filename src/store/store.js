import { configureStore } from "@reduxjs/toolkit"

import { devices } from "./reducer/device"

export const store = configureStore({
	reducer: {
		device: devices.reducer,
	},
})
