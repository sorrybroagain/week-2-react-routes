import React from 'react'
import { Link } from 'react-router-dom'

// div с id="title" и текстом Main
// ссылка(реакт) с навигацией /dashboard/profile/bc0a2881-261e-426b-8143-d37e0d158241 и текстом "Go To Profile"
// ссылка(реакт) с навигацией /dashboard и текстом "Go To Root"



const Main = () => { // называем компонент по файлу и с большой буквы
    return (<div><div id="title">Main</div> <Link to="/dashboard/profile/bc0a2881-261e-426b-8143-d37e0d158241">Go To Profile</Link><Link to="/dashboard">Go To Root</Link></div>
    )
}

export default Main