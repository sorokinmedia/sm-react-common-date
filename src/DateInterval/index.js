import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from '../DatePicker';
import './style.css';

export default function DateInterval(props) {
	const { from, to, onChange } = props;
	return (
		<div className="date-interval">
			<div className="col-lg-6">
				<DatePicker
					selected={moment(from ? from * 1000 : 1)}
					onChange={(date) => {
						console.log(date)
						const newFrom = date.unix();
						let newTo = to;
						if (newFrom > newTo) {
							newTo = newFrom;
						}
						onChange({ from: newFrom, to: newTo });
					}}
				/>
			</div>
			<div className="col-lg-6">
				<DatePicker
					selected={moment(to ? to * 1000 : Date.now())}
					onChange={(date) => {
						let newFrom = from;
						const newTo = date.unix();
						if (newTo < newFrom) {
							newFrom = newTo;
						}
						onChange({ from: newFrom, to: newTo });
					}}
				/>
			</div>
		</div>);
}

DateInterval.propTypes = {
	// unix time
	from: PropTypes.number,
	to: PropTypes.number,
	onChange: PropTypes.func.isRequired
}
