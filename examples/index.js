import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import { DateFormat } from '../lib'

class App extends Component {

	render() {
		return (
			<div>
				<DateFormat date={1332275475} />
			</div>
		)
	}
}

App.propTypes = {}
App.defaultProps = {}

render(<App />, document.getElementById('root'))
