//#region Import
import EmojioneSchool from "~icons/emojione/school"
import { twMerge } from "tailwind-merge"
//#endregion

const Logo = ({ className }: { className?: string }) => (
	<div className={twMerge("inline-flex items-end gap-1 prevent-selection", className)}>
		<EmojioneSchool className='size-5 text-blue-700' />
		<h1 className='relative top-[1px] bg-gradient-to-r from-blue-700 to-pink-600 bg-clip-text text-base font-black uppercase leading-4 tracking-tighter text-transparent'>
			Shours Articles
		</h1>
	</div>
)

export default Logo
