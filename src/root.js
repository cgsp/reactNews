import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './main';
import ListComponent from './list';
import ListDetailComponent from './components/list-detail/list-detail';
import { Router, Route, hashHistory } from 'react-router';

export default class Root extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        {/* localhost:8080/ */}
        <Route path="/" component={AppComponent} >
          <Route path='listDetail' component={ListDetailComponent}></Route>
        </Route>
        {/* localhost:8080/list */}
        <Route path='list' component={ListComponent}>
          <Route path='listDetail/:id/:type' component={ListDetailComponent}></Route>
        </Route>
      </Router>
    );
  };
}

// 替换main.js。这个地方变为整个程序的入口
ReactDOM.render(
  <Root />, document.getElementById('example'));