import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	user: null,
	token: null,
}

export const userData = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			return {
				...state,
				user: action.payload,
			}
		},
		setToken: (state, action) => {
			return {
				...state,
				token: action.payload,
			}
		},
	},
})

export const { setUser, setToken } = userData.actions

export default userData.reducer
