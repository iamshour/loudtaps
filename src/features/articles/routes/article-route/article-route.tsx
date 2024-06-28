//#region Import
import NotFoundError from "@/components/common/notfound-error"
import useSelector from "@/hooks/useSelector"
import { selectArticleById } from "@/lib/redux/selectors"
import { useParams } from "react-router-dom"

import Article from "./article"
import ArticleControls from "./article-controls"
//#endregion

const ArticleRoute = () => {
	const { articleId } = useParams()

	const article = useSelector(selectArticleById(articleId ?? ""))

	if (!article?.content) return <NotFoundError />

	console.log(article.content)

	return (
		<div className='mx-auto h-full w-full max-w-4xl space-y-4 overflow-hidden p-4'>
			<ArticleControls articleId={article.articleId} />

			<Article {...article} />
		</div>
	)
}

export default ArticleRoute
