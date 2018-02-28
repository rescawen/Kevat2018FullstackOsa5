import React from 'react'

const LoginForm = ({handleSubmit, username, handleChange, password}) => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          username
          <input
            value={username}
            onChange={handleChange}
            name="username"
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button type="submit">login</button>
      </form>
    )
  }

  export default LoginForm