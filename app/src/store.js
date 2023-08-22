import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  message: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { fieldName, value } = action.payload
      state[fieldName] = value
    },
  },
})

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
})

export const { updateField } = formSlice.actions
export default store
