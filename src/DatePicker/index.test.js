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
		expect(container.find('DayPickerInput').prop('parseDate')('20111031').toString()).toEqual('Sun Nov 20 1031 00:00:00 GMT+0300 (Russia TZ 2 Standard Time)')
		expect(container.find('DayPickerInput').prop('formatDate')('20111031').toString()).toEqual('31-10-2011')
	})

})
