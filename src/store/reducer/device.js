import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	openScreen: false,
	batteryLevel: 100,
	locationScreen: "",
}

export const devices = createSlice({
	name: "device",
	initialState,
	reducers: {
		setOpenScreen: (state, action) => {
			return {
				...state,
				openScreen: action.payload,
			}
		},
		setBatteryLevel: (state, action) => {
			state.batteryLevel = action.payload
		},
		setLocationScreen: (state, action) => {
			state.locationScreen = action.payload
		},
	},
})

export const { setOpenScreen, setBatteryLevel, setLocationScreen } =
	devices.actions

export default devices.reducer
