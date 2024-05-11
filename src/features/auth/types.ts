export interface User {
	email: string
	firstName: string
	lastName: string
	password: string
}

export type Session = Omit<User, "password">
