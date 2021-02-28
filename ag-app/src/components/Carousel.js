import React, { Component } from 'react';

class Carousel extends Component {

  // static defaultProps = {

  // };

  // constructor(props) {
  //   super(props);

  // }

  render() {
    return(
      <div>
        <div id="home-carousel" class="food-carousel carousel slide" data-ride="carousel">
            <div class="carousel-indicators-wrapper mx-0">
                <button class="button carousel-button pause-button" aria-label="Pause carousel"></button>
                   <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play-fill button carousel-button play-button d-none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                <ol class="carousel-indicators mx-0">
                    <li data-target="#home-carousel" tabindex="0" role="button" aria-label="First slide" data-slide-to="0" class="active"></li>
                    <li data-target="#home-carousel" tabindex="0" role="button" aria-label="Second slide" data-slide-to="1"></li>
                    <li data-target="#home-carousel" tabindex="0" role="button" aria-label="Third slide" data-slide-to="2"></li>
                    <li data-target="#home-carousel" tabindex="0" role="button" aria-label="Fourth slide" data-slide-to="3"></li>
                </ol>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {/* <!-- Responsive pictures --> */}
                    <picture>
                        <source srcSet="/assets/carouselImages/desktop/baconBombBurgerHero2000x800.jpg" media="(min-width: 1400px)" />
                        <source srcSet="/assets/carouselImages/tablet/baconBombBurgerHero1024x600.jpg" media="(min-width: 700px) and (max-width: 1400px)" />
                        <img srcSet="/assetsassets/carouselImages/mobile/baconBombBurgerHero375x280.jpg" class="d-block w-100 carousel-img" alt="" />
                    </picture>
                </div>
                <div class="carousel-item">
                    <picture>
                        <source srcSet="/assets/carouselImages/desktop/crispySrirachaChickenSandwichHero2000x800.jpg" media="(min-width: 1400px)" />
                        <source srcSet="/assets/carouselImages/tablet/crispySrirachaChickenSandwichHero1024x600.jpg" media="(min-width: 700px) and (max-width: 1400px)" />
                        <img srcSet="/assetsassets/carouselImages/mobile/crispySrirachaChickenSandwichHero375x280.jpg" class="d-block w-100 carousel-img" alt="" />
                    </picture>
                </div>
                <div class="carousel-item">
                    <picture>
                        <source srcSet="/assets/carouselImages/desktop/slicedSirloinFriesHero2000x800.jpg" media="(min-width: 1400px)" />
                        <source srcSet="/assets/carouselImages/tablet/slicedSirloinFriesHero1024x600.jpg" media="(min-width: 700px) and (max-width: 1400px)" />
                        <img srcSet="/assetsassets/carouselImages/mobile/slicedSirloinFriesHero375x280.jpg" class="d-block w-100 carousel-img" alt="" />
                    </picture>
                    <div class="carousel-caption d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                    <picture>
                        <source srcSet="/assets/carouselImages/desktop/crispyChickenTendersHero2000x800.jpg" media="(min-width: 1400px)" />
                        <source srcSet="/assets/carouselImages/tablet/crispyChickenTendersHero1024x600.jpg" media="(min-width: 700px) and (max-width: 1400px)" />
                        <img srcSet="/assetsassets/carouselImages/mobile/crispyChickenTendersHero375x280.jpg" class="d-block w-100 carousel-img" alt="" />
                    </picture>
                    <div class="carousel-caption d-md-block">
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }



}

export default Carousel;