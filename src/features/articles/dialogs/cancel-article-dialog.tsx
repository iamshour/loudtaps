//#region Import
import AlertDialog from "@/components/ui/alert-dialog"
import Button from "@/components/ui/button"
//#endregion

interface CancelArticleDialogProps extends React.PropsWithChildren {}

const CancelArticleDialog: React.FC<CancelArticleDialogProps> = ({ children }) => (
	<AlertDialog>
		<AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
				<AlertDialog.Description>
					This action cannot be undone. This will permanently delete this article&apos;s content and clear all your
					changes.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action asChild>
					<Button as='link' replace to='/' type='button' variant='destructive'>
						Yes, clear & go Home
					</Button>
				</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog>
)

export default CancelArticleDialog
