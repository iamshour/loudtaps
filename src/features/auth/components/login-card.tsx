//#region Import
import Button from "@/components/ui/button"
import Form from "@/components/ui/form"
import Input from "@/components/ui/input"
import useDispatch from "@/hooks/useDispatch"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import LoginSchema, { type LoginSchemaType } from "../schema/login-schema"
import { toggleAuthStatus } from "../slice"
//#endregion

const LoginCard = () => {
	const dispatch = useDispatch()

	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
	})

	const onFormSubmit = (data: LoginSchemaType) => {
		console.log(data)
	}

	const goToSignupForm = () => dispatch(toggleAuthStatus("signup"))

	return (
		<Form {...form}>
			<form className='mx-auto grid w-[350px] gap-6' onSubmit={form.handleSubmit(onFormSubmit)}>
				<div className='grid gap-1 text-start'>
					<h1 className='text-3xl font-bold'>Login</h1>
					<p className='text-balance text-sm text-gray-500'>Enter your email below to login to your account</p>
				</div>
				<div className='grid gap-4'>
					<Form.Field
						control={form.control}
						name='email'
						render={({ field }) => (
							<Form.Item label='Email'>
								<Input placeholder='m@example.com' {...field} />
							</Form.Item>
						)}
					/>

					<Form.Field
						control={form.control}
						name='password'
						render={({ field }) => (
							<Form.Item label='Password'>
								<Input placeholder='Enter your password' {...field} />
							</Form.Item>
						)}
					/>

					<Button className='w-full' type='submit'>
						Login
					</Button>
				</div>
				<div className='mt-4 text-center text-sm'>
					Don&apos;t have an account?{" "}
					<Button className='inline-block' onClick={goToSignupForm} type='button' variant='link'>
						Sign up
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default LoginCard
