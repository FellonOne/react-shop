import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from 'store/type';

import './App.css';

const mapStateToProps = (state: AppState) => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
});

const connector = connect(mapStateToProps);

const AppComponent = (props: ConnectedProps<typeof connector>): JSX.Element => {
  console.log(props);
  return (
    <div className="app">
      <h2>Base APP</h2>

      <p className="app__name">Test test test</p>
    </div>
  );
};

export const App = connector(AppComponent);
