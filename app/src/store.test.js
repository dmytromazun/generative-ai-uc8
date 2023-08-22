import store, { updateField } from './store'

test('store has initial state', () => {
  expect(store.getState().form).toEqual({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  })
})

test('store updates multiple fields correctly', () => {
  store.dispatch(updateField({ fieldName: 'first_name', value: 'John' }))
  store.dispatch(updateField({ fieldName: 'last_name', value: 'Doe' }))
  store.dispatch(
    updateField({ fieldName: 'email', value: 'john.doe@example.com' })
  )
  store.dispatch(updateField({ fieldName: 'message', value: 'Hello, world!' }))

  expect(store.getState().form).toEqual({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    message: 'Hello, world!',
  })
})

test('store updates fields with empty values correctly', () => {
  store.dispatch(updateField({ fieldName: 'first_name', value: 'John' }))
  store.dispatch(updateField({ fieldName: 'first_name', value: '' }))

  expect(store.getState().form.first_name).toBe('')
})
