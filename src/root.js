import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PcIndexComponent from './components/pc-index/pc-index';
import MobileIndexComponent from './components/mobile-index/mobile-index';
export default class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <PcIndexComponent />
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <MobileIndexComponent />
        </MediaQuery>
      </div>
    );
  };
}

ReactDOM.render(
  <Root />, document.getElementById('root'));