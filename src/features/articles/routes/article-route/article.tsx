//#region Import
import DateFormatter from "@/components/common/date-formatter"

import type { Article } from "../../types"
//#endregion

const Article = ({ content, date, desc, image, title }: Article) => (
	<div className='h-full w-full overflow-y-auto'>
		<div className='grid'>
			<DateFormatter dateString={date} />
			<h1 className='font-display mt-1 text-4xl font-bold tracking-tight text-indigo-900 sm:text-6xl'>{title}</h1>
			<p className='mt-5 text-base font-light text-gray-400'>{desc}</p>

			<div
				className='mt-8 h-96 w-full rounded-md bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: `url(${image})` }}
			/>
		</div>

		<article className='prose-quoteless prose prose-zinc overflow-y-auto px-4 py-12'>
			<div className='overflow-y-auto' dangerouslySetInnerHTML={{ __html: content }} />
		</article>
	</div>
)

export default Article
