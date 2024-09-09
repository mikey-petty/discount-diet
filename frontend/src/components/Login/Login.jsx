import React from 'react'

function Login() {

  return (
    <>
      <h2>Login Page</h2>

      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login