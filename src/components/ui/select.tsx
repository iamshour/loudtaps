//#region Import
import {
	Content,
	Group,
	Icon,
	Item,
	ItemIndicator,
	ItemText,
	Label,
	Portal,
	Root,
	ScrollDownButton,
	ScrollUpButton,
	Separator,
	Trigger,
	Value,
	Viewport,
} from "@radix-ui/react-select"
import LucideCheck from "~icons/lucide/check"
import LucideChevronDown from "~icons/lucide/chevron-down"
import LucideChevronUp from "~icons/lucide/chevron-up"
import { twMerge } from "tailwind-merge"
//#endregion

const Select = (props: React.ComponentPropsWithoutRef<typeof Root>) => <Root {...props} />

const SelectTrigger = ({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Trigger>) => (
	<Trigger
		className={twMerge(
			"focus:ring-shade-light flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 [&>span]:line-clamp-1",
			className
		)}
		{...props}>
		{children}
		<Icon asChild>
			<LucideChevronDown className='h-4 w-4 opacity-50' />
		</Icon>
	</Trigger>
)

const SelectScrollUpButton = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof ScrollUpButton>) => (
	<ScrollUpButton className={twMerge("flex cursor-default items-center justify-center py-1", className)} {...props}>
		<LucideChevronUp className='h-4 w-4' />
	</ScrollUpButton>
)

const SelectScrollDownButton = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof ScrollDownButton>) => (
	<ScrollDownButton className={twMerge("flex cursor-default items-center justify-center py-1", className)} {...props}>
		<LucideChevronDown className='h-4 w-4' />
	</ScrollDownButton>
)

const SelectContent = ({
	children,
	className,
	position = "popper",
	...props
}: React.ComponentPropsWithoutRef<typeof Content>) => (
	<Portal>
		<Content
			className={twMerge(
				"relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
				position === "popper" &&
					"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
				className
			)}
			position={position}
			{...props}>
			<SelectScrollUpButton />
			<Viewport
				className={twMerge(
					"p-1",
					position === "popper" &&
						"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
				)}>
				{children}
			</Viewport>
			<SelectScrollDownButton />
		</Content>
	</Portal>
)

const SelectLabel = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Label>) => (
	<Label className={twMerge("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
)

const SelectItem = ({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Item>) => (
	<Item
		className={twMerge(
			"relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
			className
		)}
		{...props}>
		<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
			<ItemIndicator>
				<LucideCheck className='h-4 w-4' />
			</ItemIndicator>
		</span>

		<ItemText>{children}</ItemText>
	</Item>
)

const SelectSeparator = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Separator>) => (
	<Separator className={twMerge("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className)} {...props} />
)

Select.Group = Group
Select.Value = Value
Select.Trigger = SelectTrigger
Select.Content = SelectContent
Select.Label = SelectLabel
Select.Item = SelectItem
Select.Separator = SelectSeparator

export default Select
