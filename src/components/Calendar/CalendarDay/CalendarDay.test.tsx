import { render } from '@testing-library/react'
import CalendarDay, { CalendarDayProps } from './CalendarDay'
import eventData from 'data/events.json'

describe('<CalendarDay />', () => {
  it('renders the CalendarDay component', () => {
    const props: CalendarDayProps = {
      events: eventData,
      day: 3,
      dayOfMonth: 3,
    }
    const view = render(<CalendarDay {...props} />)
    expect(view).toBeTruthy()
  })
})
