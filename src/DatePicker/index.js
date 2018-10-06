import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDatePicker from 'react-day-picker/DayPickerInput'
import './style.css'

export default function DatePicker(props) {
	const { selected, onChange } = props
	const FORMAT = 'DD-MM-YYYY'
	return (
		<div className="space-datepicker">
			<ReactDatePicker
				{...this.props}
				selectedDay={selected}
				onDayChange={date => onChange(moment(date))}
				formatDate={date => moment(date).format(FORMAT)}
				parseDate={date => moment(date, FORMAT).toDate()}
				format={FORMAT}
				placeholder={FORMAT}
			/>
		</div>)
}

DatePicker.propTypes = {
	selected: PropTypes.string,
	onChange: PropTypes.func
}
