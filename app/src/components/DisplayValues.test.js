import { render, screen } from '@testing-library/react'
import { DisplayValues } from './DisplayValues'
import { Provider } from 'react-redux'
import store from '../store'

test('DisplayValues renders with initial empty values', () => {
  render(
    <Provider store={store}>
      <DisplayValues />
    </Provider>
  )

  expect(screen.getByText('first_name').nextElementSibling.textContent).toBe('')
  expect(screen.getByText('last_name').nextElementSibling.textContent).toBe('')
  expect(screen.getByText('email').nextElementSibling.textContent).toBe('')
  expect(screen.getByText('message').nextElementSibling.textContent).toBe('')
})
