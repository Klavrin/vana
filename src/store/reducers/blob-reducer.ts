import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  opacity: 1,
  // color: '0.388,0.,0.875'
  color: '#995be5',
  // color: 'purple'
  sectionProgress: 0
}

const blobSlice = createSlice({
  name: 'blob',
  initialState,
  reducers: {
    changeOpacity: (state, action) => {
      state.opacity = action.payload
    },
    changeColor: (state, action) => {
      state.color = action.payload
    },
    changeSectionProgress: (state, action) => {
      state.sectionProgress = action.payload
    }
  }
})

export const { changeOpacity, changeColor, changeSectionProgress } = blobSlice.actions
export default blobSlice.reducer
