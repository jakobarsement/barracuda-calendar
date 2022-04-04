import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-extended'
import Calendar from './Calendar'

describe('<Calendar />', () => {
  it('renders the Calendar component', () => {
    const view = render(<Calendar />)
    expect(view).toBeTruthy()
  })
})
