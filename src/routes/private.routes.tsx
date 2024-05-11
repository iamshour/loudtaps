/* eslint-disable perfectionist/sort-objects,react-refresh/only-export-components*/

//#region Import
import AppLayout from "@/components/layouts/app-layout"
import { lazy } from "react"
import { Navigate, type RouteObject } from "react-router-dom"

const ArticlesListRoute = lazy(() =>
	import("@/features/articles").then(({ ArticlesListRoute }) => ({ default: ArticlesListRoute }))
)
//#endregion

/**
 * @description A List of Private-Only Route Objects (routes), accessible only by authenticated users
 */
const privateRoutes: RouteObject[] = [
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ element: <ArticlesListRoute />, path: "/" },

			// FALLBACK - Redirect to Home IF ROUTE DOES NOT EXIST
			{ element: <Navigate to='/' />, path: "*" },
		],
	},
]

export default privateRoutes
