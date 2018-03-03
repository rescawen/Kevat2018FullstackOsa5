import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  it('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  it('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

    it('reset is incremented', () => {
    const GoodAction = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState1 = counterReducer(state, GoodAction)
    expect(newState1).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })

    const ZeroAction = {
      type: 'ZERO'
    }

    deepFreeze(state)
    const newState2 = counterReducer(state, ZeroAction)
    expect(newState2).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })
})