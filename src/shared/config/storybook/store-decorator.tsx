import { DeepPartial } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from '@/app/providers/store-provider'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) =>
  (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  )
