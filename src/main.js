var React = require('react');
import ReactDOM from 'react-dom';
import HeaderComponent from './components/header/header';
import IndexBodyComponent from './components/index-body/index-body';
import FooterComponent from './components/footer/footer';
import 'antd/dist/antd.css';


export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <IndexBodyComponent age={18}></IndexBodyComponent>
        <FooterComponent></FooterComponent>
        <div>
          {/*嵌套的路由页面 */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

