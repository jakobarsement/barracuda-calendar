import { render, screen } from '@testing-library/react'
import Calendar from './Calendar'

describe('<Calendar />', () => {
  it('renders the Calendar component', () => {
    const view = render(<Calendar />)
    expect(view).toBeTruthy()
    // with the current day specified
    expect(screen.getByText('Today')).toBeInTheDocument()
  })
})
