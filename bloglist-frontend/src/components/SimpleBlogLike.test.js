import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

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