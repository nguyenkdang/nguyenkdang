import Home from './components/home/Home'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.scss'
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import { useLocation} from 'react-router-dom';



function App() {
  const location = useLocation();
  const [curPage, setCurPage] = useState({'/': false, '/resume': false, '/projects': false, '/contact': false })
  const [projScroll, setprojScroll] = useState(0);


  useEffect(() => {
      let allFalse = {}
      for (var k in curPage){ allFalse[k] = false }
      setCurPage({...allFalse, [location.pathname]: true})

      if(location.pathname == '/projects'){
        window.scrollTo(0, 500*projScroll)
      }
      else{
        setprojScroll(0)
      }
      
  }, [location])

  return (
      <div className="App">
        <header className="App-header"/>
        <Navbar curPage={curPage}/>
        <Switch>
          <Route exact path="/">
            <Home setprojScroll={setprojScroll}/>
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
      <Footer/>
      </div>
  );
}

export default App;
