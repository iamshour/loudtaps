//#region Import
import Button from "@/components/ui/button"
import DateInput from "@/components/ui/date-input"
import Form from "@/components/ui/form"
import ImageInput from "@/components/ui/image-input"
import Input from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import LucideCheck from "~icons/lucide/check"
import { useForm } from "react-hook-form"

import ArticleSchema, { type ArticleSchemaType } from "../schema/article-schema"
import { TipTapEditor } from "./tiptap-editor/tiptap-editor"
//#endregion

/**
 * Custom type used in order to identify usage og this form: whether used for creating an article / or editing one
 */
type FormType = "create-article" | "edit-article"

interface ArticleCreationFormProps<T extends ArticleSchemaType = ArticleSchemaType> {
	defaultValues?: T

	formType?: FormType

	onSubmit: (data: T) => void
}

const ArticleCreationForm = ({ defaultValues, formType = "create-article", onSubmit }: ArticleCreationFormProps) => {
	const form = useForm<ArticleSchemaType>({
		defaultValues,
		resolver: zodResolver(ArticleSchema),
	})

	return (
		<Form {...form}>
			<form className='flex h-full flex-col gap-4 overflow-y-auto p-4' onSubmit={form.handleSubmit(onSubmit)}>
				<Button className='shrink-0 gap-2 self-end bg-blue-500 text-white hover:bg-blue-500/80' size='sm' type='submit'>
					<LucideCheck />
					{ctaButtonLabel[formType]}
				</Button>

				<div className='flex flex-wrap gap-6 md:flex-nowrap'>
					<div className='flex w-full flex-1 flex-col gap-4'>
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
							name='desc'
							render={({ field }) => (
								<Form.Item className='' label='Description'>
									<Textarea maxLength={500} placeholder='Add your description here' rows={7} {...field} />
								</Form.Item>
							)}
						/>
					</div>

					<div className='flex w-full flex-col gap-4'>
						<Form.Field
							control={form.control}
							name='date'
							render={({ field }) => (
								<Form.Item label='Date'>
									<DateInput {...field} />
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
					</div>
				</div>

				<Form.Field
					control={form.control}
					name='content'
					render={({ field: { onChange, value }, fieldState }) => (
						<Form.Item className='w-full flex-1' label='Content'>
							<TipTapEditor invalid={fieldState?.invalid} onChange={onChange} value={value} />
						</Form.Item>
					)}
				/>
			</form>
		</Form>
	)
}

export default ArticleCreationForm

const ctaButtonLabel: Record<FormType, string> = {
	"create-article": "Submit",
	"edit-article": "Update",
}
