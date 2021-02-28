// If you want to use a wrapper component

import React, { Component } from 'react';
import "./styles/Page.css";

class Page extends Component {
  render() {
    return (
      <div className="page">
        {children}
      </div>
    )
  }
}

export default Page;