//#region Import
import { lazy, Suspense } from "react"
import { Outlet } from "react-router-dom"

import Skeleton from "../ui/skeleton"
const Topbar = lazy(() => import("./topbar"))
//#endregion

const AppLayout = () => (
	<div className='mx-auto flex h-screen w-screen max-w-7xl flex-col gap-4 overflow-hidden p-4'>
		<Suspense fallback={<Skeleton className='h-16 rounded-lg' />}>
			<Topbar />
		</Suspense>

		<main className='h-full overflow-hidden rounded-xl bg-white px-2 py-2 shadow-md'>
			<Suspense fallback={<Skeleton className='h-full rounded-xl' />}>
				<Outlet />
			</Suspense>
		</main>
	</div>
)

export default AppLayout
