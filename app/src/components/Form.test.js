import { render, fireEvent, screen } from '@testing-library/react'

import { Form } from './Form'
import { Provider } from 'react-redux'
import store from '../store'

test('Submit button should be disabled when inputs are empty', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  )

  expect(screen.queryByText('Submit')).toBeDisabled()
})

test('Submit button should become enabled when all fields are filled correctly', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  )

  fireEvent.change(screen.getByLabelText('First Name:'), {
    target: { value: 'First name' },
  })

  fireEvent.change(screen.getByLabelText('Last Name:'), {
    target: { value: 'Last name' },
  })

  fireEvent.change(screen.getByLabelText('Email:'), {
    target: { value: 'test@gmail.com' },
  })

  fireEvent.change(screen.getByLabelText('Message:'), {
    target: { value: 'Test message' },
  })

  expect(screen.queryByText('Submit')).not.toBeDisabled()
})

test('Validation error message should be dislayed and the submit button should be disabled when fields are field with incorrect data', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  )

  fireEvent.change(screen.getByLabelText('First Name:'), {
    target: { value: 'First name' },
  })

  fireEvent.change(screen.getByLabelText('Last Name:'), {
    target: { value: 'Last name' },
  })

  fireEvent.change(screen.getByLabelText('Email:'), {
    target: { value: 'test@com' },
  })

  fireEvent.change(screen.getByLabelText('Message:'), {
    target: { value: 'Test' },
  })

  expect(screen.queryByText('Invalid Email'))
  expect(screen.queryByText('Message should be at least 10 characters long'))
  expect(screen.queryByText('Submit')).toBeDisabled()
})
