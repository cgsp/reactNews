import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import PcIndexComponent from './components/pc-index/pc-index';
export default class Root extends React.Component {
  render() {
    return (
      <div>
        <PcIndexComponent />
      </div>
    );
  };
}

ReactDOM.render(
  <Root />, document.getElementById('root'));