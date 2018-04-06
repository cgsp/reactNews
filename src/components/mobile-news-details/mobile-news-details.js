import React, { Component } from 'react';
import { Row, Col, BackTop } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';
import MobileHeaderComponent from '../mobile-header/mobile-header';
import MobileFooterComponent from '../mobile-footer/mobile-footer';
import 'whatwg-fetch';
import CommonComments from '../common-comments/common-comments';
export default class MobileNewsDetails extends Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
    }
  };

  componentDidMount() {
    let fetchOptions = {
      method: 'GET'
    }
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=' + this.props.params.uniquekey, fetchOptions)
      .then(res => res.json())
      .then(json => {
        this.setState({ newsItem: json });
        document.title = this.state.newsItem.title + '-React News';
      })
  }

  createMarkUp() {
    return { __html: this.state.newsItem.pagecontent };
  }

  render() {
    return (
      <div id="mobileDetailsContainer">
        <MobileHeaderComponent />
        <div className="ucmobileList">
          <Row>
            <Col span={24} className="container">
              <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkUp()}>
              </div>
              {/*评论组件*/}
              <CommonComments uniquekey={this.props.params.uniquekey} />
            </Col>
          </Row>
        </div>
        <MobileFooterComponent />
        <BackTop />
      </div>
    );
  }
}