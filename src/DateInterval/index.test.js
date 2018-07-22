import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'
import React from 'react'
import DateInterval from './index'

configure({ adapter: new Adapter() })
const spy = jest.fn()

function setup(customProps, lifeCycle = false) {
	const props = {
		to: 1332275475,
		from: 1132275475,
		onChange: spy,
		...customProps
	}
	const container = shallow(<DateInterval {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('DateInterval component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have specified first tag and class', () => {
		const { container } = setup()
		expect(container.first().type()).toEqual('div')
		expect(container.first().props().className).toEqual('date-interval')
	})

	it('should have specified block structure', () => {
		const { container } = setup()
		expect(container.find('.date-interval .col-lg-6').first().exists()).toEqual(true)
		expect(container.find('.date-interval .col-lg-6').first().find('DatePicker').exists()).toEqual(true)
		expect(container.find('.date-interval .col-lg-6').last().exists()).toEqual(true)
		expect(container.find('.date-interval .col-lg-6').first().last('DatePicker').exists()).toEqual(true)
	})

	it('should have specified props inside first DatePicker', () => {
		const { container, props } = setup()
		expect(container.find('.date-interval .col-lg-6').first().find('DatePicker').prop('selected')).toEqual(moment(props.from * 1000))
		container.find('.date-interval .col-lg-6').first().find('DatePicker').prop('onChange')(moment(props.from * 1000))
		expect(spy).toHaveBeenCalled()
	})
	it('should have specified props inside second DatePicker', () => {
		const { container, props } = setup()
		expect(container.find('.date-interval .col-lg-6').last().find('DatePicker').prop('selected')).toEqual(moment(props.to * 1000))
		container.find('.date-interval .col-lg-6').last().find('DatePicker').prop('onChange')(moment(props.to * 1000))
		expect(spy).toHaveBeenCalled()
	})
})

