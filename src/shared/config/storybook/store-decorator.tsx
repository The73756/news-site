import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from '@/app/providers/store-provider'
import { loginReducer } from '@/features/auth-by-username'
import { profileReducer } from '@/features/editable-profile-card'
import { ReducersList } from '@/shared/lib/dynamic-module-loader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
