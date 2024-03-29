import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	deviceSelected: null,
	openScreen: false,
	batteryLevel: 100,
	locationScreen: {
		location: "",
		level: 0,
	},
}

export const devices = createSlice({
	name: "device",
	initialState,
	reducers: {
		setDeviceSelected: (state, action) => {
			state.deviceSelected = action.payload
		},
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
			state.locationScreen.location = action.payload.location
			state.locationScreen.level = action.payload.level
		},
	},
})

export const {
	setOpenScreen,
	setBatteryLevel,
	setLocationScreen,
	setDeviceSelected,
} = devices.actions

export default devices.reducer
