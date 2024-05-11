import { createContext, useContext } from "react"

type AuthProviderValue = {}

const AuthProvider = createContext({} as AuthProviderValue)

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthProviderValue => useContext(AuthProvider)

const AuthPoviderContext: React.FC<React.PropsWithChildren> = ({ children }) => {
	const value: AuthProviderValue = {}

	return <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
}

export default AuthPoviderContext
