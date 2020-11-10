import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './features/cardsSlice'
import roomsReducer from './features/roomsSlice'

export default configureStore({
  reducer: {
    cards: cardsReducer,
    rooms: roomsReducer
  }
})
