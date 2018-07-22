import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'
import React from 'react'
import DatePicker from './index'

configure({ adapter: new Adapter() })
const spy = jest.fn()

function setup(customProps, lifeCycle = false) {
	const props = {
		selected: 'monday',
		onChange: spy,
		...customProps
	}
	const container = shallow(<DatePicker {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

const FORMAT = 'DD-MM-YYYY'
const parseDate = date => moment(date, FORMAT).toDate()
const formatDate = date => moment(date).format(FORMAT)
describe('DatePicker component', () => {

	const { container, props } = setup()
	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})
	it('should have specified first tag and class', () => {
		expect(container.first().type()).toEqual('div')
		expect(container.first().props().className).toEqual('space-datepicker')
	})
	it('should have ReactDatePicker', () => {
		expect(container.find('.space-datepicker DayPickerInput').exists()).toEqual(true)
		expect(container.find('DayPickerInput').prop('selectedDay')).toEqual(props.selected)
		expect(container.find('DayPickerInput').prop('format')).toEqual(FORMAT)
		expect(container.find('DayPickerInput').prop('placeholder')).toEqual(FORMAT)
		expect(container.find('DayPickerInput').prop('parseDate').toString()).toEqual(parseDate.toString())
		expect(container.find('DayPickerInput').prop('formatDate').toString()).toEqual(formatDate.toString())
	})

})
