import React from 'react'
import blogService from '../services/blogs'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.blog)
        this.state = {
            username: props.blog.user.username,
            title: props.blog.title,
            author: props.blog.author,
            url: props.blog.url,
            likes: props.blog.likes,
            visible: false
        }
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }

    updateBlog = (event) => {
        event.preventDefault()
        const blogObject = {
            title: this.state.title,
            author: this.state.author,
            url: this.state.url,
            likes: this.state.likes + 1,
            
        }

        blogService
            .update(this.props.blog.id, blogObject)
            .then(response => {
                this.setState({
                    likes: response.likes
                })
            }

            )
        //   .then(newBlog => {
        //     this.setState({
        //       blogs: this.state.blogs.concat(newBlog),
        //       newBlog: '',
        //       error: 'a new blog ' + this.state.title + ' by ' + this.state.author + ' added'
        //     })
        //     setTimeout(() => {
        //       this.setState({ error: null })
        //     }, 5000)
        //   })
    }

    render() {

        const blogStyle = {
            paddingTop: 10,
            paddingLeft: 2,
            border: 'solid',
            borderWidth: 1,
            marginBottom: 5
        }


        const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
        const showWhenVisible = { display: this.state.visible ? '' : 'none' }

        return (

            

            <div style={blogStyle}>
                <div onClick={this.toggleVisibility}>
                    {this.state.title} {this.state.author}
                </div>
                <div style={showWhenVisible}>
                    <br/>
                    {this.state.url}
                    <p> {!!this.state.likes ? this.state.likes : 0} likes <button onClick={this.updateBlog}>likes</button></p>
                    <p> added by {this.state.username} </p>
                </div>
            </div>
        )
    }
}




// const Blog = ({ blog }) => (
//   <div>


//     {/* {blog.title} {blog.author} */}





//   </div>
// )

export default Blog