//#region Import
import daysjs from "dayjs"
//#endregion

type Props = {
	dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
	return <time dateTime={dateString}>{daysjs(dateString).format("LLLL	d, yyyy")}</time>
}

export default DateFormatter
