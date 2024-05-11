//#region Import
import useSelector from "@/hooks/useSelector"

import LoginCard from "../components/login-card"
import SignupCard from "../components/signup-card"
//#endregion

const AuthRoute = () => {
	const { authStatus } = useSelector(({ auth }) => auth)

	return (
		<div className='min-h-screen w-full lg:grid lg:grid-cols-2'>
			<div className='flex items-center justify-center py-12'>
				{authStatus === "login" ? <LoginCard /> : <SignupCard />}
			</div>

			<div className='bg-muted hidden lg:block'>
				<img
					alt='Image'
					className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
					height='1080'
					src='/placeholder.svg'
					width='1920'
				/>
			</div>
		</div>
	)
}

export default AuthRoute
