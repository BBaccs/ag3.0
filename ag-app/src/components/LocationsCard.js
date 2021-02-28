import React, { Component } from "react";
import PopUpCTA from "./PopUpCTA";

class LocationsCard extends Component {
  static defaultProps = {
    contactPage: false
  }
  render() {
    return (
      <div className="card mx-auto mb-4" style={{ width: "18rem" }}>
        <div className="card-body">
          <h2 className="card-title">{this.props.name}</h2>
          <p>{this.props.description}</p>
          <p className="card-text font-small">{this.props.address}</p>
          {this.props.pickup ? (
            <a href={this.props.pickup} className="btn btn-primary cta-primary">
              Pickup
            </a>
          ) : (
            ""
          )}

          {this.props.ddLink || this.props.uberEatsLink ? (
            <button  
              data-toggle="modal"
              data-target="#deliveryWesleyLutz"
              className="btn btn-primary cta-primary"
              aria-label="Order dedlivery from WESLEY CHAPEL/LUTZ"
            >
              Delivery
            </button>
          ) : (
            ""
          )}

          {this.props.directionsLink ? (
            <a
              href={this.props.directionsLink}
              className="btn btn-primary cta-primary"
            >
              Directions
            </a>
          ) : (
            ""
          )}

          { 
            this.props.contactPage && this.props.phone ? 
            <p>Phone: { this.props.phone } </p>
            :
            ''
          }
        </div>
      </div>
    );
  }
}

export default LocationsCard;
