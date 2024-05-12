//#region Import
import NotFoundError from "@/components/common/notfound-error"
import useSelector from "@/hooks/useSelector"
import { useParams } from "react-router-dom"

import { selectArticleById } from "../slice"
//#endregion

const ArticleRoute = () => {
	const { articleId } = useParams()

	const article = useSelector(selectArticleById(articleId ?? ""))

	if (!article?.content) return <NotFoundError />

	return (
		<div>
			<div>Article Route</div>

			<div>
				<h1>{article.title}</h1>
				<p>{article.desc}</p>
				<p>{article.content}</p>
			</div>
		</div>
	)
}

export default ArticleRoute
