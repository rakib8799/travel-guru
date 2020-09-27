import React from 'react';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from '../Login/Login';
import HomeDetails from '../Home/Home';
import LoadHomeData from '../LoadHomeData/LoadHomeData';
import PrivateRoute from '../../PrivateRoute';
import Search from '../Search/Search';

const HomeRoute = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <HomeDetails></HomeDetails>
                    </Route>
                    <Route path="/home">
                        <HomeDetails></HomeDetails>
                    </Route>
                    <Route path='/hotel/:id'>
                        <LoadHomeData></LoadHomeData>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <PrivateRoute path='/search'>
                        <Search></Search>
                    </PrivateRoute>
                    <Route path='*'>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default HomeRoute;