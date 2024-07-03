import { createSlice } from '@reduxjs/toolkit'
import { DataInterface } from '../../interfaces/data.interface';


const data: DataInterface = {
  id: 0,
  theme: '' ,
  groomName: '',
  brideName: '',
  date: '',
  time: '',
  location: '',
  locationMap: '',
  restourant: '',
  letter: '',
  email: [],
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
  },
  stylesConfig: {
    colors: {
      dark: '',
      light: '',
      textDark: '',
      textLight: '',
      error: '',
      primaryMinimal: '',
      backgroundMinimal: '',
      primaryRomance: '',
      backgroundRomance: '',
      primaryPhoto: '',
      backgroundPhoto: '',
    },
    fonts: {
      fontCommon: '',
      fontMinimal1: '',
      fontMinimal2: '',
      fontMinimal3: '',
      fontRomance1: '',
      fontRomance2: '',
      fontRomance3: '',
      fontPhoto1: '',
      fontPhoto2: '',
      fontPhoto3: '',
    },
  },
  link: '',
  locale: 'en',
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