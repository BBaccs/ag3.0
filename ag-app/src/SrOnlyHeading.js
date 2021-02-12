import React, { Component } from "react";

class SrOnlyHeading extends Component {
  static defaultProps = {
    headerLevel: "h1",
    srOnlyMenuTitle: ''
  };

  render() {
    let heading;
    if (this.props.headerLevel === 'h1') {
      heading = <h1 className="sr-only">{this.props.srOnlyMenuTitle}</h1>;
    } else if (this.props.headerLevel === 'h2'){
      heading = <h2 className="sr-only">{this.props.srOnlyMenuTitle}</h2>;
    } else if (this.props.headerLevel === 'h3') {
      heading = <h3 className="sr-only">{this.props.srOnlyMenuTitle}</h3>;
    }
    return heading;
  }
}

export default SrOnlyHeading;
