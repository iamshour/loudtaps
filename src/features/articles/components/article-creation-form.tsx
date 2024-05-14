//#region Import
import Button from "@/components/ui/button"
import Form from "@/components/ui/form"
import ImageInput from "@/components/ui/image-input"
import Input from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import LucideCheck from "~icons/lucide/check"
import { useForm } from "react-hook-form"

import ArticleSchema, { type ArticleSchemaType } from "../schema/article-schema"
import { TipTapEditor } from "./tiptap-editor/tiptap-editor"
//#endregion

interface ArticleCreationFormProps {
	defaultValues?: ArticleSchemaType
}

const ArticleCreationForm = ({ defaultValues }: ArticleCreationFormProps) => {
	const form = useForm<ArticleSchemaType>({
		defaultValues,
		resolver: zodResolver(ArticleSchema),
	})

	const onSubmit = (data: ArticleSchemaType) => {
		console.log(data)
	}

	return (
		<Form {...form}>
			<form className='flex h-full flex-col gap-4 overflow-y-auto p-4' onSubmit={form.handleSubmit(onSubmit)}>
				<Button className='gap-2 self-end bg-blue-500 text-white hover:bg-blue-500/80' size='sm' type='submit'>
					<LucideCheck />
					Submit
				</Button>

				<Form.Field
					control={form.control}
					name='title'
					render={({ field }) => (
						<Form.Item label='Title'>
							<Input placeholder="Type your article's title here..." {...field} />
						</Form.Item>
					)}
				/>

				<ImageInput onChange={(img) => form.setValue("image", img)} value={form.watch("image")} />

				<TipTapEditor
					content={form.getValues("content")}
					errorMessage={form.getFieldState("content")?.error?.message}
					onChange={(c) => form.setValue("content", c)}
				/>
			</form>
		</Form>
	)
}

export default ArticleCreationForm
