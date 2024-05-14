//#region Import
import Button from "@/components/ui/button"
import DateInput from "@/components/ui/date-input"
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
		console.log({ data })
	}

	// console.log(form.formState.errors)
	console.log(form.watch("content"))

	return (
		<Form {...form}>
			<form className='flex h-full flex-col gap-4 overflow-y-auto p-4' onSubmit={form.handleSubmit(onSubmit)}>
				<Button className='gap-2 self-end bg-blue-500 text-white hover:bg-blue-500/80' size='sm' type='submit'>
					<LucideCheck />
					Submit
				</Button>

				<div className='flex flex-wrap items-start gap-4'>
					<Form.Field
						control={form.control}
						name='title'
						render={({ field }) => (
							<Form.Item label='Title'>
								<Input placeholder="Type your article's title here..." {...field} />
							</Form.Item>
						)}
					/>

					<Form.Field
						control={form.control}
						name='image'
						render={({ field, fieldState }) => (
							<Form.Item label='Image'>
								<ImageInput invalid={fieldState?.invalid} {...field} />
							</Form.Item>
						)}
					/>

					<Form.Field
						control={form.control}
						name='date'
						render={({ field }) => (
							<Form.Item label='Date'>
								<DateInput {...field} />
							</Form.Item>
						)}
					/>
				</div>

				<Form.Field
					control={form.control}
					name='content'
					render={({ field: { onChange, value }, fieldState }) => (
						<Form.Item className='max-w-full flex-1' label='Content'>
							<TipTapEditor invalid={fieldState?.invalid} onChange={onChange} value={value} />
						</Form.Item>
					)}
				/>
			</form>
		</Form>
	)
}

export default ArticleCreationForm
