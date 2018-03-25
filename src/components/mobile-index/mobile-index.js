import React from 'react';
import { Tabs } from 'antd';
import MobileHeaderComponent from '../mobile-header/mobile-header';
import MobileFooterComponent from '../mobile-footer/mobile-footer';

const TabPane = Tabs.TabPane;

export default class MobileIndexComponent extends React.Component {
  constructor() {
    super();
  }
  tabChange(key) {

  }
  render() {
    return (
      <div className="mobile">
        <MobileHeaderComponent />
        <Tabs defaultActiveKey="1" onChange={this.tabChange.bind(this)}>
          <TabPane tab="头条" key="1">1</TabPane>
          <TabPane tab="社会" key="2">2</TabPane>
          <TabPane tab="国内" key="3">3</TabPane>
          <TabPane tab="国际" key="4">4</TabPane>
          <TabPane tab="娱乐" key="5">5</TabPane>
        </Tabs>
        <MobileFooterComponent />
      </div>
    );
  };
}
