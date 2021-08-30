import Home from './components/home/Home'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.scss'
import { useState, useEffect } from "react";
import { BrowserRouter as Route, Switch} from 'react-router-dom';
import { useLocation} from 'react-router-dom';


function App() {
  const location = useLocation();
  const [curPage, setCurPage] = useState({'/': false, '/resume': false, '/projects': false, '/contact': false })
  
  useEffect(() => {
      let allFalse = {}
      for (var k in curPage){ allFalse[k] = false }
      setCurPage({...allFalse, [location.pathname]: true})
  }, [location])

  return (
      <div className="App">
        <header className="App-header">
        </header>
        <Navbar curPage={curPage}/>
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
      <Footer/>
      </div>
  );
}

export default App;
