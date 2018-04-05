import React, { Component } from 'react';
import { Row, Col, BackTop } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';
import PcHeaderComponent from '../pc-header/pc-header';
import PcFooterComponent from '../pc-footer/pc-footer';
import PcNewsImagesBlock from '../pc-news-image-block/pc-news-image-block';
import 'whatwg-fetch';
import CommonComments from '../common-comments/common-comments';
export default class PcNewsDetails extends Component {
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
      <div>
        <PcHeaderComponent />
        <Row>
          <Col span={14} offset={2} className="container">
            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkUp()}>
            </div>
            {/*评论组件*/}
            <CommonComments uniquekey={this.props.params.uniquekey} />
          </Col>
          <Col span={6}>
            <PcNewsImagesBlock count={20} type={'top'} width={'100%'} cardTitle={'新闻'} imageWidth={'180px'} />
          </Col>
        </Row>
        <PcFooterComponent />
        <BackTop />
      </div>
    );
  }
}