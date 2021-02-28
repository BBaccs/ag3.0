import React, { Component } from "react";

class PopUpCTA extends Component {
  render() {
    return (
      <section
        className="modal fade"
        id="deliveryWesleyLutz"
        tabindex="-1"
        role="dialog"
        aria-labelledby="deliveryWesleyLabel"
        aria-hidden="true"
      >
        <div className="modal-wrapper-bull">
          <img
            className="mx-auto"
            src="/ag3.0/assets/agGraphicElements/animals/bullFullMedium.png"
            alt=""
          />
          <div className="modal-dialog-centered modal-dialog mt-0">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title sm-modal-header text-center w-100"
                  id="deliveryWesleyLabel"
                >
                  Choose your delivery method
                </h2>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div
                  className="modal-footer justify-content-center p-0"
                  style={{ border: "none", flexDirection: "column" }}
                >
                  <div>
                    <a
                      className="d-block"
                      aria-label="Order Doordash"
                      href="https://www.doordash.com/store/aussie-grill-by-outback-tampa-660325/en-US"
                    >
                      <img
                        className="door-dash-logo"
                        src="/ag3.0/assets/other/doorDashLogoSmall.jpg"
                        alt="Order from Door Dash"
                      />
                    </a>
                  </div>
                  <p className="m-2">-OR-</p>
                  <div>
                    <a
                      className="d-block"
                      aria-label="Order Uber Eats"
                      href="https://www.ubereats.com/tampa/food-delivery/aussie-grill-by-outback-25340-sierra-center-blvd/hqrt5nXYSN2cpx7D9Crn_A/"
                    >
                      <img
                        src="/ag3.0/assets/other/uberEatsLogoSmall.png"
                        alt="Order from Uber Eats"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PopUpCTA;
