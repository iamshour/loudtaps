//#region Import
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import Skeleton from "../ui/skeleton"
import Topbar from "./topbar"
//#endregion

const AppLayout = () => (
	<div className='mx-auto flex min-h-screen w-screen max-w-7xl overflow-hidden bg-white xl:rounded-xl xl:border'>
		<div className='min-h-full flex-1 overflow-hidden p-4'>
			<Suspense fallback={<Skeleton className='h-16 rounded-xl' />}>
				<Topbar />
			</Suspense>

			<Suspense fallback={<Skeleton className='h-full rounded-xl' />}>
				<Outlet />
			</Suspense>
		</div>
	</div>
)

export default AppLayout
