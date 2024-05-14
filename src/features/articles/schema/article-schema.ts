//#region Import
import dayjs from "dayjs"
import * as z from "zod"
//#endregion

const ArticleSchema = z.object({
	content: z.string().trim().min(1, { message: "Required" }),
	date: z.string().refine((val) => dayjs(val).isValid(), { message: "Invalid Date" }),
	image: z
		.instanceof(File, { message: "Image required" })
		.refine((file) => file.size < 4194304, { message: "Image exceeded max limit: 4mb" }),
	title: z.string().trim().max(100, { message: "Title can't exceed 100 characters" }),
})

export default ArticleSchema

export type ArticleSchemaType = z.infer<typeof ArticleSchema>
