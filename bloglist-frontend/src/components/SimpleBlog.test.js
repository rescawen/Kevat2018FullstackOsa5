import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    it('renders content', () => {
      const blog = {
        title: 'koodihesus',
        author: "arian",
        likes: 5
      }
  
      const blogComponent = shallow(<SimpleBlog blog={blog} />)
      const contentDiv1 = blogComponent.find('.bloghead')
      const contentDiv2 = blogComponent.find('.bloglike')
  
      expect(contentDiv1.text()).toContain(blog.title)
      expect(contentDiv1.text()).toContain(blog.author)
      expect(contentDiv2.text()).toContain(blog.likes)
    })
  })