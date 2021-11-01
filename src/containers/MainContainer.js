import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router'
import Home from '../components/Home'
import NavBar from '../components/NavBar'


class MainContainer extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </>
        )
    }
}

export default MainContainer




