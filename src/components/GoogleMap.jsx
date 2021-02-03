import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = withGoogleMap((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.lat, lng: props.lng }}>
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
));

export default function GoogleMapRender({ lat, lng }) {
  return (
    <MyMapComponent
      lat={lat}
      lng={lng}
      loadingElement={<Skeleton width='100%' height={120} />}
      containerElement={<div style={{ height: '200px', width: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}

GoogleMapRender.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};
