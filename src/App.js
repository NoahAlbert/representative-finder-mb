import { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Landing from './Components/Landing'
import RepresentativeSearch from "./Components/RepresentativeSearch"
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import './App.css'

function App() {
  const [user, setUser] = useState()
  return (
    <Router>
      <div className='app'>
          <Header />
        <Switch>
            <Route path='/signup'>
              <SignUp setUser={setUser}/>
            </Route>
            <Route path='/signin'>
              <SignIn setUser={setUser}/>
            </Route>
            <Route path='/search'>
              {user
                ? <RepresentativeSearch user={user}/>
                : <SignIn setUser={setUser}/>
              }
            </Route>
            <Route path='/'>
              <Landing/>
            </Route>
        </Switch>
          <Footer />
      </div>
    </Router>
  )
}

export default App
