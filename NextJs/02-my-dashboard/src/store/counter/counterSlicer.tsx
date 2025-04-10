import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 5
}

const counterSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
}});

export const {increment, decrement} = counterSlicer.actions

export default counterSlicer.reducer