//#region Import
import type { RootState } from "@/lib/redux/root-reducer"

import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Article } from "./types"
//#endregion

export type ArticlesSliceState = {
	articles: Article[]
}

const initialState: ArticlesSliceState = {
	articles: [
		{
			articleId: "123",
			content: "Hello this is some random content!",
			date: "Jan 4 2022",
			desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
			img: "https://th.bing.com/th/id/OIP.2usyV3OhAqbIc2HSkBNuBQHaEa?rs=1&pid=ImgDetMain0",
			title: "What is SaaS? Software as a Service Explained",
		},
		{
			articleId: "456",
			content: "Hello this is some random content!",
			date: "Jan 4 2022",
			desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
			img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			title: "A Quick Guide to WordPress Hosting",
		},
		{
			articleId: "789",
			content: "Hello this is some random content!",
			date: "Jan 4 2022",
			desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
			img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			title: "7 Promising VS Code Extensions Introduced in 2022",
		},
		{
			articleId: "101112",
			content: "Hello this is some random content!",
			date: "Jan 4 2022",
			desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
			img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
		},
	],
}

const articlesSlice = createSlice({
	initialState,
	name: "articles",
	reducers: {
		deleteArticle: (state, { payload }: PayloadAction<string>) => {
			state.articles = state.articles.filter((article) => article.articleId !== payload)
		},
	},
})

export const { deleteArticle } = articlesSlice.actions

export default articlesSlice.reducer

export const selectArticles = (state: RootState) => state.articles.articles

// Curried selector
export const selectArticleById = (articleId: string) =>
	createSelector(selectArticles, (articles) => articles.find((article) => article.articleId === articleId))
