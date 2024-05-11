/* eslint-disable perfectionist/sort-objects*/

//#region Import
import type { RouteObject } from "react-router-dom"

import NotFoundError from "@/components/common/notfound-error"
import AppLayout from "@/components/layouts/app-layout"
import { lazy } from "react"

// eslint-disable-next-line react-refresh/only-export-components
const ArticlesListRoute = lazy(() =>
	import("@/features/articles").then(({ ArticlesListRoute }) => ({ default: ArticlesListRoute }))
)
//#endregion

/**
 * @description A List of Private-Only Route Objects (routes)  accessible only by authenticated users
 */
const privateRoutes: RouteObject[] = [
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ element: <ArticlesListRoute />, path: "/articles" },

			// FALLBACK - 404 IF ROUTE DOES NOT EXIST
			{ element: <NotFoundError />, path: "*" },
		],
	},
]

export default privateRoutes
