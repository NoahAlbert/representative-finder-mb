import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import RepresentativeSearch from "./Components/RepresentativeSearch";
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import './App.css'

function App() {
  return (
    <Router>
      <div>
          <Header />
        <Switch>
            <Route path='/signup'>
              <SignUp/>
            </Route>
            <Route path='/signin'>
              <SignIn/>
            </Route>
            <Route path='/'>
              <RepresentativeSearch/>
            </Route>
        </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
