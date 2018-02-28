import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    it('renders content', () => {
      const note = {
        content: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
        important: true
      }
  
      const noteComponent = shallow(<Note note={note} />)
      const contentDiv = noteComponent.find('.content')
  
      expect(contentDiv.text()).toContain(note.content)
    })
  })