import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from '@/entities/user'
import { StateSchema } from './state-schema'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: WEBPACK_IS_DEV,
    preloadedState: initialState,
  })
}
