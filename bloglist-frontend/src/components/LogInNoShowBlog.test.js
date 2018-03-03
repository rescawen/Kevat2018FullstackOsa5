import React from 'react'
import { mount } from 'enzyme'
import App from './App'


describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  it('A user who has not logged in only sees log in form and no blogs', () => {
    app.update()
    
    expect(noteComponents.length).toEqual(noteService.notes.length)
  })
})
