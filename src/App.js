import Home from './components/home/Home'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.scss'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/resume">
              <Resume/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </div>
        <header className="App-header">
        </header>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
