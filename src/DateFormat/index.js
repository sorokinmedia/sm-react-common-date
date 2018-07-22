import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/ru'

export default class DateFormat extends Component {
	static propTypes = {
		// unix time
		date: PropTypes.number.isRequired,
		format: PropTypes.string
	}
	static defaultProps = {
		format: 'DD MMMM Y [года]'
	}
	render() {
		const { date, format } = this.props
		moment.locale('ru')
		const momentDate = moment(date * 1000)
		return <Fragment>{momentDate.format(format)}</Fragment>
	}
}
