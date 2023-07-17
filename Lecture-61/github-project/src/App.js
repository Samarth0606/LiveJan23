import React from 'react'
import GithubUser from './Components/GithubUser';
import "./App.css"

const App = () => {






  return (
    <div>
      <h1 className='app' >App default functional component</h1>
      <div className='parent'>
        <GithubUser username="samarth0606" />
        <GithubUser username="sabeelhps" />
        <GithubUser username="alok92iit" />
      </div>
    </div>
  )
}

export default App