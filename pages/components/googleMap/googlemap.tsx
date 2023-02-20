import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const customizeMap = {
  width: "100%",
  height: "100%",
};
class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cords: [
        { latitude: 76.717873, longitude: 30.704649 },
        { latitude: 30.748882, longitude: 76.641357 },
        { latitude: 30.71792, longitude: 76.729012 },
        { latitude: 30.94099, longitude: 74.617043 },
        { latitude: 50.0874654, longitude: 14.4212535 },
        { latitude: 7.5554942, longitude: 80.7137847 },
      ],
    };
  }

  drawMarker = () => {
    return this.state.cords.map((store, i) => {
      return (
        <Marker
          key={i}
          id={i}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("Event Hanlder Called")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={customizeMap}
        zoom={6}
        initialCenter={{
          lat: 9.96233,
          lng: 49.80404,
        }}
      >
        {this.drawMarker()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBL-83VvgZM-vSnaKGDv6eQhkPvRejBGLc",
})(GoogleMapComponent);
