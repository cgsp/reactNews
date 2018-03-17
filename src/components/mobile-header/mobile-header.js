import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
export default class MobileHeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top'
    }
  }
  handleClick(item) {
    this.setState({
      current: item.key
    })
  }
  render() {
    return (
      <div className="mobile-header">
        <header>
          <img src="./src/images/icon/logo.png" alt="logo" className="logo"/>
          <span>ReactNews</span>
        </header>
      </div>
    );
  }
}

