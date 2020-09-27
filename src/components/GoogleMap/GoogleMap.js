import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 22.36,
      lng: 91.78
    },
    zoom: 10
  };

  render() {
    return (
        <div style={{ height: '50vh'}} className='mt-5'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDX5cjWZkxQXkCByGJKqVYes-K2_gMn2yQ'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={22.3569}
              lng={91.7832}
              text="Chattogram"
            />
          </GoogleMapReact>
        </div>
    );
  }
}

export default GoogleMap;