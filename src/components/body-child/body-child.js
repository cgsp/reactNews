import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyChildComponent extends React.Component{
  render() {
    return (
      <div>
        孙页面输入框：<input type="text" placeholder="请输入" onInput={this.props.changeValue}/>
        <p>
          {this.props.userId}
        </p>
        <p>
          {this.props.age}
        </p>
        <p>
          {this.props.id}
        </p>
      </div>
    )
  }
}