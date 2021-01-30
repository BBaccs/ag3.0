import React, { Component } from "react";
import { MenuItems } from './MenuItems';

class NavBar extends Component {
  render() {
    return (
      <div>
        <a
          className="sr-only sr-only-focusable"
          href="#homepage-container-fluid"
        >
          Skip to main content
        </a>

        <div className="py-2 nav-banner text-white">
          <div className="d-flex justify-content-center align-items-center">
            <span className="mr-2">Follow the Adventure on</span>
            <ul className="social-links d-flex mb-1 pl-0">
              <li>
                <a
                  href="https://www.facebook.com/Aussie-Grill-by-Outback-381611752680353/"
                  className="fa fa-lg fa-facebook"
                  aria-label="View our Facebook"
                ></a>
              </li>
              <li>
                <a
                  href="https://twitter.com/AussieGrill_"
                  className="fa fa-lg fa-twitter mx-2"
                  aria-label="View our Twitter"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aussiegrillbyoutback/"
                  aria-label="View our Instagram"
                  className="fa fa-lg fa-instagram"
                ></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sticky-top nav-border">
          <nav className="navbar navbar-dark bg-ag-dark">
            <div className="container-lg d-flex nav-inner-wrapper">
              <button
                className="navbar-toggler d-md-none d-lg-none d-xl-none"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="nav nav-uncollapsed ml-2 ag-nav">
                {MenuItems.map((item,index) => {
                  return (
                  <li key={index} className={item.liCName}><a className={item.cName} href={item.url}>{item.title}</a></li>
                  )
                })}
              </ul>
              <a aria-label="Naviagte to homepage" href="index.html">
                <picture>
                  <source
                    srcset="/assets/other/mobile/agLogoLarge.png"
                    media="(min-width: 1024px)"
                  />
                  <img
                    className="ml-2 ag-logo"
                    src="/assets/other/mobile/agLogo.png"
                    alt="Aussie Grill"
                  />
                </picture>
              </a>
            </div>
          </nav>
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-ag-dark p-4">
              <ul className="nav d-flex flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/mainMenu/menuCategory.html"
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/otherPages/pickup.html">
                    Order
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/catering/cateringMenu/menuCategory.html"
                  >
                    Catering
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/otherPages/ourStory.html">
                    Our Story
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/otherPages/careers.html">
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/otherPages/franchise.html"
                  >
                    Franchise
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/otherPages/pickup.html">
                    Locations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/otherPages/contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
