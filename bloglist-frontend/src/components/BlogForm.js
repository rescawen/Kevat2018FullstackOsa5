import React from 'react'

const BlogForm = (props) => {
    return (
      <form onSubmit={props.addBlog}>
        <div>
          title
          <input
            value={props.title}
            onChange={props.handleChange}
            name="title"
          />
        </div>
        <div>
          author
          <input
            value={props.author}
            onChange={props.handleChange}
            name="author"
          />
        </div>
        <div>
          url
          <input
            value={props.url}
            onChange={props.handleChange}
            name="url"
          />
        </div>
        <button type="submit">create</button>
      </form>
    )
  }

  export default BlogForm