import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Content from './container/content/Content';
import Navbar from './container/navbar/Navbar';
import LoginPage from './pages/login/Login';
import './App.scss';

const Main = __ => (
    <div className="main">
        <Content />
        <Navbar />
    </div>
)

class App extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route
                        path="/login"
                        component={LoginPage}
                    />
                    <Route
                        path="/"
                        component={Main}
                    />
                    <Redirect
                        to="/"
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
