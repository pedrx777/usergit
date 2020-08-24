import React, { useState } from 'react'
import axios from 'axios'

import User from './components/User/User'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])
  const [input, setInput] = useState('')

  const getUser = () => {
    if(!input) {
      return
    }

    axios.get(`https://api.github.com/users/${input}`)
      .then(({ data }) => {
        setUsers([ ...users, data ])
      })
  }

  return (
    <div className="App">
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Insira o username" 
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="button" onClick={getUser}>Encontrar Usuário</button>
      </div>

      {users && users.map((user, index) => (
        <User key={index} {...user} />
      ))}
    </div>
  )
}

export default App
