import React from 'react'
import './user.css'

const User = ({ name, avatar_url, email, followers, html_url }) => (
  <a href={html_url}>
    <div className="user">
      <img src={avatar_url} alt="Imagem do Usuário" className="img" />

      <div>
        <h1 className="title">{name}</h1>
        <p className="text">Followers: {followers}</p>
        <p className="text">Email: {email || 'Não possui'}</p>
      </div>
    </div>
  </a>
)

export default User