import React from 'react'
import { Link, useParams } from 'react-router-dom'

// iv с id="title" и текстом Profile
// ссылка(реакт) с навигацией /dashboard и текстом "Go To Root"
// ссылка(реакт) с навигацией /dashboard/main и текстом "Go To Main"
// div c id="username" и текстом, которые берется из параметра роута(см лекцию)

const Profile = () => {
    const { username } = useParams()
    return (
      <div>
        <div id="title">Profile</div>
        <Link to="/dashboard">Go To Root</Link>
        <Link to="/dashboard/main">Go To Main</Link>
        <div id="username">{username}</div>
      </div>
    )
}

export default Profile