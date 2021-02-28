import React, { Component } from "react";
import { SocialNavItems } from "../assets/data/navData/SocialNavItems";
import { NavLink } from "react-router-dom";
import { FooterItemsDataMain } from "../assets/data/footerData/FooterItemsDataMain";
import { FooterItemsDataSecondary } from "../assets/data/footerData/FooterItemsDataSecondary";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-outer-wrapper mb-0">
        <div className="footer-wrapper px-3 py-4 bg-ag-dark text-white">
          <div className="m-auto d-lg-flex d-none justify-content-between desktop-footer">
            <div>
              <ul className="nav nav-uncollapsed main-links">
                {FooterItemsDataMain.map((item, index) => {
                  return (
                    <li className={item.liCName} key={index}>
                      <NavLink className={item.cName} to={item.url}>
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <ul className="nav nav-uncollapsed privacy-links">
                {FooterItemsDataSecondary.map((item, index) => {
                  return (
                    <li className={item.liCName} key={index}>
                      <NavLink className={item.cName} to={item.url}>
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div style={{ marginTop: "-10px" }}>
              <ul className="social-links d-flex text-center flex-row justify-content-end m-0 p-0 w-100 h-auto">
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
              <div>
                <span
                  className="rights-reserved text-capitalize text-right w-100"
                  style={{ fontSize: ".75rem" }}
                >
                  @2020 Bloomin' Brands, Inc. All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
          <div
            className="d-grid d-lg-none"
            style={{ gridTemplateColumns: "11fr 1fr" }}
          >
            <ul className="nav nav-uncollapsed d-grid">
            {FooterItemsDataSecondary.map((item, index) => {
                  return (
                    <li className={item.liCName} key={index}>
                      <NavLink className={item.cName} to={item.url}>
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
            <ul className="social-links m-0 p-0 w-100 h-100 d-flex text-center flex-column">
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
          <div className="mt-3 d-lg-none">
            <span
              className="rights-reserved text-capitalize text-center w-100"
              style={{ fontSize: ".75rem" }}
            >
              @2020 Bloomin' Brands, Inc. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
