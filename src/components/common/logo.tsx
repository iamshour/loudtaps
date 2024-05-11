//#region Import
import GravityUiSquareArticle from "~icons/gravity-ui/square-article"
import { twMerge } from "tailwind-merge"
//#endregion

const Logo = ({ className }: { className?: string }) => (
	<div className={twMerge("inline-flex items-end gap-1 prevent-selection", className)}>
		<GravityUiSquareArticle className='size-5 text-[#ff0f7b]' />
		<h1 className='relative bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] bg-clip-text text-base font-black uppercase leading-4 tracking-tighter text-transparent'>
			Shours Articles
		</h1>
	</div>
)

export default Logo
