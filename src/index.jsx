import App from './components/App';
import {setState} from './action_creators';
import { createStore } from 'redux';
import io from 'socket.io-client';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import {Route, Router, hashHistory} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>  store.dispatch(setState(state)));

const routes = <Route component={App}>
  <Route path='/results' component={ResultsContainer} />
  <Route path='/'        component={VotingContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,  document.getElementById('app')
);
