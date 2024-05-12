//#region Import
import Button from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown"
import LucideEllipsis from "~icons/lucide/ellipsis"
import { useNavigate } from "react-router-dom"
import { twMerge } from "tailwind-merge"

import DeleteArticleDialog from "./delete-article-dialog"
//#endregion

interface ArticleCardDropdownProps {
	/**
	 * Article Id use to manipulate an article
	 */
	articleId: string

	className?: string
}

const ArticleCardDropdown = ({ articleId, className }: ArticleCardDropdownProps) => {
	const navigate = useNavigate()

	return (
		<Dropdown>
			<Dropdown.Trigger asChild>
				<Button
					className={twMerge("h-7 rounded-md bg-white px-4 text-indigo-500 shadow-md hover:text-indigo-600", className)}
					size='icon'
					variant='ghost'>
					<LucideEllipsis className='shrink-0 text-xl' />
				</Button>
			</Dropdown.Trigger>
			<Dropdown.Content align='end'>
				<Dropdown.Item onClick={() => navigate(`article/edit/${articleId}`)}>Edit</Dropdown.Item>

				<Dropdown.Separator />

				<DeleteArticleDialog articleId={articleId}>
					<Dropdown.Item>Delete</Dropdown.Item>
				</DeleteArticleDialog>
			</Dropdown.Content>
		</Dropdown>
	)
}

export default ArticleCardDropdown
