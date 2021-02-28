// If you want to use a wrapper component
import React, { Component } from "react";
import MobileFixedCTA from "./MobileFixedCTA";

class Page extends Component {
  static defaultProps = {
    mobileFixedCTA: true,
    catering: false
  }
  render() {
    let fixedCTA;
      if (this.props.mobileFixedCTA && !this.props.catering) {
        fixedCTA = <MobileFixedCTA />
      } else if(this.props.mobileFixedCTA && this.props.catering){
        fixedCTA = <MobileFixedCTA catering={true} />
      } else {
        
      }

    return (
      <div className="page">
        {this.props.srOnlyHeader ? (
          <h1 className="sr-only">{this.props.srOnlyHeader}</h1>
        ) : (
          ""
        )}
        {this.props.children}
        { fixedCTA }
      </div>
    );
  }
}

export default Page;
