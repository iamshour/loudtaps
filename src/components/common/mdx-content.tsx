//#region Import
import clsx from "clsx"
import { Link } from "react-router-dom"
import * as runtime from "react/jsx-runtime"
//#endregion

const sharedComponents = {
	a: ({ className, ...props }: any) => (
		<Link className={clsx("font-medium text-zinc-900 underline underline-offset-4", className)} {...props} />
	),
	blockquote: ({ className, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
		<blockquote
			className={clsx("mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600", className)}
			{...props}
		/>
	),
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={clsx(
				"relative rounded border bg-zinc-300 bg-opacity-25 px-[0.3rem] py-[0.2rem] font-mono text-sm text-zinc-600",
				className
			)}
			{...props}
		/>
	),
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1 className={clsx("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className)} {...props} />
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={clsx(
				"mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
				className
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3 className={clsx("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4 className={clsx("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
	),
	h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h5 className={clsx("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)} {...props} />
	),
	h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h6 className={clsx("mt-8 scroll-m-20 text-base font-semibold tracking-tight", className)} {...props} />
	),
	hr: ({ ...props }) => <hr className='my-4 border-zinc-200 md:my-8' {...props} />,
	img: ({ alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
		<img alt={alt} className={clsx("rounded-md border border-zinc-200", className)} {...props} />
	),
	li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
		<li className={clsx("mt-2", className)} {...props} />
	),
	ol: ({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
		<ol className={clsx("my-6 ml-6 list-decimal", className)} {...props} />
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
	),
	pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
		<pre className={clsx("mb-4 mt-6 overflow-x-auto rounded-lg bg-zinc-900 py-4", className)} {...props} />
	),
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className='my-6 w-full overflow-y-auto'>
			<table className={clsx("w-full", className)} {...props} />
		</div>
	),
	td: ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
		<td
			className={clsx(
				"border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
				className
			)}
			{...props}
		/>
	),
	th: ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
		<th
			className={clsx(
				"border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
				className
			)}
			{...props}
		/>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr className={clsx("m-0 border-t border-zinc-300 p-0 even:bg-zinc-100", className)} {...props} />
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className={clsx("my-6 ml-6 list-disc", className)} {...props} />
	),
}

// parse the Velite generated MDX code into a React component function
const useMDXComponent = (code: string) => {
	const fn = new Function(code)

	return fn({ ...runtime }).default
}

interface MdxProps {
	code: string
	components?: Record<string, React.ComponentType>
}

const MDXContent = ({ code, components }: MdxProps) => {
	const Component = useMDXComponent(code)

	return <Component components={{ ...sharedComponents, ...components }} />
}

export default MDXContent
