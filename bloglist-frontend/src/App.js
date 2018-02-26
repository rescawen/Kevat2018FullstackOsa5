import React from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      newBlog: '',
      title:'',
      author:'',
      url:'',
      showAll: true,
      error: null,
      username: '',
      password: '',
      user: null
    }
  }


  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
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

  logout = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    this.setState({ user:null })
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

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
  }



  render() {

    const loginForm = () => (
      <div>
        <h2>Log in to application</h2>

        <form onSubmit={this.login}>
          <div>
            username
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            password
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    )

    const blogForm = () => (
      <div>
        <h2>blogs</h2>

        <p>{this.state.user.name} logged in</p>

        
        <button onSubmit={this.logout} type="submit">logout</button>
        

        <h3>create new</h3>

        <form onSubmit={this.addBlog}>
          <div>
            title
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div>
            author
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
          </div>
          <div>
            url
            <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleURLChange}
            />
          </div>
          <button type="submit">create</button>
        </form>

        {this.state.blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )



    return (
      <div>

        <Notification message={this.state.error} />

        {this.state.user === null && loginForm()}

        {this.state.user !== null && blogForm()}

      </div>
    );
  }
}

export default App;
