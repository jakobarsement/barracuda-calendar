/**
 * Used to construct an array where each element represents a day of a given time period.
 * The events are attached to each day as an array of objects.
 */
import moment from 'moment'
import { getDaysInMonth } from 'utils'

const getDaysWithEvents = (
  events: { name: string; date: string; description: string; type: string }[],
  referenceDate: Date
): {
  name: string
  date: string
  description: string
  type: string
}[][] => {
  const length = getDaysInMonth(referenceDate)
  return [...new Array(length)].map((el, i) => {
    return events.filter(
      (el) => parseInt(moment(el.date, 'MM-DD-YYYY').format('D')) - 1 === i
    )
  })
}

export default getDaysWithEvents
