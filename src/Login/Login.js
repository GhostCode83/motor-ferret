import React from 'react'

function Login() {
  return (
    <section>
      <h3>Login</h3>
      <p>Username: Admin10</p>
      <p>Password: Aa1!Bb2@</p>
      <form action="">
        <div>
          <label for="username">Username: </label>
          <input type="text" id="username" />
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="text" id="password" />
        </div>
        <button>Login</button>
        <button>Clear</button>
      </form>
    </section>
  )
}

export default Login