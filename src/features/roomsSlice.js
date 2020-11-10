import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import Api from 'services'

const initialState = {
  enRooms: [],
  vnRooms: [],
  status: 'idle',
  error: null,
  activeRoom: null
}

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async language => {
  const response = await Api.getAllRooms(language)
  return {
    language,
    items: response
  }
})

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    activeRoomUpdated (state, action) {
      const { room } = action.payload
      state.activeRoom = room
    },
    exitRoom (state) {
      state.activeRoom = null
    }
  },
  extraReducers: {
    [fetchRooms.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchRooms.fulfilled]: (state, action) => {
      const { language, items } = action.payload

      state.status = 'completed'
      if (language === 'en') {
        state.enRooms = items
      } else {
        state.vnRooms = items
      }
    },
    [fetchRooms.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export default roomsSlice.reducer

export const { exitRoom, activeRoomUpdated } = roomsSlice.actions

export const selectGlobalRooms = state => state.rooms.enRooms
export const selectVnRooms = state => state.rooms.vnRooms
