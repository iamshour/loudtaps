//#region Import
import IMAGE_MIME_TYPES from "@/features/articles/constants/image-mime-types"
import { ArticleSchemaType } from "@/features/articles/schema/article-schema"
import { forwardRef, useId } from "react"
import { ControllerRenderProps } from "react-hook-form"
//#endregion

interface ImageInputProps extends ControllerRenderProps<ArticleSchemaType, "image"> {
	invalid?: boolean
}

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(({ invalid, onChange, value, ...props }, ref) => {
	const formItemId = useId()

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e?.target?.files

		if (!files) return

		onChange(files[0])
	}

	return (
		<div aria-invalid={invalid} className='group w-full max-w-[340px]'>
			<div className='flex h-10 items-center overflow-hidden rounded-md ring-1 ring-indigo-500 group-aria-[invalid=true]:bg-red-500 group-aria-[invalid=true]:ring-red-500'>
				<label
					className='h-full cursor-pointer bg-indigo-500 px-4 text-sm font-medium text-white flex-center transition-basic hover:bg-opacity-80 group-aria-[invalid=true]:bg-red-500'
					htmlFor={formItemId}>
					Upload Image
				</label>

				<span className='flex h-full flex-1 items-center truncate bg-indigo-50 px-2 text-sm leading-[36px] text-indigo-800 text-opacity-70 ring-1 ring-indigo-400 transition-basic group-aria-[invalid=true]:bg-red-50 group-aria-[invalid=true]:text-red-800'>
					{!value ? "Upload an Image" : value?.name}
				</span>
			</div>

			{value instanceof File && (
				<div
					className='mt-1.5 h-32 w-full rounded-md bg-cover bg-center bg-no-repeat ring ring-indigo-500 group-aria-[invalid=true]:ring-red-500'
					style={{ backgroundImage: `url(${URL.createObjectURL(value)})` }}
				/>
			)}

			<input
				{...props}
				accept={IMAGE_MIME_TYPES.join(", ")}
				className='hidden'
				id={formItemId}
				onChange={handleImageChange}
				placeholder='Upload an image'
				ref={ref}
				type='file'
			/>
		</div>
	)
})

ImageInput.displayName = "ImageInput"

export default ImageInput
