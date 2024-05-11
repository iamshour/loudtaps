import ArticleCardDropdown from "./article-card-dropdown"

type ArticleCardProps = Record<"date" | "desc" | "href" | "img" | "title", string>

const ArticleCard = ({ date, desc, href, img, title }: ArticleCardProps) => (
	<li className='group relative mx-auto w-full overflow-hidden rounded-lg shadow-md shadow-gray-100 ring-1 ring-gray-200/50 prevent-selection transition-basic hover:shadow-gray-300 sm:max-w-sm'>
		<ArticleCardDropdown className='absolute end-1 top-1' id='random-123' />

		<a href={href}>
			<img alt={title} className='h-[244px] w-full' loading='lazy' src={img} />

			<div className='space-y-2 p-4'>
				<span className='block text-sm text-indigo-600'>{date}</span>
				<h3 className='text-lg font-semibold text-gray-800 duration-150 group-hover:text-indigo-600'>{title}</h3>
				<p className='text-sm text-gray-600 duration-150 group-hover:text-gray-800'>{desc}</p>
			</div>
		</a>
	</li>
)

export default ArticleCard
