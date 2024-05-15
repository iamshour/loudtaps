//#region Import
import MDXContent from "@/components/common/mdx-content"
import NotFoundError from "@/components/common/notfound-error"
import useSelector from "@/hooks/useSelector"
import { useParams } from "react-router-dom"

import ArticleHeader from "../components/article-header"
import { selectArticleById } from "../slice"
//#endregion

const ArticleRoute = () => {
	const { articleId } = useParams()

	const article = useSelector(selectArticleById(articleId ?? ""))

	if (!article?.content) return <NotFoundError />

	return (
		<div className='mx-auto w-full max-w-3xl p-4'>
			<ArticleHeader {...article} />

			<article className='prose-quoteless prose prose-zinc px-4 py-12'>
				<MDXContent>{article.content}</MDXContent>
			</article>
		</div>
	)
}

export default ArticleRoute
