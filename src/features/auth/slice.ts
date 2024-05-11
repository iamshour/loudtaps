//#region Import
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Session, User } from "./types"
//#endregion

export type AuthSliceState = {
	/**
	 * Bool check used to check whether user is signing in or registering
	 * Useful for Condionally rendering `<LoginCard />` or `<SignupCard />`
	 */
	authStatus: "login" | "signup"

	currentSession: null | Session

	users: User[]
}

const initialState: AuthSliceState = {
	authStatus: "login",
	currentSession: null,
	users: [],
}

const authSlice = createSlice({
	initialState,
	name: "auth",
	reducers: {
		registerUser: (state, { payload }: PayloadAction<User>) => {
			const { password, ...currentSession } = payload

			return {
				...state,
				currentSession,
				users: [...state.users, { password, ...currentSession }],
			}
		},

		setCurrentSession: (state, { payload }: PayloadAction<null | Session>) => {
			state.currentSession = payload
		},

		toggleAuthStatus: (state, { payload }: PayloadAction<AuthSliceState["authStatus"]>) => {
			state.authStatus = payload
		},
	},
})

export const { registerUser, setCurrentSession, toggleAuthStatus } = authSlice.actions

export default authSlice.reducer
