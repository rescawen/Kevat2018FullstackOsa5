import React from 'react'
import { mount } from 'enzyme'
import App from '../App'
import Blog from './Blog'
jest.mock('../services/blogs')
import blogService from '../services/blogs'
import loginService from '../services/login'

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  describe('when user is not logged', () => {
    beforeEach(() => {
      // luo sovellus siten, että käyttäjä ei ole kirjautuneena
    })

    it('only login form is rendered', () => {
      app.update()
      const mainbody = app.find('.mainbody')
      expect(mainbody.find('.toggleOff').exists()).toEqual(true)
    })
  })

  describe('when user is logged in', () => {
    beforeEach(() => {
      const user = {
        username: "rasd",
        password: "salainen"
      }
      
      localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
    })

    it('only login form is rendered', () => {
      app.update()
      const mainbody = app.find('.mainbody')
      expect(mainbody.find('.toggleOff').exists()).toEqual(true)
    })
  })

})
