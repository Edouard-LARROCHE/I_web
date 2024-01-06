import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	dataMenu: [],
}

export const menu = createSlice({
	name: "menu",
	initialState,
	reducers: {
		setMenu: (state, action) => {
			state.dataMenu = action.payload
		},
	},
})

export const { setMenu } = menu.actions

export default menu.reducer
