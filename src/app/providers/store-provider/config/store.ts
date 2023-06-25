import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from '@/entities/user'
import { loginReducer } from '@/features/auth-by-username'
import { StateSchema } from './state-schema'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    loginForm: loginReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: WEBPACK_IS_DEV,
    preloadedState: initialState,
  })
}
