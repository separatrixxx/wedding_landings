import { createSlice } from '@reduxjs/toolkit'
import { DataInterface } from '../../interfaces/data.interface';


const data: DataInterface = {
  theme: '' ,
  groomName: '',
  brideName: '',
  date: '',
  location: '',
  restourant: '',
  letter: '',
  questions: [],
  dressCode: {
    text: '',
    colors: [],
  }
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: data,
  },
  reducers: {
    setData: (state, actions) => {
        state.data = actions.payload
    },
  },
})

export const { setData } = dataSlice.actions

export default dataSlice.reducer;