import Home from './components/home/Home';
import { Resume } from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

function App() {
    const [projScroll, setprojScroll] = useState(0);

    return (
        <div className="App">
            <header className="App-header" />
            <NavigationBar />
            <Switch>
                <Route exact path="/">
                    <Home setprojScroll={setprojScroll} />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
