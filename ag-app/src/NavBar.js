import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { SocialMenuItems } from "./SocialMenuItems";

class NavBar extends Component {
  static defaultProps = {
    alertBar: true,
  };

  constructor(props) {
    super(props);
    this.state = { hamburgerOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((st) => ({
      hamburgerOpen: !st.hamburgerOpen,
    }));
  };

  render() {
    const alertBar = this.props.alertBar ? (
      <div className="py-2 nav-banner text-white">
        <div className="d-flex justify-content-center align-items-center">
          <span className="mr-2">Follow the Adventure on</span>
          <ul className="social-links d-flex mb-1 pl-0">
            {SocialMenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.url}
                    className={item.cName}
                    aria-label={item.ariaLabel}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    ) : (
      ""
    );

    return (
      <div>
        <a
          className="sr-only sr-only-focusable"
          href="#homepage-container-fluid"
        >
          Skip to main content
        </a>

        {alertBar}

        <div className="sticky-top nav-border">
          <nav className="navbar navbar-dark bg-ag-dark">
            <div className="container-lg d-flex nav-inner-wrapper">
              <button
                onClick={this.handleClick}
                className={`navbar-toggler d-md-none d-lg-none d-xl-none ${
                  this.state.hamburgerOpen ? "collapsed" : ""
                }`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded={this.state.hamburgerOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="nav nav-uncollapsed ml-2 ag-nav">
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index} className={item.liCName}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a aria-label="Naviagte to homepage" href="index.html">
                <picture>
                  <source
                    srcSet="/assets/other/mobile/agLogoLarge.png"
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
          <div
            className={`${this.state.hamburgerOpen ? "show" : "collapse"}`}
            id="navbarToggleExternalContent"
          >
            <div className="bg-ag-dark p-4">
              <ul className="nav d-flex flex-column">
                {MenuItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={(item.liCName, item.mobileLiCName)}
                    >
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
