import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

const App = () => {

  const handleClick = () => {
    let url = `https://${process.env.AUTH0_DOMAIN}/authorize?client_id=${process.env.AUTH0_CLIENT_ID}&response_type=token`
    axios
      .get(url)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Router>
          <Switch>
            <Route exact path='/' render={
              () => (
                <button onClick={handleClick}>Make request</button>
              )
            }/>
          </Switch>
      </Router>
    </>
  )

}

export default App
