import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
export default class PcHeaderComponent extends React.Component {
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
      <header>
        <Row>
          <Col span={4} offset={2}>
            <a href="/" className="pc-logo">
              <img src="src/images/icon/logo.png" alt="logo" width="50" height="50" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
              <Menu.Item key="top">
              <Icon type="appstore-o" />头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore" />社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore" />国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore" />国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore" />娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore" />体育
              </Menu.Item>
              <Menu.Item key="app">
                <Icon type="appstore" />科技
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore" />时尚
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}


