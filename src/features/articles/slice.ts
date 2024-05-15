//#region Import
import type { RootState } from "@/lib/redux/root-reducer"

import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Article } from "./types"
//#endregion

export type ArticlesSliceState = {
	articles: Article[]
}

const initialState: ArticlesSliceState = {
	articles: [],
}

const articlesSlice = createSlice({
	initialState,
	name: "articles",
	reducers: {
		addArticle: (state, { payload }: PayloadAction<Article>) => {
			state.articles = [...(state.articles || []), payload]
		},

		deleteArticle: (state, { payload }: PayloadAction<string>) => {
			state.articles = state.articles.filter((article) => article.articleId !== payload)
		},

		updateArticle: (state, { payload }: PayloadAction<Article>) => {
			state.articles = state.articles.map((article) => {
				if (article.articleId === payload.articleId) {
					return payload
				}

				return article
			})
		},
	},
})

export const { addArticle, deleteArticle, updateArticle } = articlesSlice.actions

export default articlesSlice.reducer

export const selectArticles = (state: RootState) => state.articles.articles

// Curried selector
export const selectArticleById = (articleId: string) =>
	createSelector(selectArticles, (articles) => articles.find((article) => article.articleId === articleId))
