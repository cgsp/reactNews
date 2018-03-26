import React, { Component } from 'react';
import { Card } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';
import 'whatwg-fetch';
export default class PcNewsImagesBlock extends Component {
	constructor() {
		super();
		this.state = {
			news: ''
		}
	}

	componentWillMount() {
		let fetchOptions = {
			method: 'GET'
		}
		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type + '&count=' + this.props.count, fetchOptions)
			.then(res => res.json())
			.then(json => {
				this.setState({ news: json })
				// console.log(this.state.news);
			})
	}

	render() {
		const { news } = this.state;
		const styleImage = {
			display: 'block',
			width: this.props.imageWidth,
			height: '90px'
		};
		const styleH3 = {
			width: this.props.imageWidth,
			whiteSpace: 'nowarp',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		};
		const newsList = news.length ?
			news.map((item, index) => (
				<div key={index} className="imageblock">
					<Link to={`details/${item.uniquekey}`} target="_blank">
						<div className="custom-image">
							<img style={styleImage} src={item.thumbnail_pic_s} alt="" />
						</div>
						<div className="custom-card">
							<h3 style={styleH3}>{item.title}</h3>
							<p style={styleH3}>{item.author_name}</p>
						</div>
					</Link>
				</div>
			))
			: '抱歉，没加载到任何的新闻';
		console.log(newsList);
		return (
			<div className="top-news-image">
				<Card title={this.props.cardTitle} bordered={true} style={{ width: this.props.width }}>
					{newsList}
				</Card>
			</div >
		);
	}
}

