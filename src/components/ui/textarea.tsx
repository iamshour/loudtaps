//#region Import
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
//#endregion

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
	<textarea
		className={twMerge(
			"flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm transition-basic placeholder:text-slate-500 autofill:shadow-[0_0_0_100px_white_inset] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
			// styling when textarea is invalid:
			`aria-[invalid=true]:!ring-red-500 focus-within:aria-[invalid=true]:!ring-1 focus-within:aria-[invalid=true]:!ring-red-500 active:aria-[invalid=true]:!ring-1 active:aria-[invalid=true]:!ring-red-500`,
			className
		)}
		ref={ref}
		{...props}
	/>
))

Textarea.displayName = "Textarea"

export default Textarea
