import React from 'react';
import ReactDOM from 'react-dom';
export default class ListDetailComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>
          这里是嵌套的详情页面
        </h1>
        <h1>传递的id是：{this.props.params.id}</h1>
        <h1>这个页面的类型是：{this.props.params.type}</h1>
      </div>        
    );
  }
}