import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 days later'],
      tally: { Sunshine: 2 }
    }
  }
});

const routes = <Route component={App}>
  <Route path='/results' component={ResultsContainer} />
  <Route path='/'        component={VotingContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,  document.getElementById('app')
);
