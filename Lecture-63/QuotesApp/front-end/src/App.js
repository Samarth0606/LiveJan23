import React, { Fragment } from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import { Route , Routes } from 'react-router-dom'

import AllQuotes from './Components/pages/AllQuotes'
import NewQuotes from './Components/pages/NewQuotes'
import ShowQuotes from './Components/pages/ShowQuotes'

const App = () => {
  return (
    <Fragment>
      <MainNavigation />

      <main>
        <Routes>
          <Route path='/'    element={ <AllQuotes /> } />
          <Route path='/new' element={ <NewQuotes /> } />
          <Route path='/quotes/:id' element={ <ShowQuotes/> } />
        </Routes>
      </main>

    </Fragment>
  )
}

export default App