import React, { Component } from 'react';

class HeroImg extends Component {

  render() {
    return(
      <div>
        <picture>
            <source srcSet="/assets/other/desktop/ourStory2000x600.jpg" media="(min-width: 1400px)" />
            <source srcSet="/assets/other/desktop/ourStory1024x500.jpg" media="(min-width: 600px)" />
            <img src="/assets/other/mobile/ourStory345x200.jpg" className="d-block w-100" alt="" />
        </picture>
      </div>
    )
  }



}

export default HeroImg;