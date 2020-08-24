import React from 'react'
import './user.css'

const User = ({ name, avatar_url, email, followers }) => (
  <div className="user">
    <img src={avatar_url} alt="Imagem do Usuário" className="img" />

    <div>
      <h1 className="title">{name}</h1>
      <p className="text">Followers: {followers}</p>
      <p className="text">Email: {email || 'Não possui'}</p>
    </div>
  </div>
)

export default User