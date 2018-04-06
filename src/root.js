import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PcIndexComponent from './components/pc-index/pc-index';
import PcNewsDetails from './components/pc-news-details/pc-news-details';
import MobileIndexComponent from './components/mobile-index/mobile-index';
import MobileNewsDetails from './components/mobile-news-details/mobile-news-details';
import PCUserCenter from './components/pc-user-center/pc-user-center';
import MobileUserCenter from './components/mobile-user-center/mobile-user-center';
export default class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <Router history={hashHistory}>
            <Route path={'/'} component={PcIndexComponent}></Route>
            <Route path={'/details/:uniquekey'} component={PcNewsDetails}></Route>
            <Route path={'/userCenter'} component={PCUserCenter}></Route>
          </Router>
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <Router history={hashHistory}>
            <Route path="/" component={MobileIndexComponent}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
            <Route path="/userCenter" component={MobileUserCenter}></Route>
          </Router>
          <MobileIndexComponent />
        </MediaQuery>
      </div>
    );
  };
}

ReactDOM.render(
  <Root />, document.getElementById('root'));