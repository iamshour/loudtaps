//#region Import
import Button from "@/components/ui/button"
import LucideChevronLeft from "~icons/lucide/chevron-left"

import type { Article } from "../../types"

import ArticleCardDropdown from "../../components/article-card-dropdown"
//#endregion

const ArticleControls = ({ articleId }: Pick<Article, "articleId">) => (
	<header className='flex w-full items-center justify-between'>
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
	</header>
)

export default ArticleControls
