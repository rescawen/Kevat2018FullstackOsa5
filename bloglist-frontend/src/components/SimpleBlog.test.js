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

  describe.only('<SimpleBlog />', () => {
    it('clicking the button twice calls event handler twice', () => {
        const blog = {
            title: 'kaksilikea',
            author: "onko?",
            likes: 1
        }

        const mockHandler = jest.fn()

        const blogComponent = shallow(
            <SimpleBlog
                blog={blog}
                onClick={mockHandler}
            />
        )

        const button = blogComponent.find('button')
        button.simulate('click')
        button.simulate('click')


        expect(mockHandler.mock.calls.length).toBe(2)
    })
})