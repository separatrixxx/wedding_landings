import { createSlice } from '@reduxjs/toolkit'
import { DataInterface } from '../../interfaces/data.interface';


const data: DataInterface = {
  theme: '' ,
  groomName: '',
  brideName: '',
  date: '',
  time: '',
  location: '',
  locationMap: '',
  restourant: '',
  letter: '',
  questions: [],
  dressCode: {
    text: '',
    colors: [],
  },
  dressCodeText: '',
  agenda: [],
  howToGet: [],
  blocks: {
    timer: false,
    questions: false,
    dressCode: false,
    agenda: false,
    message: false,
    howToGet: false,
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