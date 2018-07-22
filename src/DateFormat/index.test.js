import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import DateFormat from './index'

configure({ adapter: new Adapter() })

function setup(customProps, lifeCycle = false) {
	const props = {
		date: 13124124,
		...customProps
	}
	const container = shallow(<DateFormat {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('DateFormat component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should show right date', () => {
		const { container } = setup()
		expect(container.text()).toEqual('02 июня 1970 года')
	})

	it('should show right date with specified format', () => {
		const { container } = setup({ format: 'DD' })
		expect(container.text()).toEqual('02')
	})
})

