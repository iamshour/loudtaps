//#region Import
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
//#endregion

const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
	({ className, ...props }, ref) => (
		<textarea
			className={twMerge(
				`data-[hasvalue=true]:!invalid:ring-2 focus-within:!ring-primary-500  data-[hasvalue=true]:ring-primary-500 focus:!ring-primary-500 active:!ring-primary-500 flex w-full resize-none rounded-lg border-0 bg-transparent p-3 text-sm
				 text-gray-800 !outline-0 ring-1 !ring-inset ring-gray-200
				  transition-basic placeholder:text-gray-400 autofill:shadow-[0_0_0_30px_white_inset] 
				 read-only:pointer-events-none read-only:!ring-gray-300 focus-within:ring-2 focus:ring-2
				   active:ring-2 disabled:cursor-not-allowed disabled:opacity-50`,
				// styling when input invalid:
				`aria-[invalid=true]:!ring-red-500 focus-within:aria-[invalid=true]:!ring-1 focus-within:aria-[invalid=true]:!ring-red-500 
				active:aria-[invalid=true]:!ring-1 active:aria-[invalid=true]:!ring-red-500 data-[hasvalue=true]:invalid:!ring-red-500`,
				className
			)}
			data-hasvalue={!!props?.value}
			ref={ref}
			spellCheck={false}
			{...props}
			value={!ref ? props?.value || "" : props?.value}
		/>
	)
)

Textarea.displayName = "Textarea"

export default Textarea
