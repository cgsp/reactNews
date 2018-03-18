import React from 'react';
import { Row, Col, Menu, Icon, Message, Form, Input, Tabs, Button, Checkbox } from 'antd';


export default class MobileHeaderComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="mobile-header">
        <header>
          <img src="./src/images/icon/logo.png" alt="logo" className="logo" />
          <span>ReactNews</span>
        </header>
      </div>
    );
  }
}


