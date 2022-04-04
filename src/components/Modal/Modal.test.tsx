import { render } from '@testing-library/react'
import Modal from './Modal'

describe('<Modal />', () => {
  it('renders the Modal component', () => {
    const view = render(<Modal />)
    expect(view).toBeTruthy()
  })
})
