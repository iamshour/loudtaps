//#region Import
import * as z from "zod"
//#endregion

const ArticleSchema = z.object({
	content: z.string(),
	date: z.date(),
	image: z
		.instanceof(File, { message: "Image required" })
		.refine((file) => file.size < 4194304, { message: "Image exceeded max limit: 4mb" }),
	title: z.string().trim().max(100, { message: "Title can't exceed 100 characters" }),
})

export default ArticleSchema

export type ArticleSchemaType = z.infer<typeof ArticleSchema>
