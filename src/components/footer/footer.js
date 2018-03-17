import React from 'react';
import reactDOM from 'react-dom';

export default class FooterComponent extends React.Component{
  render(){
    const styleObj={
      "red": {
        "color": "red"
      },
      "f15": {
        "fontSize": "15px"
      },
      "dib": {
        "display": "inline"
      },
      "father__son": {
        "flex": "1"
      }
    }
    return (
      <footer style={styleObj.red}>
        页面的版权信息
      </footer>
    )
  }
}