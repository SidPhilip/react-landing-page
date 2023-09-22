import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Skills from './Skills';
import Contacts from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
          </Switch>
       
        </div>
      
      </div>
    </Router>
  );
}

export default App;