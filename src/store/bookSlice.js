import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: {},
  singleBook:{}
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks: (state, action) => {
      state.books =  action.payload
    },
    setBook: (state, action) => {
      state.singleBook = action.payload
    }
  },
})

export const actions = bookSlice.actions

export default bookSlice.reducer