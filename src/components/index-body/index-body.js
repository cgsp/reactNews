import React from 'react';
import ReactDOM from 'react-dom';
import BodyChildComponent from '../body-child/body-child';
import ReactMixin from 'react-mixin';
import MixinLog from '../../mixins/mixins';
import { Input } from 'antd';
const defaultProps = {
  userId: 100000
}
export default class IndexBodyComponent extends React.Component {
  constructor() {
    // 调用基类的所有的初始化方法
    super();
    // 每个页面的state的作用域只是当前的这个class，不会对其他的class组件造成污染
    this.state = {
      userName: 'guan',
      age: 18,
      sex: 'man'
    }
  }

  changeUserInfo(option) {
    this.setState({
      age: option.age,
      sex: option.sex
    })

    var submitButton = document.getElementById('submitButton');
    // 第一种方式，极度不推荐
    // submitButton.style.color = 'red';
    // 第二种方式，也不推荐
    // ReactDOM.findDOMNode(submitButton).style.color = 'red';
    // 第三种方式，推荐，推荐，性能最好
    this.refs.submitButton.style.color = 'red';

    MixinLog.log();



  }

  changeValue(event) {
    console.log(event.target.value);
    this.setState({
      age: event.target.value
    })
  }
  render() {
    return (
      <div>
        页面的主体
        <p>{this.state.userName}</p>
        <p>{this.state.age}</p>
        <p>{this.state.sex}</p>
        <p>{'父组件传递的userId是：' + this.props.userId}</p>
        <Input placeholder="Basic usage" />
        <input type="button" id="submitButton" ref="submitButton" value="修改" onClick={this.changeUserInfo.bind(this, { age: 99, sex: 'girl' })} />
        <BodyChildComponent changeValue={this.changeValue.bind(this)} {...this.props} id={456} />
      </div>
    )
  }
}

IndexBodyComponent.propTypes = {
  userId: React.PropTypes.number.isRequired
}
IndexBodyComponent.defaultProps = defaultProps;

ReactMixin(IndexBodyComponent.prototype, MixinLog);
