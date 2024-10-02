import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Igifs } from '../../types/gifs'


// Define a type for the slice state
interface IinitialState {
    gifs:Igifs[]
}

// Define the initial state using that type
const initialState: IinitialState = {
  gifs: [],
}

 const gifSlice = createSlice({
  name: 'gisfState',
  initialState,
  reducers: {
    
    setGifs: (state, action: PayloadAction<Igifs[]>) => {
      state.gifs=action.payload
    },
  },
})

export const {setGifs}=gifSlice.actions;

export default gifSlice.reducer;