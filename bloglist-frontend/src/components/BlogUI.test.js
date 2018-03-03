import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe.only('Blog />', () => {
    it('write something smart', () => {
      const blog = {
        user: {
          username: 'gettingtiredofthis'
        },
        title: 'koodihesus',
        author: "arian",
        likes: 5,
        url: 'www.mockurl.com'
      }
  
      const blogComponent = shallow(<Blog blog={blog} />)
      const header= blogComponent.find('.header')
      const hiddenbody= blogComponent.find('.body')
  
      expect(header.text()).toContain(blog.title)
      expect(header.text()).toContain(blog.author)
      expect(hiddenbody.getElement().props.style).toEqual({ display: 'none' })

      header.simulate('click')

      const exposedbody= blogComponent.find('.body')
      expect(exposedbody.getElement().props.style).toEqual({ display: '' })
      


      
    })
  })
