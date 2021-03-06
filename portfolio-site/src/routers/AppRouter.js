import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItem';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio/" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItem} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
</BrowserRouter>
);

export default AppRouter;