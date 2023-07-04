import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/store-provider'

type AsyncThunkActionType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<jest.Mock>
  getState: () => StateSchema
  actionCreator: AsyncThunkActionType<Return, Arg, RejectedValue>

  constructor(actionCreator: AsyncThunkActionType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    return action(this.dispatch, this.getState, undefined)
  }
}
