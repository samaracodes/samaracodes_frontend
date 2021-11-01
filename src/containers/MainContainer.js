import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import MyProjects from '../components/MyProjects'
import NavBar from '../components/NavBar'


class MainContainer extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={MyProjects} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </>
        )
    }
}

export default MainContainer




