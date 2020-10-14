import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Main from './home/main' // это мы берем наши файлы, которые сделали вначале
import Profile from './home/profile' // это мы берем наши файлы, которые сделали вначале
import Dashboard from './home/dashboard' // это мы берем наши файлы, которые сделали вначале

// div с id="title" и текстом Dashboard
// ссылка(реакт) с навигацией /dashboard/profile/bc0a2881-261e-426b-8143-d37e0d158241 и текстом "Go To Profile"
// ссылка(реакт) с навигацией /dashboard/main и текстом "Go To Main"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/dashboard" component={() => <Dashboard />} />
            <Route exact path="/dashboard/profile/:username" component={() => <Profile />} />
            <Route exact path="/dashboard/main" component={() => <Main />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}


Home.propTypes = {}

export default React.memo(Home)
