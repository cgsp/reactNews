import React from 'react';
import PcHeaderComponent from '../pc-header/pc-header';
import PcFooterComponent from '../pc-footer/pc-footer';
export default class PcIndexComponent extends React.Component {
  render() {
    return (
      <div>
        <PcHeaderComponent />
        <PcFooterComponent />
      </div>
    );
  };
}
