import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import utils from 'utils'
import Api from 'services'

const cardsAdapter = createEntityAdapter()

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await Api.getAllCards()
  return utils.camelizeKeys(response)
})

const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsAdapter.getInitialState({
    status: 'idle',
    error: null
  }),
  reducers: {},
  extraReducers: {
    [fetchCards.fulfilled]: cardsAdapter.setAll
  }
})

export default cardsSlice.reducer

export const {
  selectAll: selectAllCards,
  selectById: selectCardById
} = cardsAdapter.getSelectors(state => state.cards)
