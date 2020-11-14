import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './features/cardsSlice'
import roomsReducer from './features/roomsSlice'
import gameReducer from './features/gameSlice'

export default configureStore({
  reducer: {
    cards: cardsReducer,
    rooms: roomsReducer,
    game: gameReducer
  }
})
