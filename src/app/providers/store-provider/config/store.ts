import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './state-schema'

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: WEBPACK_IS_DEV,
    preloadedState: initialState,
  })
}
