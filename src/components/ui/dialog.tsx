//#region Import
import {
	Close,
	Content,
	Description,
	DialogClose,
	type DialogContentProps,
	type DialogDescriptionProps,
	type DialogProps,
	Overlay,
	Portal,
	Dialog as RootDialog,
	Title,
	Trigger,
} from "@radix-ui/react-dialog"
import RadixIconsCross2 from "~icons/radix-icons/cross-2"
import { Suspense } from "react"
import { twMerge } from "tailwind-merge"

import Separator from "./separator"
import Skeleton from "./skeleton"
//#endregion

const Dialog = (dialogProps: DialogProps) => <RootDialog {...dialogProps} />

const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => (
	<Description className={twMerge("text-sm text-slate-500", className)} {...props} />
)

const DialogContent = ({
	children,
	className,
	title,
	withCloseBtn = true,
	...props
}: { children?: React.ReactNode; title?: string; withCloseBtn?: boolean } & DialogContentProps) => (
	<Portal>
		<Overlay className='fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
			<Content
				className={twMerge(
					`fixed left-[50%] top-[50%] z-50 flex max-h-[90vh] max-w-[85vw] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 overflow-hidden rounded-xl border border-slate-200
					 bg-white p-3 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
					 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] 
					 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:p-4`,
					className
				)}
				{...props}>
				{!!title?.length && (
					<header className='flex flex-col space-y-1.5 text-center sm:text-start'>
						<Title className='select-none pb-3 text-center text-lg leading-none tracking-tight'>{title}</Title>
						<Separator className='!mt-0' />
					</header>
				)}

				<Suspense fallback={<Skeleton className='h-full' />}>{children}</Suspense>

				{withCloseBtn && (
					<Close
						className={`focus:ring-primary-500 absolute end-4 top-4 rounded-sm opacity-70 !outline-0 transition-basic hover:opacity-100 focus:ring-2 focus:ring-offset-2 
					disabled:pointer-events-none`}>
						<RadixIconsCross2 className='h-4 w-4' />
						<span className='sr-only'>Close Dialog</span>
					</Close>
				)}
			</Content>
		</Overlay>
	</Portal>
)

Dialog.Trigger = Trigger
Dialog.Description = DialogDescription
Dialog.Content = DialogContent
Dialog.Close = DialogClose

export default Dialog
