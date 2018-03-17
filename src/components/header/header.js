var React = require('react');
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      minHeader: false
    }
  }

  render() {
    const styleObj = {
      header: {
        backgroundColor: '#333',
        color: '#fff',
        paddingTop: this.state.minHeader ? '5px' : '15px',
        paddingBottom: this.state.minHeader ? '5px' : '15px'
      }
    }
    return (
      <header>
        <h1 style={styleObj.header}>头部</h1>
        <ul>
          <li>
            <Link to={'/'}>首页</Link>
          </li>
          <li>
            <Link to={'/listDetail'}>首页的详情页面</Link>
          </li>
          <li>
            <Link to={'/list'}>列表页面</Link>
          </li>
          <li>
            <Link to={'/list/listDetail/1234/add'}>列表页面的详情页面</Link>
          </li>
        </ul>
      </header>
    )
  }
}
