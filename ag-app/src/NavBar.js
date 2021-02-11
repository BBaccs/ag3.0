import React, { Component } from "react";
import { NavItems } from "./NavItems";
import { SocialNavItems } from "./SocialNavItems";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  static defaultProps = {
    alertBar: true,
    navData: NavItems,
    catering: false,
    pickup: false
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
    let newArr = [];
    this.props.navData.map((item, index) => {
      
      if(item.title === "Order") {
        this.props.navData.splice(index, 1);
      }
      newArr.push(item);
    })

    const alertBar = this.props.alertBar ? (
      <div className="py-2 nav-banner text-white">
        <div className="d-flex justify-content-center align-items-center">
          <span className="mr-2">Follow the Adventure on</span>
          <ul className="social-links d-flex mb-1 pl-0">
            {SocialNavItems.map((item, index) => {
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
                {!this.props.catering ? 
                  this.props.navData.map((item, index) => {
                    return (
                      <li key={index} className={item.liCName}>
                        <NavLink className={item.cName} to={item.url}>
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  })
                  :
                  this.props.navData.map((item, index) => {
                    return (
                      <li key={index} className={item.liCName}>
                        <NavLink className={item.cName} to={item.url} target={item.target}>
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  })
              }

                {/* {this.props.pickup
                  ? this.props.navData.map((item, index) => {
                      return (
                        <li key={index} className={item.liCName}>
                          <NavLink className={item.cName} to={item.url}>
                            {item.title}
                          </NavLink>
                        </li>
                      );
                    })
                  : newArr.map((item, index) => {
                      return (
                        <li key={index} className={item.liCName}>
                          <NavLink
                            className={item.cName}
                            to={item.url}
                            target={item.target}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      );
                    })} */}
              </ul>
              <NavLink aria-label="Naviagte to homepage" to="/">
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
              </NavLink>
            </div>
          </nav>
          <div
            className={`${this.state.hamburgerOpen ? "show" : "collapse"}`}
            id="navbarToggleExternalContent"
          >
            <div className="bg-ag-dark p-4">
              <ul className="nav d-flex flex-column">
                {this.props.navData.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={(item.liCName, item.mobileLiCName)}
                    >
                      <NavLink className={item.cName} to={item.url}>
                        {item.title}
                      </NavLink>
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
