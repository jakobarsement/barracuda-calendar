import { getDaysInMonth } from 'utils'

// prettier-ignore
const DAYS_IN_MONTH_LEAP = [null, 29, null, null, null, null, null, null, null, null, null, null]
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

it('should return the number of days in a given month, including leap years', () => {
  // test into next 10 years
  for (let i = 0; i < 10; i++) {
    // for each month in the year
    for (let j = 0; j < 12; j++) {
      const currentYear = new Date().getFullYear()
      const date = new Date(currentYear + i, j) // start with the year at the time of execution
      expect(
        getDaysInMonth(date) === DAYS_IN_MONTH[j] ||
          getDaysInMonth(date) === DAYS_IN_MONTH_LEAP[j]
      ).toBe(true)
    }
  }
})

it('should return a number', () => {
  const now = new Date()
  const daysInMonth = getDaysInMonth(now)
  expect(typeof daysInMonth).toBe('number')
  expect(typeof daysInMonth).not.toBe('string')
})
