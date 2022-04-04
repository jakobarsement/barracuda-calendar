import data from '../../data/events.json'
import { getDaysWithEvents } from 'utils'
import CalendarDay from './CalendarDay/CalendarDay'
import './Calendar.scss'

const Calendar = () => {
  const currentDate = new Date() // choose the current date to base the calendar on
  const days = getDaysWithEvents(data, currentDate)

  return (
    <>
      {days.map((day, index) => {
        return (
          <CalendarDay
            key={index}
            events={day}
            day={index + 1}
            dayOfMonth={currentDate.getDate()}
          />
        )
      })}
    </>
  )
}
export default Calendar
