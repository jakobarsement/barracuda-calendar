import { useContext } from 'react'
import { ModalContext } from 'state/modalState'
import { size } from 'lodash'

import { Event } from 'types/Event'
import { ModalContextType } from 'types/Modal'

import './CalendarDay.scss'

export interface CalendarDayProps {
  events: Event[]
  day: number
  dayOfMonth: number
}

const CalendarDay = ({ events, day, dayOfMonth }: CalendarDayProps) => {
  // prettier-ignore
  const { setModalData } = useContext(ModalContext) as ModalContextType

  return (
    <div
      className="calendarDay"
      onClick={() =>
        events[0] && setModalData({ data: events[0], showModal: true })
      }
    >
      <>
        {day}
        {dayOfMonth === day ? <div>Today</div> : null}
      </>
      {!!size(events) && <div className="eventIcon"></div>}
    </div>
  )
}
export default CalendarDay
