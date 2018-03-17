import React from 'react';
import MobileHeaderComponent from '../mobile-header/mobile-header';
import MobileFooterComponent from '../mobile-footer/mobile-footer';
export default class MobileIndexComponent extends React.Component {
  render() {
    return (
      <div className="mobile">
        <MobileHeaderComponent />
        <MobileFooterComponent />
      </div>
    );
  };
}
