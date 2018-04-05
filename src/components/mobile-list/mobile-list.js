import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';
import 'whatwg-fetch';
export default class MobileList extends Component {
  constructor() {
    super();
    this.state = {
      news: ''
    }
  }

  componentWillMount() {
    const myFetchOptions = {
      method: 'GET'
    }

    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type + '&count=' + this.props.count, myFetchOptions)
      .then(res => res.json())
      .then(json => {
        this.setState({ news: json })
      })
  }

  render() {
    const { news } = this.state;
    const newsList = news.length ?
      news.map((item, index) => (
        <section key={index} className="m_article list-item special_section clearfix">
          <Link to={`details/${item.uniquekey}`}>
            <div className="m_article_img">
              <img src={item.thumbnail_pic_s} alt={item.title} />
            </div>
            <div className="m_article_info">
              <div className="m_article_title">
                <span>{item.title}</span>
              </div>
              <div className="m_article_desc clearfix">
                <div className="m_article_desc_l">
                  <span className="m_article_channel">{item.realtype}</span>
                  <span className="m_article_time">{item.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      ))

      : '抱歉，没加载到任何新闻';
    return (
      <div>
        <Row>
          <Col span={24}>
            {newsList}
          </Col>
        </Row>
      </div>
    );
  }
}