import React from 'react';
import { Row, Col, Menu, Icon, Message, Form, Input, Tabs, Button, Link, Modal } from 'antd';
// 用于表单提交的
const FormItem = Form.Item;
// Tabs
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class PcHeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userId: 0
    }
  }
  handleClick(item) {
    this.setState({
      current: item.key
    })
    if (item.key === 'register') {
      this.loginModalShow(true);
    }
  }
  handleSubmit() {
    console.log(getFieldDecorator);
  }
  loginModalShow(value) {
    this.setState({
      modalVisible: value
    })
  }
  render() {
    let { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined
      ?
      <Menu.Item key="logout" className="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
        <Link target="_blank">
          <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button">退出</Button>
      </Menu.Item>
      :
      <Menu.Item key="register" className="register" onClick={this.loginModalShow.bind(this)}>
        <Icon type="appstore" />注册/登录
      </Menu.Item>;
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
              {userShow}
            </Menu>
          </Col>
        </Row>
        {/*注册登录的模态框*/}
        <Modal title="用户中心" warpClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.loginModalShow(false)} onOk={() => this.loginModalShow(false)} okText="关闭">
          <Tabs defaultActiveKey="1" type="card">
            <Tabs.TabPane tab="注册" key="1">
              <Form horizontal onSubmit={() => this.handleSubmit}>
                <FormItem label="账户">
                  <Input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}></Input>
                </FormItem>
                <FormItem label="密码">
                  <Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')}></Input>
                </FormItem>
                <FormItem label="确认密码">
                  <Input type="password" placeholder="请再次输入您的密码" {...getFieldDecorator('r_confirmPassword')}></Input>
                </FormItem>
                <Button type="primary" htmlType="submit">注册</Button>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane tab="登录" key="2">Content of Tab Pane 2</Tabs.TabPane>
          </Tabs>
        </Modal>

      </header>
    );
  }
}

export default PcHeaderComponent = Form.create({})(PcHeaderComponent);


