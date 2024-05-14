//#region Import
import daysjs from "dayjs"
//#endregion

type Props = {
	dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
	return (
		<time className='text-sm tracking-wider text-gray-400' dateTime={dateString}>
			{daysjs(dateString).format("dddd, MMMM D, YYYY")}
		</time>
	)
}

export default DateFormatter
