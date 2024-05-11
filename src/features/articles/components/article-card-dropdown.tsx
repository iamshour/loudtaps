//#region Import
import Button from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown"
import LucideEllipsis from "~icons/lucide/ellipsis"
import { twMerge } from "tailwind-merge"
//#endregion

interface ArticleCardDropdownProps {
	className?: string
	id: string
}

const ArticleCardDropdown = ({ className, id }: ArticleCardDropdownProps) => {
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
				<Dropdown.Item onClick={() => console.log(id)}>Edit</Dropdown.Item>

				<Dropdown.Separator />

				<Dropdown.Item>Delete</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown>
	)
}

export default ArticleCardDropdown
