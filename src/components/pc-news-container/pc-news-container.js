import React, { Component } from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';

const TabPane = Tabs.TabPane;
export default class PcNewsContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const carouselSetting = {
      dots: true,
      autoplay: true,
      speed: 100,
      effect: 'scrollx'
    }
    return (
      <div>
        <Row>
          <Col span={20} offset={2} className="pc-container">
            <div className="left-container">
              <div className="carousel">
                <Carousel {...carouselSetting}>
                  <div><img width="400" height="200" src="./src/images/carousel/carousel_1.png" alt="" /></div>
                  <div><img width="400" height="200" src="./src/images/carousel/carousel_2.png" alt="" /></div>
                  <div><img width="400" height="200" src="./src/images/carousel/carousel_3.png" alt="" /></div>
                  <div><img width="400" height="200" src="./src/images/carousel/carousel_4.png" alt="" /></div>
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}