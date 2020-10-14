import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../head'

const Dashboard = () => {
    return (
      <div>
        <Head title="Hello" />
        <div id="title"> Dashboard </div>
        <Link to="/dashboard/profile/bc0a2881-261e-426b-8143-d37e0d158241"> Go to Profile </Link>
        <Link to="/dashboard/main"> Go to Main </Link>
      </div>
    )
}

export default Dashboard