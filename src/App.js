import React from "react";
import Movies from "./components/movies.component";
import Navbar from "./components/navbar.component";
import AddMovie from "./components/add-movie.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import PageNotFound from "./components/page-not-found.component";

import { Redirect, Route, Switch } from 'react-router-dom';

const App = (props) => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/movies' component={Movies} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/add-movie' component={AddMovie} />
                <Route path="/not-found" component={PageNotFound} />
                <Route exact path='/' component={Movies} />
                <Redirect to="/not-found" />
            </Switch>
            <br />
        </>
    );
};

export default App;