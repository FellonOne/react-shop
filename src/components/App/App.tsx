import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { AppState } from 'store/type';
import { Header, Footer } from 'components';

import { Home as HomePage } from '../../pages/Home/Home';
import { Catalog as CatalogPage } from '../../pages/Catalog/Catalog';
import { NotFound as NotFoundPage } from 'pages/404/404';
import { Upcoming as UpcomingPage } from 'pages/Upcoming/Upcoming';

import './App.css';

const mapStateToProps = (state: AppState) => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
});

const connector = connect(mapStateToProps);

const AppComponent = (props: ConnectedProps<typeof connector>): JSX.Element => {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Test test test</title>
      </Helmet>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/catalog" component={CatalogPage} exact />
        <Route path="/upcoming" component={UpcomingPage} exact />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export const App = connector(AppComponent);
