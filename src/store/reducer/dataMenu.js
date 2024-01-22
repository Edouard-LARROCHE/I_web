import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	dataMenu: [],
}

export const menu = createSlice({
	name: "menu",
	initialState,
	reducers: {
		setMenu: (state, action) => {
			if (action.payload.genres) {
				state.dataMenu = action.payload.genres.genres
			} else {
				state.dataMenu = action.payload
			}
		},
	},
})

export const { setMenu } = menu.actions

export default menu.reducer
