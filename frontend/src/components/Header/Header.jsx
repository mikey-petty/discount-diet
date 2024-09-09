import axios from "axios";
import React, { useState } from "react"

const Header = () => {
  const [user, setUser] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome!')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:8000/api/set_name/", {
        user: user
      }, {
        headers: {
          'Content-Type': 'application/json',  // Explicitly set content-type
        }
      });
      const msg = response.data ? `Welcome ${response.data}!` : "Welcome!"
      setWelcomeMessage(msg)
    } catch (error) {
      console.error('Error setting name:', error);
    }
  }

  const handleUserChange = (e) => {
    setUser(e.target.value)
  }

  return (
    <>
      <h1>
        {welcomeMessage}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={handleUserChange}
          placeholder="Enter Your Name!"
        />
        <button type="submit">Set Your Name</button>
      </form >
    </>
  )
}

export default Header