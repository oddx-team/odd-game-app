import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import Api from 'services'
import toast from 'shared/utils/toast'

const initialState = {
  profile: {
    username: '',
    points: 0,
    online: true,
    token: null
  },
  isLoggedIn: false,
  isLoading: false,
  globalChat: [],
  headerTitle: '',
  gameSession: {
    mode: null,
    allCards: [],
    collectionCardIds: [],
    playedCardIds: [],
    blackCardId: null
  }
}

export const fetchUser = createAsyncThunk('game/fetchUser', async () => {
  const res = await Api.getMe()
  return res.username
})

export const register = createAsyncThunk('game/register', async username => {
  const res = await Api.registerUsername(username)

  toast.success('login_success')
  return { ...res, username }
})

export const logoutGame = createAsyncThunk('game/logoutGame', async () => {
  await Api.logout()
  toast.success('logout_success')
})

export const fetchGlobalChat = createAsyncThunk('game/fetchGlobalChat', async () => {
  const res = await Api.getChats()
  return res
})

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // playerUpdated (state, action) {
    //   state.isLoggedIn = true
    //   state.profile = {
    //     ...state.profile,
    //     username: action.payload
    //   }
    // },
    globalChatUpdated (state, action) {
      state.globalChat = [...state.globalChat, ...action.payload]
    },
    globalLoadingUpdated (state, action) {
      state.isLoading = action.payload
    },
    headerTitleUpdated (state, action) {
      state.headerTitle = action.payload
    }
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true
      state.prifile = {
        ...state.prifile,
        username: action.payload
      }
    },
    [register.fulfilled]: (state, action) => {
      state.profile = { ...state.profile, ...action.payload }
      state.isLoggedIn = true
    },
    [logoutGame.fulfilled]: (state) => {
      state.profile = { ...state.profile, username: null }
      state.isLoggedIn = false
    },
    [fetchGlobalChat.fulfilled]: (state, action) => {
      state.globalChat = [...state.globalChat, ...action.payload]
    }
  }
})

export const {
  globalChatUpdated,
  globalLoadingUpdated,
  headerTitleUpdated
} = gameSlice.actions

export default gameSlice.reducer

export const selectAuth = createSelector(state => state.game, game => game.isLoggedIn)
export const selectHeaderInfo = createSelector(
  state => state.game,
  game => ({
    username: game.profile.username,
    isLoggedIn: game.isLoggedIn,
    headerTitle: game.headerTitle
  })
)
