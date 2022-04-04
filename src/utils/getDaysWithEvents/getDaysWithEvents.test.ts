import { getDaysWithEvents } from 'utils'
import { getDaysInMonth } from 'utils'
import eventData from 'data/events.json'

const date = new Date()

it('should return an array with length equal to days in the month', () => {
  // is an array returned?
  expect(Array.isArray(getDaysWithEvents(eventData, date))).toBe(true)

  // is the array of proper length?
  expect(getDaysWithEvents(eventData, date)).toHaveLength(getDaysInMonth(date))
})
