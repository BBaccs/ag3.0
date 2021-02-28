import React, { Component } from 'react';

class HeroImg extends Component {
  static defaultProps = {
    fileType: 'jpg'
  }

  render() {
    return(
      <div>
        <picture>
            <source srcSet={`/assets/other/desktop/${this.props.img}2000x600.${this.props.fileType}`} media="(min-width: 1400px)" />
            <source srcSet={`/assets/other/desktop/${this.props.img}1024x500.${this.props.fileType}`} media="(min-width: 600px)" />
            <img src={`/assets/other/mobile/${this.props.img}345x200.${this.props.fileType}`} className="d-block w-100" alt="" />
        </picture>
      </div>
    )
  }
}

export default HeroImg;