//#region Import
import IMAGE_MIME_TYPES from "@/features/articles/constants/image-mime-types"
import { ArticleSchemaType } from "@/features/articles/schema/article-schema"
import { useId } from "react"
import { useFormContext } from "react-hook-form"
import { twMerge } from "tailwind-merge"
//#endregion

type ImageInputProps = {
	onChange: (file: File) => void

	value: File
}

const ImageInput = ({ onChange, value }: ImageInputProps) => {
	const formItemId = useId()

	const { getFieldState } = useFormContext<ArticleSchemaType>()

	const rhfError = getFieldState("image")?.error?.message

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e?.target?.files

		if (!files) return

		// field.onChange({ target: { name: field.name, value: files[0] } })
		onChange(files[0])
	}

	return (
		<div className='w-full max-w-[340px]'>
			<div className='flex items-center'>
				<label
					className={twMerge(
						"h-9 cursor-pointer rounded-l-md border-0 bg-indigo-500 px-4 text-sm font-medium text-white flex-center transition-basic hover:bg-opacity-80",
						rhfError && "border-red-500 bg-red-500"
					)}
					htmlFor={formItemId}>
					Upload Image
				</label>

				<span
					className={twMerge(
						"h-9 flex-1 truncate rounded-r-md border border-indigo-400 bg-indigo-50 px-2 text-sm leading-[36px] text-indigo-800 text-opacity-70 transition-basic",
						rhfError && "border-red-500 bg-red-50 text-red-800"
					)}>
					{!value ? "Upload an Image" : value?.name}
				</span>
			</div>

			{value instanceof File && (
				<div
					className={twMerge(
						`mt-1.5 h-32 w-full rounded-md border border-indigo-500 bg-cover bg-center bg-no-repeat`,
						rhfError && "border-red-500"
					)}
					style={{ backgroundImage: `url(${URL.createObjectURL(value)})` }}
				/>
			)}

			<input
				accept={IMAGE_MIME_TYPES.join(", ")}
				className='hidden'
				id={formItemId}
				onChange={handleImageChange}
				placeholder='Upload an image'
				type='file'
			/>

			{!!rhfError && <p className='ps-0.5 pt-0.5 text-xs font-medium text-red-500'>{String(rhfError)}</p>}
		</div>
	)
}

export default ImageInput
