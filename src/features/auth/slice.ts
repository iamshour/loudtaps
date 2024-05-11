//#region Import
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { User } from "./types"
//#endregion

export type AuthSliceState = {
	/**
	 * Bool check used to check whether user is signing in or registering
	 * Useful for Condionally rendering `<LoginCard />` or `<SignupCard />`
	 */
	authStatus: "login" | "signup"

	user: null | User
}

const initialState: AuthSliceState = {
	authStatus: "login",
	user: null,
}

const authSlice = createSlice({
	initialState,
	name: "auth",
	reducers: {
		setUser: (state, { payload }: PayloadAction<null | User>) => {
			state.user = payload
		},

		toggleAuthStatus: (state, { payload }: PayloadAction<AuthSliceState["authStatus"]>) => {
			state.authStatus = payload
		},
	},
})

export const { setUser, toggleAuthStatus } = authSlice.actions

export default authSlice.reducer
