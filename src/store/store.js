import { configureStore } from "@reduxjs/toolkit"

import { devices } from "./reducer/device"
import { userData } from "./reducer/user"
import { menu } from "./reducer/dataMenu"

export const store = configureStore({
	reducer: {
		device: devices.reducer,
		user: userData.reducer,
		menu: menu.reducer,
	},
})
