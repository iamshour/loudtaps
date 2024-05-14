//#region Import
import AlertDialog from "@/components/ui/alert-dialog"
import Button from "@/components/ui/button"
import useDispatch from "@/hooks/useDispatch"
import { useState } from "react"

import { deleteArticle } from "../slice"
//#endregion

interface DeleteArticleDialogProps extends React.PropsWithChildren {
	articleId: string
}

const DeleteArticleDialog: React.FC<DeleteArticleDialogProps> = ({ articleId, children }) => {
	const dispatch = useDispatch()

	const [open, setOpen] = useState(false)

	const onDeleteArticle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		dispatch(deleteArticle(articleId))
		setOpen(false)
	}

	return (
		<AlertDialog onOpenChange={setOpen} open={open}>
			<AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
					<AlertDialog.Description>
						This action cannot be undone. This will permanently delete this article and remove any related data from our
						database.
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action asChild>
						<Button onClick={onDeleteArticle} variant='destructive'>
							Yes, Delete
						</Button>
					</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog>
	)
}

export default DeleteArticleDialog
