import React from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      newBlog: '',
      title: '',
      author: '',
      url: '',
      showAll: true,
      error: null,
      username: '',
      password: '',
      user: null
    }
  }


  componentDidMount() {
    blogService.getAll().then(blogs => {
      var sortedBlogs = blogs.sort(function (a, b) {
        return a.likes < b.likes;
      });

      console.log(sortedBlogs)

      this.setState({
        blogs: sortedBlogs
      })
    }
    )

    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
    }
  }

  addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: this.state.title,
      author: this.state.author,
      url: this.state.url
    }

    blogService
      .create(blogObject)
      .then(newBlog => {
        this.setState({
          blogs: this.state.blogs.concat(newBlog),
          newBlog: '',
          error: 'a new blog ' + this.state.title + ' by ' + this.state.author + ' added'
        })
        setTimeout(() => {
          this.setState({ error: null })
        }, 5000)
      })
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = (event) => {

    this.setState({
      user: null
    },
      window.localStorage.clear()
    )

  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleAuthorChange = (event) => {
    this.setState({ author: event.target.value })
  }

  handleURLChange = (event) => {
    this.setState({ url: event.target.value })
  }

  handleBlogFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
  }



  render() {

    const loginForm = () => (
      <Togglable buttonLabel="login">
        <LoginForm
          visible={this.state.visible}
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleLoginFieldChange}
          handleSubmit={this.login}
        />
      </Togglable>
    )


    const blogBody = () => {

      return (
        <div>
          <h2>blogs</h2>

          <p>{this.state.user.name} logged in</p>

          <button onClick={this.logout} type="submit">logout</button>

          <h3>create new</h3>

          <BlogForm
            addBlog={this.addBlog}
            title={this.state.title}
            author={this.state.author}
            url={this.state.url}
            handleChange={this.handleBlogFieldChange}
          />
          
          <br/>

          {this.state.blogs.map(blog =>
            <Blog key={blog.id} blog={blog}/>
          )}
        </div>
      )
    }

    return (
      <div className="mainbody">

        <Notification message={this.state.error} />

        {this.state.user === null && loginForm()}

        {this.state.user !== null && blogBody()}

      </div>
    );
  }
}

export default App;
