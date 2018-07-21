/* eslint-disable import/no-named-as-default */
import DateFormat from './DateFormat'
import DateInterval from './DateInterval'
import DatePicker from './DatePicker'

import * as exports from './index'

jest.mock('./DateFormat', () => {})
jest.mock('./DateInterval', () => {})
jest.mock('./DatePicker', () => {})


describe('expots', () => {
	it('should exports components', () => {
		expect(exports)
			.toEqual(expect.objectContaining({
				DateFormat,
				DateInterval,
				DatePicker
			}))
	})
})
