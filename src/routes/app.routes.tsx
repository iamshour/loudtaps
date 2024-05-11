//#region Import
import useSelector from "@/hooks/useSelector"
import { useRoutes } from "react-router-dom"

import privateRoutes from "./private.routes"
import publicRoutes from "./public.routes"
//#endregion

const AppRoutes = () => {
	const user = useSelector(({ auth }) => auth?.user)

	const routes = user ? privateRoutes : publicRoutes

	const element = useRoutes(routes)

	return <>{element}</>
}

export default AppRoutes
