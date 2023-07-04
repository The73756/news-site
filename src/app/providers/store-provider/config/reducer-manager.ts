import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { ReducerManager, StateSchema, StateSchemaKey } from './state-schema'

export const createReducerManager = (
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager => {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)
  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        for (const key of keysToRemove) {
          delete { ...state }[key]
        }
        keysToRemove = []
      }
      return combinedReducer(state, action)
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },
    remove: (key: StateSchemaKey) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!key || !reducers[key]) {
        return
      }
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    },
  }
}