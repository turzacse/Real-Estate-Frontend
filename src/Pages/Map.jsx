import React, { useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import demoProperties from '../demoData';
// import demoProperties from './demoData';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 34.0522,
  lng: -118.2437,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDUlNcKXoOFAMcrJq0CON7lwPt2vsDZik4'
  });

  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
    const bounds = new window.google.maps.LatLngBounds();
    demoProperties.forEach(property => {
      bounds.extend({
        lat: property.geoLocation[0],
        lng: property.geoLocation[1],
      });
    });
    map.fitBounds(bounds);
  }, []);

  const onUnmount = useCallback((map) => {
    mapRef.current = null;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {demoProperties.map(property => (
        <Marker
          key={property.id}
          position={{ lat: property.geoLocation[0], lng: property.geoLocation[1] }}
          title={property.title}
        />
      ))}
    </GoogleMap>
  ) : <></>;
};

export default React.memo(Map);
