//#region Import
import GravityUiSquareArticle from "~icons/gravity-ui/square-article"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"
//#endregion

const Logo = ({ className }: { className?: string }) => (
	<Link className={twMerge("inline-flex items-end gap-1 prevent-selection", className)} to='/'>
		<GravityUiSquareArticle className='size-5 text-[#ff0f7b]' />
		<h1 className='relative bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] bg-clip-text text-base font-black uppercase leading-4 tracking-tighter text-transparent'>
			Shours Articles
		</h1>
	</Link>
)

export default Logo
