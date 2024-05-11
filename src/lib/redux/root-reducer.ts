//#region Import
import authReducer, { type AuthSliceState } from "@/features/auth/slice"
import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
//#endregion

// const APP_PREFIX = `${import.meta.env.VITE_APP_PREFIX}_`
const APP_PREFIX = "SHOURS_ARTICLES"

export type RootState = {
	auth: AuthSliceState
}

const rootPersistConfig = {
	key: "_ROOT",
	keyPrefix: APP_PREFIX,
	storage,
	version: 1,
	whitelist: ["auth"] as Partial<keyof RootState>[],
}

const reducer = combineReducers({
	auth: authReducer,
})

export default persistReducer(rootPersistConfig, reducer)
