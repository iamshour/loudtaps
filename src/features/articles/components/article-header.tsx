//#region Import
import DateFormatter from "@/components/common/date-formatter"
import Button from "@/components/ui/button"
import LucideChevronLeft from "~icons/lucide/chevron-left"

import type { Article } from "../types"

import ArticleCardDropdown from "./article-card-dropdown"
//#endregion

const ArticleHeader = ({ articleId, date, desc, image, title }: Article) => (
	<header className='grid w-full gap-8'>
		<div className='flex w-full items-center justify-between'>
			<Button
				as='link'
				className='text-indigo-500 hover:text-indigo-600'
				replace
				size='icon'
				title='Go back'
				to='-1'
				variant='outline'>
				<span className='sr-only'>Go Back</span>
				<LucideChevronLeft className='size-6' />
			</Button>

			<ArticleCardDropdown articleId={articleId} className='!opacity-100' />
		</div>

		<div className='grid'>
			<DateFormatter dateString={date} />
			<h1 className='font-display mt-1 text-4xl font-bold tracking-tight text-indigo-900 sm:text-6xl'>{title}</h1>
			<p className='mt-5 text-base font-light text-gray-400'>{desc}</p>

			<div
				className='mt-8 h-96 w-full rounded-md bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: `url(${image})` }}
			/>
		</div>
	</header>
)

export default ArticleHeader
