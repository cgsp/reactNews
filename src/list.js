import React from 'react';
import ReactDOM from 'react-dom';
import Divider, { Input } from 'antd';
export default class ListComponent extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder="这里是列表页面" />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  };
}